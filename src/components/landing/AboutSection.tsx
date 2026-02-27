import { Target, Award, Building2, Users, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { tr } = useLanguage();

  const cards = [
    { icon: Target, titleKey: "about.mission_title", textKey: "about.mission_text" },
    { icon: Award, titleKey: "about.experience_title", textKey: "about.experience_text" },
    { icon: Building2, titleKey: "about.enterprise_title", textKey: "about.enterprise_text" },
  ];

  const stats = [
    { icon: Building2, valueKey: "about.stat1_value", labelKey: "about.stat1_label" },
    { icon: Users, valueKey: "about.stat2_value", labelKey: "about.stat2_label" },
    { icon: Calendar, valueKey: "about.stat3_value", labelKey: "about.stat3_label" },
  ];

  return (
    <AnimatedSection className="py-14 px-6">
      <div id="about" className="max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("about.title")}</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {stats.map((s) => (
            <AnimatedSection key={s.labelKey} className="text-center p-6 rounded-2xl border border-border bg-card shadow-card">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{tr(s.valueKey)}</p>
              <p className="text-sm text-muted-foreground">{tr(s.labelKey)}</p>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <AnimatedSection key={c.titleKey} delay={i * 0.1} className="group">
              <div className="p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <c.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{tr(c.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{tr(c.textKey)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
