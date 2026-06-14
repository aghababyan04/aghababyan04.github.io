"use client"
import Link from "next/link";

export default function Header() {
    return (
       <header>

      <div className="header-left">
          <ul className="header-pages">
            <li className="home"><Link href="/">Home</Link></li>
            <li className="about"><Link href="/about">About</Link></li>
            <li className="contact"><Link href="/products">Products</Link></li>
            <li className="services"><Link href="/services">Services</Link></li>
          </ul>
      </div>

      <div className="header-icon">Noé</div>

      <div className="header-right"><Link href="/contact">Get in touch</Link></div>

    </header>
    );
}