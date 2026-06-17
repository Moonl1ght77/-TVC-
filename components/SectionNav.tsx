export type NavItem = {
  id: string;
  label: string;
};

type SectionNavProps = {
  items: NavItem[];
};

export function SectionNav({ items }: SectionNavProps) {
  return (
    <nav className="sticky top-0 z-20 max-w-full overflow-hidden border-b border-line bg-paper/95 px-4 py-3 backdrop-blur lg:top-6 lg:border-b-0 lg:bg-transparent lg:px-0 lg:py-0">
      <div className="flex max-w-full gap-2 overflow-x-auto lg:block lg:space-y-2">
        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex shrink-0 items-center gap-3 rounded-sm border border-line bg-[#fbf7ef] px-3 py-2 text-sm text-muted transition hover:border-ink hover:text-ink lg:bg-transparent"
          >
            <span className="font-serif text-xs text-cinnabar">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
