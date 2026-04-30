import sigiriya from "@/assets/tour-sigiriya.jpg";
import galle from "@/assets/tour-galle.jpg";
import kandy from "@/assets/tour-kandy.jpg";
import yala from "@/assets/tour-yala.jpg";
import ella from "@/assets/tour-ella.jpg";
import adams from "@/assets/tour-adams.jpg";
import { MapPin } from "lucide-react";

const tours = [
  {
    img: sigiriya,
    category: "UNESCO Heritage",
    title: "Sigiriya & Dambulla",
    desc: "Ascend the 5th-century Lion Rock and explore the painted cave temples at the heart of the Cultural Triangle.",
    region: "Cultural Triangle",
  },
  {
    img: galle,
    category: "Beaches & History",
    title: "Southern Shoreline — Mirissa & Galle",
    desc: "Whales off Mirissa, ramparts of the Dutch Fort, and slow afternoons on the warm Indian Ocean.",
    region: "Southern Province",
  },
  {
    img: kandy,
    category: "Cultural Immersion",
    title: "Kandy & Temple of the Tooth",
    desc: "The last royal capital of Sri Lanka, home to the sacred Tooth Relic and evening Kandyan rituals.",
    region: "Central Highlands",
  },
  {
    img: yala,
    category: "Wildlife & Nature",
    title: "Yala & Udawalawe Safari",
    desc: "Track leopards, elephant herds and rare birdlife across two of the island's finest national parks.",
    region: "Southern Wilderness",
  },
  {
    img: ella,
    category: "Scenic & Relaxing",
    title: "Ella & Tea Estates via Nine Arches",
    desc: "Ride the iconic blue train through emerald tea country and pause beneath the Nine Arches Bridge.",
    region: "Hill Country",
  },
  {
    img: adams,
    category: "Spiritual Journey",
    title: "Adam's Peak Pilgrimage",
    desc: "A pre-dawn climb of Sri Pada, sacred to four faiths, to witness sunrise above the clouds.",
    region: "Sabaragamuwa",
  },
];

export default function Tours() {
  return (
    <section className="container-editorial py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="eyebrow mb-3">Curated Experiences</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ocean-deep mb-4">Tour Experiences</h1>
        <p className="text-foreground/70 leading-relaxed">
          Six handpicked journeys across Sri Lanka — each one a distillation of decades of guiding,
          teaching and travelling this remarkable island.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((t) => (
          <article
            key={t.title}
            className="group bg-card border border-border rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-500 flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={t.img}
                alt={t.title}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-gold text-white px-3 py-1 rounded-sm font-semibold">
                {t.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-serif text-2xl text-ocean-deep mb-3">{t.title}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed flex-1">{t.desc}</p>
              <div className="flex items-center gap-1.5 text-xs text-ocean mt-5 pt-4 border-t border-border">
                <MapPin size={13} className="text-gold" />
                <span className="font-semibold tracking-wide">{t.region}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}