import { FormEvent, useState } from "react";
import { Building2, MapPin, Linkedin, Sparkles, Send } from "lucide-react";
import { toast } from "sonner";

const subjects = [
  "Tour Enquiry",
  "Guide Training",
  "Academic Collaboration",
  "Speaking Request",
  "General",
];

const expertise = [
  "Travel & Tourism Management",
  "Marketing for Hospitality",
  "Cultural Heritage Tourism",
  "Guide Training & Mentorship",
  "Sustainable Tourism Practice",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Message sent — thank you. A reply will follow shortly.");
    setForm({ name: "", email: "", subject: subjects[0], message: "" });
  }

  return (
    <section className="container-editorial py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow mb-3">Get in Touch</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ocean-deep mb-4">Contact</h1>
        <p className="text-foreground/70 leading-relaxed">
          For tour enquiries, training, academic collaborations or speaking invitations.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        <aside className="lg:col-span-5 space-y-6">
          <div className="accent-card p-6">
            <Building2 className="text-gold mb-3" size={20} />
            <h3 className="font-serif text-xl text-ocean-deep">Institution</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Sri Lanka Institute of Tourism & Hotel Management (SLITHM)
            </p>
          </div>
          <div className="accent-card p-6">
            <MapPin className="text-gold mb-3" size={20} />
            <h3 className="font-serif text-xl text-ocean-deep">Location</h3>
            <p className="text-sm text-muted-foreground mt-1">Colombo, Sri Lanka</p>
          </div>
          <div className="accent-card p-6">
            <Linkedin className="text-gold mb-3" size={20} />
            <h3 className="font-serif text-xl text-ocean-deep">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/mangala-suraweera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ocean hover:text-gold transition-colors break-all mt-1 inline-block"
            >
              linkedin.com/in/mangala-suraweera
            </a>
          </div>
          <div className="accent-card p-6">
            <Sparkles className="text-gold mb-3" size={20} />
            <h3 className="font-serif text-xl text-ocean-deep mb-3">Areas of Expertise</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {expertise.map((e) => (
                <li key={e} className="flex gap-2">
                  <span className="text-gold">·</span>{e}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <form onSubmit={submit} className="lg:col-span-7 accent-card p-6 md:p-8 space-y-5 self-start">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Name *</label>
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                maxLength={80}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={120}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Subject</label>
            <select
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none"
            >
              {subjects.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Message *</label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              maxLength={1500}
              rows={6}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ocean text-cream font-semibold hover:bg-ocean-deep transition-colors rounded-sm"
          >
            <Send size={15} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}