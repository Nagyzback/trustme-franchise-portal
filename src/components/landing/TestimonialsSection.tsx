import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Запустили франшизу TrustMe в Казани 8 месяцев назад. Уже вышли на операционную прибыль. Поддержка от головного офиса — на высшем уровне.",
    name: "Алексей Петров",
    role: "Франчайзи, Казань",
  },
  {
    quote: "Trust Contract закрывает огромную потребность рынка. Клиенты сами приходят, когда видят продукт в действии. Отличная бизнес-модель.",
    name: "Мария Иванова",
    role: "Франчайзи, Новосибирск",
  },
  {
    quote: "Прозрачная финансовая модель и сильный продукт. Команда TrustMe помогает на каждом шаге — от обучения до первых продаж.",
    name: "Дмитрий Козлов",
    role: "Франчайзи, Екатеринбург",
  },
];

const TestimonialsSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="cases" className="max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Успешные кейсы</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Отзывы наших действующих партнёров
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="p-8 rounded-2xl border border-border bg-card shadow-card h-full flex flex-col">
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 flex-1">«{t.quote}»</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default TestimonialsSection;
