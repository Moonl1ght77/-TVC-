export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
  check: string;
};

export const workflowSteps: WorkflowStep[] = [
  {
    id: "collect",
    title: "整理客户信息",
    description: "把零散需求收束为产品类别、用途、价格带、目标客户、比例、时长、Logo 和人物需求。",
    check: "信息不完整时先标注自动假设，不停止产出。"
  },
  {
    id: "position",
    title: "判断品牌调性",
    description: "先判断产品卖给谁、价格带是什么、适合什么空间、光线和镜头语言。",
    check: "每个方向都能解释为什么适合这个客户。"
  },
  {
    id: "directions",
    title: "生成 3 个创意方向",
    description: "默认给出 3 个克制、清晰、可测试的 TVC 概念方向。",
    check: "推荐最适合优先测试的 1 个方案。"
  },
  {
    id: "preview",
    title: "输出概念图预览",
    description: "为角色板或主体板、故事板、Key Visual 分别准备可复制的图像提示词。",
    check: "先测主效果图，再测故事板。"
  },
  {
    id: "video",
    title: "生成视频测试 Prompt",
    description: "把确认过的画面方向整理为 Seedance 2.0 的 8 秒或 15 秒视频提示词。",
    check: "镜头少、动作轻、节奏安静，避免快剪和复杂转场。"
  }
];
