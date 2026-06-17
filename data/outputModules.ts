export type OutputModule = {
  id: string;
  title: string;
  purpose: string;
  includes: string[];
};

export const outputModules: OutputModule[] = [
  {
    id: "analysis",
    title: "客户定位分析",
    purpose: "先判断品牌气质，避免直接堆镜头或堆形容词。",
    includes: ["产品是什么", "卖给谁", "价格带", "适合与不适合的方向", "空间、光线、镜头语言"]
  },
  {
    id: "concepts",
    title: "3 个创意方案",
    purpose: "给客户可选择的前期方向，而不是只给一个单点想法。",
    includes: ["方案名称", "一句话概念", "画面关键词", "推荐空间", "Logo 呈现建议"]
  },
  {
    id: "scripts",
    title: "8 秒 / 15 秒脚本",
    purpose: "把概念变成可测试的视频结构。",
    includes: ["时间段", "镜头数量", "主体动作", "空场景跳切", "收束方式"]
  },
  {
    id: "prompts",
    title: "AI 生成提示词",
    purpose: "让图像和视频测试可以直接复制执行。",
    includes: ["角色板或主体板", "故事板", "Key Visual", "GPT-image-2 Prompt", "Seedance 2.0 Prompt"]
  }
];
