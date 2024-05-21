/** 缓存存储key */
const cacheStorageKey = "cache-v1";

/** 记录不在缓存中的web.hycdn.cn的资源url */
let lostURLs = [];

/** web-api.hypergryph.com API中，记录登录状态 */
let logged = false;

/** 预缓存的资源列表 */
const cacheList = [
  "./",
  "manifest.json",
  "./assets/js/jszip.min.js",
  "./assets/images/favicon.ico",
  "./assets/images/icon.png",
  "./assets/css/control.css",
  "./assets/css/picnic.min.css",
  "./assets/js/control.js",
  "./assets/js/utils.js",
  "./assets/js/patches.js",
];
/** 对 main.9efe80.js 进行修改，以增强功能和修复bug */
const patchJS = `import(\`\${window.location.origin}\${window.location.pathname}assets/js/patches.js\`)`;
const jsModifyList = {
  /** 修复：多索雷斯场景，搜索干员按钮列表里没有龙舌兰的问题 */
  [`row","c`]: `row","char_486_takila","c`,
  /** 增强：为预览模式按钮增加了同时进入全屏的功能 */
  [`w_button"})`]: `w_button"});if(x===srf.PREVIEW){document.fullscreenElement&&document.exitFullscreen()}else{document.querySelector(".pntXB7").requestFullscreen()}`,
  /** 增强：点击场景中的小人，可以播放对应干员的语音 */
  [`this.activateCallback=function(){`]: `this.activateCallback=function(){${patchJS}.then(module=>module.touchVoice(e));`,
  /** 增强：可自定义BGM */
  [`!0,suspendWhenHidden:!0,suspendWhenHiddenInSkland:!0}),`]: `false,suspendWhenHidden:!0,suspendWhenHiddenInSkland:!0});${patchJS}.then(module=>module.changeBGM(o9));var `,
};

const htmlModifyList = {
  /** 为html文档添加图标 */
  [`</title>`]: `</title><link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico" />`,
};

/** 各个域名下的API的伪造方法 */
const hostHandler = {
  "as.hypergryph.com": forgeFakeResponse,
  "binding-api-account-prod.hypergryph.com": forgeFakeResponse,
  /** 鹰角网络通行证登录状态 */
  "web-api.hypergryph.com": async (url, event) => {
    const method = event.request.method;
    if (method === "DELETE") {
      logged = false;
      return new Response(null, { status: 204 });
    }
    if (logged) {
      return jsonResponse({ code: 0, data: { content: "hello_world" }, msg: "" });
    } else {
      if (method === "POST") {
        logged = true;
        return jsonResponse({ code: 0, data: {}, msg: "" });
      }
      return jsonResponse({ statusCode: 401, message: "Unauthorized" }, { status: 401 });
    }
  },
  /** 鹰角网络资源cdn域名 */
  "web.hycdn.cn": async (url) => {
    const cache = await caches.open(cacheStorageKey);
    // 尝试从缓存中获取资源，如果缓存中找不到，则返回404，并将url放入丢失资源列表中
    const response = await cache.match(`https://dummy/${url.pathname.slice(1)}`);
    if (response) {
      // 对 main.9efe80.js 进行修改
      if (url.pathname.endsWith("main.9efe80.js")) {
        let responseText = await response.text();
        for (let i in jsModifyList) {
          responseText = responseText.replace(i, jsModifyList[i]);
        }
        return new Response(responseText, { status: 200, headers: { "content-type": "text/javascript", "content-length": responseText.length } });
      }
      return response;
    }
    lostURLs.push(url.href);
    /** 返回404或者204，都可能导致页面脚本认为获取资源失败，从而减慢资源获取速度。最好是返回200，并带上合适的响应体 */
    return new Response(undefined, { status: 404 });
  },
  /** 如果是请求prts.wiki，直接通过网络发起请求 */
  ["torappu.prts.wiki"]: async (url, event) => fetch(event.request),
  /** 当前host */
  [self.location.host]: async (url, event) => {
    const cache = await caches.open(cacheStorageKey);
    // 定义测试用API：/cleanLostURLs。请求该url时，清空丢失的资源列表
    if (url.pathname == "/cleanLostURLs") {
      lostURLs = [];
      return new Response(null, { status: 204 });
    }
    // 定义测试用API：/lostURLs。请求该url时，在控制台中打印丢失的资源列表
    if (url.pathname == "/lostURLs") {
      console.log(lostURLs);
      return new Response(null, { status: 204 });
    }
    // 如果请求url中包含/api/，则判断为活动页相关API，调用forgeFakeResponse方法伪造响应
    if (url.pathname.includes("/api/")) {
      return forgeFakeResponse(url, event, true);
    }
    // 其余情况下，优先从缓存中寻找对应的缓存资源，否则尝试从网络中获取资源
    const cachedResponse = await cache.match(url);
    if (cachedResponse) {
      return cachedResponse;
    } else {
      return fetch(event.request);
    }
  },
};

