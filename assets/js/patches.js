import { cacheStorageKey, customVoiceCharList } from "./utils.js";

/** 缓存存储 */
const cache = await caches.open(cacheStorageKey);
const characters = await cache
  .match("https://dummy/apiResponses")
  .then((res) => res.json())
  .then((data) => data["custom-characters"])
  .catch(() => []);
/** 全局音频元素 */
const globalAudioElem = document.createElement("audio");
globalAudioElem.crossorigin = "anonymous";
globalAudioElem.volume = 0.5;
globalAudioElem.addEventListener("canplaythrough", () => globalAudioElem.play());

/** 触摸干员时播放语音 */
export async function touchVoice(e) {
  /** 干员ID */
  const { id: charId } = e.character.characterData;
  /** 个性化语音设置 */
  const voiceSettings = await cache
    .match("https://dummy/apiResponses")
    .then((res) => res.json())
    .then((data) => data["voice-settings"])
    .catch(() => ({}));
  /** 个性化语音不可用时，使用的默认语音 */
  const fallbackVoice = "voice";

  // 禁用触摸语音时，结束运行
  if (!voiceSettings.enable) return;
  // 如果干员id不以“char_”开头，则视为自定义干员，不播放其语音
  if (!charId.startsWith("char_")) return;
  /** 当前语音类别 */
  let currentVoice = voiceSettings.custom[charId] || voiceSettings.default || fallbackVoice;

  /** 随机语音ID */
  const randomVoiceMap = ["002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "033", "034", "036", "038", "044"];
  const voiceId = randomVoiceMap[Math.floor(Math.random() * randomVoiceMap.length)];

  /** 可能存在的语音后缀 */
  let suffix = "";
  // 如果currentVoice是voice_custom，则设置对应的语音后缀
  if (currentVoice === "voice_custom") {
    let hasCustomVoice = false;
    for (const suffixKey in customVoiceCharList) {
      if (customVoiceCharList[suffixKey].includes(charId)) {
        suffix = suffixKey;
        hasCustomVoice = true;
        break;
      }
    }
    if (!hasCustomVoice) {
      currentVoice = fallbackVoice;
    }
  }
  /** 播放错误标志 */
  let errorFlag = false;
  const urlTemplate = `https://torappu.prts.wiki/assets/audio/{{voice}}/${charId}{{suffix}}/cn_${voiceId}.mp3`;
  globalAudioElem.addEventListener("error", () => {
    //第二次播放失败，停止播放，并打印出错的url
    if (errorFlag) return console.error("播放语音失败：", globalAudioElem.src);
    // 首次播放失败，尝试播放默认语音
    globalAudioElem.src = urlTemplate.replace(/{{voice}}/, fallbackVoice).replace(/{{suffix}}/, "");
    errorFlag = true;
  });

  globalAudioElem.src = urlTemplate.replace(/{{voice}}/, currentVoice).replace(/{{suffix}}/, suffix);
}

async function getBGMUrl() {
  /** BGM设置 */
  const bgmSettings = await cache
    .match("https://dummy/apiResponses")
    .then((res) => res.json())
    .then((res) => res["bgm-settings"])
    .catch(() => ({}));
  // 如果设置了随机选择BGM
  if (bgmSettings.random) {
    const randomLIst = ["default", ...bgmSettings.bgmList];
    const picked = randomLIst[Math.floor(Math.random() * randomLIst.length)];
    // 如果随机选择的是默认BGM，则返回undefined
    if (picked == "default") return undefined;
    const response = await cache.match(`https://dummy/custom-bgm/${picked}`);
    if (response) return URL.createObjectURL(await response.blob());
    // 如果设置了当前BGM
  }
  if (bgmSettings.current) {
    const response = await cache.match(`https://dummy/custom-bgm/${bgmSettings.current}`);
    if (response) return URL.createObjectURL(await response.blob());
  }
  return undefined;
}

/** 修改BGM */
export async function changeBGM(audioInstance) {
  // 当开始播放BGM时，将_isPlayWhenLeave重设为false，修复在手动暂停BGM后离开窗口，再次回到窗口时BGM自动开始播放的问题
  audioInstance.audioElem.addEventListener("play", () => {
    audioInstance._isPlayWhenLeave = false;
  });
  // 可以通过键盘上的“上”“下”方向键来控制BGM音量
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      audioInstance.volume += 0.05;
    }
    if (e.key === "ArrowDown") {
      audioInstance.volume -= 0.05;
    }
  });
  const bgmUrl = await getBGMUrl();
  bgmUrl && (audioInstance.audioElem.src = bgmUrl);
  audioInstance.play();
}
/**
 * 修改角色数据，便于添加自定义角色。通过type指定具体要修改的数据，用一个函数完成修改。
 * offsetX和offsetY：最大分辨率下，单个房间（多个块拼合后）
 * @param {"charInMap"|"roomMeta"|"charMeta"} type 要修改的数据类型
 * @param {*} originData 原始数据
 * @returns
 */
