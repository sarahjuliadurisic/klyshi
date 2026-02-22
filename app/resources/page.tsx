"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Can I adopt a dog from Kosovo if I live in another country?",
    a: "Yes. We facilitate international adoptions to EU countries, the UK, Switzerland, and beyond. Dogs must have a microchip, valid rabies vaccination, and EU health certificate. Most families receive their dog within 4–8 weeks of being matched. Contact us at woof@klyshi.org to start the process.",
  },
  {
    q: "What does international transport involve?",
    a: "Dogs travel with certified transport coordinators via road or air. All transport partners we work with are experienced with Balkan rescue dogs. Costs vary by destination; we'll give you a full breakdown upfront. Most adoptive families in Germany or the Netherlands pay €200–350 all-in for transport.",
  },
  {
    q: "Is it safe to approach a stray dog?",
    a: "Approach cautiously and slowly. Crouch down to the dog's level. Let the dog sniff you first. Avoid direct eye contact initially — this can be perceived as a threat. Never run from a barking dog. If the dog seems injured or aggressive, contact a local rescue or vet rather than handling it yourself.",
  },
  {
    q: "How do I know if a stray dog has an owner?",
    a: "Check for a collar or ear tag. Many strays in Prishtina have been sterilised and have a notched ear from a TNR programme — this does not mean they have an owner. If you find a dog, post in local Facebook groups (Kosovo Stray Dog Network), contact the relevant shelter, or bring the dog to a vet to scan for a microchip.",
  },
  {
    q: "Can I foster a dog while it waits for adoption?",
    a: "Absolutely — fosters are the backbone of our rescue work. We provide everything the foster needs: food, vet bills, and support. Fostering requires only a safe space and time. International fostering (where a dog lives with a temporary family abroad while its adoption is finalised) is also possible in some cases.",
  },
  {
    q: "How is Klyshi funded?",
    a: "Klyshi operates on donations, fundraising events, merchandise sales, and small grants. 100% of donation funds go directly to rescue operations: vet bills, sterilisations, transport, and shelter support. Administrative costs are covered separately by our founding team.",
  },
  {
    q: "What do I do if I witness animal cruelty?",
    a: "Document it (photo or video if it is safe to do so). Report to the Kosovo Police on 192 or the Municipal Inspectorate. Contact a local rescue organisation who may have contacts within enforcement. You can also email us and we'll help connect you with the right people.",
  },
];

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#0A0A0A]/12">
      <button
        className="w-full flex items-start justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium leading-snug pr-4">{q}</span>
        <span className="shrink-0 text-xl font-light leading-none mt-0.5 text-[#6B6460]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-[#3A3A3A] max-w-2xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
            Knowledge Base
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Resources
          </h1>
          <p className="mt-5 text-base text-[#6B6460] max-w-xl leading-relaxed">
            Practical guides for anyone who finds, helps, or cares for a stray
            dog in Kosovo — from the first encounter to full recovery.
          </p>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mt-8" />
        </div>
      </section>

      {/* ── FOUND A STRAY? ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="bg-[#0A0A0A] text-[#F7F3EC] p-8 lg:p-10">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">
                  Guide 01
                </p>
                <h2
                  className="text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  What to do when you find a stray
                </h2>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  Finding a stray dog can be overwhelming. Here's a clear,
                  step-by-step approach.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="space-y-8">
                {[
                  {
                    n: "01",
                    title: "Stay calm and assess from a distance",
                    body: "Before approaching, watch the dog for a moment. Is it injured? Aggressive? Has it got puppies nearby? Your safety comes first. A frightened dog in pain may bite even if normally friendly.",
                  },
                  {
                    n: "02",
                    title: "Approach slowly, let the dog come to you",
                    body: "Crouch low, avert your gaze slightly, and extend a hand low to the ground. Speak in a calm, low tone. Don't force contact. If the dog is too scared or in pain, keep your distance and call for help instead.",
                  },
                  {
                    n: "03",
                    title: "Provide water first",
                    body: "If you have water, offer it in a cupped hand or a container. Dehydration is common in strays, especially in summer. Avoid feeding large amounts immediately — sudden feeding after starvation can cause bloat.",
                  },
                  {
                    n: "04",
                    title: "Check for ID",
                    body: "Look for a collar, ear notch (common in TNR-programme dogs), or tattoo. Take note of distinguishing features: colour, size, approximate breed, and location. This helps when reporting.",
                  },
                  {
                    n: "05",
                    title: "Contact a local rescue or vet",
                    body: "Use our Directory to find the nearest shelter or rescue group. Send them a photo and your location. If the dog is injured, try to get it to a vet as soon as possible — most Prishtina vets will treat strays for a reduced fee or free if you explain the situation.",
                  },
                  {
                    n: "06",
                    title: "Post on local rescue networks",
                    body: "Share in Kosovo dog rescue groups on Facebook and Instagram. Include: a photo, approximate location, condition of the dog, and your contact details. The network in Prishtina is active and someone can often help within hours.",
                  },
                  {
                    n: "07",
                    title: "If you can, foster temporarily",
                    body: "Even a night in a safe outdoor space with water and food can be the difference between life and death for an injured dog. You don't need to commit long-term — just giving a dog a few days' safety while a permanent solution is found is a huge act of kindness.",
                  },
                ].map(({ n, title, body }) => (
                  <li key={n} className="flex gap-6">
                    <span
                      className="shrink-0 text-3xl font-bold text-[#0A0A0A]/15 leading-none mt-0.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-1">{title}</h3>
                      <p className="text-sm leading-relaxed text-[#3A3A3A]">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── AGE ESTIMATION ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#EDE8DF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="bg-[#C4A882] p-8 lg:p-10">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0A0A0A]/50 mb-4">
                  Guide 02
                </p>
                <h2
                  className="text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  How to estimate a dog's age
                </h2>
                <p className="mt-4 text-sm text-[#0A0A0A]/60 leading-relaxed">
                  Without papers, vets use physical clues to age a dog. Here's
                  what to look for.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              {[
                {
                  category: "Teeth",
                  items: [
                    { label: "Baby teeth", detail: "Present 3–6 weeks. Sharp, white, tiny." },
                    { label: "Adult teeth fully in", detail: "By 7 months. Bright white, sharp points." },
                    { label: "Light tartar, minor wear", detail: "1–3 years." },
                    { label: "Moderate tartar, blunted tips", detail: "3–5 years." },
                    { label: "Heavy tartar, worn or missing teeth", detail: "5+ years." },
                  ],
                },
                {
                  category: "Eyes",
                  items: [
                    { label: "Clear, bright, sharp", detail: "Under 3 years." },
                    { label: "Slight cloudiness", detail: "6–8 years. Not to be confused with cataracts, which can appear at any age." },
                    { label: "Pronounced cloudiness or lens hardening", detail: "8+ years." },
                  ],
                },
                {
                  category: "Coat & Body",
                  items: [
                    { label: "Shiny, soft coat, no grey", detail: "Young adult (under 4–5 years)." },
                    { label: "Muzzle greying", detail: "Often begins around 5–7 years, earlier in larger breeds." },
                    { label: "Muscle tone loss, thinner skin", detail: "Senior (7+ years in most breeds)." },
                  ],
                },
              ].map(({ category, items }) => (
                <div key={category}>
                  <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6B6460] mb-3">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {items.map(({ label, detail }) => (
                      <div key={label} className="flex gap-3 text-sm">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0A0A0A] mt-[6px]" />
                        <p>
                          <span className="font-medium">{label}</span>
                          <span className="text-[#6B6460]"> — {detail}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <p className="text-xs text-[#6B6460] pt-2">
                * Age estimates without prior history have a margin of ±1–2 years. A vet examination can provide greater accuracy using bone x-rays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BASIC FIRST AID ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="border border-[#0A0A0A] p-8 lg:p-10">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
                  Guide 03
                </p>
                <h2
                  className="text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Basic first aid for strays
                </h2>
                <p className="mt-4 text-sm text-[#6B6460] leading-relaxed">
                  These are stabilisation steps only. Always seek professional
                  veterinary care as soon as possible.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-10">
                {[
                  {
                    title: "Wounds & Cuts",
                    steps: [
                      "Apply gentle pressure with a clean cloth to stop bleeding.",
                      "Do not remove large embedded objects — this can worsen bleeding.",
                      "Clean small wounds gently with clean water (not hydrogen peroxide on deep wounds).",
                      "Cover loosely with a clean bandage if the dog tolerates it.",
                      "Get to a vet — wounds in strays often require antibiotics to prevent infection.",
                    ],
                  },
                  {
                    title: "Dehydration",
                    steps: [
                      "Signs: sunken eyes, dry gums, skin that doesn't spring back when pinched.",
                      "Offer small amounts of clean water frequently — don't let the dog drink a large amount at once.",
                      "Do not give sports drinks or milk.",
                      "Shade and cool environment are essential in summer.",
                      "Severe dehydration requires IV fluids — see a vet urgently.",
                    ],
                  },
                  {
                    title: "Shock",
                    steps: [
                      "Signs: pale gums, rapid shallow breathing, weak pulse, extreme lethargy.",
                      "Keep the dog warm and as still as possible.",
                      "Do not give food or water if you suspect internal injuries.",
                      "Transport carefully — use a makeshift stretcher (blanket) for larger dogs.",
                      "This is a veterinary emergency. Contact a vet immediately.",
                    ],
                  },
                  {
                    title: "Suspected Poisoning",
                    steps: [
                      "Do NOT induce vomiting unless instructed by a vet.",
                      "Note any substances the dog may have consumed.",
                      "Keep the dog calm and warm.",
                      "Contact a vet or the Kosovo Animal Poison Helpline immediately.",
                      "Bring a sample of the suspected poison if safe to do so.",
                    ],
                  },
                ].map(({ title, steps }) => (
                  <div key={title}>
                    <h3
                      className="text-lg font-bold mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {title}
                    </h3>
                    <ol className="space-y-2">
                      {steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#3A3A3A]">
                          <span className="shrink-0 text-[11px] font-bold text-[#0A0A0A]/30 mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#0A0A0A] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky top-28">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">
                  FAQ
                </p>
                <h2
                  className="text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-sm text-white/50 leading-relaxed">
                  Still have questions? Email us at woof@klyshi.org and we'll
                  get back to you within 48 hours.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-b border-white/10">
                {FAQ_ITEMS.map(({ q, a }) => (
                  <div key={q} className="border-t border-white/10">
                    <AccordionDark q={q} a={a} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AccordionDark({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="w-full flex items-start justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[15px] font-medium leading-snug text-white/85">{q}</span>
        <span className="shrink-0 text-xl font-light text-white/30 mt-0.5">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-white/55 max-w-2xl">{a}</p>
      )}
    </>
  );
}
