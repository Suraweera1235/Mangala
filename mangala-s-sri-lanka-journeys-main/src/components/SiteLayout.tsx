import { NavLink, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/tours", label: "Tour Experiences" },
  { to: "/stories", label: "My Stories" },
  { to: "/feedback", label: "Feedback" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[var(--shadow-card)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col leading-tight group">
            <span className="font-serif text-lg md:text-xl text-ocean-deep">Mangala Suraweera</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
              Sri Lanka · Tourism Guide
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-ocean font-semibold"
                      : "text-foreground/70 hover:text-ocean"
                  } after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold after:scale-x-0 after:origin-left after:transition-transform ${
                    isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-ocean-deep"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container-editorial py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm py-2 ${isActive ? "text-ocean font-semibold" : "text-foreground/80"}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      <footer className="bg-ocean-deep text-cream/80 mt-20">
        <div className="container-editorial py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-serif text-xl text-cream">Mangala Suraweera</div>
            <div className="text-cream/60 mt-1">Senior Lecturer, SLITHM · Colombo, Sri Lanka</div>
          </div>
          <div className="md:text-center text-cream/60">
            Curated travel wisdom from 22+ years in Sri Lankan tourism.
          </div>
          <div className="md:text-right text-cream/60">
            © {new Date().getFullYear()} · Crafted with care
          </div>
        </div>
      </footer>
    </div>
  );
}