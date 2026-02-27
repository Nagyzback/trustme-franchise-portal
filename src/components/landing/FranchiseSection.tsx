import { HeadphonesIcon, GraduationCap, TrendingUp, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const FranchiseSection = () => {
  const { tr } = useLanguage();

  const cards = [
    { icon: HeadphonesIcon, titleKey: "franchise.support_title", textKey: "franchise.support_text" },
    { icon: GraduationCap, titleKey: "franchise.education_title", textKey: "franchise.education_text" },
    { icon: TrendingUp, titleKey: "franchise.revenue_title", textKey: "franchise.revenue_text" },
    { icon: Globe, titleKey: "franchise.scale_title", textKey: "franchise.scale_text" },
  ];

  return (
    <AnimatedSection className="py-14 px-6">
      <div id="franchise" className="max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("franchise.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{tr("franchise.subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <AnimatedSection key={c.titleKey} delay={i * 0.1}>
              <div className="p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full group">
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:gradient-primary transition-all duration-300">
                  <c.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{tr(c.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr(c.textKey)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FranchiseSection;
