export function HeroSection() {
  return (
    <section
      id="cover"
      className="relative overflow-hidden border-b border-line px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="absolute right-8 top-8 hidden h-28 w-28 rotate-6 border border-line bg-note/70 shadow-note lg:block" />
      <p className="mb-6 font-serif text-sm text-muted">Internal Skill Notebook / v1.0</p>
      <div className="max-w-4xl">
        <h1 className="font-serif text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
          品牌广告概念导演
          <span className="block">Skill 使用手册</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          用于布料、面料、服装类客户的前期提案：整理客户定位，生成克制高级的 TVC 创意方向、概念图预览、故事板和可直接测试的 AI Prompt。
        </p>
      </div>
      <div className="mt-12 grid gap-4 border-t border-line pt-8 text-sm text-muted sm:grid-cols-3">
        <div>
          <span className="block font-serif text-2xl text-ink">01</span>
          先分析品牌调性，不直接堆镜头。
        </div>
        <div>
          <span className="block font-serif text-2xl text-ink">02</span>
          默认 3 个方向，优先展开最适合测试的方案。
        </div>
        <div>
          <span className="block font-serif text-2xl text-ink">03</span>
          输出能直接用于 GPT-image-2 和 Seedance 2.0。
        </div>
      </div>
    </section>
  );
}
