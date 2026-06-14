'use client'; 

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const slides = [
    {
      id: 1,
      number: "01/03",
      image: "https://i.pinimg.com/736x/c9/fb/7a/c9fb7afad2e238ca9bbfb233ed2ead50.jpg", // Քո առաջին նկարի հասցեն
      quote: `"Your creativity and attention to detail always exceed my expectations."`,
      body: "Working with you is truly one of the most exciting and reassuring experiences. Every time I see your work, I feel pure joy and can't wait for what's next because I know it's going to be incredible! Your creativity and attention to detail always exceed my expectations.",
      author: "JOSEFINE, BRAND IDENTITY"
    },
    {
      id: 2,
      number: "02/03",
      image: "https://i.pinimg.com/736x/96/28/20/96282056b6687ed7411f997e375bef0d.jpg", // Օրինակ երկրորդ նկարի (կարող ես փոխել)
      quote: `"Their insight and strategic thinking have completely redefined our market presence."`,
      body: "Partnering with this team has been a truly exceptional experience. Every presentation delivers insightful strategies that perfectly capture our vision. We feel completely understood and confident in our direction. Their design aesthetic is masterful.",
      author: "MARCUS, STRATEGIC PARTNER"
    },
    {
      id: 3,
      number: "03/03",
      image: "https://i.pinimg.com/736x/c8/00/c6/c800c6eedf7db93b45388ea2ae983736.jpg", // Օրինակ երրորդ նկարի
      quote: `"The clean aesthetic and seamless UX doubled our digital conversions."`,
      body: "I am absolutely thrilled with the website design. The clean aesthetic and seamless user experience have already doubled our conversions. The collaboration was professional, structured, and genuinely inspiring from start to finish.",
      author: "EMMA, FOUNDER OF STUDIO N"
    }
  ];

  // 2. State՝ ընթացիկ սլայդի ինդեքսը պահելու համար (սկսվում է 0-ից)
  const [currentIdx, setCurrentIdx] = useState(0);

  // 3. Ֆունկցիա՝ նախորդ սլայդին անցնելու համար (←)
  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 4. Ֆունկցիա՝ հաջորդ սլայդին անցնելու համար (→)
  const handleNext = () => {
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Ակտիվ սլայդի տվյալները
  const activeSlide = slides[currentIdx];

  
  return (
    <main>
     
    

    <section className="hero-container">

      <span className="hero-line"></span>
      <div className="hero-h2"><h2>Noé Design Studio</h2></div>
      <p>Making memorable brand presence with bespoke logos brand identities and websites.</p>

      <div className="hero-img1"></div>
      <div className="hero-img2"></div>

    </section>

    
    <section className="hero-cont2">
      <div className="hero-cont2-box">
        <div className="hero-cont2-left">
          <div className="hero-cont2-left-t1">1. Branding Identity</div>
          <div className="hero-cont2-left-t2">

            <div className="hero-cont2-left-t2-1">
              <div className="hero-cont2-left-t2-1-1">We build distinctive and powerful brand identities. Our branding studio specializes in designing visuals and websites that captivate your audience and bring your vision to life.</div>
              <div className="hero-cont2-left-t2-1-2">STARTING AT $5000</div>
              <div className="hero-cont2-left-t2-1-3">LEARN MORE</div>
              
            </div>

            <div className="hero-cont2-left-t2-2">
              <div className="hero-cont2-left-t2-2-1">
                <div className="hero-cont2-left-t2-2-1-1">INCLUDED</div>
                <ul className="hero-cont2-left-t2-2-2">
                <li>Brand Strategy & Design</li>
                <li>Logo Design</li>
                <li>Brand Storytelling</li>
                <li>Color Palette</li>
                <li>Font & logo curation</li>
              </ul>
              </div>
              
            </div>

          </div>
        </div>
        <div className="hero-cont2-right">
          <div className="hero-cont2-right-img">

          </div>
          
        </div>
      </div>
    </section>


    <section className="hero-cont3">
  <div className="featured-text">
    Featured In
  </div>

  <div className="featured-logos">
    <div className="marquee-inner">
      {/* Բլոկ 1 */}
      <img src="/assets/pngwing.com (1).png" alt="Vogue" />
      <img src="/assets/brendd.png" alt="Nordic Style" />
      <img src="/assets/pandora.png" alt="Well Good" />
      <img src="/assets/lancome.png" alt="Traveler" />
      
      {/* Բլոկ 2 */}
      <img src="/assets/pngwing.com (1).png" alt="Vogue" />
      <img src="/assets/brendd.png" alt="Nordic Style" />
      <img src="/assets/pandora.png" alt="Well Good" />
      <img src="/assets/lancome.png" alt="Traveler" />

      {/* Բլոկ 3 */}
      <img src="/assets/pngwing.com (1).png" alt="Vogue" />
      <img src="/assets/brendd.png" alt="Nordic Style" />
      <img src="/assets/pandora.png" alt="Well Good" />
      <img src="/assets/lancome.png" alt="Traveler" />
    </div>
  </div>
</section>


    <section className="hero-cont4">
      
    </section>


    <section className="hero-cont5">
        <div className="testimonial-slider">
          
          {/* Ձախ սլաք */}
          <div className="slider-arrow-left" onClick={handlePrev}>
            <span>&larr;</span>
          </div>

          {/* Նկարի բլոկ (Դինամիկ փոփոխվող src) */}
          <div className="slider-image-block">
            <div className="slider-image-wrapper">
              <img src={activeSlide.image} alt={activeSlide.author} />
            </div>
          </div>

          {/* Տեքստային բլոկ (Դինամիկ տեքստեր) */}
          <div className="slider-content-block">
            <div className="testimonial-wrap">
              <span className="testimonial-number">{activeSlide.number}</span>
              <h3 className="testimonial-quote-main">{activeSlide.quote}</h3>
              <p className="testimonial-body-text">{activeSlide.body}</p>
              <span className="testimonial-author">{activeSlide.author}</span>
            </div>
          </div>

          {/* Աջ սլաք */}
          <div className="slider-arrow-right" onClick={handleNext}>
            <span>&rarr;</span>
          </div>

        </div>

        {/* Շարժվող ժապավեն */}
        <div className="booking-marquee">
          <div className="booking-marquee-inner">
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            {/* Կրկնօրինակում ենք անընդհատության համար */}
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
            <span>BOOKING NOW &bull; SERVICES NOW &bull; </span>
          </div>
        </div>
      </section>

    </main>
  );
}