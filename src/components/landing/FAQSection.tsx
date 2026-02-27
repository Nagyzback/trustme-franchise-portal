import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { tr } = useLanguage();

  const faqs = [
    { q: "faq.q1", a: "faq.a1" },
    { q: "faq.q2", a: "faq.a2" },
    { q: "faq.q3", a: "faq.a3" },
    { q: "faq.q4", a: "faq.a4" },
    { q: "faq.q5", a: "faq.a5" },
    { q: "faq.q6", a: "faq.a6" },
  ];

  return (
    <AnimatedSection className="py-14 px-6 bg-secondary/50">
      <div id="faq" className="max-w-3xl mx-auto scroll-mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">{tr("faq.title")}</h2>
          <p className="text-muted-foreground text-lg">{tr("faq.subtitle")}</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 bg-card shadow-card data-[state=open]:shadow-card-hover transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {tr(f.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {tr(f.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;
