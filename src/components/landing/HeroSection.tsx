import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { tr } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-32 right-[15%] w-64 h-64 border border-primary/10 rounded-3xl" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute bottom-40 left-[10%] w-48 h-48 border border-primary/10 rounded-2xl" />
        <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-[25%] w-3 h-3 rounded-full bg-primary/20" />
        <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-[20%] w-2 h-2 rounded-full bg-primary/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg className="w-full h-full opacity-[0.04]" viewBox="0 0 600 800" fill="none">
            <line x1="0" y1="0" x2="600" y2="800" stroke="hsl(180, 38%, 46%)" strokeWidth="1" />
            <line x1="100" y1="0" x2="600" y2="700" stroke="hsl(180, 38%, 46%)" strokeWidth="1" />
            <line x1="200" y1="0" x2="600" y2="600" stroke="hsl(180, 38%, 46%)" strokeWidth="1" />
            <line x1="300" y1="0" x2="600" y2="500" stroke="hsl(180, 38%, 46%)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight mb-6"
        >
          {tr("hero.title1")}{" "}
          <span className="text-primary">{tr("hero.title_accent")}</span>{" "}
          {tr("hero.title2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {tr("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="gradient-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-[10px] shadow-button hover:opacity-90 transition-all hover:scale-[1.02]">
            {tr("hero.cta")}
          </a>
          <a href="#about" className="text-foreground font-medium text-lg px-8 py-4 rounded-[10px] border border-border hover:bg-secondary transition-colors">
            {tr("hero.cta2")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
