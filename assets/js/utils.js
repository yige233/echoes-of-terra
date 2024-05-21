/** 缓存存储Key */
export const cacheStorageKey = "cache-v1";
/** 干员语音列表 */
export const voiceSources = {
  voice: "日语",
  voice_cn: "中文-普通话",
  voice_en: "英语",
  voice_kr: "韩语",
  voice_custom: "中文-方言或其他语种",
};
/** 有个性化语音的干员列表 */
export const customVoiceCharList = {
  _cn_topolect: [
    "char_1013_chen2",
    "char_010_chen",
    "char_308_swire",
    "char_1033_swire2",
    "char_2024_chyue",
    "char_2025_shu",
    "char_4121_zuole",
    "char_136_hsguma",
    "char_2015_dusk",
    "char_2023_ling",
    "char_226_hmau",
    "char_225_haak",
    "char_241_panda",
    "char_243_waaifu",
    "char_322_lmlee",
    "char_383_snsant",
    "char_4080_lin",
    "char_455_nothin",
    "char_473_mberry",
    "char_2014_nian",
  ],
  _ita: ["char_1028_texas2", "char_102_texas", "char_140_whitew", "char_4065_judge", "char_427_vigil"],
  [""]: [
    "char_115_headbr",
    "char_188_helage",
    "char_194_leto",
    "char_195_glassb",
    "char_196_sunbr",
    "char_197_poca",
    "char_4011_lessng",
    "char_4046_ebnhlz",
    "char_4047_pianst",
    "char_405_absin",
    "char_4098_vvana",
  ],
};
/** 坍缩范式列表 */
export const chaosList = {
  rogue_3_chaos_1: "去量化",
  rogue_3_chaos_1_a: "去量深化",
  rogue_3_chaos_2: "实质性坍缩",
  rogue_3_chaos_2_a: "蔓延性坍缩",
  rogue_3_chaos_3: "非线性移动",
  rogue_3_chaos_3_a: "非线性行动",
  rogue_3_chaos_4: "情绪实体",
  rogue_3_chaos_4_a: "恐怖实体",
  rogue_3_chaos_5: "泛社会悖论",
  rogue_3_chaos_5_a: "泛文明悖论",
  rogue_3_chaos_6: "气压异常",
  rogue_3_chaos_6_a: "气压失序",
  rogue_3_chaos_7: "触发性损伤",
  rogue_3_chaos_7_a: "触发性危殆",
  rogue_3_chaos_8: "趋同性消耗",
  rogue_3_chaos_8_a: "趋同性缺失",
};
/** 干员列表 */
export const charList = [
  {
    /** 系统内干员id */
    id: "char_285_medic2",
    /** 干员中文代号 */
    name: "Lancet-2",
    /** 干员英文代号 */
    appellation: "Lancet-2",
    /** 干员职业 */
    profession: "MEDIC",
  },
  {
    id: "char_286_cast3",
    name: "Castle-3",
    appellation: "Castle-3",
    profession: "WARRIOR",
  },
  {
    id: "char_376_therex",
    name: "THRM-EX",
    appellation: "Thermal-EX",
    profession: "SPECIAL",
  },
  {
    id: "char_4000_jnight",
    name: "正义骑士号",
    appellation: '"Justice Knight"',
    profession: "SNIPER",
    /** 关键词。用于搜索对应的干员 */
    keywords: "zhengyiqishihao",
  },
  {
    id: "char_4091_ulika",
    name: "U-Official",
    appellation: "U-Official",
    profession: "SUPPORT",
    keywords: "尤里卡,youlika,Eureka",
  },
  {
    id: "char_4093_frston",
    name: "Friston-3",
    appellation: "Friston-3",
    profession: "TANK",
  },
  {
    id: "char_4136_phonor",
    name: "PhonoR-0",
    appellation: "PhonoR-0",
    profession: "SUPPORT",
  },
  {
    id: "char_502_nblade",
    name: "夜刀",
    appellation: "Yato",
    profession: "PIONEER",
    keywords: "yedao",
  },
  {
    id: "char_500_noirc",
    name: "黑角",
    appellation: "Noir Corne",
    profession: "TANK",
    keywords: "heijiao",
  },
  {
    id: "char_503_rang",
    name: "巡林者",
    appellation: "Rangers",
    profession: "SNIPER",
    keywords: "xunlinzhe",
  },
  {
    id: "char_501_durin",
    name: "杜林",
    appellation: "Durin",
    profession: "CASTER",
    keywords: "dulin",
  },
  {
    id: "char_009_12fce",
    name: "12F",
    appellation: "12F",
    profession: "CASTER",
  },
  {
    id: "char_123_fang",
    name: "芬",
    appellation: "Fang",
    profession: "PIONEER",
    keywords: "fen",
  },
  {
    id: "char_240_wyvern",
    name: "香草",
    appellation: "Vanilla",
    profession: "PIONEER",
    keywords: "xiangcao",
  },
  {
    id: "char_192_falco",
    name: "翎羽",
    appellation: "Plume",
    profession: "PIONEER",
    keywords: "lingyu",
  },
  {
    id: "char_208_melan",
    name: "玫兰莎",
    appellation: "Melantha",
    profession: "WARRIOR",
    keywords: "meilansha",
  },
  {
    id: "char_281_popka",
    name: "泡普卡",
    appellation: "Popukar",
    profession: "WARRIOR",
    keywords: "paopuka",
  },
  {
    id: "char_209_ardign",
    name: "卡缇",
    appellation: "Cardigan",
    profession: "TANK",
    keywords: "kati",
  },
  {
    id: "char_122_beagle",
    name: "米格鲁",
    appellation: "Beagle",
    profession: "TANK",
    keywords: "migelu",
  },
  {
    id: "char_284_spot",
    name: "斑点",
    appellation: "Spot",
    profession: "TANK",
    keywords: "bandian",
  },
  {
    id: "char_124_kroos",
    name: "克洛丝",
    appellation: "Kroos",
    profession: "SNIPER",
    keywords: "keluosi",
  },
  {
    id: "char_211_adnach",
    name: "安德切尔",
    appellation: "Adnachiel",
    profession: "SNIPER",
    keywords: "andeqieer",
  },
  {
    id: "char_121_lava",
    name: "炎熔",
    appellation: "Lava",
    profession: "CASTER",
    keywords: "yanrong",
  },
  {
    id: "char_120_hibisc",
    name: "芙蓉",
    appellation: "Hibiscus",
    profession: "MEDIC",
    keywords: "furong",
  },
  {
    id: "char_212_ansel",
    name: "安赛尔",
    appellation: "Ansel",
    profession: "MEDIC",
    keywords: "ansaier",
  },
  {
    id: "char_210_stward",
    name: "史都华德",
    appellation: "Steward",
    profession: "CASTER",
    keywords: "shiduhuade",
  },
  {
    id: "char_278_orchid",
    name: "梓兰",
    appellation: "Orchid",
    profession: "SUPPORT",
    keywords: "zilan",
  },
  {
    id: "char_141_nights",
    name: "夜烟",
    appellation: "Haze",
    profession: "CASTER",
    keywords: "yeyan",
  },
  {
    id: "char_109_fmout",
    name: "远山",
    appellation: "Gitano",
    profession: "CASTER",
    keywords: "yuanshan",
  },
  {
    id: "char_253_greyy",
    name: "格雷伊",
    appellation: "Greyy",
    profession: "CASTER",
    keywords: "geleiyi",
  },
  {
    id: "char_328_cammou",
    name: "卡达",
    appellation: "Click",
    profession: "CASTER",
    keywords: "kada",
  },
  {
    id: "char_469_indigo",
    name: "深靛",
    appellation: "Indigo",
    profession: "CASTER",
    keywords: "shendian",
  },
  {
    id: "char_4004_pudd",
    name: "布丁",
    appellation: "Pudding",
    profession: "CASTER",
    keywords: "buding",
  },
  {
    id: "char_235_jesica",
    name: "杰西卡",
    appellation: "Jessica",
    profession: "SNIPER",
    keywords: "jiexika",
  },
  {
    id: "char_126_shotst",
    name: "流星",
    appellation: "Meteor",
    profession: "SNIPER",
    keywords: "liuxing",
  },
  {
    id: "char_190_clour",
    name: "红云",
    appellation: "Vermeil",
    profession: "SNIPER",
    keywords: "hongyun",
  },
  {
    id: "char_133_mm",
    name: "梅",
    appellation: "May",
    profession: "SNIPER",
    keywords: "mei",
  },
  {
    id: "char_118_yuki",
    name: "白雪",
    appellation: "ShiraYuki",
    profession: "SNIPER",
    keywords: "baixue",
  },
  {
    id: "char_440_pinecn",
    name: "松果",
    appellation: "Pinecone",
    profession: "SNIPER",
    keywords: "songguo",
  },
  {
    id: "char_302_glaze",
    name: "安比尔",
    appellation: "Ambriel",
    profession: "SNIPER",
    keywords: "anbier",
  },
  {
    id: "char_366_acdrop",
    name: "酸糖",
    appellation: "Aciddrop",
    profession: "SNIPER",
    keywords: "suantang",
  },
  {
    id: "char_4062_totter",
    name: "铅踝",
    appellation: "Totter",
    profession: "SNIPER",
    keywords: "qianhuai",
  },
  {
    id: "char_4100_caper",
    name: "跃跃",
    appellation: "Caper",
    profession: "SNIPER",
    keywords: "yueyue",
  },
  {
    id: "char_198_blackd",
    name: "讯使",
    appellation: "Courier",
    profession: "PIONEER",
    keywords: "xunshi",
  },
  {
    id: "char_149_scave",
    name: "清道夫",
    appellation: "Scavenger",
    profession: "PIONEER",
    keywords: "qingdaofu",
  },
  {
    id: "char_290_vigna",
    name: "红豆",
    appellation: "Vigna",
    profession: "PIONEER",
    keywords: "hongdou",
  },
  {
    id: "char_151_myrtle",
    name: "桃金娘",
    appellation: "Myrtle",
    profession: "PIONEER",
    keywords: "taojinniang",
  },
  {
    id: "char_452_bstalk",
    name: "豆苗",
    appellation: "Beanstalk",
    profession: "PIONEER",
    keywords: "doumiao",
  },
  {
    id: "char_130_doberm",
    name: "杜宾",
    appellation: "Dobermann",
    profession: "WARRIOR",
    keywords: "dubin",
  },
  {
    id: "char_289_gyuki",
    name: "缠丸",
    appellation: "Matoimaru",
    profession: "WARRIOR",
    keywords: "chanwan",
  },
  {
    id: "char_159_peacok",
    name: "断罪者",
    appellation: "Conviction",
    profession: "WARRIOR",
    keywords: "duanzuizhe",
  },
  {
    id: "char_193_frostl",
    name: "霜叶",
    appellation: "Frostleaf",
    profession: "WARRIOR",
    keywords: "shuangye",
  },
  {
    id: "char_127_estell",
    name: "艾丝黛尔",
    appellation: "Estelle",
    profession: "WARRIOR",
    keywords: "aisidaier",
  },
  {
    id: "char_185_frncat",
    name: "慕斯",
    appellation: "Mousse",
    profession: "WARRIOR",
    keywords: "musi",
  },
  {
    id: "char_301_cutter",
    name: "刻刀",
    appellation: "Cutter",
    profession: "WARRIOR",
    keywords: "kedao",
  },
  {
    id: "char_337_utage",
    name: "宴",
    appellation: "Utage",
    profession: "WARRIOR",
    keywords: "yan",
  },
  {
    id: "char_271_spikes",
    name: "芳汀",
    appellation: "Arene",
    profession: "WARRIOR",
    keywords: "fangting",
  },
  {
    id: "char_4063_quartz",
    name: "石英",
    appellation: "Quartz",
    profession: "WARRIOR",
    keywords: "shiying",
  },
  {
    id: "char_491_humus",
    name: "休谟斯",
    appellation: "Humus",
    profession: "WARRIOR",
    keywords: "xiumosi",
  },
  {
    id: "char_237_gravel",
    name: "砾",
    appellation: "Gravel",
    profession: "SPECIAL",
    keywords: "li",
  },
  {
    id: "char_272_strong",
    name: "孑",
    appellation: "Jaye",
    profession: "SPECIAL",
    keywords: "jie",
  },
  {
    id: "char_236_rope",
    name: "暗索",
    appellation: "Rope",
    profession: "SPECIAL",
    keywords: "ansuo",
  },
  {
    id: "char_117_myrrh",
    name: "末药",
    appellation: "Myrrh",
    profession: "MEDIC",
    keywords: "moyao",
  },
  {
    id: "char_187_ccheal",
    name: "嘉维尔",
    appellation: "Gavial",
    profession: "MEDIC",
    keywords: "jiaweier",
  },
  {
    id: "char_298_susuro",
    name: "苏苏洛",
    appellation: "Sussurro",
    profession: "MEDIC",
    keywords: "susuluo",
  },
  {
    id: "char_181_flower",
    name: "调香师",
    appellation: "Perfumer",
    profession: "MEDIC",
    keywords: "tiaoxiangshi",
  },
  {
    id: "char_385_finlpp",
    name: "清流",
    appellation: "Purestream",
    profession: "MEDIC",
    keywords: "qingliu",
  },
  {
    id: "char_4041_chnut",
    name: "褐果",
    appellation: "Chestnut",
    profession: "MEDIC",
    keywords: "heguo",
  },
  {
    id: "char_199_yak",
    name: "角峰",
    appellation: "Matterhorn",
    profession: "TANK",
    keywords: "jiaofeng",
  },
  {
    id: "char_150_snakek",
    name: "蛇屠箱",
    appellation: "Cuora",
    profession: "TANK",
    keywords: "shetuxiang",
  },
  {
    id: "char_381_bubble",
    name: "泡泡",
    appellation: "Bubble",
    profession: "TANK",
    keywords: "paopao",
  },
  {
    id: "char_4130_luton",
    name: "露托",
    appellation: "Lutonada",
    profession: "TANK",
    keywords: "lutuo",
  },
  {
    id: "char_196_sunbr",
    name: "古米",
    appellation: "Гум",
    profession: "TANK",
    keywords: "gumi",
  },
  {
    id: "char_260_durnar",
    name: "坚雷",
    appellation: "Dur-nar",
    profession: "TANK",
    keywords: "jianlei",
  },
  {
    id: "char_110_deepcl",
    name: "深海色",
    appellation: "Deepcolor",
    profession: "SUPPORT",
    keywords: "shenhaise",
  },
  {
    id: "char_183_skgoat",
    name: "地灵",
    appellation: "Earthspirit",
    profession: "SUPPORT",
    keywords: "diling",
  },
  {
    id: "char_258_podego",
    name: "波登可",
    appellation: "Podenco",
    profession: "SUPPORT",
    keywords: "bodengke",
  },
  {
    id: "char_484_robrta",
    name: "罗比菈塔",
    appellation: "Roberta",
    profession: "SUPPORT",
    keywords: "luobilata",
  },
  {
    id: "char_355_ethan",
    name: "伊桑",
    appellation: "Ethan",
    profession: "SPECIAL",
    keywords: "yisang",
  },
  {
    id: "char_277_sqrrel",
    name: "阿消",
    appellation: "Shaw",
    profession: "SPECIAL",
    keywords: "axiao",
  },
  {
    id: "char_4107_vrdant",
    name: "维荻",
    appellation: "Verdant",
    profession: "SPECIAL",
    keywords: "weidi",
  },
  {
    id: "char_128_plosis",
    name: "白面鸮",
    appellation: "Ptilopsis",
    profession: "MEDIC",
    keywords: "baimianxiao",
  },
  {
    id: "char_275_breeze",
    name: "微风",
    appellation: "Breeze",
    profession: "MEDIC",
    keywords: "weifeng",
  },
  {
    id: "char_115_headbr",
    name: "凛冬",
    appellation: "Зима",
    profession: "PIONEER",
    keywords: "lindong",
  },
  {
    id: "char_102_texas",
    name: "德克萨斯",
    appellation: "Texas",
    profession: "PIONEER",
    keywords: "dekesasi",
  },
  {
    id: "char_349_chiave",
    name: "贾维",
    appellation: "Chiave",
    profession: "PIONEER",
    keywords: "jiawei",
  },
  {
    id: "char_488_buildr",
    name: "青枳",
    appellation: "Poncirus",
    profession: "PIONEER",
    keywords: "qingzhi",
  },
  {
    id: "char_4023_rfalcn",
    name: "红隼",
    appellation: "Kestrel",
    profession: "PIONEER",
    keywords: "hongsun",
  },
  {
    id: "char_261_sddrag",
    name: "苇草",
    appellation: "Reed",
    profession: "PIONEER",
    keywords: "weicao",
  },
  {
    id: "char_496_wildmn",
    name: "野鬃",
    appellation: "Wild Mane",
    profession: "PIONEER",
    keywords: "yezong",
  },
  {
    id: "char_1036_fang2",
    name: "历阵锐枪芬",
    appellation: "Fang the Fire-sharpened",
    profession: "PIONEER",
    keywords: "SP芬,芬SP,lizhenruiqiangfen,spfen,fensp",
  },
  {
    id: "char_401_elysm",
    name: "极境",
    appellation: "Elysium",
    profession: "PIONEER",
    keywords: "jijing",
  },
  {
    id: "char_4119_wanqin",
    name: "万顷",
    appellation: "Wanqing",
    profession: "PIONEER",
    keywords: "wanqing",
  },
  {
    id: "char_476_blkngt",
    name: "夜半",
    appellation: "Blacknight",
    profession: "PIONEER",
    keywords: "yeban",
  },
  {
    id: "char_497_ctable",
    name: "晓歌",
    appellation: "Cantabile",
    profession: "PIONEER",
    keywords: "xiaoge",
  },
  {
    id: "char_4017_puzzle",
    name: "谜图",
    appellation: "Puzzle",
    profession: "PIONEER",
    keywords: "mitu",
  },
  {
    id: "char_308_swire",
    name: "诗怀雅",
    appellation: "Swire",
    profession: "WARRIOR",
    keywords: "shihuaiya",
  },
  {
    id: "char_265_sophia",
    name: "鞭刃",
    appellation: "Whislash",
    profession: "WARRIOR",
    keywords: "bianren",
  },
  {
    id: "char_4106_bryota",
    name: "苍苔",
    appellation: "Bryophyta",
    profession: "WARRIOR",
    keywords: "cangtai",
  },
  {
    id: "char_106_franka",
    name: "芙兰卡",
    appellation: "Franka",
    profession: "WARRIOR",
    keywords: "fulanka",
  },
  {
    id: "char_131_flameb",
    name: "炎客",
    appellation: "Flamebringer",
    profession: "WARRIOR",
    keywords: "yanke",
  },
  {
    id: "char_154_morgan",
    name: "摩根",
    appellation: "Morgan",
    profession: "WARRIOR",
    keywords: "mogen",
  },
  {
    id: "char_155_tiger",
    name: "因陀罗",
    appellation: "Indra",
    profession: "WARRIOR",
    keywords: "yintuoluo",
  },
  {
    id: "char_415_flint",
    name: "燧石",
    appellation: "Flint",
    profession: "WARRIOR",
    keywords: "suishi",
  },
  {
    id: "char_157_dagda",
    name: "达格达",
    appellation: "Dagda",
    profession: "WARRIOR",
    keywords: "dageda",
  },
  {
    id: "char_140_whitew",
    name: "拉普兰德",
    appellation: "Lappland",
    profession: "WARRIOR",
    keywords: "lapulande",
  },
  {
    id: "char_294_ayer",
    name: "断崖",
    appellation: "Ayerscarpe",
    profession: "WARRIOR",
    keywords: "duanya",
  },
  {
    id: "char_194_leto",
    name: "烈夏",
    appellation: "Лето",
    profession: "WARRIOR",
    keywords: "liexia",
  },
  {
    id: "char_4083_chimes",
    name: "铎铃",
    appellation: "Wind Chimes",
    profession: "WARRIOR",
    keywords: "duoling",
  },
  {
    id: "char_252_bibeak",
    name: "柏喙",
    appellation: "Bibeak",
    profession: "WARRIOR",
    keywords: "baihui",
  },
  {
    id: "char_143_ghost",
    name: "幽灵鲨",
    appellation: "Specter",
    profession: "WARRIOR",
    keywords: "youlingsha",
  },
  {
    id: "char_356_broca",
    name: "布洛卡",
    appellation: "Broca",
    profession: "WARRIOR",
    keywords: "buluoka",
  },
  {
    id: "char_274_astesi",
    name: "星极",
    appellation: "Astesia",
    profession: "WARRIOR",
    keywords: "xingji",
  },
  {
    id: "char_333_sidero",
    name: "铸铁",
    appellation: "Sideroca",
    profession: "WARRIOR",
    keywords: "zhutie",
  },
  {
    id: "char_475_akafyu",
    name: "赤冬",
    appellation: "Akafuyu",
    profession: "WARRIOR",
    keywords: "chidong",
  },
  {
    id: "char_421_crow",
    name: "羽毛笔",
    appellation: "La Pluma",
    profession: "WARRIOR",
    keywords: "yumaobi",
  },
  {
    id: "char_4066_highmo",
    name: "海沫",
    appellation: "Highmore",
    profession: "WARRIOR",
    keywords: "haimo",
  },
  {
    id: "char_486_takila",
    name: "龙舌兰",
    appellation: "Tequila",
    profession: "WARRIOR",
    keywords: "longshelan",
  },
  {
    id: "char_4131_odda",
    name: "奥达",
    appellation: "Odda",
    profession: "WARRIOR",
    keywords: "aoda",
  },
  {
    id: "char_129_bluep",
    name: "蓝毒",
    appellation: "Blue Poison",
    profession: "SNIPER",
    keywords: "landu",
  },
  {
    id: "char_204_platnm",
    name: "白金",
    appellation: "Platinum",
    profession: "SNIPER",
    keywords: "baijin",
  },
  {
    id: "char_367_swllow",
    name: "灰喉",
    appellation: "GreyThroat",
    profession: "SNIPER",
    keywords: "huihou",
  },
  {
    id: "char_365_aprl",
    name: "四月",
    appellation: "April",
    profession: "SNIPER",
    keywords: "siyue",
  },
  {
    id: "char_1021_kroos2",
    name: "寒芒克洛丝",
    appellation: "Kroos the Keen Glint",
    profession: "SNIPER",
    keywords: "SP克洛丝,克洛丝SP,hanmangkeluosi,spkeluosi,keluosisp",
  },
  {
    id: "char_498_inside",
    name: "隐现",
    appellation: "Insider",
    profession: "SNIPER",
    keywords: "yinxian",
  },
  {
    id: "char_219_meteo",
    name: "陨星",
    appellation: "Meteorite",
    profession: "SNIPER",
    keywords: "yunxing",
  },
  {
    id: "char_379_sesa",
    name: "慑砂",
    appellation: "Sesa",
    profession: "SNIPER",
    keywords: "shesha",
  },
  {
    id: "char_4078_bdhkgt",
    name: "截云",
    appellation: "Jieyun",
    profession: "SNIPER",
    keywords: "jieyun",
  },
  {
    id: "char_279_excu",
    name: "送葬人",
    appellation: "Executor",
    profession: "SNIPER",
    keywords: "songzangren",
  },
  {
    id: "char_346_aosta",
    name: "奥斯塔",
    appellation: "Aosta",
    profession: "SNIPER",
    keywords: "aosita",
  },
  {
    id: "char_002_amiya",
    name: "阿米娅",
    appellation: "Amiya",
    profession: "CASTER",
    keywords: "amiya",
  },
  {
    id: "char_405_absin",
    name: "苦艾",
    appellation: "Absinthe",
    profession: "CASTER",
    keywords: "kuai",
  },
  {
    id: "char_411_tomimi",
    name: "特米米",
    appellation: "Tomimi",
    profession: "CASTER",
    keywords: "temimi",
  },
  {
    id: "char_466_qanik",
    name: "雪绒",
    appellation: "Qanipalaat",
    profession: "CASTER",
    keywords: "xuerong",
  },
  {
    id: "char_166_skfire",
    name: "天火",
    appellation: "Skyfire",
    profession: "CASTER",
    keywords: "tianhuo",
  },
  {
    id: "char_306_leizi",
    name: "惊蛰",
    appellation: "Leizi",
    profession: "CASTER",
    keywords: "jingzhe",
  },
  {
    id: "char_135_halo",
    name: "星源",
    appellation: "Astgenne",
    profession: "CASTER",
    keywords: "xingyuan",
  },
  {
    id: "char_344_beewax",
    name: "蜜蜡",
    appellation: "Beeswax",
    profession: "CASTER",
    keywords: "mila",
  },
  {
    id: "char_373_lionhd",
    name: "莱恩哈特",
    appellation: "Leonhardt",
    profession: "CASTER",
    keywords: "laienhate",
  },
  {
    id: "char_341_sntlla",
    name: "寒檀",
    appellation: "Santalla",
    profession: "CASTER",
    keywords: "hantan",
  },
  {
    id: "char_388_mint",
    name: "薄绿",
    appellation: "Mint",
    profession: "CASTER",
    keywords: "baolü",
  },
  {
    id: "char_338_iris",
    name: "爱丽丝",
    appellation: "Iris",
    profession: "CASTER",
    keywords: "ailisi",
  },
  {
    id: "char_297_hamoni",
    name: "和弦",
    appellation: "Harmonie",
    profession: "CASTER",
    keywords: "hexian",
  },
  {
    id: "char_4110_delphn",
    name: "戴菲恩",
    appellation: "Delphine",
    profession: "CASTER",
    keywords: "daifeien",
  },
  {
    id: "char_1011_lava2",
    name: "炎狱炎熔",
    appellation: "Lava the Purgatory",
    profession: "CASTER",
    keywords: "SP炎熔,炎熔SP,yanyuyanrong,spyanrong,yanrongsp",
  },
  {
    id: "char_489_serum",
    name: "蚀清",
    appellation: "Corroserum",
    profession: "CASTER",
    keywords: "shiqing",
  },
  {
    id: "char_446_aroma",
    name: "阿罗玛",
    appellation: "Aroma",
    profession: "CASTER",
    keywords: "aluoma",
  },
  {
    id: "char_4013_kjera",
    name: "耶拉",
    appellation: "Kjera",
    profession: "CASTER",
    keywords: "yela",
  },
  {
    id: "char_4040_rockr",
    name: "洛洛",
    appellation: "Rockrock",
    profession: "CASTER",
    keywords: "luoluo",
  },
  {
    id: "char_4054_malist",
    name: "至简",
    appellation: "Minimalist",
    profession: "CASTER",
    keywords: "zhijian",
  },
  {
    id: "char_499_kaitou",
    name: "折光",
    appellation: "Diamante",
    profession: "CASTER",
    keywords: "zheguang",
  },
  {
    id: "char_4081_warmy",
    name: "温米",
    appellation: "Warmy",
    profession: "CASTER",
    keywords: "wenmi",
  },
  {
    id: "char_242_otter",
    name: "梅尔",
    appellation: "Mayer",
    profession: "SUPPORT",
    keywords: "meier",
  },
  {
    id: "char_336_folivo",
    name: "稀音",
    appellation: "Scene",
    profession: "SUPPORT",
    keywords: "xiyin",
  },
  {
    id: "char_108_silent",
    name: "赫默",
    appellation: "Silence",
    profession: "MEDIC",
    keywords: "hemo",
  },
  {
    id: "char_171_bldsk",
    name: "华法琳",
    appellation: "Warfarin",
    profession: "MEDIC",
    keywords: "huafalin",
  },
  {
    id: "char_345_folnic",
    name: "亚叶",
    appellation: "Folinic",
    profession: "MEDIC",
    keywords: "yaye",
  },
  {
    id: "char_348_ceylon",
    name: "锡兰",
    appellation: "Ceylon",
    profession: "MEDIC",
    keywords: "xilan",
  },
  {
    id: "char_436_whispr",
    name: "絮雨",
    appellation: "Whisperain",
    profession: "MEDIC",
    keywords: "xuyu",
  },
  {
    id: "char_402_tuye",
    name: "图耶",
    appellation: "Tuye",
    profession: "MEDIC",
    keywords: "tuye",
  },
  {
    id: "char_473_mberry",
    name: "桑葚",
    appellation: "Mulberry",
    profession: "MEDIC",
    keywords: "sangshen",
  },
  {
    id: "char_449_glider",
    name: "蜜莓",
    appellation: "Honeyberry",
    profession: "MEDIC",
    keywords: "mimei",
  },
  {
    id: "char_4114_harold",
    name: "哈洛德",
    appellation: "Harold",
    profession: "MEDIC",
    keywords: "haluode",
  },
  {
    id: "char_1024_hbisc2",
    name: "濯尘芙蓉",
    appellation: "Hibiscus the Purifier",
    profession: "MEDIC",
    keywords: "SP芙蓉,芙蓉SP,zhuochenfurong,spfurong,furongsp",
  },
  {
    id: "char_494_vendla",
    name: "刺玫",
    appellation: "Vendela",
    profession: "MEDIC",
    keywords: "cimei",
  },
  {
    id: "char_4071_peper",
    name: "明椒",
    appellation: "Paprika",
    profession: "MEDIC",
    keywords: "mingjiao",
  },
  {
    id: "char_148_nearl",
    name: "临光",
    appellation: "Nearl",
    profession: "TANK",
    keywords: "linguang",
  },
  {
    id: "char_226_hmau",
    name: "吽",
    appellation: "Hung",
    profession: "TANK",
    keywords: "hong",
  },
  {
    id: "char_4109_baslin",
    name: "深律",
    appellation: "Bassline",
    profession: "TANK",
    keywords: "shenlü",
  },
  {
    id: "char_144_red",
    name: "红",
    appellation: "Projekt Red",
    profession: "SPECIAL",
    keywords: "hong",
  },
  {
    id: "char_243_waaifu",
    name: "槐琥",
    appellation: "Waai Fu",
    profession: "SPECIAL",
    keywords: "huaihu",
  },
  {
    id: "char_214_kafka",
    name: "卡夫卡",
    appellation: "Kafka",
    profession: "SPECIAL",
    keywords: "kafuka",
  },
  {
    id: "char_455_nothin",
    name: "乌有",
    appellation: "Mr.Nothing",
    profession: "SPECIAL",
    keywords: "wuyou",
  },
  {
    id: "char_107_liskam",
    name: "雷蛇",
    appellation: "Liskarm",
    profession: "TANK",
    keywords: "leishe",
  },
  {
    id: "char_201_moeshd",
    name: "可颂",
    appellation: "Croissant",
    profession: "TANK",
    keywords: "kesong",
  },
  {
    id: "char_325_bison",
    name: "拜松",
    appellation: "Bison",
    profession: "TANK",
    keywords: "baisong",
  },
  {
    id: "char_163_hpsts",
    name: "火神",
    appellation: "Vulcan",
    profession: "TANK",
    keywords: "huoshen",
  },
  {
    id: "char_378_asbest",
    name: "石棉",
    appellation: "Asbestos",
    profession: "TANK",
    keywords: "shimian",
  },
  {
    id: "char_512_aprot",
    name: "暮落",
    appellation: "Shalem",
    profession: "TANK",
    keywords: "muluo",
  },
  {
    id: "char_4047_pianst",
    name: "车尔尼",
    appellation: "Czerny",
    profession: "TANK",
    keywords: "cheerni",
  },
  {
    id: "char_304_zebra",
    name: "暴雨",
    appellation: "Heavyrain",
    profession: "TANK",
    keywords: "baoyu",
  },
  {
    id: "char_431_ashlok",
    name: "灰毫",
    appellation: "Ashlock",
    profession: "TANK",
    keywords: "huihao",
  },
  {
    id: "char_493_firwhl",
    name: "火哨",
    appellation: "Firewhistle",
    profession: "TANK",
    keywords: "huoshao",
  },
  {
    id: "char_422_aurora",
    name: "极光",
    appellation: "Aurora",
    profession: "TANK",
    keywords: "jiguang",
  },
  {
    id: "char_464_cement",
    name: "洋灰",
    appellation: "Cement",
    profession: "TANK",
    keywords: "yanghui",
  },
  {
    id: "char_145_prove",
    name: "普罗旺斯",
    appellation: "Provence",
    profession: "SNIPER",
    keywords: "puluowangsi",
  },
  {
    id: "char_4006_melnte",
    name: "玫拉",
    appellation: "Melanite",
    profession: "SNIPER",
    keywords: "meila",
  },
  {
    id: "char_158_milu",
    name: "守林人",
    appellation: "Firewatch",
    profession: "SNIPER",
    keywords: "shoulinren",
  },
  {
    id: "char_218_cuttle",
    name: "安哲拉",
    appellation: "Andreana",
    profession: "SNIPER",
    keywords: "anzhela",
  },
  {
    id: "char_4014_lunacu",
    name: "子月",
    appellation: "Lunacub",
    profession: "SNIPER",
    keywords: "ziyue",
  },
  {
    id: "char_363_toddi",
    name: "熔泉",
    appellation: "Toddifons",
    profession: "SNIPER",
    keywords: "rongquan",
  },
  {
    id: "char_4043_erato",
    name: "埃拉托",
    appellation: "Erato",
    profession: "SNIPER",
    keywords: "ailatuo",
  },
  {
    id: "char_1027_greyy2",
    name: "承曦格雷伊",
    appellation: "Greyy the Lightningbearer",
    profession: "SNIPER",
    keywords: "SP格雷伊,格雷伊SP,chengxigeleiyi,spgeleiyi,geleiyisp",
  },
  {
    id: "char_4104_coldst",
    name: "冰酿",
    appellation: "Coldshot",
    profession: "SNIPER",
    keywords: "bingniang",
  },
  {
    id: "char_4015_spuria",
    name: "空构",
    appellation: "Spuria",
    profession: "SPECIAL",
    keywords: "konggou",
  },
  {
    id: "char_173_slchan",
    name: "崖心",
    appellation: "Cliffheart",
    profession: "SPECIAL",
    keywords: "yaxin",
  },
  {
    id: "char_383_snsant",
    name: "雪雉",
    appellation: "Snowsant",
    profession: "SPECIAL",
    keywords: "xuezhi",
  },
  {
    id: "char_4105_almond",
    name: "杏仁",
    appellation: "Almond",
    profession: "SPECIAL",
    keywords: "xingren",
  },
  {
    id: "char_174_slbell",
    name: "初雪",
    appellation: "Pramanix",
    profession: "SUPPORT",
    keywords: "chuxue",
  },
  {
    id: "char_254_vodfox",
    name: "巫恋",
    appellation: "Shamare",
    profession: "SUPPORT",
    keywords: "wulian",
  },
  {
    id: "char_195_glassb",
    name: "真理",
    appellation: "Истина",
    profession: "SUPPORT",
    keywords: "zhenli",
  },
  {
    id: "char_326_glacus",
    name: "格劳克斯",
    appellation: "Glaucus",
    profession: "SUPPORT",
    keywords: "gelaokesi",
  },
  {
    id: "char_4032_provs",
    name: "但书",
    appellation: "Proviso",
    profession: "SUPPORT",
    keywords: "danshu",
  },
  {
    id: "char_4122_grabds",
    name: "小满",
    appellation: "Grain Buds",
    profession: "SUPPORT",
    keywords: "xiaoman",
  },
  {
    id: "char_433_windft",
    name: "掠风",
    appellation: "Windflit",
    profession: "SUPPORT",
    keywords: "lüefeng",
  },
  {
    id: "char_101_sora",
    name: "空",
    appellation: "Sora",
    profession: "SUPPORT",
    keywords: "kong",
  },
  {
    id: "char_4045_heidi",
    name: "海蒂",
    appellation: "Heidi",
    profession: "SUPPORT",
    keywords: "haidi",
  },
  {
    id: "char_343_tknogi",
    name: "月禾",
    appellation: "Tsukinogi",
    profession: "SUPPORT",
    keywords: "yuehe",
  },
  {
    id: "char_492_quercu",
    name: "夏栎",
    appellation: "Quercus",
    profession: "SUPPORT",
    keywords: "xiali",
  },
  {
    id: "char_4102_threye",
    name: "凛视",
    appellation: "Valarqvin",
    profession: "SUPPORT",
    keywords: "linshi",
  },
  {
    id: "char_215_mantic",
    name: "狮蝎",
    appellation: "Manticore",
    profession: "SPECIAL",
    keywords: "shixie",
  },
  {
    id: "char_478_kirara",
    name: "绮良",
    appellation: "Kirara",
    profession: "SPECIAL",
    keywords: "qiliang",
  },
  {
    id: "char_241_panda",
    name: "食铁兽",
    appellation: "FEater",
    profession: "SPECIAL",
    keywords: "shitieshou",
  },
  {
    id: "char_4036_forcer",
    name: "见行者",
    appellation: "Enforcer",
    profession: "SPECIAL",
    keywords: "jianxingzhe",
  },
  {
    id: "char_451_robin",
    name: "罗宾",
    appellation: "Robin",
    profession: "SPECIAL",
    keywords: "luobin",
  },
  {
    id: "char_369_bena",
    name: "贝娜",
    appellation: "Bena",
    profession: "SPECIAL",
    keywords: "beina",
  },
  {
    id: "char_4016_kazema",
    name: "风丸",
    appellation: "Kazemaru",
    profession: "SPECIAL",
    keywords: "fengwan",
  },
  {
    id: "char_103_angel",
    name: "能天使",
    appellation: "Exusiai",
    profession: "SNIPER",
    keywords: "nengtianshi",
  },
  {
    id: "char_332_archet",
    name: "空弦",
    appellation: "Archetto",
    profession: "SNIPER",
    keywords: "kongxian",
  },
  {
    id: "char_340_shwaz",
    name: "黑",
    appellation: "Schwarz",
    profession: "SNIPER",
    keywords: "hei",
  },
  {
    id: "char_4055_bgsnow",
    name: "鸿雪",
    appellation: "Позёмка",
    profession: "SNIPER",
    keywords: "hongxue",
  },
  {
    id: "char_430_fartth",
    name: "远牙",
    appellation: "Fartooth",
    profession: "SNIPER",
    keywords: "yuanya",
  },
  {
    id: "char_113_cqbw",
    name: "W",
    appellation: "W",
    profession: "SNIPER",
    keywords: "W",
  },
  {
    id: "char_300_phenxi",
    name: "菲亚梅塔",
    appellation: "Fiammetta",
    profession: "SNIPER",
    keywords: "feiyameita",
  },
  {
    id: "char_197_poca",
    name: "早露",
    appellation: "Роса",
    profession: "SNIPER",
    keywords: "zaolu",
  },
  {
    id: "char_2012_typhon",
    name: "提丰",
    appellation: "Typhon",
    profession: "SNIPER",
    keywords: "tifeng",
  },
  {
    id: "char_391_rosmon",
    name: "迷迭香",
    appellation: "Rosmontis",
    profession: "SNIPER",
    keywords: "midiexiang",
  },
  {
    id: "char_1035_wisdel",
    name: "维什戴尔",
    appellation: "Wiš'adel",
    profession: "SNIPER",
    keywords: "SPW,WSP,SP W,W SP,weishendaier",
  },
  {
    id: "char_1013_chen2",
    name: "假日威龙陈",
    appellation: "Ch'en the Holungday",
    profession: "SNIPER",
    keywords: "SP陈,陈SP,jiariweilongchen,spchen,chensp",
  },
  {
    id: "char_4117_ray",
    name: "莱伊",
    appellation: "Ray",
    profession: "SNIPER",
    keywords: "laiyi",
  },
  {
    id: "char_112_siege",
    name: "推进之王",
    appellation: "Siege",
    profession: "PIONEER",
    keywords: "tuijinzhiwang",
  },
  {
    id: "char_222_bpipe",
    name: "风笛",
    appellation: "Bagpipe",
    profession: "PIONEER",
    keywords: "fengdi",
  },
  {
    id: "char_362_saga",
    name: "嵯峨",
    appellation: "Saga",
    profession: "PIONEER",
    keywords: "cuoe",
  },
  {
    id: "char_479_sleach",
    name: "琴柳",
    appellation: "Saileach",
    profession: "PIONEER",
    keywords: "qinliu",
  },
  {
    id: "char_420_flamtl",
    name: "焰尾",
    appellation: "Flametail",
    profession: "PIONEER",
    keywords: "yanwei",
  },
  {
    id: "char_427_vigil",
    name: "伺夜",
    appellation: "Vigil",
    profession: "PIONEER",
    keywords: "siye",
  },
  {
    id: "char_249_mlyss",
    name: "缪尔赛思",
    appellation: "Muelsyse",
    profession: "PIONEER",
    keywords: "miuersaisi",
  },
  {
    id: "char_4087_ines",
    name: "伊内丝",
    appellation: "Ines",
    profession: "PIONEER",
    keywords: "yineisi",
  },
  {
    id: "char_134_ifrit",
    name: "伊芙利特",
    appellation: "Ifrit",
    profession: "CASTER",
    keywords: "yifulite",
  },
  {
    id: "char_213_mostma",
    name: "莫斯提马",
    appellation: "Mostima",
    profession: "CASTER",
    keywords: "mositima",
  },
  {
    id: "char_180_amgoat",
    name: "艾雅法拉",
    appellation: "Eyjafjalla",
    profession: "CASTER",
    keywords: "aiyafala",
  },
  {
    id: "char_2013_cerber",
    name: "刻俄柏",
    appellation: "Ceobe",
    profession: "CASTER",
    keywords: "keebai",
  },
  {
    id: "char_4027_heyak",
    name: "霍尔海雅",
    appellation: "Ho'olheyak",
    profession: "CASTER",
    keywords: "huoerhaiya",
  },
  {
    id: "char_4133_logos",
    name: "逻各斯",
    appellation: "Logos",
    profession: "CASTER",
    keywords: "luogesi",
  },
  {
    id: "char_2015_dusk",
    name: "夕",
    appellation: "Dusk",
    profession: "CASTER",
    keywords: "xi",
  },
  {
    id: "char_472_pasngr",
    name: "异客",
    appellation: "Passenger",
    profession: "CASTER",
    keywords: "yike",
  },
  {
    id: "char_426_billro",
    name: "卡涅利安",
    appellation: "Carnelian",
    profession: "CASTER",
    keywords: "kanielian",
  },
  {
    id: "char_4080_lin",
    name: "林",
    appellation: "Lin",
    profession: "CASTER",
  },
  {
    id: "char_377_gdglow",
    name: "澄闪",
    appellation: "Goldenglow",
    profession: "CASTER",
    keywords: "chengshan",
  },
  {
    id: "char_4046_ebnhlz",
    name: "黑键",
    appellation: "Ebenholz",
    profession: "CASTER",
    keywords: "heijian",
  },
  {
    id: "char_206_gnosis",
    name: "灵知",
    appellation: "Gnosis",
    profession: "SUPPORT",
    keywords: "lingzhi",
  },
  {
    id: "char_291_aglina",
    name: "安洁莉娜",
    appellation: "Angelina",
    profession: "SUPPORT",
    keywords: "anxinyuananjielina",
  },
  {
    id: "char_358_lisa",
    name: "铃兰",
    appellation: "Suzuran",
    profession: "SUPPORT",
    keywords: "linglan",
  },
  {
    id: "char_248_mgllan",
    name: "麦哲伦",
    appellation: "Magallan",
    profession: "SUPPORT",
    keywords: "maizhelun",
  },
  {
    id: "char_1012_skadi2",
    name: "浊心斯卡蒂",
    appellation: "Skadi the Corrupting Heart",
    profession: "SUPPORT",
    keywords: "SP斯卡蒂,斯卡蒂SP,zhuoxinsikadi,spsikadi,sikadisp",
  },
  {
    id: "char_4134_cetsyr",
    name: "魔王",
    appellation: "Civilight Eterna",
    profession: "SUPPORT",
    keywords: "特蕾西娅,teleixiya,mowang",
  },
  {
    id: "char_1031_slent2",
    name: "淬羽赫默",
    appellation: "Silence the Paradigmatic",
    profession: "SUPPORT",
    keywords: "SP赫默,赫默SP,cuiyuhemo,sphemo,hemosp",
  },
  {
    id: "char_2023_ling",
    name: "令",
    appellation: "Ling",
    profession: "SUPPORT",
    keywords: "ling",
  },
  {
    id: "char_4072_ironmn",
    name: "白铁",
    appellation: "Stainless",
    profession: "SUPPORT",
    keywords: "baitie",
  },
  {
    id: "char_245_cello",
    name: "塑心",
    appellation: "Virtuosa",
    profession: "SUPPORT",
    keywords: "suxin",
  },
  {
    id: "char_250_phatom",
    name: "傀影",
    appellation: "Phantom",
    profession: "SPECIAL",
    keywords: "kuiying",
  },
  {
    id: "char_1028_texas2",
    name: "缄默德克萨斯",
    appellation: "Texas the Omertosa",
    profession: "SPECIAL",
    keywords: "SP德克萨斯,德克萨斯SP,jianmodekesasi,spdekesasi,dekesasisp",
  },
  {
    id: "char_322_lmlee",
    name: "老鲤",
    appellation: "Lee",
    profession: "SPECIAL",
    keywords: "laoli",
  },
  {
    id: "char_1033_swire2",
    name: "琳琅诗怀雅",
    appellation: "Swire the Elegant Wit",
    profession: "SPECIAL",
    keywords: "SP诗怀雅,诗怀雅SP,linlangshihuaiya,spshihuaiya,shihuaiyasp",
  },
  {
    id: "char_400_weedy",
    name: "温蒂",
    appellation: "Weedy",
    profession: "SPECIAL",
    keywords: "wendi",
  },
  {
    id: "char_225_haak",
    name: "阿",
    appellation: "Aak",
    profession: "SPECIAL",
    keywords: "a",
  },
  {
    id: "char_474_glady",
    name: "歌蕾蒂娅",
    appellation: "Gladiia",
    profession: "SPECIAL",
    keywords: "geleidiya",
  },
  {
    id: "char_437_mizuki",
    name: "水月",
    appellation: "Mizuki",
    profession: "SPECIAL",
    keywords: "shuiyue",
  },
  {
    id: "char_4132_ascln",
    name: "阿斯卡纶",
    appellation: "Ascalon",
    profession: "SPECIAL",
    keywords: "asikalun",
  },
  {
    id: "char_1023_ghost2",
    name: "归溟幽灵鲨",
    appellation: "Specter the Unchained",
    profession: "SPECIAL",
    keywords: "SP幽灵鲨,幽灵鲨SP,guimingyoulingsha,spyoulingsha,youlingshasp",
  },
  {
    id: "char_4048_doroth",
    name: "多萝西",
    appellation: "Dorothy",
    profession: "SPECIAL",
    keywords: "duoluoxi",
  },
  {
    id: "char_147_shining",
    name: "闪灵",
    appellation: "Shining",
    profession: "MEDIC",
    keywords: "shanling",
  },
  {
    id: "char_179_cgbird",
    name: "夜莺",
    appellation: "Nightingale",
    profession: "MEDIC",
    keywords: "yeying",
  },
  {
    id: "char_003_kalts",
    name: "凯尔希",
    appellation: "Kal'tsit",
    profession: "MEDIC",
    keywords: "kaierxi",
  },
  {
    id: "char_4042_lumen",
    name: "流明",
    appellation: "Lumen",
    profession: "MEDIC",
    keywords: "liuming",
  },
  {
    id: "char_1016_agoat2",
    name: "纯烬艾雅法拉",
    appellation: "Eyjafjalla the Hvít Aska",
    profession: "MEDIC",
    keywords: "SP艾雅法拉,艾雅法拉SP,chunjinaiyafala,spaiyafala,aiyafalasp",
  },
  {
    id: "char_1020_reed2",
    name: "焰影苇草",
    appellation: "Reed The Flame Shadow",
    profession: "MEDIC",
    keywords: "SP苇草,苇草SP,yanyingweicao,spweicao,weicaosp",
  },
  {
    id: "char_136_hsguma",
    name: "星熊",
    appellation: "Hoshiguma",
    profession: "TANK",
    keywords: "xingxiong",
  },
  {
    id: "char_202_demkni",
    name: "塞雷娅",
    appellation: "Saria",
    profession: "TANK",
    keywords: "saileiya",
  },
  {
    id: "char_423_blemsh",
    name: "瑕光",
    appellation: "Blemishine",
    profession: "TANK",
    keywords: "xiaguang",
  },
  {
    id: "char_2025_shu",
    name: "黍",
    appellation: "Shu",
    profession: "TANK",
    keywords: "shu",
  },
  {
    id: "char_2014_nian",
    name: "年",
    appellation: "Nian",
    profession: "TANK",
    keywords: "nian",
  },
  {
    id: "char_311_mudrok",
    name: "泥岩",
    appellation: "Mudrock",
    profession: "TANK",
    keywords: "niyan",
  },
  {
    id: "char_4065_judge",
    name: "斥罪",
    appellation: "Penance",
    profession: "TANK",
    keywords: "chizui",
  },
  {
    id: "char_416_zumama",
    name: "森蚺",
    appellation: "Eunectes",
    profession: "TANK",
    keywords: "senran",
  },
  {
    id: "char_4039_horn",
    name: "号角",
    appellation: "Horn",
    profession: "TANK",
    keywords: "haojiao",
  },
  {
    id: "char_1034_jesca2",
    name: "涤火杰西卡",
    appellation: "Jessica the Liberated",
    profession: "TANK",
    keywords: "SP杰西卡,杰西卡SP,dihuojiexika,spjiexika,jiexikasp",
  },
  {
    id: "char_264_f12yin",
    name: "山",
    appellation: "Mountain",
    profession: "WARRIOR",
    keywords: "shan",
  },
  {
    id: "char_2024_chyue",
    name: "重岳",
    appellation: "Chongyue",
    profession: "WARRIOR",
    keywords: "chongyue",
  },
  {
    id: "char_172_svrash",
    name: "银灰",
    appellation: "SilverAsh",
    profession: "WARRIOR",
    keywords: "yinhui",
  },
  {
    id: "char_293_thorns",
    name: "棘刺",
    appellation: "Thorns",
    profession: "WARRIOR",
    keywords: "jici",
  },
  {
    id: "char_4082_qiubai",
    name: "仇白",
    appellation: "Qiubai",
    profession: "WARRIOR",
    keywords: "choubai",
  },
  {
    id: "char_4088_hodrer",
    name: "赫德雷",
    appellation: "Hoederer",
    profession: "WARRIOR",
    keywords: "hedelei",
  },
  {
    id: "char_010_chen",
    name: "陈",
    appellation: "Ch'en",
    profession: "WARRIOR",
    keywords: "chen",
  },
  {
    id: "char_4009_irene",
    name: "艾丽妮",
    appellation: "Irene",
    profession: "WARRIOR",
    keywords: "ailini",
  },
  {
    id: "char_4116_blkkgt",
    name: "锏",
    appellation: "Degenbrecher",
    profession: "WARRIOR",
    keywords: "jian",
  },
  {
    id: "char_017_huang",
    name: "煌",
    appellation: "Blaze",
    profession: "WARRIOR",
    keywords: "huang",
  },
  {
    id: "char_1026_gvial2",
    name: "百炼嘉维尔",
    appellation: "Gavial the Invincible",
    profession: "WARRIOR",
    keywords: "SP嘉维尔,嘉维尔SP,bailianjiaweier,spjiaweier,jiaweiersp",
  },
  {
    id: "char_350_surtr",
    name: "史尔特尔",
    appellation: "Surtr",
    profession: "WARRIOR",
    keywords: "shierteer",
  },
  {
    id: "char_4098_vvana",
    name: "薇薇安娜",
    appellation: "Viviana",
    profession: "WARRIOR",
    keywords: "weiweianna",
  },
  {
    id: "char_188_helage",
    name: "赫拉格",
    appellation: "Hellagur",
    profession: "WARRIOR",
    keywords: "helage",
  },
  {
    id: "char_4121_zuole",
    name: "左乐",
    appellation: "Zuo Le",
    profession: "WARRIOR",
    keywords: "zuole",
  },
  {
    id: "char_485_pallas",
    name: "帕拉斯",
    appellation: "Pallas",
    profession: "WARRIOR",
    keywords: "palasi",
  },
  {
    id: "char_1014_nearl2",
    name: "耀骑士临光",
    appellation: "Nearl the Radiant Knight",
    profession: "WARRIOR",
    keywords: "SP临光,临光SP,yaoqishilinguang,splinguang,linguangsp",
  },
  {
    id: "char_4011_lessng",
    name: "止颂",
    appellation: "Lessing",
    profession: "WARRIOR",
    keywords: "zhisong",
  },
  {
    id: "char_1032_excu2",
    name: "圣约送葬人",
    appellation: "Executor the Ex Foedere",
    profession: "WARRIOR",
    keywords: "SP送葬人,送葬人SP,shengyuesongzangren,spsongzangren,songzangrensp",
  },
  {
    id: "char_4064_mlynar",
    name: "玛恩纳",
    appellation: "Młynar",
    profession: "WARRIOR",
    keywords: "maenna",
  },
  {
    id: "char_230_savage",
    name: "暴行",
    appellation: "Savage",
    profession: "WARRIOR",
    keywords: "baoxing",
  },
  {
    id: "char_282_catap",
    name: "空爆",
    appellation: "Catapult",
    profession: "SNIPER",
    keywords: "kongbao",
  },
  {
    id: "char_283_midn",
    name: "月见夜",
    appellation: "Midnight",
    profession: "WARRIOR",
    keywords: "yuejianye",
  },
  {
    id: "char_137_brownb",
    name: "猎蜂",
    appellation: "Beehunter",
    profession: "WARRIOR",
    keywords: "liefeng",
  },
  {
    id: "char_347_jaksel",
    name: "杰克",
    appellation: "Jackie",
    profession: "WARRIOR",
    keywords: "jieke",
  },
  {
    id: "char_164_nightm",
    name: "夜魔",
    appellation: "Nightmare",
    profession: "CASTER",
    keywords: "yemo",
  },
  {
    id: "char_220_grani",
    name: "格拉尼",
    appellation: "Grani",
    profession: "PIONEER",
    keywords: "gelani",
  },
  {
    id: "char_263_skadi",
    name: "斯卡蒂",
    appellation: "Skadi",
    profession: "WARRIOR",
    keywords: "sikadi",
  },
];
/** 联动角色列表。去掉了不知道为什么加进来的暴雨和集成战略版暮落 */
export const bannedCharList = [
  {
    id: "char_4077_palico",
    name: "泰拉大陆调查团",
    appellation: "Terra Research Commission",
    profession: "SNIPER",
    keywords: "tailadaludiaochatuan,maoche",
  },
  {
    id: "char_4067_lolxh",
    name: "罗小黑",
    appellation: "Luo Xiaohei",
    profession: "WARRIOR",
    keywords: "luoxiaohei",
  },
  {
    id: "char_4125_rdoc",
    name: "医生",
    appellation: "Doc",
    profession: "WARRIOR",
    keywords: "yisheng,doctor",
  },
  {
    id: "char_459_tachak",
    name: "战车",
    appellation: "Tachanka",
    profession: "WARRIOR",
    keywords: "zhanche,lord",
  },
  {
    id: "char_4126_fuze",
    name: "导火索",
    appellation: "Fuze",
    profession: "WARRIOR",
    keywords: "daohuosuo",
  },
  {
    id: "char_1030_noirc2",
    name: "火龙S黑角",
    appellation: "Rathalos S Noir Corne",
    profession: "WARRIOR",
    keywords: "SP黑角,黑角SP,huolongsheijiao,heijiaoSP,spheijiao",
  },
  {
    id: "char_457_blitz",
    name: "闪击",
    appellation: "Blitz",
    profession: "TANK",
    keywords: "shanji",
  },
  {
    id: "char_4019_ncdeer",
    name: "九色鹿",
    appellation: "Nine-Colored Deer",
    profession: "SUPPORT",
    keywords: "jiuselu",
  },
  {
    id: "char_458_rfrost",
    name: "霜华",
    appellation: "Frost",
    profession: "SPECIAL",
    keywords: "shuhanaghua",
  },
  {
    id: "char_4124_iana",
    name: "双月",
    appellation: "Iana",
    profession: "SPECIAL",
    keywords: "shuangyue",
  },
  {
    id: "char_456_ash",
    name: "灰烬",
    appellation: "Ash",
    profession: "SNIPER",
    keywords: "huijin",
  },
  {
    id: "char_1029_yato2",
    name: "麒麟R夜刀",
    appellation: "Kirin R Yato",
    profession: "SPECIAL",
    keywords: "SP夜刀,夜刀SP,qilinryedao,yedapSP,spyedao",
  },
  {
    id: "char_4123_ela",
    name: "艾拉",
    appellation: "Ela",
    profession: "SPECIAL",
    keywords: "aila",
  },
];
/** 区域id列表 */
export const regionList = {
  10: { id: "10", name: "炎", regionIds: ["10", "11a", "11b", "a8"] },
  12: { id: "12", name: "东", regionIds: ["12"] },
  13: { id: "13", name: "乌萨斯", regionIds: ["13", "a9", "b1"] },
  14: { id: "14", name: "萨米", regionIds: ["14", "b2"] },
  15: { id: "15", name: "谢拉格", regionIds: ["15", "b3"] },
  16: { id: "16", name: "哥伦比亚", regionIds: ["16"] },
  17: { id: "17", name: "卡西米尔", regionIds: ["17", "b4"] },
  18: { id: "18", name: "莱塔尼亚", regionIds: ["18"] },
  19: { id: "19", name: "叙拉古", regionIds: ["19a", "19b"] },
  20: { id: "20", name: "维多利亚", regionIds: ["20", "21", "b5"] },
  "01": { id: "01", name: "罗德岛", regionIds: ["01", "a1", "a2"] },
  "02": { id: "02", name: "玻利瓦尔", regionIds: ["02", "a3"] },
  "03": { id: "03", name: "汐斯塔", regionIds: ["03", "a4"] },
  "04": { id: "04", name: "萨尔贡", regionIds: ["04", "a5"] },
  "05": { id: "05", name: "米诺斯", regionIds: ["05"] },
  "06": { id: "06", name: "伊比利亚", regionIds: ["6a", "6b"] },
  "07": { id: "07", name: "阿戈尔", regionIds: ["07"] },
  "08": { id: "08", name: "拉特兰", regionIds: ["08", "a6"] },
  "09": { id: "09", name: "雷姆必拓", regionIds: ["09", "a7"] },
};
/** 构建响应时，为压缩包内的文件设置mimetype */
export const MineTypes = {
  js: "text/javascript;charset=UTF-8",
  css: "text/css",
  html: "text/html;charset=UTF-8",
  mp3: "audio/mpeg",
  png: "image/png",
  jpg: "image/jpeg",
  ico: "image/vnd.microsoft.icon",
  svg: "image/svg+xml",
  woff2: "font/woff2",
  woff: "font/woff",
  ttf: "font/ttf",
  eot: "application/vnd.ms-fontobject",
};
/** 为网页要请求的API设置自定义响应体 */
export const APIMap = {
  /** 通过密码登录 */
  "user/auth/v1/token_by_phone_password": { token: "x-account-token" },
  /** 通过验证码登录 */
  "user/auth/v2/token_by_phone_code": { token: "x-account-token" },
  /** 退出登录 */
  "user/info/v1/logout": null,
  /** 从这个API报告登录状态 */
  "account/info/hg": { content: "x-account-token" },
  /**获取鹰角往通行证信息 */
  "user/info/v1/basic": {
    hgId: "114514",
    phone: "188****8888", //Phone Number
    email: "2*******@qq.com", //Email-Address
    identityNum: "1111**********2222", //ID-Card-Number
    identityName: "博士", //ID-Card-Name-Real
    isMinor: false,
    isLatestUserAgreement: true,
  },
  /** 获取仅可用于特定App的token */
  "user/oauth2/v2/grant": { token: "x-role-token", hgId: "114514" },
  /** 获取通行证绑定的角色列表 */
  "account/binding/v1/binding_list": {
    list: [
      {
        appCode: "arknights",
        appName: "明日方舟",
        bindingList: [
          {
            uid: "1145141919", //InGame-UID
            isOfficial: true,
            isDefault: true,
            channelMasterId: 1,
            channelName: "官服",
            nickName: "博士#2333",
            isDeleted: false,
          },
        ],
      },
    ],
  },
  "account/binding/v1/token_by_uid": { token: "x-role-token" },
  "activity/echoes-of-terra/api/role/login": {},
  "activity/echoes-of-terra/api/activity/roomGuideComplete": {},
  "activity/echoes-of-terra/api/activity/guideComplete": {},
  /** 抽奖。bingo为1视为中奖，为0视为没中奖 */
  "activity/echoes-of-terra/api/activity/draw": { bingo: 1 },
  "activity/echoes-of-terra/api/activity/share": {},
  "activity/echoes-of-terra/api/activity/unlock": {},
  "activity/echoes-of-terra/api/activity/fill": {},
  /** 获取角色信息 */
  "activity/echoes-of-terra/api/role/info": {
    channelId: 1,
    uid: "1145141919",
    name: "博士#2333",
  },
  /** 活动元数据 */
  "activity/echoes-of-terra/api/activity/meta": { startAt: 1714147200, endAt: 1716782400, endFillAt: 1717128000, dailyUnlock: 9, maxUnlock: 18 },
  /** 用户在活动中的数据 */
  "activity/echoes-of-terra/api/activity/info": {
    /** 教程状态。0=尚未开始教程；1=教程PartA完成；2=教程PartB完成*/
    guide: 2,
    /** 是否已分享。0=未分享；1=已分享 */
    share: 1,
    /** 总可解锁次数 */
    totalUnlockCount: 18,
    /** 区域解锁情况 */
    unlockRegions: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    /** 抽奖情况。coupon有4个属性(0, 1, 2, 3)，代表4次抽奖。属性不存在视为该次抽奖机会还没使用；值=0表示未中奖；值=1表示中奖 */
    award: { coupon: { 0: 1, 1: 0, 2: 0, 3: 0 } },
  },
  /** 用户当前角色的游戏数据报告 */
  "activity/echoes-of-terra/api/activity/report": {
    /** 角色创建时间戳 */
    createRoleTs: "1556640000",
    /** 去年（4周年-5周年）在线天数 */
    onlineDayCnt: 366,
    /** 用户行为次数统计（建号以来） */
    userActionTimes: {
      /** 完成战斗次数（去年） */
      battle_finish_times: 10086,
      /** 抽卡次数 */
      gacha_times: 1314,
      /** 任务完成次数（日常周常主线等任务）（去年） */
      mission_confirm_cnt: 8848,
      /** 会客室开party次数（去年） */
      start_infoshare_times: 250,
    },
    /** 最喜爱的助理干员（去年） */
    charSecretaryFavor: {
      charId: "char_002_amiya",
    },
    /** 基建房间进驻情况 */
    roomChar: {
      /** 会客室进驻时间最长干员 */
      meeting_max_time_char: "char_291_aglina",
      /** 会客室进驻时间 */
      meeting_max_time_hour: 7777,
      /** 训练室进驻时间最长干员 */
      training_max_time_char: "char_219_meteo",
      /** 训练室进驻时间 */
      training_max_time_hour: 5555,
    },
    /** 协助训练最长时间干员 */
    roomTrainMaster: {
      assist_train_max_char: "char_113_cqbw",
    },
    /** 加工站统计 */
    workshop: {
      /** 加工站副产品产出次数 */
      add_cnt: 100,
      /** 加工站副产品产出率 */
      add_rate: 0.2,
      /** 加工站加工物品次数 */
      item_cnt: 5000,
    },
    /** 制造站统计 */
    buildSource: {
      /** 制造的源石碎片数量 */
      build_Oshard_add: 5000,
      /** 制造的基础作战记录数量 */
      build_btrecord_add_2001: 0,
      /** 制造的初级作战记录数量 */
      build_btrecord_add_2002: 0,
      /** 制造的中级作战记录数量 */
      build_btrecord_add_2003: 10000,
      /** 未知（可能是贸易站总获取龙门币数量） */
      build_gold_add: 1145141919,
      /** 制造的赤金数量 */
      build_pgold_add: 30000,
    },
    /** 入驻设置统计 */
    roomInWorkshopDormitory: {
      /** 入住宿舍次数最多的干员 */
      dormitory_in_max_char: "char_108_silent",
      /** 上述干员入住宿舍的次数 */
      dormitory_in_max_cnt: 800,
      /** 所有干员入住宿舍的总次数 */
      dormitory_in_sum_cnt: 16000,
      /** 进驻加工站次数最多的干员 */
      workshop_in_max_char: "char_293_thorns",
    },
    furniBuy: {
      /** 购买的家具数量 */
      furni_buy_cnt: 4399,
    },
    rogueTotemUse: {
      /** 萨米肉鸽中，拼合密文板的次数 */
      rogue_totem_use_cnt: 431,
    },
    rogueChaosAdd: {
      /** 累计坍缩值 */
      chaos_add_all: 1000,
    },
    rogueChaosBuff: {
      /** 获得最多次的坍缩范式的次数 */
      max_chaosbuff_e_cnt: 100,
      /** 获得最多次的坍缩范式 */
      max_e_cnt_chaosbuff: "rogue_3_chaos_6_a",
    },
  },
  /** 自定义API: 干员触摸语音设定 */
  "voice-settings": { enable: true, default: "voice", custom: {} },
  "bgm-settings": { random: true, current: "", bgmList: [] },
};
/**
 * 创建一个元素并设置其属性、事件监听器以及子元素。
 * @param {string} tagName - 要创建的元素的标签名。
 * @param {Object} attrs - 元素的属性对象，键值对形式，键为属性名，值为属性值。可不存在
 * @param {Object} linteners - 元素的事件监听器对象，键值对形式，键为事件类型，值为对应的处理函数。可不存在，但如果要要添加事件监听器，则需要提供一个空对象。
 * @param {Array} children - 元素的子元素数组，可以是其他元素、文本节点等。
 * @returns {HTMLElement} - 元素。
 */
