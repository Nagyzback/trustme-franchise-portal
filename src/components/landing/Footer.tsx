const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">T</span>
        </div>
        <span className="font-bold text-foreground">TrustMe</span>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">О компании</a>
        <a href="#product" className="hover:text-foreground transition-colors">Trust Contract</a>
        <a href="#franchise" className="hover:text-foreground transition-colors">Франчайзи</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Контакт</a>
      </nav>
      <p className="text-sm text-muted-foreground">© 2026 TrustMe. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;
