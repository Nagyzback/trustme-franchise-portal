import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { tr } = useLanguage();

  const links = [
    { label: tr("nav.about"), href: "#about" },
    { label: tr("nav.product"), href: "#product" },
    { label: tr("nav.franchise"), href: "#franchise" },
    { label: tr("nav.cases"), href: "#cases" },
    { label: tr("nav.faq"), href: "#faq" },
    { label: tr("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="TrustMe" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a href="#contact" className="text-sm font-semibold gradient-primary text-primary-foreground px-5 py-2 rounded-lg shadow-button hover:opacity-90 transition-opacity">
            {tr("nav.cta")}
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-2">
                  {l.label}
                </a>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-semibold gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-center shadow-button">
                {tr("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
