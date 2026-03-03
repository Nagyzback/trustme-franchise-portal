import { FileUp, Send, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

import step1Ru from "@/assets/step1-ru.png";
import step2Ru from "@/assets/step2-ru.png";
import step3Ru from "@/assets/step3-ru.png";
import step1Kz from "@/assets/step1-kz.png";
import step2Kz from "@/assets/step2-kz.png";
import step3Kz from "@/assets/step3-kz.png";
import step1En from "@/assets/step1-en.png";
import step2En from "@/assets/step2-en.png";
import step3En from "@/assets/step3-en.png";

const screenshots: Record<string, [string, string, string]> = {
  ru: [step1Ru, step2Ru, step3Ru],
  kz: [step1Kz, step2Kz, step3Kz],
  en: [step1En, step2En, step3En],
};

const StepsSection = () => {
  const { lang, tr } = useLanguage();

  const steps = [
    { icon: FileUp, num: 1, titleKey: "steps.step1_title", textKey: "steps.step1_text" },
    { icon: Send, num: 2, titleKey: "steps.step2_title", textKey: "steps.step2_text" },
    { icon: ShieldCheck, num: 3, titleKey: "steps.step3_title", textKey: "steps.step3_text" },
  ];

  const imgs = screenshots[lang] || screenshots.en;

  return (
    <AnimatedSection className="py-14 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("steps.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{tr("steps.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.15}>
              <div className="text-center p-8 rounded-2xl border border-border bg-card shadow-card h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3 inline-block">
                  {s.num}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{tr(s.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tr(s.textKey)}</p>
                <div className="mt-auto flex justify-center">
                  <img
                    src={imgs[i]}
                    alt={tr(s.titleKey)}
                    className="w-[180px] rounded-2xl shadow-card border border-border"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StepsSection;
