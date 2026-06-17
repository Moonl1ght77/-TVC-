import { PromptBlock } from "@/components/PromptBlock";
import type { PromptStandard } from "@/data/promptTemplates";

type PromptStandardCardProps = {
  standard: PromptStandard;
};

export function PromptStandardCard({ standard }: PromptStandardCardProps) {
  const outputStructure = standard.outputFields.map((field) => `- ${field}`).join("\n");

  return (
    <article className="space-y-5 border border-line bg-[#fbf7ef] p-6">
      <div>
        <p className="font-serif text-sm text-cinnabar">{standard.tool}</p>
        <h3 className="mt-2 font-serif text-3xl text-ink">{standard.title}</h3>
        <p className="mt-3 leading-7 text-muted">{standard.description}</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {standard.outputFields.map((field) => (
          <span key={field} className="border border-line bg-paper px-3 py-2 text-sm text-muted">
            {field}
          </span>
        ))}
      </div>

      <PromptBlock
        title={`${standard.tool} 输出结构`}
        description="用于审核 Skill 自动生成的 prompt 是否漏字段。"
        content={outputStructure}
        copyLabel="复制输出结构"
      />

      <PromptBlock
        title={`${standard.tool} 示例 prompt`}
        description="示例只用于理解最终输出长什么样，正式工作流仍由 Skill 自动生成。"
        content={standard.examplePrompt}
        copyLabel="复制示例 prompt"
      />

      <PromptBlock
        title={`${standard.tool} 备用模板`}
        description="仅在没有 Skill 可用时展开参考，不建议作为主流程手动填写。"
        content={standard.backupTemplate}
        copyLabel="复制备用模板"
        defaultOpen={false}
      />
    </article>
  );
}
