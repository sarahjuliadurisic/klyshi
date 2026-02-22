import Link from "next/link";

export const metadata = {
  title: "About — Klyshi",
  description:
    "The story behind Klyshi, the problem we're solving, and the vision driving our work in Prishtina, Kosovo.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-20 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
            Our Story
          </p>
          <h1
            className="text-5xl lg:text-7xl font-bold leading-[1.02]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We started on a
            <br />
            <em>street corner in Prishtina.</em>
          </h1>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mt-8" />
        </div>
      </section>

      {/* ── POLLY'S STORY ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky top-28">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460]">
                01 — The Story
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Polly & the dog who changed everything
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.85] text-[#2A2A2A]">
              <p>
                Klyshi was founded by Polly, a Prishtina-born advocate who spent
                years watching the city's stray dog population grow while
                resources to help them shrank. It started simply: feeding a
                small family of strays near her apartment block, then noticing
                more and more dogs appearing, thinner each winter, pups born
                into cold streets with no one waiting for them.
              </p>
              <p>
                One dog in particular — a scruffy, limping mixed-breed she
                called Klyshi (Albanian slang for a loveable rogue) — became the
                catalyst. After nursing him back to health and eventually finding
                him a home in Germany through a network of international
                volunteers, Polly realised something important: the system for
                getting Kosovo dogs to safety was almost entirely informal,
                fragmented, and exhausting to navigate.
              </p>
              <p>
                She decided to build something better. Not just another rescue
                account, but proper infrastructure: a directory, an adoption
                pathway, educational resources, and the community connections to
                make it sustainable long-term.
              </p>
              <p>
                Klyshi the nonprofit was registered in 2023. The dog Klyshi now
                lives happily in Munich. He has his own Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#0A0A0A] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky top-28">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">
                02 — The Problem
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kosovo's stray crisis is real, urgent, and solvable.
            </h2>

            <div className="space-y-5 text-[15px] leading-[1.85] text-white/75">
              <p>
                Kosovo is home to an estimated 4,000+ stray dogs in Prishtina
                alone, with thousands more in smaller cities and rural areas.
                Decades of inadequate policy, cultural attitudes inherited from
                communist-era city management, and chronically underfunded
                municipal shelters have created a humanitarian and animal
                welfare crisis that neither local authorities nor international
                NGOs have fully addressed.
              </p>
              <p>
                Dogs are routinely poisoned in unofficial culls, euthanised in
                overcrowded shelters, or simply left to fend for themselves
                through harsh Balkan winters. Puppies are born in rubble and
                car parks. Injured dogs wait days for medical attention that
                often never arrives.
              </p>
              <p>
                Meanwhile, demand for rescue dogs in Western Europe and North
                America has never been higher. Hundreds of thousands of families
                across Germany, the UK, the Netherlands, Switzerland, and
                beyond specifically seek to adopt dogs from difficult
                circumstances — yet the pipeline connecting Kosovo dogs to those
                families is slow, opaque, and poorly supported.
              </p>
            </div>

            {/* Problem stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
              {[
                { stat: "4,000+", sub: "Strays in Prishtina" },
                { stat: "~60%", sub: "Shelter capacity exceeded" },
                { stat: "1 in 10", sub: "Dogs successfully rehomed" },
              ].map(({ stat, sub }) => (
                <div key={sub} className="bg-[#0A0A0A] p-8">
                  <p
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat}
                  </p>
                  <p className="mt-2 text-xs text-white/40 uppercase tracking-wide">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE BUILDING ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#EDE8DF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky top-28">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460]">
                03 — What We're Building
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-10 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The infrastructure Kosovo's dogs have always needed.
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "A Rescue Directory",
                  body: "The first comprehensive, up-to-date directory of shelters, rescue organisations, and veterinary clinics across Prishtina and Kosovo — in Albanian, English, and German. One place to find help, report a stray, or connect with experienced rescuers.",
                },
                {
                  title: "International Adoption Pathways",
                  body: "Clear, legal, step-by-step frameworks for international adoptions. We partner with transport coordinators, certified vets for health certificates, and receiving families to make the process as smooth as crossing any other border.",
                },
                {
                  title: "Community Education",
                  body: "Resources for residents who find strays, guidance on basic first aid, age estimation, and responsible feeding. We run workshops and collaborate with schools to shift cultural attitudes toward dogs over the long term.",
                },
                {
                  title: "Sterilisation Partnerships",
                  body: "Working with local vets and the Prishtina municipality to fund and coordinate large-scale TNR (Trap-Neuter-Return) campaigns — the only humane, evidence-based route to reducing the stray population sustainably.",
                },
              ].map(({ title, body }, i) => (
                <div key={title} className="flex gap-6">
                  <div className="shrink-0 w-px bg-[#0A0A0A]/20 relative">
                    <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
                  </div>
                  <div className="pb-8">
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#3A3A3A]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VISION ── */}
      <section className="py-24 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-6">
            04 — Our Vision
          </p>
          <blockquote
            className="text-3xl lg:text-5xl font-bold leading-[1.15] italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "A Kosovo where no dog is born without a future. A world where the
            border between a dog who needs a home and a family who needs a dog
            is no barrier at all."
          </blockquote>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mx-auto mt-10 mb-6" />
          <p className="text-sm text-[#6B6460]">— Polly, Founder</p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="inline-block bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#1A1A1A] transition-colors"
            >
              Join the Mission
            </Link>
            <Link
              href="/adopt"
              className="inline-block border border-[#0A0A0A] text-[#0A0A0A] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#0A0A0A] hover:text-[#F7F3EC] transition-colors"
            >
              Adopt a Dog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