export function html(tagName, ...args) {
  let [attrs = {}, listeners = {}, ...children] = args;
  const element = document.createElement(tagName);
  const ifELem = [];
  // 检测attrs和listeners是否是元素或文本节点，如果是，将其放入children数组
  if (attrs instanceof HTMLElement || typeof attrs === "string") {
    ifELem.push(attrs);
    attrs = {};
  }
  if (listeners instanceof HTMLElement || typeof listeners === "string") {
    ifELem.push(listeners);
    listeners = {};
  }
  children.unshift(...ifELem);
  // 处理attrs
  for (const attrName in attrs) {
    if (typeof attrName !== "string" || typeof attrs[attrName] === "undefined") continue;
    element.setAttribute(attrName, attrs[attrName]);
  }
  // 处理listeners
  for (const eventName in listeners) {
    if (typeof eventName !== "string") continue;
    element.addEventListener(eventName, listeners[eventName]);
  }
  // 添加children
  for (const child of children.filter((i) => i)) {
    element.append(child);
  }
  return element;
}
/** 对话框 */
export class Dialog {
  /** 对话框元素 */
  dialog;
  /** 用后自动销毁 */
  once = false;
  /**
   * 构建对话框
   * @param {string} title 对话框标题
   * @param  {...HTMLElement} contentElem 对话框主体元素
   */
  constructor(title, ...contentElem) {
    this.dialog = html(
      "dialog",
      {},
      {
        cancel: () => this.close("cancel"),
        click: (e) => e.target == this.dialog && this.close("cancel"),
        contextmenu: (e) => e.preventDefault(),
      },
      html("div", html("div", { class: "dialog-title" }, title), html("div", { class: "dialog-content" }, {}, ...contentElem), html("div", { class: "dialog-footer" }))
    );
    this.buttons(); //设置默认按钮
    document.body.append(this.dialog);
  }
  /**
   * 添加按钮
   * @param {*} buttons 键值对形式，键为按下该按钮时会触发的事件名，值是按钮的文本名称
   */
  buttons(buttons = { ok: "确定", cancel: "取消" }) {
    const footer = this.dialog.querySelector(".dialog-footer");
    footer.innerHTML = ""; //清空原有按钮
    for (const btn in buttons) {
      const btnElem = html("button", { class: "pseudo" }, buttons[btn]);
      btnElem.addEventListener("click", () => this.close(btn)); //按下按钮时关闭对话框，并传递按钮对应的事件名称
      footer.append(btnElem);
    }
    return this;
  }
  /**
   * 修改对话框内容,并可选地修改对话框标题与内容
   * @param {*} title 新的标题
   * @param  {...any} contentElem 新的对话框主体
   */
  show(title, ...contentElem) {
    const content = this.dialog.querySelector(".dialog-content");
    title && (this.dialog.querySelector(".dialog-title").innerText = title);
    if (contentElem.length > 0) {
      content.innerHTML = "";
      content.append(...contentElem);
    }
    this.dialog.showModal();
  }
  /**
   * 显示一个确认框。会强制使用默认按钮。
   * @param  {...any} args 同 show() 的参数
   * @returns
   */
  confirm(...args) {
    return new Promise((resolve) => {
      this.buttons();
      this.on("ok", () => resolve(true));
      this.on("cancel", () => resolve(false));
      this.show(...args);
    });
  }
  /**
   * 关闭对话框。可以显式调用此方法并传入自定义事件名，触发监听该事件的回调，而不修改对话框按钮
   * @param {} returnValue 对话框关闭时返回的值
   */
  close(returnValue) {
    this.dialog.close(returnValue);
  }
  /**
   * 监听按钮事件。实际上是监听对话框关闭事件
   * @param {*} eventName 事件名称，实际上是对话框关闭时的returnValue。默认是ok和cancel（通过默认的 buttons() 方法设置）
   * @param {*} callbackFunc 回调
   */
  on(eventName, callbackFunc) {
    let callbackClose = (e) => {
      const result = this.dialog.returnValue;
      this.dialog.removeEventListener("close", callbackClose);
      try {
        result == eventName && callbackFunc(e);
      } catch (e) {
        console.error("Error on handling dialog Event:", e);
      }
      if (this.once) {
        this.remove();
      }
    };
    this.dialog.addEventListener("close", callbackClose);
    return this;
  }
  /** 移除对话框 */
  remove() {
    this.dialog.remove();
  }
  /**
   * 对this.dialog.querySelectorAll和querySelector的包装
   * @param {*} selector 选择器
   * @param {boolean} isAll 是否用querySelectorAll
   * @returns
   */
  $(selector, isAll = false) {
    if (isAll) return this.dialog.querySelectorAll(selector);
    return this.dialog.querySelector(selector);
  }
}
