import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Upload, X, Send } from "lucide-react";
import { toast } from "sonner";

type Story = {
  id: string;
  name: string;
  destination: string;
  text: string;
  photos: string[];
};

const destinations = [
  "Sigiriya & Dambulla",
  "Mirissa & Galle",
  "Kandy",
  "Yala / Udawalawe",
  "Ella & Nine Arches",
  "Adam's Peak",
  "Other",
];

const seeded: Story[] = [
  {
    id: "s1",
    name: "Priya Anand",
    destination: "Ella & Nine Arches",
    text: "Following Mangala's notes, we caught the early train from Kandy and the mist parted just as we reached the Nine Arches Bridge. Sipping tea at a small estate after — unforgettable.",
    photos: [],
  },
  {
    id: "s2",
    name: "Tom Reynolds",
    destination: "Sigiriya & Dambulla",
    text: "Climbing Sigiriya at dawn was every bit as moving as he described in class. The cave temples at Dambulla felt like stepping into a different century. Thank you for the guidance, sir.",
    photos: [],
  },
];

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Stories() {
  const [stories, setStories] = useState<Story[]>(seeded);
  const [name, setName] = useState("");
  const [destination, setDestination] = useState(destinations[0]);
  const [text, setText] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  function onFiles(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const urls = files.slice(0, 6).map((f) => URL.createObjectURL(f));
    setPhotos((p) => [...p, ...urls].slice(0, 6));
  }

  function removePhoto(i: number) {
    setPhotos((p) => p.filter((_, idx) => idx !== i));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast.error("Please add your name and a short story.");
      return;
    }
    const newStory: Story = {
      id: crypto.randomUUID(),
      name: name.trim().slice(0, 80),
      destination,
      text: text.trim().slice(0, 1200),
      photos,
    };
    setStories((s) => [newStory, ...s]);
    setName("");
    setText("");
    setPhotos([]);
    setDestination(destinations[0]);
    if (fileRef.current) fileRef.current.value = "";
    toast.success("Your story has been shared.");
  }

  return (
    <section className="container-editorial py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow mb-3">Traveller Voices</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ocean-deep mb-4">My Stories</h1>
        <p className="text-foreground/70 leading-relaxed">
          Share a moment from your Sri Lankan journey — a sunrise, a meal, a quiet temple. Your story
          joins a growing tapestry of travellers and students.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="accent-card p-6 md:p-8 max-w-3xl mx-auto mb-16 space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Your Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors"
              placeholder="Jane Perera"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Destination</label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors"
            >
              {destinations.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Your Experience</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={1200}
            rows={5}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-gold focus:outline-none transition-colors resize-none"
            placeholder="Tell us what made the moment unforgettable…"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-ocean font-semibold mb-2">Photos (up to 6)</label>
          <label className="flex items-center justify-center gap-2 border-2 border-dashed border-border hover:border-gold transition-colors cursor-pointer rounded-sm py-6 text-sm text-muted-foreground">
            <Upload size={16} />
            Click to upload images
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={onFiles}
            />
          </label>
          {photos.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-3">
              {photos.map((src, i) => (
                <div key={i} className="relative aspect-square">
                  <img src={src} alt="" className="w-full h-full object-cover rounded-sm" />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute -top-1.5 -right-1.5 bg-ocean-deep text-cream rounded-full p-1"
                    aria-label="Remove photo"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold hover:bg-gold/90 transition-colors rounded-sm"
        >
          <Send size={15} /> Share Story
        </button>
      </form>

      <div className="space-y-6 max-w-3xl mx-auto">
        {stories.map((s) => (
          <article key={s.id} className="accent-card p-6 md:p-7">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-ocean text-cream flex items-center justify-center font-serif text-lg shrink-0">
                {initials(s.name) || "·"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-serif text-xl text-ocean-deep">{s.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] bg-gold-soft text-ocean-deep px-2.5 py-0.5 rounded-sm font-semibold">
                    {s.destination}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{s.text}</p>
                {s.photos.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                    {s.photos.map((p, i) => (
                      <img key={i} src={p} alt="" className="w-full aspect-[4/3] object-cover rounded-sm" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}