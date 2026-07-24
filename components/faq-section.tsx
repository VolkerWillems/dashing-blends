export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({
  eyebrow = "Veelgestelde vragen",
  title,
  introduction,
  items,
}: {
  eyebrow?: string;
  title: string;
  introduction?: string;
  items: FaqItem[];
}) {
  return (
    <section className="section-shell py-20 sm:py-24 lg:py-28" aria-labelledby="faq-heading">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="fade-up">
          <p className="eyebrow-copy text-secondary">{eyebrow}</p>
          <h2 id="faq-heading" className="display-copy mt-6 text-4xl sm:text-6xl xl:text-7xl">
            {title}
          </h2>
        </div>
        {introduction ? (
          <p className="fade-up max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:justify-self-end">
            {introduction}
          </p>
        ) : null}
      </div>

      <div className="motion-grid mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.question} className="subtle-panel motion-surface p-7 sm:p-9">
            <p className="display-copy text-4xl text-primary/55">0{index + 1}</p>
            <h3 className="mt-6 text-xl font-bold leading-snug text-foreground sm:text-2xl">{item.question}</h3>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
