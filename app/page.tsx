import Link from "next/link";
import Logo from "@/components/Logo";

const STATS = [
  { number: "4,000+", label: "Stray dogs in Prishtina" },
  { number: "12", label: "Rescue partners" },
  { number: "340+", label: "Dogs placed in homes" },
  { number: "18+", label: "Countries reached" },
];

const MARQUEE_WORDS = [
  "Rescue", "—", "Adopt", "—", "Foster", "—", "Volunteer", "—",
  "Donate", "—", "Advocate", "—", "Rehabilitate", "—", "Love", "—",
  "Rescue", "—", "Adopt", "—", "Foster", "—", "Volunteer", "—",
  "Donate", "—", "Advocate", "—", "Rehabilitate", "—", "Love", "—",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          {/* Add your video source here: <source src="/hero.mp4" type="video/mp4" /> */}
        </video>

        {/* Fallback background (shows when no video) */}
        <div className="absolute inset-0 bg-[#1a1510]" />

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Centered Logo + Tagline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Logo size={160} textSize="text-3xl" dark />
          <p className="mt-8 text-white/80 text-sm tracking-[0.2em] uppercase font-light max-w-xs">
            Prishtina, Kosovo
          </p>
        </div>

        {/* Bottom hero content */}
        <div className="relative z-10 w-full px-6 lg:px-10 pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <h1
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building a global pathway to bring every dog{" "}
              <em>forever home.</em>
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/adopt"
                className="inline-block bg-white text-[#0A0A0A] text-[11px] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#F7F3EC] transition-colors"
              >
                Meet the Dogs
              </Link>
              <Link
                href="/get-involved"
                className="inline-block bg-transparent border border-white text-white text-[11px] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white animate-pulse" />
          <span className="text-white text-[9px] tracking-[0.18em] uppercase rotate-90 origin-center translate-y-4">
            Scroll
          </span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden border-y border-black/10 py-4 bg-[#F7F3EC]">
        <div className="marquee-track">
          {MARQUEE_WORDS.map((word, i) => (
            <span
              key={i}
              className="mx-5 text-[11px] font-medium tracking-[0.18em] uppercase text-[#0A0A0A] whitespace-nowrap opacity-60"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-5">
              Our Mission
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every dog deserves a safe place to call home.
            </h2>
            <div className="w-10 h-0.5 bg-[#0A0A0A] my-6" />
            <p className="text-base leading-relaxed text-[#3A3A3A] max-w-lg">
              Klyshi was born on the streets of Prishtina, where thousands of
              stray dogs navigate daily survival with no one to advocate for
              them. We build the infrastructure — local rescue networks,
              international adoption pathways, and community education — to
              change that permanently.
            </p>
            <Link href="/about" className="mt-8 inline-block text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity">
              Our Story →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-[#0A0A0A]/10">
            {STATS.map(({ number, label }) => (
              <div key={label} className="bg-[#F7F3EC] p-8">
                <p
                  className="text-4xl lg:text-5xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {number}
                </p>
                <p className="mt-2 text-xs tracking-wide text-[#6B6460] uppercase leading-relaxed">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-24 px-6 lg:px-10 bg-[#0A0A0A] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-12">
            What We Do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                num: "01",
                title: "Rescue & Rehabilitate",
                body: "Working with local shelters, vets, and volunteers to pull dogs from the streets, provide emergency medical care, and prepare them for adoption.",
              },
              {
                num: "02",
                title: "Connect Globally",
                body: "Matching Kosovo dogs with loving families across Europe and beyond. We handle transport logistics, paperwork, and post-adoption support.",
              },
              {
                num: "03",
                title: "Build Community",
                body: "Educating residents on animal welfare, running sterilisation drives, and building Kosovo's first comprehensive rescue directory.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="p-10 bg-[#0A0A0A]">
                <p className="text-[11px] tracking-[0.18em] text-white/30 mb-6">{num}</p>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DOGS ── */}
      <section className="py-24 px-6 lg:px-10 bg-[#EDE8DF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-3">
                Available Now
              </p>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Meet some of the dogs.
              </h2>
            </div>
            <Link
              href="/adopt"
              className="hidden sm:inline-block text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
            >
              See All Dogs →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Bulli",
                age: "2 yrs",
                breed: "Mixed (Lab x Shepherd)",
                status: "Available",
                color: "#C4A882",
                personality: "Playful · Social · Good with kids",
              },
              {
                name: "Lumi",
                age: "4 yrs",
                breed: "Mixed (Hound x Terrier)",
                status: "Available",
                color: "#8B7355",
                personality: "Gentle · Calm · Loves cuddles",
              },
              {
                name: "Drita",
                age: "1 yr",
                breed: "Mixed (Shepherd cross)",
                status: "Pending",
                color: "#6B6460",
                personality: "Energetic · Curious · Dog-friendly",
              },
            ].map((dog) => (
              <div key={dog.name} className="bg-[#F7F3EC] dog-card">
                {/* Photo placeholder */}
                <div
                  className="h-64 w-full flex items-end p-4"
                  style={{ backgroundColor: dog.color }}
                >
                  <span
                    className={`text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 ${
                      dog.status === "Available"
                        ? "bg-[#0A0A0A] text-[#F7F3EC]"
                        : "bg-[#C4A882] text-[#0A0A0A]"
                    }`}
                  >
                    {dog.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {dog.name}
                    </h3>
                    <span className="text-xs text-[#6B6460]">{dog.age}</span>
                  </div>
                  <p className="text-xs text-[#6B6460] mb-3">{dog.breed}</p>
                  <p className="text-xs tracking-wide text-[#3A3A3A]">{dog.personality}</p>
                  <Link
                    href="/adopt"
                    className="mt-5 inline-block text-[11px] font-semibold tracking-[0.12em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/adopt"
              className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5"
            >
              See All Dogs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#F7F3EC] border-t border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to make a difference?
          </h2>
          <p className="mt-4 text-sm text-[#6B6460] max-w-md mx-auto">
            Volunteer, donate, foster, or simply spread the word. Every action
            counts on the road to zero strays.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="inline-block bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#1A1A1A] transition-colors"
            >
              Get Involved
            </Link>
            <a
              href="mailto:woof@klyshi.org"
              className="inline-block bg-transparent border border-[#0A0A0A] text-[#0A0A0A] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#0A0A0A] hover:text-[#F7F3EC] transition-colors"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
