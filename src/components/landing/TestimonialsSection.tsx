import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Благодаря TrustMe мы полностью перешли на подписание договоров онлайн. Документы всегда в порядке, а при проверках у нас ни разу не возникло проблем.",
    name: "Doctor Dent",
    role: "Стоматологическая клиника",
  },
  {
    quote: "Очень удобная система для работы с родителями — подписание договоров, согласий и уведомлений занимает считанные минуты. Мы значительно сэкономили время администрации.",
    name: "KIS International School",
    role: "Международная школа, Астана",
  },
  {
    quote: "Работаем с туристами из разных городов Казахстана, и TrustMe позволяет безопасно заключать онлайн-сделки без необходимости личных встреч.",
    name: "AtaTravel",
    role: "Туристическая компания",
  },
];

const TestimonialsSection = () => (
  <AnimatedSection className="py-14 px-6">
    <div id="cases" className="max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Успешные кейсы</h2>
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
