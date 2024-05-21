import { cacheStorageKey, customVoiceCharList } from "./utils.js";

/** 缓存存储 */
const cache = await caches.open(cacheStorageKey);
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

  const urlTemplate = `https://torappu.prts.wiki/assets/audio/{{voice}}/${charId}{{suffix}}/cn_${voiceId}.mp3`;
  globalAudioElem.addEventListener("error", () => {
    globalAudioElem.src = urlTemplate.replace(/{{voice}}/, fallbackVoice).replace(/{{suffix}}/, "");
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
  bgmUrl && (audioInstance.src = bgmUrl);
  audioInstance.play();
}
