'use client';
import './globals.css'

export default function ProductsPage() {
  const products = [
    {
      id: "01",
      title: "Essential Branding",
      price: "$3,500",
      description: "Perfect for emerging brands seeking a distinctive and powerful visual foundation.",
      features: [
        "Brand Strategy & Positioning",
        "Primary & Secondary Logo Design",
        "Curated Color Palette",
        "Typography Guidelines",
        "Basic Brand Book (PDF)"
      ]
    },
    {
      id: "02",
      title: "Digital Presence",
      price: "$5,000",
      description: "Tailored for businesses needing a seamless, high-converting digital aesthetic.",
      features: [
        "Bespoke Web Design (Up to 5 pages)",
        "Fully Responsive Layout",
        "Seamless UX/UI Architecture",
        "Basic SEO Optimization",
        "Figma Source Files Delivery"
      ]
    },
    {
      id: "03",
      title: "The Noé Experience",
      price: "$8,500",
      description: "Our signature full-service package from conceptualization to global digital launch.",
      features: [
        "Complete Brand Identity Suite",
        "Full Custom Website (Next.js/Figma)",
        "Premium Brand Storytelling",
        "Custom Iconography & Assets",
        "1 Month Post-Launch Support"
      ]
    }
  ];

  return (
    <main className="products-main">
      {/* Title Section */}
      <section className="products-hero">
        <span className="products-sub-title">OUR OFFERINGS</span>
        <h1 className="products-main-title">Bespoke Design Packages</h1>
        <p className="products-hero-description">
          Transparent pricing for premium, long-lasting digital solutions. Select a package 
          that aligns with your studio's vision or get in touch for a custom quote.
        </p>
      </section>

      <hr className="products-separator" />

      {/* Products Grid Section */}
      <section className="products-grid-section">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-header">
                <span className="product-number">{product.id}</span>
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">{product.price}</span>
              </div>
              
              <p className="product-description">{product.description}</p>
              
              <hr className="card-inner-line" />
              
              <div className="product-features-block">
                <span className="features-title">WHAT'S INCLUDED:</span>
                <ul className="product-features-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-card-footer">
                <button className="product-btn">INQUIRE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}