export async function modifyCharData(type, originData) {
  if ((characters || []).length == 0) {
    return;
  }
  if (type == "charInMap") {
    for (const char of characters) {
      const {
        id,
        roomId,
        offset: { x: offsetX, y: offsetY },
        zIndex,
        noMask,
        hitMap,
        size: { x: sizeX, y: sizeY },
        enabled,
      } = char;
      if (enabled) {
        originData[id] = {
          id,
          roomId,
          offset: { x: offsetX, y: offsetY },
          zIndex,
          noMask,
          hitMap,
          size: { x: sizeX, y: sizeY },
          activeRely: [],
        };
      }
    }
    return;
  }
  if (type == "roomMeta") {
    for (const char of characters) {
      const { id, roomId, enabled } = char;
      if (enabled) {
        originData[roomId].chars.push(id);
      }
    }
    return;
  }
  if (type == "charMeta") {
    for (const char of characters) {
      const { id, name, appellation, profession, keywords, enabled } = char;
      if (enabled) {
        originData.push({ id, name, appellation, profession, keywords });
      }
    }
    return;
  }
}

export function fullscreen(x, srf) {
  if (x === srf.PREVIEW) {
    document.fullscreenElement && document.exitFullscreen();
  } else {
    document.querySelector(".pntXB7").requestFullscreen();
  }
}

/**
 * 重新编写的contains函数，用于判断点击位置是否在预定义的hitMap内
 * @returns {boolean}
 */
export function debug() {
  function contains(hitMap, clickX, clickY, targetW, targetH, fragmentSize = 4) {
    // 如果点击坐标超出目标尺寸，则返回false
    if (clickX < 0 || clickX > targetW || clickY < 0 || clickY > targetH) return false;
    const mask = { 0: 128, 1: 64, 2: 32, 3: 16, 4: 8, 5: 4, 6: 2, 7: 1 };
    // 确定图像总共被分割了多少列（以4px位单位）
    const xFragmentCount = Math.ceil(targetW / fragmentSize);
    // 确定点击的坐标位于第几列
    const cellXPos = Math.floor(clickX / fragmentSize);
    // 确定点击的坐标位于第几行
    const cellYPos = Math.floor(clickY / fragmentSize);
    // 确定被点击的像素块的索引：第几行乘以总列数加上第几列。此时的像素块是以4px*4px为单位（小块），而hitMap是以4px*4px*8为单位（大块）。
    const cellIndex = cellYPos * xFragmentCount + cellXPos;
    // 因此需要将 cellIndex 除以8，并向下取整，以获得hitMap中的索引。
    const cellHitMap = hitMap[Math.floor(cellIndex / 8)];
    // 上面我们已经确定了点击坐标是在哪个大块内了，现在对 cellIndex 进行取余，获取它除以8的余数，这就是它在小块中的索引
    const subCellIndex = cellIndex % 8;
    // 如果cellHitMap存在（坐标没有超出像素块的范围）
    if (cellHitMap) {
      // 通过按位与运算，判断当前像素块是否命中。与：两者都为1时，结果才为1。
      // 如      cellHitMap = 10011010,说明第1、4、5、7都可点。通过mask，subCellIndex被转换为对应位是1，其他位都是0的二进制数字。
      // 例如 mask[0] = 128 = 10000000,与的结果还是10000000，通过。
      // 例如  mask[1] = 64 = 01000000,与的结果是00000000，不通过。
      const result = cellHitMap & mask[subCellIndex];
      return result ? true : false;
    }
    return false;
  }
  return contains;
}
