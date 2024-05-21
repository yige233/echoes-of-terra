import "./jszip.min.js";
import { cacheStorageKey, APIMap, MineTypes, html, Dialog, chaosList, regionList, charList, bannedCharList, voiceSources } from "./utils.js";

/** 缓存存储 */
const MyCache = await caches.open(cacheStorageKey);
/** 检查是否存在API响应缓存 */
const apiResponses = await MyCache.match("https://dummy/apiResponses");
/** 侧栏目录 */
const sideIndexElem = document.querySelector(".side-index");
/** 主要内容 */
const mainContentElem = document.querySelector(".main-content");
/** API数据 */
const apiMapData = apiResponses ? await apiResponses.json() : APIMap;
/** 对话框 */
const dialog = new Dialog();

/**
 * 构建Response对象。默认类型是 application/json，如果data是File类型，则type为File.type
 * @param {any} data 响应体数据
 * @param {string} type 响应体类型
 * @returns {Promise<Response>}
 */
async function writeCache(key, data, headers = {}) {
  /** 构建请求对象 */
  const req = new Request(`https://dummy/${key}`);
  /** 构建响应头对象，并设置默认content-type为json */
  const header = Object.assign({ "content-type": "application/json" }, headers);
  // 如果data是是File或Blob，根据其type设置content-type
  if (data instanceof File || data instanceof Blob) {
    data.type && (header["content-type"] = data.type);
  }
  // 如果content-type为json，则将data转换为json字符串
  if (header["content-type"] == "application/json") {
    data = JSON.stringify(data);
  }
  // 设置content-length */
  header["content-length"] = data.length || data.size;
  return MyCache.put(req, new Response(data, { headers: new Headers(header) }));
}
/** 获取浏览器缓存存储数据，显示为字符串 */
async function getStorageDetail() {
  const {
    usage,
    usageDetails: { caches, serviceWorkerRegistrations },
  } = await navigator.storage.estimate();
  return `存储使用状况：已使用 ${autoUnit(usage)}，其中缓存存储使用了${autoUnit(caches)}，ServiceWorker使用了${autoUnit(serviceWorkerRegistrations)}。`;
}
/**
 * 下载url资源，并且返回下载进度
 * @param {string} url 资源url
 * @returns
 */
async function download(url) {
  /** 获取响应对象 */
  const response = await fetch(url);
  if (response.status != 200) {
    throw new Error(`下载 ${url} 失败：${response.status}`);
  }
  /** 获取content-type */
  const contentType = response.headers.get("content-type");
  /** 获取congtent-length */
  const contentLength = response.headers.get("content-length");
  /** 获取响应体reader */
  const reader = response.body.getReader();
  /** 初始化已接收数据长度 */
  let receivedLength = 0;
  /** 初始化数据数组 */
  let chunks = [];
  /** 返回一个读取函数，每次调用时，返回一个对象，包含status和data属性，status为下载进度，data为下载的数据（如果下载完成了） */
  return async () => {
    const { done, value } = await reader.read();
    if (done) {
      return { data: new Blob(chunks, { type: contentType }), status: "下载完成" };
    }
    chunks.push(value);
    receivedLength += value.length;
    return { status: `${autoUnit(receivedLength)}/${autoUnit(contentLength)}` };
  };
}
/**
 * 预先构建缓存。将压缩包中的所有文件缓存到 https://dummy/ 下
 * @param {Object} zip zip压缩包对象
 * @returns
 */
async function buildCache(zip) {
  /** 获取zip中的所有文件名，不包含目录 */
  let fileNameArr = Object.getOwnPropertyNames(zip.files).filter((i) => !zip.files[i].dir);
  /** 初始化遍历索引 */
  let cacheIndex = 0;
  /** 返回一个函数，每次调用时，返回一个对象，包含status、done和warning属性，status为构建进度，done为是否完成，wanging为解析压缩包使产生的警告，可能不存在 */
  return async () => {
    // 如果已经遍历完所有文件，则返回构建完成
    if (cacheIndex >= fileNameArr.length) {
      return { status: "构建完成", done: true };
    }
    /** 文件名 */
    const fileName = fileNameArr[cacheIndex];
    /** zip中的文件对象 */
    const item = zip.files[fileName];
    /** 初始化警告字符串 */
    let warning;
    /** 遍历索引加1 */
    cacheIndex++;
    /** 获取文件扩展名 */
    const fileExt = item.name.split(".").pop();
    // 如果文件扩展名在MineTypes中，则写入缓存
    if (MineTypes[fileExt]) {
      /** 构建blob对象 */
      const blob = await item.async("blob");
      // 写入缓存
      await writeCache(fileName, blob, { "content-type": MineTypes[fileExt] });
    } else {
      // 文件扩展名不在MineTypes中，则为警告对象赋值
      warning = `未知文件: ${fileName}`;
    }
    // 返回构建进度
    return { status: `${cacheIndex}/${fileNameArr.length}`, done: false, warning };
  };
}
/**
 * 从 apiMapData 里查找指定路径属性的值
 * @param {string} propPath 属性路径，用点分隔
 * @param {any} value 可选地，提供该参数视为将上述路径的属性设置该参数的值
 * @returns
 */
