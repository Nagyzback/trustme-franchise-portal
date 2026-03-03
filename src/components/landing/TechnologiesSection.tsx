import { useLanguage } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Fingerprint, PenTool, Brain, Layers, Plug, Code } from "lucide-react";

const TechnologiesSection = () => {
  const { tr } = useLanguage();

  const items = [
    { icon: Fingerprint, key: "tech.compact1" },
    { icon: PenTool, key: "tech.compact2" },
    { icon: Brain, key: "tech.compact3" },
    { icon: Layers, key: "tech.compact4" },
    { icon: Plug, key: "tech.compact5" },
    { icon: Code, key: "tech.compact6" },
  ];

  return (
    <AnimatedSection className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">{tr("tech.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <AnimatedSection key={item.key} delay={i * 0.05}>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-card transition-all duration-200">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{tr(item.key)}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TechnologiesSection;
