import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, BadgeCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const head = useScrollAnimation<HTMLDivElement>();
  const info = useScrollAnimation<HTMLDivElement>(80);
  const form = useScrollAnimation<HTMLDivElement>(120);

  const fade = (show: boolean) =>
    `transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formEl = e.target as HTMLFormElement;
    const data = new FormData(formEl);

    try {
      if (!FORMSPREE_ID) {
        setError("Contact form is not configured. Please email me directly at yahyaalademi84@gmail.com.");
        return;
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
        formEl.reset();
        setTimeout(() => setSent(false), 6000);
      } else {
        let message = "Something went wrong. Please try again.";
        try {
          const json = await res.json();
          message = json?.errors?.[0]?.message ?? message;
        } catch {
          // ignore JSON parse errors
        }

        if (/form not found/i.test(message)) {
          message =
            "Form endpoint not found. Please check the Formspree form ID (VITE_FORMSPREE_ID) and your Formspree settings.";
        }

        setError(message);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div ref={head.ref} style={head.style} className={`${fade(head.show)} flex flex-col items-center mb-16`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground text-center max-w-2xl">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div ref={info.ref} style={info.style} className={`${fade(info.show)} md:col-span-2 space-y-8`}>
            <div className="bg-secondary/20 border border-border rounded-xl p-8 space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                  <a href="mailto:yahyaalademi84@gmail.com" className="text-foreground hover:text-primary transition-colors break-all">
                    yahyaalademi84@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                  <a href="tel:+31616142073" className="text-foreground hover:text-primary transition-colors">
                    +31 6 16142073
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/31616142073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +31 6 16142073
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                  <p className="text-foreground">
                    Berkel en Rodenrijs,<br />Netherlands
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Work eligibility</p>
                  <p className="text-foreground">Eligible to work in the Netherlands and the EU.</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={form.ref} style={form.style} className={`${fade(form.show)} md:col-span-3`}>
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              {sent ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Ahmed Johnson"
                        className="flex h-12 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. ahmed@company.com"
                        className="flex h-12 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      placeholder="e.g. Job Opportunity at Your Company"
                      className="flex h-12 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="e.g. Hi Yahya, I came across your portfolio and would love to connect..."
                      className="flex min-h-[150px] w-full rounded-md border border-border bg-background/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-y"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
                    disabled={sending}
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send size={18} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
