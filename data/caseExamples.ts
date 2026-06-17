export type CaseExample = {
  id: string;
  productType: "布料" | "面料" | "服装";
  title: string;
  clientProfile: string;
  concept: string;
  workflow: string[];
  testMethod: string;
};

export const caseExamples: CaseExample[] = [
  {
    id: "fabric-gallery",
    productType: "布料",
    title: "自然垂落的布料主视觉",
    clientProfile: "面向设计师和软装品牌，价格带偏中高端，需要比工厂宣传片更有品牌感。",
    concept: "让布料像空间里的安静雕塑，靠垂坠、光影和留白体现高级感。",
    workflow: ["先生成主体板", "测试单张 Key Visual", "再扩展 8 秒轻风版本", "最后补 15 秒故事板"],
    testMethod: "优先测试布料垂落和自然光是否稳定，再测试轻微风动。"
  },
  {
    id: "textile-window",
    productType: "面料",
    title: "窗边触感故事板",
    clientProfile: "春夏女装面料，强调轻盈、透气、亲肤，目标客户是女装品牌和买手。",
    concept: "用一只手触碰面料和窗边自然光，表达舒适而不是硬卖功能。",
    workflow: ["先做触感近景", "生成 5 格故事板", "筛选最稳定的手部镜头", "转 Seedance 2.0 测 8 秒"],
    testMethod: "先测手和面料接触是否自然，避免塑料感和过度理工展示。"
  },
  {
    id: "clothing-walk",
    productType: "服装",
    title: "安静行走的版型短片",
    clientProfile: "中高端基础款服装，强调版型、人物气质和日常穿着状态。",
    concept: "人物在真实空间里自然行走，衣服通过停顿、转身和衣摆细节被看见。",
    workflow: ["先定角色板", "生成中远景穿着效果", "补袖口和衣摆细节", "测试 15 秒版本"],
    testMethod: "先测人物气质和版型轮廓，再测镜头运动，不先追求复杂剧情。"
  }
];
