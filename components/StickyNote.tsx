type StickyNoteProps = {
  title: string;
  children: React.ReactNode;
};

export function StickyNote({ title, children }: StickyNoteProps) {
  return (
    <aside className="rotate-[-0.6deg] border border-[#e1c86c] bg-note p-5 shadow-note">
      <h3 className="mb-3 font-serif text-xl text-ink">{title}</h3>
      <div className="text-sm leading-7 text-[#5d5336]">{children}</div>
    </aside>
  );
}
