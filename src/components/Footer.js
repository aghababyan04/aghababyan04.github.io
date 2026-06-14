'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* Ձախ մաս՝ Լոգո և հեղինակային իրավունքներ */}
        <div className="footer-left-box">
          <h2 className="footer-logo">Noé</h2>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Noé Design Studio. All rights reserved.
          </p>
        </div>

        {/* Աջ մաս՝ Նավիգացիա և Կապ */}
        <div className="footer-right-box">
          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">CONNECT</span>
            <ul>
              <li><a href="#" target="_blank">Instagram</a></li>
              <li><a href="#" target="_blank">Pinterest</a></li>
              <li><a href="#" target="_blank">LinkedIn</a></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}