function $(propPath, value = undefined) {
  // 如果propPath不是字符串，则返回undefined
  if (typeof propPath !== "string") {
    return undefined;
  }
  /** 属性路径数组 */
  const properties = propPath.split(".");
  /** 最后一个属性名 */
  const lastProperty = properties.pop();
  /** 设置根对象为apiMapData */
  let target = apiMapData;
  // 遍历属性路径数组，获取目标对象
  for (const propName of properties) {
    if (!target[propName]) {
      throw new Error(`试图访问不存在的属性: '${propPath}'`);
    }
    target = target[propName];
  }
  // 如果存在value，则设置目标对象的属性值为value并返回value
  if (typeof value !== "undefined") {
    target[lastProperty] = value;
    writeCache("apiResponses", apiMapData);
    return value;
  }
  // 返回目标对象的属性值
  return target[lastProperty];
}
/**
 * 将以B为单位的数字转换为带单位的字符串
 * @param {Number} dataLength 数据长度数字
 * @returns
 */
function autoUnit(dataLength = 0) {
  /** 单位数组 */
  const unit = ["B", "KB", "MB", "GB", "TB"];
  /** 初始化索引 */
  let i = 0;
  // 如果数据长度大于等于1024，则进行循环，直到数据长度小于1024或索引等于单位数组长度减1
  while (dataLength >= 1024 && i < unit.length - 1) {
    dataLength /= 1024;
    i++;
  }
  // 返回带单位的字符串
  return `${dataLength.toFixed(2)} ${unit[i]}`;
}
/**
 * 如果target是函数，则执行并返回其返回值；否则返回其自身
 * @param {any} target 一个任意对象
 * @returns
 */
function execFunction(target) {
  if (typeof target == "function") return target();
  return target;
}
/**
 * 为页面添加项目。
 * @param {string} id 项目id
 * @param {string} name 项目名称
 * @param {string} desc 项目介绍
 * @param {Array} contentElem 项目内部元素列表
 */
function addItem({ id, name, desc, contentElem = [] }) {
  contentElem = contentElem.map((i) => execFunction(i));
  const sideElem = html("div", html("a", { class: "pseudo button", href: `#${id}` }, name));
  const mainElem = html("div", { id }, html("h2", name), desc && html("p", desc), ...contentElem);
  sideIndexElem.append(sideElem);
  mainContentElem.append(mainElem);
}
/**
 * 创建单选框。
 * @param {string} desc 单选框功能介绍
 * @param {boolean} checked 是否已勾选
 * @param {Function} onChange 勾选状态改变时的回调函数
 * @returns
 */
function checkbox(desc, checked, onChange = () => null) {
  const check = html("input", { type: "checkbox", checked: checked || undefined }, { input: () => onChange(check.checked) });
  return html("label", html("span", desc), check, html("span", { class: "checkable" }));
}
/**
 * 创建输入框。
 * @param {any} attributes 输入框的属性
 * @param {string} config 输入框对应的配置项
 * @returns
 */
function inputElement(attributes, ...config) {
  attributes.value = $(config[0]);
  const input = html("input", attributes, {
    input: () => {
      const value = attributes.type == "number" ? parseInt(input.value) : input.value;
      for (let i of config) {
        $(i, value);
      }
    },
  });
  return input;
}
/**
 * 创建干员选择框。
 * @param {string} config 选择框对应的配置项
 * @returns
 */
function charSelectElement(config) {
  const selectElem = html("select", {}, { input: () => $(config, selectElem.value) });
  const currentSelected = $(config);
  for (const charData of [...charList, ...bannedCharList]) {
    const { id, name, keywords, appellation } = charData;
    const optionElem = html("option", { value: id, selected: currentSelected == id || undefined, keywords: [keywords, appellation].join(",").toLocaleLowerCase() }, name);
    selectElem.append(optionElem);
  }
  const searchElem = html("input", {}, { input: () => searchChar(selectElem.children, searchElem.value) });
  return html("div", selectElem, "搜索:", searchElem);
}
/**
 * 从元素数组中搜索含有指定关键词的元素。元素必须有keywords属性。searchStr不为空时，没有命中的元素会被隐藏。
 * @param {Element[]} elementArr 元素数组
 * @param {string} searchStr 关键词
 */
