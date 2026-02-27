import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand & address */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="TrustMe" className="h-7" />
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
            <MapPin size={16} className="flex-shrink-0 mt-0.5" />
            <span>г. Астана, ул. Достык, 13</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Phone size={14} className="flex-shrink-0" />
            <span>Отдел продаж: <a href="tel:+77078701901" className="hover:text-foreground transition-colors">+7 (707) 870-19-01</a></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Phone size={14} className="flex-shrink-0" />
            <span>Техподдержка: <a href="tel:+77078701903" className="hover:text-foreground transition-colors">+7 (707) 870-19-03</a></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} className="flex-shrink-0" />
            <a href="mailto:info@trustme.kz" className="hover:text-foreground transition-colors">info@trustme.kz</a>
          </div>
        </div>

        {/* Nav links */}
        <div>
          <p className="font-semibold text-foreground mb-4 text-sm">Навигация</p>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">О компании</a>
            <a href="#product" className="hover:text-foreground transition-colors">Trust Contract</a>
            <a href="#franchise" className="hover:text-foreground transition-colors">Франчайзи</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Контакт</a>
          </nav>
        </div>

        {/* Socials */}
        <div>
          <p className="font-semibold text-foreground mb-4 text-sm">Соцсети</p>
          <div className="flex gap-3 mb-6">
            <a href="https://instagram.com/trustme.kz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com/trustmekz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://youtube.com/@trustmekz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
          <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Абонентское соглашение</a>
            <a href="#" className="hover:text-foreground transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
