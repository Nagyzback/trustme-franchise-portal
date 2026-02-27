import { Target, Award, Building2, Users, Globe, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Target,
    title: "Миссия",
    text: "Создаём инфраструктуру доверия для цифрового бизнеса. Наша платформа обеспечивает прозрачность и безопасность каждой сделки.",
  },
  {
    icon: Award,
    title: "Опыт",
    text: "Более 5 лет на рынке цифровых решений. Проверенная бизнес-модель, подтверждённая результатами сотен партнёров.",
  },
  {
    icon: Building2,
    title: "Enterprise-клиенты",
    text: "Работаем с крупнейшими компаниями России и СНГ. Надёжная технология, соответствующая корпоративным стандартам.",
  },
];

const stats = [
  { icon: Building2, value: "3000+", label: "компаний" },
  { icon: Users, value: "1,5 млн", label: "пользователей" },
  { icon: Calendar, value: "3+", label: "года на рынке" },
];

const AboutSection = () => (
  <AnimatedSection className="py-14 px-6">
    <div id="about" className="max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">О компании</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
        {stats.map((s) => (
          <AnimatedSection key={s.label} className="text-center p-6 rounded-2xl border border-border bg-card shadow-card">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1} className="group">
            <div className="p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <c.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
