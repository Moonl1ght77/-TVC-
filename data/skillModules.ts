export type SkillModule = {
  id: string;
  title: string;
  description: string;
};

export const skillModules: SkillModule[] = [
  {
    id: "positioning",
    title: "客户定位分析",
    description: "判断产品是什么、卖给谁、价格带如何，以及适合用什么品牌气质表达。"
  },
  {
    id: "concept",
    title: "创意方向生成",
    description: "默认输出 3 个简洁高级的方案，并推荐最适合优先测试的方向。"
  },
  {
    id: "preview",
    title: "概念图预览",
    description: "为角色板、主体板、故事板和 Key Visual 准备可复制的测试 Prompt。"
  },
  {
    id: "video",
    title: "视频测试提示词",
    description: "把已确认的画面方向整理为 Seedance 2.0 的 8 秒或 15 秒视频 Prompt。"
  }
];
