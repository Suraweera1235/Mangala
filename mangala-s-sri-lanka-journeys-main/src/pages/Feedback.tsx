import { FormEvent, useState } from "react";
import { Star, Send } from "lucide-react";
import { toast } from "sonner";

const testimonials = [
  {
    rating: 5,
    quote:
      "Mr. Suraweera's lectures changed how I understood guest experience. His Kandy walking tour was a masterclass in cultural storytelling.",
    author: "Nadeesha Fernando",
    place: "Kandy",
  },
  {
    rating: 5,
    quote:
      "We followed his Yala itinerary down to the timing — and saw three leopards in one morning. He knows the island like family.",
    author: "Marco Bianchi",
    place: "Yala",
  },
  {
    rating: 4,
    quote:
      "His training session for our hotel team raised service standards almost immediately. Practical, warm, deeply experienced.",
    author: "Hiruni Jayasuriya",
    place: "Galle",
  },
];

function Stars({ value, onChange, size = 20 }: { value: number; onChange?: (n: number) => void; size?: number }) {
  const [hover, setHover] = useState(0);
  const interactive = !!onChange;
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = (hover || value) >= n;
        return (
          <button
            key={n}
            type="button"
            disabled={!interactive}
            onMouseEnter={() => interactive && setHover(n)}
            onMouseLeave={() => interactive && setHover(0)}
            onClick={() => onChange?.(n)}
            className={interactive ? "cursor-pointer" : "cursor-default"}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
          >
            <Star
              size={size}
              className={filled ? "fill-gold text-gold" : "text-muted-foreground/40"}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function Feedback() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !rating || !message.trim()) {
      toast.error("Please complete all fields and select a rating.");
      return;
    }
    toast.success("Thank you — your feedback has been received.");
    setName(""); setTopic(""); setRating(0); setMessage("");
  }

  return (
    <section className="container-editorial py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow mb-3">Your Reflections</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ocean-deep mb-4">Feedback</h1>
        <p className="text-foreground/70 leading-relaxed">
          Whether you joined a tour, a lecture or a training programme — your reflections help shape
          how this work continues.
        </p>
      </div>

      <form onSubmit={submit} className="accent-card p-6 md:p-8 max-w-2xl mx-auto mb-16 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Tour or Topic</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              maxLength={80}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none"
              placeholder="e.g. Sigiriya tour, Marketing lecture"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Rating</label>
          <Stars value={rating} onChange={setRating} size={28} />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Your Feedback</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={5}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold hover:bg-gold/90 transition-colors rounded-sm"
        >
          <Send size={15} /> Submit Feedback
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <figure key={i} className="accent-card p-6 flex flex-col">
            <Stars value={t.rating} />
            <blockquote className="font-serif text-lg text-ocean-deep leading-snug mt-4 mb-5 flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="text-sm">
              <div className="font-semibold text-ocean">{t.author}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-gold mt-0.5">{t.place}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}