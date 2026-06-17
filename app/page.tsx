import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { InputFieldCard } from "@/components/InputFieldCard";
import { OutputModuleCard } from "@/components/OutputModuleCard";
import { PromptStandardCard } from "@/components/PromptStandardCard";
import { SectionNav, type NavItem } from "@/components/SectionNav";
import { StickyNote } from "@/components/StickyNote";
import { VersionLog } from "@/components/VersionLog";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { caseExamples } from "@/data/caseExamples";
import { faqItems } from "@/data/faqItems";
import { inputFields } from "@/data/inputFields";
import { outputModules } from "@/data/outputModules";
import { promptStandards } from "@/data/promptTemplates";
import { skillModules } from "@/data/skillModules";
import { versionLogs } from "@/data/versionLogs";
import { workflowSteps } from "@/data/workflowSteps";

const navItems: NavItem[] = [
  { id: "cover", label: "封面" },
  { id: "start", label: "启动 Skill" },
  { id: "what", label: "Skill 是什么" },
  { id: "workflow", label: "使用流程" },
  { id: "inputs", label: "输入说明" },
  { id: "outputs", label: "输出说明" },
  { id: "principles", label: "风格原则" },
  { id: "preview", label: "概念图预览" },
  { id: "prompts", label: "Prompt 输出标准" },
  { id: "cases", label: "实战案例" },
  { id: "faq", label: "FAQ" },
  { id: "versions", label: "更新记录" }
];

