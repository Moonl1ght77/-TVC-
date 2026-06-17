import type { CaseExample } from "@/data/caseExamples";

type CaseStudyCardProps = {
  example: CaseExample;
};

export function CaseStudyCard({ example }: CaseStudyCardProps) {
  return (
    <article className="border border-line bg-[#fbf7ef] p-6">
      <p className="mb-3 w-fit border border-line px-2 py-1 text-xs text-cinnabar">
        {example.productType}
      </p>
      <h3 className="font-serif text-2xl text-ink">{example.title}</h3>
      <p className="mt-4 leading-7 text-muted">{example.clientProfile}</p>
      <p className="mt-4 border-l-2 border-moss pl-4 text-ink">{example.concept}</p>
      <ol className="mt-5 space-y-2 text-sm text-muted">
        {example.workflow.map((step, index) => (
          <li key={step}>
            {index + 1}. {step}
          </li>
        ))}
      </ol>
      <p className="mt-5 bg-paper px-4 py-3 text-sm leading-6 text-moss">测试方法：{example.testMethod}</p>
    </article>
  );
}