function searchChar(elementArr, searchStr) {
  for (const optionElem of elementArr) {
    const keywords = optionElem.getAttribute("keywords") || "";
    if (optionElem.textContent.includes(searchStr) || keywords.includes(searchStr)) {
      optionElem.style.display = "block";
    } else {
      optionElem.style.display = "none";
    }
  }
}
/**
 * 创建一个卡片
 * @param {element} header 卡片头部元素
 * @param  {...element} contentElem 卡片内容元素
 * @returns
 */
function card(header, ...contentElem) {
  contentElem = contentElem.map((i) => execFunction(i));
  return html("article", { class: "card" }, header && html("header", execFunction(header)), ...contentElem);
}
/**
 * 创建一个按钮
 * @param {*} type 按钮类型
 * @param {*} text 按钮文字
 * @param {*} onClick 按钮点击事件
 * @returns
 */
function buttonElement(type, text, onClick = () => null) {
  return html("button", { class: type }, { click: onClick }, text);
}
/** 构建年度关键词描述的div容器 */
function buildKeywordDesc(name, priority, desc) {
  return card(name, html("div", desc || "不需要条件", `。优先级：${priority}`));
}
/**
 * 构建语音源选择框
 * @param {string} selected 选中的语音源
 * @param {Function} onInput 输入事件回调
 * @returns {Element} select元素
 */
function voiceSelectElem(selected, onInput) {
  const select = html("select", {}, { input: () => onInput(select.value) });
  const noneOption = html("option", { value: "" }, "没有设置");
  select.append(noneOption);
  for (const option in voiceSources) {
    const optionElem = html("option", { value: option, selected: option == selected || undefined }, voiceSources[option]);
    select.append(optionElem);
  }
  return select;
}
/**
 * 为页面添加项目。
 * @param {string} id 项目id
 * @param {string} name 项目名称
 * @param {string} desc 项目介绍
 * @param {Array} contentElem 项目内部元素列表
 */
