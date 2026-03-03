import { Target, Award, Building2, Users, Calendar, DollarSign, Trophy, Link, Landmark } from "lucide-react";
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

  const achievements = [
    { icon: DollarSign, valueKey: "about.ach1_value", labelKey: "about.ach1_label" },
    { icon: Trophy, valueKey: "about.ach2_value", labelKey: "about.ach2_label" },
    { icon: Landmark, valueKey: "about.ach3_value", labelKey: "about.ach3_label" },
    { icon: Users, valueKey: "about.ach4_value", labelKey: "about.ach4_label" },
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Investments & Recognition */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-border bg-card shadow-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-6 text-center">{tr("about.achievements_title")}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((a) => (
                <div key={a.labelKey} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <a.icon size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-snug">{tr(a.valueKey)}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{tr(a.labelKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
