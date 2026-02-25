import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  "Электронная подпись юридической силы",
  "Шифрование данных банковского уровня",
  "Автоматизация контрактного цикла",
  "Интеграция с CRM и ERP системами",
  "Аудит и отслеживание изменений в реальном времени",
  "Соответствие ФЗ-63 и международным стандартам",
];

const ProductSection = () => (
  <AnimatedSection className="py-24 px-6 bg-secondary/50">
    <div id="product" className="max-w-7xl mx-auto scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: benefits */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trust Contract</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Платформа для безопасного управления документами и сделками. Полный контроль на каждом этапе.
          </p>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-primary-foreground" />
                </div>
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: abstract product mockup */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border shadow-card p-8">
              {/* Mock UI */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-primary/20" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg gradient-primary opacity-80" />
                    <div>
                      <div className="h-3 w-32 bg-foreground/10 rounded" />
                      <div className="h-2 w-20 bg-foreground/5 rounded mt-1.5" />
                    </div>
                  </div>
                  <div className="text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full">Подписан</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20" />
                    <div>
                      <div className="h-3 w-40 bg-foreground/10 rounded" />
                      <div className="h-2 w-24 bg-foreground/5 rounded mt-1.5" />
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">На проверке</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/30" />
                    <div>
                      <div className="h-3 w-28 bg-foreground/10 rounded" />
                      <div className="h-2 w-16 bg-foreground/5 rounded mt-1.5" />
                    </div>
                  </div>
                  <div className="text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full">Подписан</div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/10" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </AnimatedSection>
);

export default ProductSection;
