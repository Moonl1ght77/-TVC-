import type { InputField } from "@/data/inputFields";

type InputFieldCardProps = {
  field: InputField;
};

export function InputFieldCard({ field }: InputFieldCardProps) {
  return (
    <article className="border border-line bg-[#fbf7ef] p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">{field.label}</h3>
        <span className="shrink-0 border border-line px-2 py-1 text-xs text-muted">
          {field.required ? "必填" : "可选"}
        </span>
      </div>
      <p className="leading-7 text-muted">{field.description}</p>
      <p className="mt-4 border-l-2 border-cinnabar pl-3 text-sm text-ink">例：{field.example}</p>
    </article>
  );
}
