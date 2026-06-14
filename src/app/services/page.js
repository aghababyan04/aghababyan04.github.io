'use client';
import './globals.css'

export default function ServicesPage() {
  const capabilities = [
    { title: "Brand Strategy", desc: "Market research, competitor analysis, brand positioning, and core messaging architecture." },
    { title: "Visual Identity", desc: "Bespoke logo design, color theory curation, typography systems, and comprehensive brand books." },
    { title: "Web Design (UI/UX)", desc: "High-end digital experiences, interactive wireframes, and responsive layout designs in Figma." },
    { title: "Development", desc: "Clean, fast, and SEO-optimized production code using modern technologies like Next.js." },
    { title: "Creative Direction", desc: "Curation of photography styles, editorial layouts, and storytelling for digital campaigns." },
    { title: "Print & Packaging", desc: "Premium business cards, editorial design, luxury hangtags, and bespoke box packaging." }
  ];

  const steps = [
    { phase: "01", title: "Discovery & Strategy", body: "We deep-dive into your brand's vision, target audience, and business goals to build a foolproof strategic map." },
    { phase: "02", title: "Design Concepts", body: "We translate strategy into visuals, presenting you with refined design directions, mood boards, and typography concepts." },
    { phase: "03", title: "Refinement", body: "Collaboratively, we polish the chosen concept to absolute perfection, ensuring every line and pixel speaks your brand's truth." },
    { phase: "04", title: "Global Launch", body: "We deliver all source assets neatly organized, or deploy your custom digital experience, ready to captivate the market." }
  ];

  return (
    <main className="services-main">
      {/* Hero Header */}
      <section className="services-hero">
        <span className="services-sub-title">CAPABILITIES</span>
        <h1 className="services-main-title">Crafting Premium Digital Solutions</h1>
        <p className="services-hero-description">
          We bridge the gap between creative artistry and business strategy. Explore our specialized 
          capabilities and discover how we transform ideas into long-lasting brand legacies.
        </p>
      </section>

      <hr className="services-separator" />

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-grid">
          {capabilities.map((item, index) => (
            <div key={index} className="capability-item">
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section (The Steps) */}
      <section className="services-process-section">
        <div className="process-header">
          <span className="process-tag">HOW WE WORK</span>
          <h2 className="process-main-title">The Creative Process</h2>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <span className="step-phase">{step.phase}</span>
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}