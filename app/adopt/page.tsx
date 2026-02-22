"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "Available" | "Pending" | "Adopted";
type Size = "Small" | "Medium" | "Large";

interface Dog {
  name: string;
  age: string;
  breed: string;
  size: Size;
  personality: string[];
  status: Status;
  color: string;
  story: string;
  goodWith: string[];
}

const DOGS: Dog[] = [
  {
    name: "Bulli",
    age: "2 years",
    breed: "Lab × Shepherd mix",
    size: "Large",
    personality: ["Playful", "Confident", "Social"],
    status: "Available",
    color: "#C4A882",
    story:
      "Bulli was found as a pup wandering near Prishtina's main bus station. Despite a rough start, he has grown into an exuberant, people-loving dog who greets everyone like a long-lost friend. He's passed basic obedience training and is house-trained.",
    goodWith: ["Children", "Other dogs"],
  },
  {
    name: "Lumi",
    age: "4 years",
    breed: "Hound × Terrier mix",
    size: "Medium",
    personality: ["Gentle", "Calm", "Loyal"],
    status: "Available",
    color: "#8B7355",
    story:
      "Lumi spent two years at a municipal shelter before coming to us. She is quiet and steady — the kind of dog who curls up by your feet and lets you forget your troubles. Perfect for a calmer household or a single owner.",
    goodWith: ["Adults", "Older children", "Cats (with intro)"],
  },
  {
    name: "Drita",
    age: "1 year",
    breed: "Shepherd cross",
    size: "Medium",
    personality: ["Energetic", "Curious", "Affectionate"],
    status: "Pending",
    color: "#6B6460",
    story:
      "Drita was born on the street in Autumn 2023. Her mother was rescued during labour by one of our foster families. She has known only kindness and it shows — she bounds into every new experience with joy. Currently pending with a family in Switzerland.",
    goodWith: ["Children", "Dogs"],
  },
  {
    name: "Miri",
    age: "6 years",
    breed: "Mixed breed",
    size: "Small",
    personality: ["Calm", "Independent", "Sweet"],
    status: "Available",
    color: "#A0896C",
    story:
      "Miri was surrendered by a family who were leaving Kosovo and couldn't take her. She is perfectly housetrained, walks beautifully on a lead, and has an unshakeable sense of dignity. She deserves a quiet home where she's appreciated.",
    goodWith: ["Adults", "Older children"],
  },
  {
    name: "Bora",
    age: "8 months",
    breed: "Labrador cross",
    size: "Medium",
    personality: ["Bouncy", "Loving", "Smart"],
    status: "Available",
    color: "#D4B896",
    story:
      "Bora — meaning 'snow' in Albanian — arrived white with fear when she first came in. Three weeks of patient fostering and she's transformed. She's learning fast, loves fetch, and has an irresistible face. Will need an active home.",
    goodWith: ["Children", "Other dogs", "Active families"],
  },
  {
    name: "Toni",
    age: "3 years",
    breed: "Pointer × Beagle mix",
    size: "Medium",
    personality: ["Curious", "Athletic", "Gentle"],
    status: "Available",
    color: "#7A6A58",
    story:
      "Toni was rescued from a hunting operation where dogs are routinely abandoned after the season. He has the nose of a hound and the heart of a clown. Loves long walks, car rides, and sleeping pressed against warm humans.",
    goodWith: ["Adults", "Active families", "Dogs (after intro)"],
  },
  {
    name: "Hana",
    age: "5 years",
    breed: "Mixed breed (Akita type)",
    size: "Large",
    personality: ["Loyal", "Majestic", "Independent"],
    status: "Available",
    color: "#9B8470",
    story:
      "Hana is the queen of the rescue. Dignified, beautiful, and deeply bonded to her trusted humans. She needs an experienced owner who can give her time and consistency. In return, you get the most devoted companion imaginable.",
    goodWith: ["Adults", "Confident dogs"],
  },
  {
    name: "Bardhë",
    age: "2.5 years",
    breed: "Husky × Mixed breed",
    size: "Large",
    personality: ["Communicative", "Energetic", "Funny"],
    status: "Adopted",
    color: "#B0A090",
    story:
      "Bardhë (meaning 'white') is famously vocal and has been known to howl entire conversations. He was adopted in January 2025 and now lives in Hamburg. He sends his regards via his owner's Instagram account.",
    goodWith: ["Experienced owners", "Active families"],
  },
  {
    name: "Zana",
    age: "1.5 years",
    breed: "Border Collie cross",
    size: "Medium",
    personality: ["Intelligent", "Focused", "Playful"],
    status: "Pending",
    color: "#887060",
    story:
      "Zana is the smartest dog we've had in the programme. She learnt sit, down, stay, and leave-it in a single weekend of training. She needs a dedicated owner who can channel her brain and energy. Currently pending with a family in the Netherlands.",
    goodWith: ["Active families", "Experienced owners"],
  },
];

const STATUS_STYLES: Record<Status, string> = {
  Available: "bg-[#0A0A0A] text-[#F7F3EC]",
  Pending: "bg-[#C4A882] text-[#0A0A0A]",
  Adopted: "bg-transparent text-[#6B6460] border border-[#6B6460]",
};

const FILTERS: (Status | "All")[] = ["All", "Available", "Pending", "Adopted"];

