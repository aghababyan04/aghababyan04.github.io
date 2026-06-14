'use client';
import './globals.css'

export default function AboutPage() {
  return (
    <main className="about-main">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text-container">
          <span className="about-sub-title">THE STUDIO</span>
          <h1 className="about-main-title">Bespoke Aesthetics & Mindful Branding</h1>
          <p className="about-hero-description">
            We believe that powerful design is rooted in purpose. Noé Design Studio crafts 
            visual identities and seamless digital experiences for visionary brands worldwide.
          </p>
        </div>
        <div className="about-hero-image-grid">
          <div className="about-big-image"></div>
          <div className="about-small-image"></div>
        </div>
      </section>

      <hr className="about-separator" />

      {/* Philosophy Section */}
      <section className="about-philosophy-section">
        <div className="about-section-left">
          <h2 className="about-section-number">01 / PHILOSOPHY</h2>
          <h3 className="about-philosophy-quote">
            "Design is not just what it looks like and feels like. Design is how it works."
          </h3>
        </div>
        <div className="about-section-right">
          <p>
            Our approach is deeply collaborative and strategic. We don’t just build logos; 
            we build narratives. Every typography choice, color palette, and interface pixel 
            is meticulously curated to evoke emotion and establish authority.
          </p>
          <p>
            Whether you are an emerging founder or an established brand, we transform your 
            core values into a compelling visual language that resonates with your audience 
            and drives growth.
          </p>
        </div>
      </section>

      {/* Manifest Block */}
      <section className="about-manifest-banner">
        <div className="about-manifest-overlay"></div>
        <div className="about-manifest-content">
          <span className="about-manifest-tag">OUR VISION</span>
          <h2>Crafting Legacies, Not Trends.</h2>
        </div>
      </section>
    </main>
  );
}