addItem({
  id: "desc",
  name: "关于此页面",
  desc: `这个页面是《明日方舟》五周年网页活动《泰拉巡旅》的一个备份，目的是在官方页面关闭后，提供一个可完整访问的副本。相对于官方页面，副本多了个这个“参数控制”页，用来对原本只能从官方获取的数据，进行调整和修改。
进入原活动页后点击登录，然后输入任意内容，即可登录成功。不能使用bilibili登录。
如果需要再次回到此页面，只需要在活动页中退出登录即可。也可以手动地为当前url增加一个查询参数“control”，然后刷新网页。
如果没有特殊说明，这里做的修改均会自动保存。
本网页内的美术资源，其版权均为鹰角网络所有。`,
});
addItem({
  id: "download-resources",
  name: "下载资源",
  desc: `下载网页所需要的资源，并缓存到浏览器内。将会下载一个大小约244MB的压缩包。缓存完成后将占用261MB左右的磁盘空间。此处缓存完成后，就可以无视原网页的下载提醒了。
也可以上传本地的资源压缩包，避免下载过慢的问题。`,
  contentElem: [
    card(undefined, () => {
      /** 压缩包名称 */
      const zipName = "arknights-echoes-of-terra-resources.zip";
      /** 压缩包数据对象 */
      let zipData;
      /** 显示当前缓存占用情况 */
      const storageUsed = html("div");
      const actionStatus = html("div");
      const btnUpload = buttonElement("success", "上传本地资源压缩包", async () => {
        /** 上传文件选择器 */
        const upload = html("input", { type: "file", accept: "application/zip" });
        dialog.on("ok", () => {
          // 获取文件，并赋值给zipData
          zipData = upload.files[0] || undefined;
          btnCache.click();
        });
        dialog.show("提示", "请不要选择奇奇怪怪的压缩包，可能会造成不可知的网页bug", upload);
      });
      const btnCache = buttonElement("success", "下载资源并缓存", async () => {
        btnCache.disabled = true;
        /** 初始化一个计时器，用来控制修改按钮文字的间隔 */
        let timer = 0;
        try {
          // 检测JSZip的Blob支持情况
          if (!window.JSZip?.support?.blob) {
            throw new Error("当前浏览器不支持JSZip的Blob功能，无法解析压缩包。");
          }
          // 如果压缩包数据为空，则从web下载压缩包
          if (!zipData) {
            const getdlResult = await download(zipName);
            while (true) {
              const { data, status } = await getdlResult();
              if (new Date().getTime() - timer < 50) {
                continue;
              }
              timer = new Date().getTime();
              actionStatus.innerText = "正在下载压缩包：" + status;
              if (data) {
                zipData = data;
                break;
              }
            }
          }
          actionStatus.innerText = "压缩包下载完成，正在解析压缩包";
          /** 解析压缩包为JSZip对象 */
          const zip = await window.JSZip.loadAsync(zipData);
          /** 构建缓存 */
          const getCacheResult = await buildCache(zip);
          while (true) {
            const { done, status, warning } = await getCacheResult();
            if (warning) throw new Error(`缓存压缩包内文件时出现了异常：\n${warning}`);
            if (new Date().getTime() - timer < 50) {
              continue;
            }
            timer = new Date().getTime();
            actionStatus.innerText = "缓存构建进度：" + status;
            if (done) break;
          }
          // 缓存完成后，写入一个key为cacheStatus的缓存，标志缓存完成
          await writeCache("cacheStatus", { status: "done" });
          // 写入API响应缓存
          await writeCache("apiResponses", apiMapData);
        } catch (error) {
          dialog.show("缓存构建失败", error.message);
        }
        actionStatus.innerText = "缓存构建完成";
        btnUpdate.click();
        btnCache.disabled = false;
      });
      const btndlRes = buttonElement(undefined, "将资源下载到本地", async () => {
        btndlRes.disabled = true;
        /** 打开缓存 */
        const cache = await caches.open(cacheStorageKey);
        /** 检测有没有资源缓存 */
        const cacheStatus = await cache.match("https://dummy/cacheStatus");
        // 既没有压缩包，也没有资源缓存，则提示用户先下载压缩包
        if (!zipData && !cacheStatus) {
          return dialog.show("下载失败", "需要先下载资源压缩包或者存在完整的资源缓存，才能从这里下载到本地。");
        }
        // 没有压缩包，则从缓存构建压缩包
        if (!zipData) {
          actionStatus.innerText = `准备开始构建压缩包`;
          /** 初始化zip对象 */
          const zip = new window.JSZip();
          const cacheKeys = (await cache.keys()).filter((i) => i.url.startsWith("https://dummy/"));
          for (const i in cacheKeys) {
            const url = new URL(cacheKeys[i].url);
            const response = await cache.match(cacheKeys[i]);
            // 跳过json文件
            if (response.headers.get("content-type").includes("application/json")) {
              continue;
            }
            await zip.file(url.pathname.slice(1), await response.blob());
            actionStatus.innerText = `正在从缓存取出资源文件：${Number(i) + 1}/${cacheKeys.length}`;
          }
          zipData = await zip.generateAsync({ type: "blob", compression: "DEFLATE" }, function updateCallback(metadata) {
            const { percent, currentFile } = metadata;
            actionStatus.innerText = `正在生成压缩包。压缩进度：${percent.toFixed(2)}%\n正在压缩文件：${currentFile || ""}`;
          });
          actionStatus.innerText = "压缩包生成完毕";
        }
        const a = html("a", { href: URL.createObjectURL(zipData), download: zipName });
        a.click();
        btndlRes.disabled = false;
      });
      const btnDelCache = buttonElement("error", "删除所有缓存的资源", () => {
        btnDelCache.disabled = true;
        dialog.on("ok", async () => {
          //删除所有本地存储
          localStorage.clear();
          //删除所有URL以 https://dummy/ 开头的缓存
          const cacheKeys = (await MyCache.keys()).filter((i) => i.url.startsWith("https://dummy/"));
          for (const i in cacheKeys) {
            const key = cacheKeys[i];
            await MyCache.delete(key);
            actionStatus.innerText = `正在删除缓存：${Number(i) + 1}/${cacheKeys.length}`;
          }
          actionStatus.innerText = "缓存已全部删除";
          btnUpdate.click();
          btnDelCache.disabled = false;
        });
        dialog.on("cancel", () => (btnDelCache.disabled = false));
        dialog.show("确定要删除所有缓存的资源文件吗？", "包括先前自定义的API响应数据。操作会花费一定的时间，未完成前请勿关闭网页");
      });
      const toGithub = buttonElement("success", "前往Github下载资源压缩包", () => window.open("https://github.com/yige233/echoes-of-terra/releases", "_blank"));
      const btnUpdate = buttonElement(undefined, "更新存储使用状况", async () => (storageUsed.innerText = await getStorageDetail()));
      btnUpdate.click();
      return html("div", storageUsed, actionStatus, btnUpload, btnCache, toGithub, btndlRes, btnDelCache, btnUpdate);
    }),
  ],
});
addItem({
  id: "to-activity-page",
  name: "前往活动页面",
  desc: "只要“API响应”和“资源文件”两种缓存数据同时存在，就可以前往活动页面了。",
  contentElem: [
    card(
      undefined,
      html(
        "div",
        buttonElement("success", "手动保存API缓存", () => writeCache("apiResponses", apiMapData).then(() => dialog.show("保存成功", ""))),
        buttonElement("success", "前往活动页面", async () => {
          /** 缓存存储 */
          const cache = await caches.open(cacheStorageKey);
          /** 是否存在API响应缓存 */
          const apiResponses = await cache.match("https://dummy/apiResponses");
          /** 检查资源缓存的标志 */
          const resCacheFlag = await cache.match("https://dummy/cacheStatus");
          if (apiResponses && resCacheFlag) {
            location.href = location.pathname;
            return;
          }
          dialog.show("没有检测到必要的缓存", `资源文件缓存：${resCacheFlag ? "存在" : "不存在"}`, html("br"), `API响应缓存：${apiResponses ? "存在" : "不存在"}`);
        })
      )
    ),
  ],
});
addItem({
  id: "hg-passport-info",
  name: "鹰角网络通行证信息",
  desc: "可以在这里修改鹰角网络通行证信息。",
  contentElem: [
    card(
      undefined,
      html("div", "鹰角网络通行证ID", inputElement({ type: "number" }, "user/info/v1/basic.hgId", "user/oauth2/v2/grant.hgId")),
      html("div", "鹰角网络通行证电话号码（官方信息中，电话号码4-7位用*号隐藏了）", inputElement({ type: "text" }, "user/info/v1/basic.phone")),
      html("div", "鹰角网络通行证email地址（官方信息中，该数据也做了模糊处理）", inputElement({ type: "text" }, "user/info/v1/basic.email")),
      html("div", "身份证号码（官方信息中只显示前四位和后四位）", inputElement({ type: "text" }, "user/info/v1/basic.identityNum")),
      html("div", "身份证姓名（官方信息中只显示姓）", inputElement({ type: "text" }, "user/info/v1/basic.identityName"))
    ),
  ],
});
addItem({
  id: "ak-character-info",
  name: "明日方舟游戏内角色信息",
  desc: "可以在这里修改明日方舟游戏内角色信息。默认为官服角色，且通行证只绑定了该角色。",
  contentElem: [
    card(
      undefined,
      html("div", "明日方舟游戏内ID", inputElement({ type: "number" }, "account/binding/v1/binding_list.list.0.bindingList.0.uid", "activity/echoes-of-terra/api/role/info.uid")),
      html(
        "div",
        "明日方舟游戏内昵称（必须带上#号和后面的数字）",
        inputElement({ type: "text" }, "account/binding/v1/binding_list.list.0.bindingList.0.nickName", "activity/echoes-of-terra/api/role/info.name")
      )
    ),
  ],
});
addItem({
  id: "act-progress",
  name: "活动进度",
  desc: "可以在这里修改活动进度状态。",
  contentElem: [
    card(
      "一般数据",
      html("div", "教程状态。0=尚未开始教程；1=教程PartA完成；2=教程PartB完成", inputElement({ type: "number", min: 0, max: 2, step: 1 }, "activity/echoes-of-terra/api/activity/info.guide")),
      html("div", "是否已分享活动。0=未分享；1=已分享", inputElement({ type: "number", min: 0, max: 18, step: 1 }, "activity/echoes-of-terra/api/activity/info.share")),
      html("div", "区域解锁次数", inputElement({ type: "number" }, "activity/echoes-of-terra/api/activity/info.totalUnlockCount"))
    ),
    () => {
      const checkboxes = [];
      const unlockRegions = $("activity/echoes-of-terra/api/activity/info.unlockRegions");
      for (const regionId in regionList) {
        const region = regionList[regionId];
        const getIndex = () => unlockRegions.findIndex((i) => i == region.id);
        checkboxes.push(
          checkbox(region.name, unlockRegions.includes(region.id), (checked) => {
            if (checked) {
              unlockRegions.push(region.id);
            } else {
              unlockRegions.splice(getIndex(), 1);
            }
            writeCache("apiResponses", apiMapData);
          })
        );
      }
      return card("区域解锁情况", ...checkboxes);
    },
    () => {
      const childs = [];
      const awardStatus = $("activity/echoes-of-terra/api/activity/info.award.coupon");
      for (const drawNumber of [0, 1, 2, 3]) {
        /** 是否抽过奖 */
        const isDrawed = checkbox(`第 ${drawNumber} 次抽奖，已经抽奖`, typeof awardStatus[drawNumber] == "number", (checked) => {
          if (checked) {
            return (awardStatus[drawNumber] = 0);
          }
          delete awardStatus[drawNumber];
          drawResult.querySelector("input").checked && drawResult.click();
          writeCache("apiResponses", apiMapData);
        });
        /** 是否中奖 */
        const drawResult = checkbox(`第 ${drawNumber} 次抽奖，是否中奖`, awardStatus[drawNumber] == 1, (checked) => {
          !isDrawed.querySelector("input").checked && isDrawed.click();
          if (checked) {
            return (awardStatus[drawNumber] = 1);
          }
          awardStatus[drawNumber] = 0;
          writeCache("apiResponses", apiMapData);
        });
        childs.push(isDrawed, drawResult, html("hr"));
      }
      childs.pop();
      return card("抽奖情况", ...childs);
    },
  ],
});
try {
  addItem({
    id: "report",
    name: "游戏数据报告",
    desc: "年度游戏数据报告。有些数据只限于2023-2024，有些数据则是建号以来累计的。",
    contentElem: [
      () => {
        const dataPath = "activity/echoes-of-terra/api/activity/report";
        return card(
          "一般数据",
          () => {
            const input = html(
              "input",
              { value: new Date($(dataPath + ".createRoleTs") * 1e3).toLocaleString() },
              { input: () => $(dataPath + ".createRoleTs", new Date(input.value).getTime() / 1e3) }
            );
            return html("div", "游戏角色创建的时间（博士苏醒的时间），精确到秒。请注意维持日期格式不变。", input);
          },
          html("div", "去年（4周年-5周年）在线天数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".onlineDayCnt")),
          html("div", "去年完成战斗次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".userActionTimes.battle_finish_times")),
          html("div", "累计抽卡次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".userActionTimes.gacha_times")),
          html("div", "去年任务完成次数（日常周常主线等任务）", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".userActionTimes.mission_confirm_cnt")),
          html("div", "去年会客室开party次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".userActionTimes.start_infoshare_times")),
          html("div", "去年最喜爱的助理干员", charSelectElement(dataPath + ".charSecretaryFavor.charId")),
          html("div", "去年购买的家具数量", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".furniBuy.furni_buy_cnt"))
        );
      },
      () => {
        const dataPath = "activity/echoes-of-terra/api/activity/report";
        return card(
          "基建数据",
          html("div", "会客室进驻时间最长干员", charSelectElement(dataPath + ".roomChar.meeting_max_time_char")),
          html("div", "上述干员在会客室进驻的总时间(h)", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".roomChar.meeting_max_time_hour")),
          html("div", "训练室进驻时间最长干员", charSelectElement(dataPath + ".roomChar.training_max_time_char")),
          html("div", "上述干员在训练室进驻的总时间(h)", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".roomChar.training_max_time_hour")),
          html("div", "去年协助训练最长时间干员", charSelectElement(dataPath + ".roomTrainMaster.assist_train_max_char")),
          html("div", "加工站副产品产出次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".workshop.add_cnt")),
          html("div", "加工站副产品产出率(百分比小数)", inputElement({ type: "number", min: 0, step: 0.01, max: 1 }, dataPath + ".workshop.add_rate")),
          html("div", "加工站加工物品次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".workshop.item_cnt")),
          html("div", "制造的源石碎片数量", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".buildSource.build_Oshard_add")),
          html("div", "制造的基础作战记录数量", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".buildSource.build_btrecord_add_2001")),
          html("div", "制造的初级作战记录数量", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".buildSource.build_btrecord_add_2002")),
          html("div", "制造的中级作战记录数量", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".buildSource.build_btrecord_add_2003")),
          html("div", "贸易站总获取龙门币数量", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".buildSource.build_gold_add")),
          html("div", "制造的赤金数量", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".buildSource.build_pgold_add")),
          html("div", "入住宿舍次数最多的干员", charSelectElement(dataPath + ".roomInWorkshopDormitory.dormitory_in_max_char")),
          html("div", "上述干员入住宿舍的次数", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".roomInWorkshopDormitory.dormitory_in_max_cnt")),
          html("div", "所有干员入住宿舍的总次数", inputElement({ type: "number", min: 0, min: 0, step: 1 }, dataPath + ".roomInWorkshopDormitory.dormitory_in_sum_cnt")),
          html("div", "进驻加工站次数最多的干员", charSelectElement(dataPath + ".roomInWorkshopDormitory.workshop_in_max_char"))
        );
      },
      () => {
        const dataPath = "activity/echoes-of-terra/api/activity/report";
        return card(
          "萨米肉鸽数据",
          html("div", "累计拼合密文板的次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".rogueTotemUse.rogue_totem_use_cnt")),
          html("div", "累计获得的坍缩值", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".rogueChaosAdd.chaos_add_all")),
          html("div", "获得最多次的坍缩范式的次数", inputElement({ type: "number", min: 0, step: 1 }, dataPath + ".rogueChaosBuff.max_chaosbuff_e_cnt")),
          () => {
            const config = dataPath + ".rogueChaosBuff.max_e_cnt_chaosbuff";
            const currentSelected = $(config);
            const selectElem = html("select", {}, { input: () => $(config, selectElem.value) });
            for (const option in chaosList) {
              const optionElem = html("option", { value: option, selected: currentSelected == option || undefined }, chaosList[option]);
              selectElem.append(optionElem);
            }
            return html("div", "获得最多次的坍缩范式", selectElem);
          }
        );
      },
      card(
        "下载自己的年度游戏数据报告（仅官方页面开放期间）",
        html("div", "该操作需要桌面浏览器。将下列代码全部复制，打开官方《泰拉寻旅》活动页面并登录自己的账号，然后按F12（或者右键页面，并选择“检查”），在“控制台（Console）”中粘贴代码，并回车。"),
        html(
          "pre",
          html(
            "code",
            `(async () => {
    const accountRoleMeta = localStorage.getItem("ONE_ACCOUNT_ROLE_META") ? JSON.parse(localStorage.getItem("ONE_ACCOUNT_ROLE_META")) : null;
    const result = await fetch("https://ak.hypergryph.com/activity/echoes-of-terra/api/activity/report", {
      headers: {
        "x-account-token": accountRoleMeta.verifier,
        "x-role-token": accountRoleMeta.token,
      },
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(result)], { type: "application/json" }));
    a.download = "《泰拉寻旅》年度游戏数据报告.json";
    a.click();
  })();`
          )
        )
      ),
      card("使用自己的年度游戏数据报告", () => {
        const btn = buttonElement(undefined, "上传数据文件", () => {
          const upload = html("input", { type: "file", accept: "application/json" });
          dialog.on("ok", async () => {
            const file = upload.files[0] || null;
            if (!file) return;
            try {
              const data = await file.text().then((res) => JSON.parse(res));
              if (!data.data) {
                throw new Error("data.data is undefined");
              }
              $("activity/echoes-of-terra/api/activity/report", data.data);
              dialog.show("成功", "数据已经自动保存，但修改新数据需要刷新页面。");
            } catch {
              dialog.show("错误", "上传的文件不具备正确的json格式或内容结构。");
            }
          });
          dialog.show("选择文件", "请不要选择奇奇怪怪的json数据文件，以免造成bug", upload);
        });
        return html("div", btn);
      }),
    ],
  });
} catch {
  const dataPath = "activity/echoes-of-terra/api/activity/report";
  $(dataPath, APIMap[dataPath]);
  addItem({
    id: "report",
    name: "年度游戏数据报告",
    desc: "加载年度游戏数据报告时发生了错误。该错误通常是由于上传了内容有误的“年度游戏数据报告”文件而产生的，现已恢复为默认数据，刷新页面以重新加载。",
  });
}
addItem({
  id: "keyword-of-year",
  name: "年度关键词",
  desc: "活动页面会根据年度报告中的数据，确定解锁的年度关键词，然后根据关键词的优先级（数字越大优先级越低），来确定最终显示的3个关键词。如果有超过数量的相同优先级的关键词，则会在每次页面刷新时，从其中随机挑选。",
  contentElem: [
    buildKeywordDesc("罗德岛启航", 3),
    buildKeywordDesc("认真完成工作", 3),
    buildKeywordDesc("值得信赖的领袖", 3),
    buildKeywordDesc("基建管理井井有条", 3),
    buildKeywordDesc("和干员们打成一片", 3),
    buildKeywordDesc("作战专家", 2, "去年完成战斗次数达到 200 次"),
    buildKeywordDesc("我即是最终防线", 2, "去年完成战斗次数达到 500 次"),
    buildKeywordDesc("会客室人来人往", 2, "去年会客室开party次数达到 100 次"),
    buildKeywordDesc("与{{charName}}相互信赖", 0, "将{{charName}}设为助理（看板娘）。{{charName}}显示为助理干员的代号"),
    buildKeywordDesc("材料加工大师", 2, "加工站加工物品次数达到 100 次"),
    buildKeywordDesc("加工站制造专家", 1, "加工站副产品产出次数达到 80 次"),
    buildKeywordDesc("通晓萨米预言之人", 1, "萨米肉鸽中，拼合密文板的次数达到 100 次"),
    buildKeywordDesc("踏足冰原的冒险家", 1, "萨米肉鸽中，累计获得的坍缩值大于 0 点"),
    buildKeywordDesc("{{chaosName}}", 1, "萨米肉鸽中，获得坍缩范式的次数达到 10 次。{{chaosName}}显示为获得次数最多的坍缩范式名称"),
    buildKeywordDesc("赤金储备充足", 2, "加工站制造的赤金数量达到 700 块"),
  ],
});
addItem({
  id: "bgm",
  name: "自定义背景音乐",
  desc: "可以在这里设置若干首自定义背景音乐。若没有设置任何BGM，则会使用默认BGM。如果设置了“使用随机BGM”，那么“仅使用这首BGM”将会失效。\nBGM将保存到浏览器缓存，所以离线状态下也可以正常使用。相应地，浏览器也需要更多的空间来保存BGM资源。\n可以通过键盘上的“上”“下”方向键来控制BGM音量。",
  contentElem: [
    card(
      undefined,
      checkbox("页面刷新时使用随机BGM", $("bgm-settings.random"), (checked) => $("bgm-settings.random", checked))
    ),
    () => {
      function addBgm(bgmKey) {
        const delBtn = buttonElement("error", "删除", async () => {
          const list = $(dataPath);
          list.splice(list.indexOf(bgmKey), 1);
          $(dataPath, list);
          await MyCache.delete(`https://dummy/custom-bgm/${bgmKey}`);
          if ($("bgm-settings.current") == bgmKey) {
            $("bgm-settings.current", "");
            currentBGM.innerText = "";
          }
          container.remove();
        });
        const setCurrentBgm = buttonElement("success", "仅使用这首BGM", () => {
          $("bgm-settings.current", bgmKey);
          currentBGM.innerText = bgmKey;
        });
        const container = html("div", "BGM:", bgmKey, setCurrentBgm, delBtn);
        return container;
      }
      function addNewBgm() {
        const input = html("input", { type: "file", accept: "audio/*" });
        dialog.on("ok", async () => {
          const audio = input.files[0];
          if ($(dataPath).includes(audio.name)) {
            return dialog.show("不能添加该BGM", "该BGM已存在");
          }
          $(dataPath, [...$(dataPath), audio.name]);
          await writeCache(`custom-bgm/${audio.name}`, audio);
          cardElem.append(addBgm(audio.name));
        });
        dialog.show("选择一个音频文件", input);
      }
      const dataPath = "bgm-settings.bgmList";
      const currentBGM = html("span", $("bgm-settings.current"));
      const cardElem = card("管理BGM", html("div", html("span", "当前使用的BGM："), currentBGM, buttonElement("success", "添加一首BGM", addNewBgm)));
      for (const bgmKey of $(dataPath)) {
        cardElem.append(addBgm(bgmKey));
      }
      return cardElem;
    },
  ],
});
addItem({
  id: "voice",
  name: "干员触摸语音",
  desc: "启用该功能后，点击地图上的干员小人，会播放对应的语音。该功能需要联网（不会有人想在浏览器里存储全干员的语音吧），音频从prts.wiki获取。随机的音频中不包含部分语音，如“作战中”“选中干员”等。\n此处的更改无需刷新活动页面，就可以立即生效。",
  contentElem: [
    card(
      undefined,
      checkbox("启用该功能", $("voice-settings.enable"), (checked) => $("voice-settings.enable", checked)),
      html(
        "div",
        "全局默认语音语种。若干员没有对应语种的语音，则会使用日语。",
        voiceSelectElem($("voice-settings.default"), (value) => $("voice-settings.default", value))
      )
    ),
    () => {
      const childs = [];
      for (const charData of charList) {
        const { id, name, keywords, appellation } = charData;
        const select = voiceSelectElem($(`voice-settings.custom.${id}`), (value) => $(`voice-settings.custom.${id}`, value));
        childs.push(html("div", { keywords: [keywords, appellation].join(",").toLocaleLowerCase() }, name, select));
      }
      const searchElem = html("input", {}, { input: () => searchChar(childs, searchElem.value) });
      return card("为每位干员单独设置语音偏好", html("div", "说明：由于地图上没有联动干员，所以下面的表格中也没有联动干员。"), html("div", "搜索干员: ", searchElem), ...childs);
    },
  ],
});
