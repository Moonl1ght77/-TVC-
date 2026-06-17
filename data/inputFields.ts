export type InputField = {
  key: string;
  label: string;
  description: string;
  example: string;
  required: boolean;
};

export const inputFields: InputField[] = [
  {
    key: "productType",
    label: "产品类别",
    description: "判断是布料、面料还是服装，决定画面重点。",
    example: "面料",
    required: true
  },
  {
    key: "usage",
    label: "产品用途",
    description: "说明产品用于家居、服饰、户外、独立站 Banner 或详情页。",
    example: "春夏女装轻薄外套面料",
    required: true
  },
  {
    key: "priceBand",
    label: "价格带",
    description: "帮助判断广告是否应该更高级、亲和、专业或生活方式化。",
    example: "中高端",
    required: false
  },
  {
    key: "audience",
    label: "目标客户",
    description: "明确卖给品牌方、设计师、批发客户还是终端消费者。",
    example: "服装设计工作室和中高端女装品牌",
    required: true
  },
  {
    key: "style",
    label: "风格偏好",
    description: "记录客户希望靠近的气质，也记录不适合的方向。",
    example: "自然光、克制、留白、不要工厂宣传片感",
    required: false
  },
  {
    key: "format",
    label: "比例与时长",
    description: "默认 9:16 竖屏，默认同时给 8 秒和 15 秒版本。",
    example: "9:16，8 秒优先",
    required: false
  },
  {
    key: "logo",
    label: "Logo 处理",
    description: "判断开头、结尾、全程弱露出、场景植入或暂不出现。",
    example: "结尾弱露出",
    required: false
  },
  {
    key: "people",
    label: "是否有人物",
    description: "决定输出角色板还是主体板。",
    example: "有人物，30 岁左右女性，安静自然",
    required: false
  }
];
