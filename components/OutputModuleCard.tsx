import type { OutputModule } from "@/data/outputModules";

type OutputModuleCardProps = {
  module: OutputModule;
};

export function OutputModuleCard({ module }: OutputModuleCardProps) {
  return (
    <article className="border-t border-line py-6">
      <h3 className="font-serif text-2xl text-ink">{module.title}</h3>
      <p className="mt-3 leading-7 text-muted">{module.purpose}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {module.includes.map((item) => (
          <li key={item} className="border border-line bg-paper px-3 py-1 text-sm text-muted">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