/**
 * 用于伪造API响应
 * @param {URL} url 请求url对象
 * @param {boolean} isActivityApi 请求是否是活动页面相关API
 * @returns
 */
async function forgeFakeResponse(url, event, isActivityApi = false) {
  const cache = await caches.open(cacheStorageKey);
  /** 不同API具有不同的响应格式 */
  const responseFormat = {
    /** 鹰角网络通行证相关API */
    as: { msg: "OK", status: 0, type: "A" },
    /** 活动页相关API */
    ak: { code: 0, msg: "", timestamp: new Date().getTime() },
  };
  /** 请求的API名称 */
  const apiName = url.pathname.slice(1);
  // 如果页面请求了退出登录，则跳转到控制页面
  if (apiName == "user/info/v1/logout") {
    const client = await self.clients.get(event.clientId);
    if (client instanceof WindowClient) {
      await client.navigate("./?control");
      return new Response(null, { status: 204 });
    }
  }
  // 对抽奖请求返回随机结果
  if (apiName == "activity/echoes-of-terra/api/activity/draw") {
    const luckyNum = Math.random();
    return jsonResponse({ code: 0, msg: "", data: { bingo: luckyNum > 0.5 ? 1 : 0 }, timestamp: new Date().getTime() });
  }
  /** 预先缓存好的API响应列表 */
  const apiResponses = await cache
    .match("https://dummy/apiResponses")
    .then((res) => res.json())
    .catch(() => ({}));
  // 根据 isActivityApi 选择对应的响应格式
  if (apiName in apiResponses) {
    const body = isActivityApi == true ? responseFormat.ak : responseFormat.as;
    body.data = apiResponses[apiName];
    if (!body.data) {
      return new Response(null, { status: 204 });
    }
    return jsonResponse(body);
  }
  //如果API响应列表中不存在该API，返回404
  console.warn("API Response Not Found:", apiName);
  return new Response(null, { status: 404 });
}

/** 包装json响应 */
function jsonResponse(data, headers = {}, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", ...headers } });
}

async function fetchHandler(event) {
  const url = new URL(event.request.url);
  const cache = await caches.open(cacheStorageKey);
  //如果请求模式是navigate
  if (event.request.mode == "navigate") {
    try {
      /** 是否存在API响应缓存 */
      const apiResponses = await cache.match("https://dummy/apiResponses");
      /** 检查是否存在原始网页缓存 */
      const resCacheFlag = await cache.match("https://dummy/cacheStatus");
      // 如果存在control请求参数，或者没有API响应缓存，也没有原始网页缓存，那么提供控制页面；否则提供原始页面
      if (url.searchParams.has("control") || !apiResponses || !resCacheFlag) {
        throw new Error("navigate to control page");
      }
      const origIndex = await cache.match("https://dummy/arknights/activity/echoes-of-terra/index.html");
      let responseText = await origIndex.text();
      //需要修改一下html，以显示鹰角的图标
      for (let i in htmlModifyList) {
        responseText = responseText.replace(i, htmlModifyList[i]);
      }
      return new Response(responseText, { status: 200, headers: { "content-type": "text/html;charset=UTF-8" } });
    } catch {
      return (await cache.match("./")) || fetch("./");
    }
  }
  if (url.host in hostHandler) {
    //根据请求url的host，调用对应的处理方法
    return hostHandler[url.host](url, event);
  }
  //不存在处理方法，也就是请求url的host不在白名单内（基本上都是遥测请求），统一返回204
  return new Response(null, { status: 204 });
}

self.addEventListener("install", () => {
  self.skipWaiting();
  caches.open(cacheStorageKey).then((cache) => cache.addAll(cacheList));
});
self.addEventListener("fetch", (event) => event.respondWith(fetchHandler(event)));