function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-serif text-sm uppercase tracking-[0.18em] text-cinnabar">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-8 text-muted">{children}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[1480px] px-4 py-4 sm:px-6 lg:py-8">
      <div className="paper-panel border border-line shadow-paper">
        <HeroSection />

        <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[250px_1fr] lg:px-14">
          <aside className="min-w-0 lg:block">
            <SectionNav items={navItems} />
          </aside>

          <div className="min-w-0 space-y-24">
            <section id="start" className="section-anchor">
              <SectionHeading eyebrow="Start" title="怎么启动这个 Skill">
                这是手册的第一步。正式使用时，不需要先翻 Prompt 模板，也不需要自己写长提示词，先把客户信息交给 Skill。
              </SectionHeading>
              <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                <div className="border border-line bg-[#fbf7ef] p-6">
                  <h3 className="font-serif text-3xl text-ink">启动句式</h3>
                  <div className="mt-5 border-l-2 border-cinnabar pl-5 text-lg leading-9 text-muted">
                    <p>使用 my-brand-film-director Skill。</p>
                    <p>以下是客户信息，请先整理输入字段，判断品牌调性，再输出 3 个创意方向。</p>
                    <p>最后推荐最适合优先测试的方案，并生成 GPT-image-2 和 Seedance 2.0 prompt。</p>
                  </div>
                  <div className="mt-6 bg-paper px-4 py-4 text-sm leading-7 text-muted">
                    <p>需要粘贴给 Skill 的信息：产品类别、用途、价格带、目标客户、风格偏好、输出比例、时长、Logo、是否有人物、参考风格。</p>
                  </div>
                </div>
                <StickyNote title="内部使用提醒">
                  在 Codex 里可以直接点名或引用这个 Skill：
                  <br />
                  <span className="mt-3 block break-all font-mono text-xs">
                    C:\Users\Moonl1ght7\.agents\skills\my-brand-film-director\SKILL.md
                  </span>
                  <br />
                  启动后只负责补充客户信息和测试反馈，prompt 由 Skill 自动生成。
                </StickyNote>
              </div>
            </section>

            <section id="what" className="section-anchor">
              <SectionHeading eyebrow="Definition" title="Skill 是什么">
                它不是成片导演阐述生成器，而是前期提案和 AI 测试助手。目标是把客户信息快速整理成能看、能测、能继续迭代的品牌广告概念。
              </SectionHeading>
              <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                <div className="space-y-5 text-lg leading-9 text-muted">
                  <p>
                    适用产品包括布料、面料和服装。Skill 会先判断产品属性、目标客户、价格带和品牌气质，再输出简洁高级的 TVC 创意方向。
                  </p>
                  <p>
                    默认输出 3 个创意方案，并同时考虑 8 秒和 15 秒版本。第一次测试时，优先完整展开最推荐的一个方案，避免把精力分散到过多方向。
                  </p>
                </div>
                <StickyNote title="工作边界">
                  这是内部使用手册，不是商业官网。第一版只负责展示流程、规则、输出标准、案例和测试方法。
                </StickyNote>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {skillModules.map((module) => (
                  <article key={module.id} className="border-t border-line pt-4">
                    <h3 className="font-serif text-2xl text-ink">{module.title}</h3>
                    <p className="mt-2 leading-7 text-muted">{module.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="workflow" className="section-anchor">
              <SectionHeading eyebrow="Workflow" title="使用流程">
                从客户信息到视频测试，核心是先收束判断，再逐步展开，不在信息不完整时停住。
              </SectionHeading>
              <WorkflowTimeline steps={workflowSteps} />
            </section>

            <section id="inputs" className="section-anchor">
              <SectionHeading eyebrow="Inputs" title="输入说明">
                输入字段越清楚，方案越稳定。信息不完整时可以先自动假设，但需要把假设写出来。
              </SectionHeading>
              <div className="grid gap-4 md:grid-cols-2">
                {inputFields.map((field) => (
                  <InputFieldCard key={field.key} field={field} />
                ))}
              </div>
            </section>

            <section id="outputs" className="section-anchor">
              <SectionHeading eyebrow="Outputs" title="输出说明">
                输出应当能让使用者快速脑补画面，并直接进入测图和测视频，而不是停留在抽象形容词。
              </SectionHeading>
              <div>
                {outputModules.map((module) => (
                  <OutputModuleCard key={module.id} module={module} />
                ))}
              </div>
            </section>

            <section id="principles" className="section-anchor">
              <SectionHeading eyebrow="Style" title="风格原则">
                总原则是越简单越高级。画面靠空间、光线、人物状态和轻动作建立品牌感，不靠堆镜头、堆特效或堆 AI 大片感。
              </SectionHeading>
              <div className="grid gap-5 md:grid-cols-2">
                <StickyNote title="优先追求">
                  简单、高级、舒适、克制、留白、自然光、画面呼吸感、真实空间感、少镜头但有效。
                </StickyNote>
                <StickyNote title="默认避免">
                  快剪、复杂转场、电商主图感、廉价短视频感、工厂宣传片感、过度 AI 大片感、背景杂乱。
                </StickyNote>
              </div>
            </section>

            <section id="preview" className="section-anchor">
              <SectionHeading eyebrow="Preview" title="概念图预览模块">
                概念图不是为了做漂亮图集，而是为了确认主体、空间、光线和品牌气质是否可继续进入视频测试。
              </SectionHeading>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["角色板 / 主体板", "有人物时定角色气质；无人时定产品主体、材质状态和视觉主角位置。"],
                  ["故事板", "用气质型分镜呈现开场、主体出现、轻动作、细节和收束。"],
                  ["Key Visual", "提前看到成片大概效果，至少输出主效果图和辅助效果图 Prompt。"]
                ].map(([title, text]) => (
                  <article key={title} className="border border-line bg-[#fbf7ef] p-6">
                    <h3 className="font-serif text-2xl text-ink">{title}</h3>
                    <p className="mt-4 leading-7 text-muted">{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="prompts" className="section-anchor">
              <SectionHeading eyebrow="Standards" title="Prompt 输出标准">
                这些不是给你手填的模板，而是 Skill 自动生成 prompt 时遵循的输出标准。
              </SectionHeading>

              <div className="space-y-6">
                <article className="border border-line bg-note p-6 shadow-note">
                  <p className="font-serif text-sm uppercase tracking-[0.18em] text-cinnabar">
                    Skill 自动生成
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-ink">主流程不是填模板，而是启动 Skill</h3>
                  <p className="mt-4 max-w-3xl leading-8 text-[#5d5336]">
                    用户只需要输入客户信息，Skill 会自动生成完整 prompt。my-brand-film-director Skill 会自动完成方案判断、概念展开，并生成完整的 GPT-image-2 prompt 和 Seedance 2.0 prompt。
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-sm text-[#5d5336]">
                    {["客户信息", "启动 Skill", "Skill 生成方案", "Skill 生成 prompt", "复制去 GPT-image-2 / Seedance 2.0 测试"].map(
                      (step, index) => (
                        <span key={step} className="border border-[#e1c86c] bg-[#fff8ce] px-3 py-2">
                          {index + 1}. {step}
                        </span>
                      )
                    )}
                  </div>
                </article>

                <div className="grid gap-5 md:grid-cols-2">
                  <article className="border border-line bg-[#fbf7ef] p-6">
                    <p className="font-serif text-sm text-cinnabar">错误方式</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">自己手动填长模板</h3>
                    <p className="mt-3 leading-7 text-muted">
                      容易漏字段、逻辑不连贯，也会把工作重心从“判断品牌方向”变成“机械填空”。
                    </p>
                  </article>
                  <article className="border border-moss bg-[#f4f6ef] p-6">
                    <p className="font-serif text-sm text-moss">正确方式</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">把客户信息给 Skill</h3>
                    <p className="mt-3 leading-7 text-muted">
                      让 Skill 自动生成完整 prompt，再用下面的输出结构检查是否完整、是否适合测试。
                    </p>
                  </article>
                </div>

                <div className="space-y-8">
                  {promptStandards.map((standard) => (
                    <PromptStandardCard key={standard.id} standard={standard} />
                  ))}
                </div>
              </div>
            </section>

            <section id="cases" className="section-anchor">
              <SectionHeading eyebrow="Cases" title="实战案例">
                案例只展示流程骨架，便于内部复用。正式提案时再根据客户信息补完整方案。
              </SectionHeading>
              <div className="grid gap-5 lg:grid-cols-3">
                {caseExamples.map((example) => (
                  <CaseStudyCard key={example.id} example={example} />
                ))}
              </div>
            </section>

            <section id="faq" className="section-anchor">
              <SectionHeading eyebrow="FAQ" title="常见问题">
                把容易跑偏的地方提前写清楚，减少重复解释。
              </SectionHeading>
              <FAQSection items={faqItems} />
            </section>

            <section id="versions" className="section-anchor pb-10">
              <SectionHeading eyebrow="Changelog" title="更新记录">
                手册和 Skill 可以一起演进，先保持轻量记录。
              </SectionHeading>
              <VersionLog logs={versionLogs} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
