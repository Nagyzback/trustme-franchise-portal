import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Какой размер инвестиций необходим для запуска франшизы?",
    a: "Стартовые инвестиции зависят от региона и масштаба. Мы предлагаем несколько пакетов — от стандартного до премиум. Подробности обсуждаются индивидуально.",
  },
  {
    q: "Какой срок окупаемости франшизы?",
    a: "Средний срок окупаемости составляет 6–12 месяцев в зависимости от региона и активности продаж. Мы предоставляем финансовую модель до подписания договора.",
  },
  {
    q: "Нужен ли технический опыт для управления франшизой?",
    a: "Нет, технический опыт не обязателен. Мы обеспечиваем полное обучение продукту и техническую поддержку. Важен опыт в B2B-продажах или управлении бизнесом.",
  },
  {
    q: "Какую поддержку оказывает TrustMe франчайзи?",
    a: "Полный цикл поддержки: обучение, маркетинговые материалы, CRM-система, техническая поддержка, персональный менеджер и регулярные стратегические сессии.",
  },
  {
    q: "Можно ли получить эксклюзивные права на регион?",
    a: "Да, мы предоставляем эксклюзивные территориальные права. Условия зависят от выбранного пакета и региона.",
  },
  {
    q: "Как устроена модель распределения доходов?",
    a: "Прозрачная роялти-модель с фиксированным процентом от оборота. Без скрытых платежей. Бонусная система за выполнение планов продаж.",
  },
];

const FAQSection = () => (
  <AnimatedSection className="py-14 px-6 bg-secondary/50">
    <div id="faq" className="max-w-3xl mx-auto scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Часто задаваемые вопросы</h2>
        <p className="text-muted-foreground text-lg">
          Ответы на основные вопросы потенциальных франчайзи
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border rounded-xl px-6 bg-card shadow-card data-[state=open]:shadow-card-hover transition-shadow"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </AnimatedSection>
);

export default FAQSection;
