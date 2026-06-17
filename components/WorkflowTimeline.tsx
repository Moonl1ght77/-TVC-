import type { WorkflowStep } from "@/data/workflowSteps";

type WorkflowTimelineProps = {
  steps: WorkflowStep[];
};

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <div className="space-y-5">
      {steps.map((step, index) => (
        <article key={step.id} className="grid gap-4 border-l border-line pl-5 sm:grid-cols-[120px_1fr]">
          <div className="font-serif text-3xl text-cinnabar">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="border-b border-line pb-5">
            <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 leading-7 text-muted">{step.description}</p>
            <p className="mt-3 text-sm text-moss">验证：{step.check}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
