import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { tr } = useLanguage();

  const testimonials = [
    { quoteKey: "testimonials.q1", nameKey: "testimonials.n1", roleKey: "testimonials.r1" },
    { quoteKey: "testimonials.q2", nameKey: "testimonials.n2", roleKey: "testimonials.r2" },
    { quoteKey: "testimonials.q3", nameKey: "testimonials.n3", roleKey: "testimonials.r3" },
  ];

  return (
    <AnimatedSection className="py-14 px-6">
      <div id="cases" className="max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("testimonials.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{tr("testimonials.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t2, i) => (
            <AnimatedSection key={t2.nameKey} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-border bg-card shadow-card h-full flex flex-col">
                <Quote size={24} className="text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 flex-1">«{tr(t2.quoteKey)}»</p>
                <div>
                  <p className="font-semibold text-foreground">{tr(t2.nameKey)}</p>
                  <p className="text-sm text-muted-foreground">{tr(t2.roleKey)}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
