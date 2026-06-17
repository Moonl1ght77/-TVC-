export type VersionLogItem = {
  version: string;
  date: string;
  changes: string[];
};

export const versionLogs: VersionLogItem[] = [
  {
    version: "v1.0",
    date: "2026-06-17",
    changes: ["建立内部 Skill 使用手册", "整理输入输出规则", "加入 GPT-image-2 与 Seedance 2.0 模板", "补充案例流程和测试方法"]
  },
  {
    version: "v0.2",
    date: "2026-06-16",
    changes: ["明确三类产品：布料、面料、服装", "补充默认负向限制", "强化少镜头和自然光原则"]
  },
  {
    version: "v0.1",
    date: "2026-06-15",
    changes: ["初版 Skill 工作流", "默认 3 个创意方案", "默认支持 8 秒和 15 秒脚本"]
  }
];
