import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const inputClass = "px-5 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIJuJp4hO5ahT_Pr4X4-eBgGkUwAzpfL0Ys1yDtmYTJzL0GEvTwR8AGG3quKNgBjJK/exec";
const SUBMIT_ERROR_TEXT = "\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.";
const SUBMIT_LOADING_TEXT = "\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...";

type ContactFormData = {
  name: string;
  company: string;
  phone: string;
  region: string;
  country: string;
};

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  phone: "",
  region: "",
  country: "",
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const { tr } = useLanguage();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Missing Google Script URL");
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setError(SUBMIT_ERROR_TEXT);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection className="py-14 px-6">
      <div id="contact" className="max-w-7xl mx-auto scroll-mt-20">
        <div className="gradient-primary rounded-3xl p-8 sm:p-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4 text-center">
              {tr("contact.title")}
            </h2>
            <p className="text-primary-foreground/80 text-lg text-center mb-10">
              {tr("contact.subtitle")}
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">✓</span>
                </div>
                <p className="text-xl font-semibold text-primary-foreground">{tr("contact.success_title")}</p>
                <p className="text-primary-foreground/80 mt-2">{tr("contact.success_text")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder={tr("contact.name")}
                  className={inputClass}
                />
                <input
                  required
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  placeholder={tr("contact.company")}
                  className={inputClass}
                />
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder={tr("contact.phone")}
                  className={inputClass}
                />
                <input
                  required
                  value={formData.region}
                  onChange={(e) => setFormData((prev) => ({ ...prev, region: e.target.value }))}
                  placeholder={tr("contact.region")}
                  className={inputClass}
                />
                <input
                  required
                  value={formData.country}
                  onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                  placeholder={tr("contact.country")}
                  className={`sm:col-span-2 ${inputClass}`}
                />
                {error ? <p className="sm:col-span-2 text-sm text-red-100">{error}</p> : null}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-primary-foreground text-primary font-semibold text-lg hover:bg-primary-foreground/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? SUBMIT_LOADING_TEXT : tr("contact.submit")}
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
