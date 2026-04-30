import { Link } from "react-router-dom";
import { Award, GraduationCap, BookOpen, MapPin, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-srilanka.jpg";
import portrait from "@/assets/portrait.jpg";

const stats = [
  { value: "22+", label: "Years of Experience", icon: Award },
  { value: "1000+", label: "Students Mentored", icon: GraduationCap },
];

const credentials = [
  { title: "SLITHM", desc: "Senior Lecturer, Sri Lanka Institute of Tourism & Hotel Management" },
  { title: "Master in Tourism", desc: "Currently completing Master of Specialisation in Tourism" },
  { title: "Dharmaraja College", desc: "Trained at Dharmaraja College, Kandy" },
];

export default function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 h-[92vh] min-h-[600px] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Sigiriya Lion Rock fortress at golden hour, Sri Lanka"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-editorial relative z-10 pb-16 md:pb-24 text-cream">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {["SLITHM", "PG Dip Marketing", "MSc Tourism"].map((b) => (
                <span
                  key={b}
                  className="text-[11px] uppercase tracking-[0.2em] px-3 py-1 border border-cream/40 text-cream/90 backdrop-blur-sm bg-white/5 rounded-sm"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="eyebrow text-gold mb-3">Senior Lecturer · Travel & Tourism Management</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-cream mb-6">
              Mangala<br />Suraweera
            </h1>
            <p className="text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed mb-8">
              Two decades guiding travellers and training the next generation of hospitality
              professionals across Sri Lanka — from the Cultural Triangle to the southern shores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-white font-semibold tracking-wide hover:bg-gold/90 transition-colors rounded-sm"
              >
                View Tour Experiences <ArrowRight size={16} />
              </Link>
              <Link
                to="/stories"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cream/60 text-cream hover:bg-cream/10 transition-colors rounded-sm"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BIO + STATS */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="relative">
            <img
              src={portrait}
              alt="Portrait of Mangala Suraweera"
              width={800}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-soft)]"
            />
            <div className="absolute -bottom-4 -right-4 hidden md:block w-40 h-40 border-2 border-gold -z-10" />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ocean-deep mb-6 leading-tight">
            A career devoted to the craft of Sri Lankan hospitality.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-5">
            Mangala Suraweera is a Senior Lecturer in Travel & Tourism Management at the Sri Lanka
            Institute of Tourism & Hotel Management (SLITHM). With over 22 years in the industry,
            he combines academic rigour — a Postgraduate Diploma in Marketing Management and an
            ongoing Master of Specialisation in Tourism — with deep operational fluency.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            A proud alumnus of Dharmaraja College, Kandy, his work is rooted in cultural
            authenticity and world-class service standards.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="accent-card p-6">
                <s.icon className="text-gold mb-3" size={22} />
                <div className="font-serif text-4xl text-ocean-deep">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-cream/60 border-y border-border">
        <div className="container-editorial py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Credentials & Affiliations</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ocean-deep">
              Built on rigour, recognised globally.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((c) => (
              <div key={c.title} className="accent-card p-6 h-full">
                <BookOpen className="text-gold mb-4" size={20} />
                <h3 className="font-serif text-xl text-ocean-deep mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial py-20 text-center">
        <MapPin className="text-gold mx-auto mb-4" size={28} />
        <h2 className="font-serif text-3xl md:text-4xl text-ocean-deep mb-4">
          Begin your Sri Lankan journey
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-8">
          Six curated experiences — from ancient kingdoms to misty highlands and golden coasts.
        </p>
        <Link
          to="/tours"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-ocean text-cream font-semibold hover:bg-ocean-deep transition-colors rounded-sm"
        >
          Explore the Experiences <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
