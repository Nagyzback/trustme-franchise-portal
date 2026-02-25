import { HeadphonesIcon, GraduationCap, TrendingUp, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: HeadphonesIcon,
    title: "Поддержка",
    text: "Круглосуточная техническая и бизнес-поддержка. Персональный менеджер на всех этапах развития.",
  },
  {
    icon: GraduationCap,
    title: "Обучение",
    text: "Комплексная программа обучения: продажи, продукт, маркетинг. Сертификация специалистов.",
  },
  {
    icon: TrendingUp,
    title: "Доходность",
    text: "Окупаемость от 6 месяцев. Прозрачная модель распределения доходов и бонусная система.",
  },
  {
    icon: Globe,
    title: "Масштабирование",
    text: "Возможность расширения до нескольких регионов. Эксклюзивные территориальные права.",
  },
];

const FranchiseSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="franchise" className="max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Для франчайзи</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Всё необходимое для успешного запуска и роста вашего бизнеса
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full group">
              <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:gradient-primary transition-all duration-300">
                <c.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default FranchiseSection;