export default function AdoptPage() {
  const [activeFilter, setActiveFilter] = useState<Status | "All">("All");
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  const filtered =
    activeFilter === "All"
      ? DOGS
      : DOGS.filter((d) => d.status === activeFilter);

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
            Kosovo Dogs Looking for Homes
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Adopt
          </h1>
          <p className="mt-5 text-base text-[#6B6460] max-w-xl leading-relaxed">
            Every dog here has been rescued, vetted, and assessed by our team.
            All are ready for a fresh start — some with families in Kosovo,
            most with families anywhere in the world.
          </p>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mt-8" />
        </div>
      </section>

      {/* ── HOW IT WORKS (brief) ── */}
      <section className="py-10 px-6 lg:px-10 bg-[#EDE8DF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { n: "01", label: "Choose your dog", detail: "Browse the profiles and reach out to express interest." },
            { n: "02", label: "We'll match you", detail: "A short questionnaire helps us ensure the right fit for you and the dog." },
            { n: "03", label: "We handle the rest", detail: "Vetting, paperwork, microchipping, health cert, and transport coordination." },
          ].map(({ n, label, detail }) => (
            <div key={n} className="py-6">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-2">{n}</p>
              <p className="font-semibold text-[15px] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{label}</p>
              <p className="text-xs text-[#6B6460]">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="sticky top-16 lg:top-20 z-40 bg-[#F7F3EC] border-b border-[#0A0A0A]/10 px-6 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-4 py-2 transition-colors ${
                activeFilter === f
                  ? "bg-[#0A0A0A] text-[#F7F3EC]"
                  : "bg-transparent border border-[#0A0A0A]/25 text-[#6B6460] hover:border-[#0A0A0A]"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="text-xs text-[#6B6460] ml-2">
            {filtered.length} dog{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── DOG GRID ── */}
      <section className="py-12 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dog) => (
            <div
              key={dog.name}
              className="bg-white border border-[#0A0A0A]/8 dog-card cursor-pointer"
              onClick={() => setSelectedDog(dog)}
            >
              {/* Photo area */}
              <div
                className="h-56 w-full relative flex items-end p-4"
                style={{ backgroundColor: dog.color }}
              >
                <span className={`text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 ${STATUS_STYLES[dog.status]}`}>
                  {dog.status}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <h2
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {dog.name}
                  </h2>
                  <span className="text-xs text-[#6B6460]">{dog.age}</span>
                </div>
                <p className="text-xs text-[#6B6460] mb-3">{dog.breed} · {dog.size}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dog.personality.map((t) => (
                    <span key={t} className="text-[9px] font-medium tracking-[0.08em] uppercase bg-[#EDE8DF] text-[#3A3A3A] px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-[#6B6460] line-clamp-2">{dog.story}</p>
                <button className="mt-5 text-[11px] font-semibold tracking-[0.12em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ADOPTION PROCESS ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#0A0A0A] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              International Adoption
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We'll get your dog to you, wherever you are.
            </h2>
            <div className="w-8 h-px bg-white/20 my-6" />
            <p className="text-sm leading-relaxed text-white/65">
              We work with certified transport coordinators and vets to handle
              all documentation: microchip, rabies vaccination, EU health
              certificate, and export papers. Most dogs reach their families
              within 4–8 weeks of matching. We stay in touch before, during,
              and after the journey.
            </p>
            <Link
              href="/get-involved"
              className="mt-8 inline-block text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-white/60 pb-0.5 hover:border-white transition-colors"
            >
              Start the Process →
            </Link>
          </div>

          <div className="space-y-px bg-white/10">
            {[
              { country: "Germany", note: "Monthly transports · €220–280" },
              { country: "Netherlands & Belgium", note: "Bi-monthly · €240–300" },
              { country: "United Kingdom", note: "Via ferry or flight · £280–380" },
              { country: "Switzerland", note: "Regular runs · CHF 280–350" },
              { country: "Austria & Scandinavia", note: "On request · variable" },
            ].map(({ country, note }) => (
              <div key={country} className="bg-[#0A0A0A] px-6 py-5 flex items-center justify-between">
                <span className="text-sm font-medium">{country}</span>
                <span className="text-xs text-white/40">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedDog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/70"
          onClick={() => setSelectedDog(null)}
        >
          <div
            className="bg-[#F7F3EC] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Photo */}
            <div className="h-56 w-full relative" style={{ backgroundColor: selectedDog.color }}>
              <button
                className="absolute top-4 right-4 bg-[#0A0A0A]/60 text-white w-8 h-8 flex items-center justify-center text-lg hover:bg-[#0A0A0A] transition-colors"
                onClick={() => setSelectedDog(null)}
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 ${STATUS_STYLES[selectedDog.status]}`}>
                  {selectedDog.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-baseline gap-3 mb-1">
                <h2
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedDog.name}
                </h2>
                <span className="text-sm text-[#6B6460]">{selectedDog.age}</span>
              </div>
              <p className="text-sm text-[#6B6460] mb-4">
                {selectedDog.breed} · {selectedDog.size}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedDog.personality.map((t) => (
                  <span key={t} className="text-[9px] font-medium tracking-[0.08em] uppercase bg-[#EDE8DF] text-[#3A3A3A] px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-[#2A2A2A] mb-6">{selectedDog.story}</p>

              <div className="mb-6">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#6B6460] mb-2">Good with</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDog.goodWith.map((g) => (
                    <span key={g} className="text-xs text-[#3A3A3A] border border-[#0A0A0A]/15 px-3 py-1">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {selectedDog.status === "Available" && (
                <a
                  href={`mailto:woof@klyshi.org?subject=Adoption Enquiry — ${selectedDog.name}`}
                  className="inline-block bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#1A1A1A] transition-colors"
                >
                  Enquire About {selectedDog.name} →
                </a>
              )}
              {selectedDog.status === "Pending" && (
                <p className="text-sm text-[#6B6460]">
                  {selectedDog.name} is currently pending with a family. Email us to join the waiting list.
                </p>
              )}
              {selectedDog.status === "Adopted" && (
                <p className="text-sm text-[#6B6460]">
                  {selectedDog.name} has found their forever home. 🐾
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
