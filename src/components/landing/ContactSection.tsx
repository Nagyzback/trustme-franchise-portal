import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection className="py-14 px-6">
      <div id="contact" className="max-w-7xl mx-auto scroll-mt-20">
        <div className="gradient-primary rounded-3xl p-8 sm:p-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4 text-center">
              Станьте партнёром TrustMe
            </h2>
            <p className="text-primary-foreground/80 text-lg text-center mb-10">
              Заполните форму, и мы свяжемся с вами в течение 24 часов
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">✓</span>
                </div>
                <p className="text-xl font-semibold text-primary-foreground">Заявка отправлена!</p>
                <p className="text-primary-foreground/80 mt-2">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Имя"
                  className="px-5 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
                <input
                  required
                  placeholder="Компания"
                  className="px-5 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  className="px-5 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
                <input
                  required
                  placeholder="Регион"
                  className="px-5 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary-foreground text-primary font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"
                  >
                    Подать заявку на франшизу
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
