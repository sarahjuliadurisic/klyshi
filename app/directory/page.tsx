"use client";

import { useState, useMemo } from "react";

type Role = "Shelter" | "Rescue" | "Vet Clinic" | "TNR Programme" | "Transport";

interface OrgEntry {
  name: string;
  role: Role;
  address: string;
  phone: string;
  email?: string;
  instagram?: string;
  hours?: string;
  notes?: string;
}

const ORGS: OrgEntry[] = [
  {
    name: "Strehimi i Qenve Prishtinë",
    role: "Shelter",
    address: "Rr. Ukshin Hoti, Prishtinë",
    phone: "+383 44 123 456",
    email: "shelter@prishtina.org",
    hours: "Mon–Fri 08:00–16:00, Sat 09:00–13:00",
    notes: "Municipal shelter. Accepts injured or abandoned dogs. Limited capacity.",
  },
  {
    name: "Kopsht i Kafshëve",
    role: "Shelter",
    address: "Rr. Agim Ramadani 14, Prishtinë",
    phone: "+383 49 234 567",
    email: "info@kopshtikafsheve.org",
    instagram: "@kopshtikafsheve",
    hours: "Daily 09:00–17:00",
    notes: "Private shelter. Runs sterilisation campaigns monthly.",
  },
  {
    name: "SOS Kosovo Dogs",
    role: "Rescue",
    address: "Prishtinë (mobile rescue)",
    phone: "+383 44 345 678",
    email: "sos@kosovadogs.net",
    instagram: "@sos_kosovadogs",
    notes: "Emergency rescue team. Active 7 days a week. First responder for road injuries.",
  },
  {
    name: "Balkan Paws Network",
    role: "Rescue",
    address: "Rr. Bill Klinton 7, Prishtinë",
    phone: "+383 45 456 789",
    instagram: "@balkanpaws",
    notes: "Coordinates international adoptions. Strong network across DE, NL, UK.",
  },
  {
    name: "Qendra Veterinare Dr. Leka",
    role: "Vet Clinic",
    address: "Rr. Nëna Terezë 22, Prishtinë",
    phone: "+383 38 501 234",
    hours: "Mon–Sat 08:00–20:00, Sun 10:00–14:00 (emergency only)",
    notes: "Reduced rates for rescuers. Issues EU health certificates for adoption travel.",
  },
  {
    name: "Klinika Veterinare Fauna",
    role: "Vet Clinic",
    address: "Rr. Dardania 44, Prishtinë",
    phone: "+383 38 602 345",
    email: "fauna@vet.ks",
    hours: "Mon–Fri 08:30–19:00, Sat 09:00–14:00",
    notes: "Specialises in trauma and surgery. Partners with SOS Kosovo Dogs.",
  },
  {
    name: "Animal Aid Kosovo",
    role: "Vet Clinic",
    address: "Rr. Ismail Qemali 3, Prishtinë",
    phone: "+383 44 567 890",
    email: "hello@animalaid.ks",
    instagram: "@animalaidkosovo",
    hours: "Mon–Sun 08:00–22:00",
    notes: "24/7 emergency line. Charity rates for documented rescues.",
  },
  {
    name: "Prishtina TNR Initiative",
    role: "TNR Programme",
    address: "Prishtinë city-wide",
    phone: "+383 49 678 901",
    email: "tnr@prishtina.org",
    instagram: "@prishtinetnr",
    notes: "Trap-Neuter-Return programme operating in 8 city zones. Volunteer-run.",
  },
  {
    name: "Kosova Street Dogs e.V.",
    role: "Transport",
    address: "Prishtinë / Germany corridor",
    phone: "+49 176 12345678",
    email: "transport@kosovastreetdogs.de",
    instagram: "@kosovastreetdogs",
    notes: "Monthly transport runs: Prishtinë → München, Berlin, Hamburg. €220 avg cost.",
  },
  {
    name: "Balkan Dog Shuttle",
    role: "Transport",
    address: "Prishtinë / NL, BE, UK corridor",
    phone: "+383 44 789 012",
    email: "shuttle@balkandogs.eu",
    notes: "Bi-monthly runs to Netherlands and Belgium. Can arrange UK transfers via ferry.",
  },
  {
    name: "Fluturimi i Lirë",
    role: "Rescue",
    address: "Rr. Garibaldi 18, Prishtinë",
    phone: "+383 45 890 123",
    instagram: "@fluturimiiliree",
    notes: "Focus on puppies and mothers. Works with foster families across Kosovo.",
  },
  {
    name: "Klinika Dr. Beka",
    role: "Vet Clinic",
    address: "Rr. Ramiz Sadiku 5, Fushë Kosovë",
    phone: "+383 38 703 456",
    hours: "Mon–Fri 08:00–18:00",
    notes: "Covers the Fushë Kosovë area. Issues microchipping and vaccination records.",
  },
];

const ROLES: (Role | "All")[] = ["All", "Shelter", "Rescue", "Vet Clinic", "TNR Programme", "Transport"];

const ROLE_COLORS: Record<Role, string> = {
  Shelter: "bg-[#0A0A0A] text-[#F7F3EC]",
  Rescue: "bg-[#C4A882] text-[#0A0A0A]",
  "Vet Clinic": "bg-[#EDE8DF] text-[#0A0A0A] border border-[#0A0A0A]/20",
  "TNR Programme": "bg-[#6B6460] text-[#F7F3EC]",
  Transport: "bg-[#F7F3EC] text-[#0A0A0A] border border-[#0A0A0A]/20",
};

export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState<Role | "All">("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ORGS.filter((org) => {
      const matchRole = filterRole === "All" || org.role === filterRole;
      const matchSearch =
        !q ||
        org.name.toLowerCase().includes(q) ||
        org.role.toLowerCase().includes(q) ||
        org.address.toLowerCase().includes(q) ||
        (org.notes ?? "").toLowerCase().includes(q);
      return matchRole && matchSearch;
    });
  }, [search, filterRole]);

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
            Prishtina, Kosovo
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rescue Directory
          </h1>
          <p className="mt-5 text-base text-[#6B6460] max-w-xl leading-relaxed">
            Shelters, rescue organisations, veterinary clinics, and transport
            coordinators in and around Prishtina. Updated regularly.
          </p>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mt-8" />
        </div>
      </section>

      {/* ── SEARCH & FILTERS ── */}
      <div className="sticky top-16 lg:top-20 z-40 bg-[#F7F3EC] border-b border-[#0A0A0A]/10 px-6 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6460]"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, role, area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input pl-9 py-2.5 text-sm"
            />
          </div>

          {/* Role filters */}
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <button
                key={role}
                onClick={() => setFilterRole(role)}
                className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-2 transition-colors ${
                  filterRole === role
                    ? "bg-[#0A0A0A] text-[#F7F3EC]"
                    : "bg-transparent border border-[#0A0A0A]/25 text-[#6B6460] hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DIRECTORY CARDS ── */}
      <section className="py-12 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-[#6B6460] mb-6">
            Showing {filtered.length} of {ORGS.length} listings
          </p>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                No results found.
              </p>
              <p className="mt-2 text-sm text-[#6B6460]">
                Try a different search term or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((org) => (
                <div
                  key={org.name}
                  className="bg-white border border-[#0A0A0A]/8 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-semibold text-[15px] leading-tight flex-1">{org.name}</h2>
                    <span
                      className={`shrink-0 text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1.5 ${ROLE_COLORS[org.role]}`}
                    >
                      {org.role}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#3A3A3A]">
                    <div className="flex gap-2 items-start">
                      <svg className="shrink-0 mt-0.5 text-[#6B6460]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{org.address}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg className="shrink-0 text-[#6B6460]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.88 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                      <a href={`tel:${org.phone}`} className="hover:text-[#0A0A0A]">{org.phone}</a>
                    </div>
                    {org.email && (
                      <div className="flex gap-2 items-center">
                        <svg className="shrink-0 text-[#6B6460]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <a href={`mailto:${org.email}`} className="hover:text-[#0A0A0A]">{org.email}</a>
                      </div>
                    )}
                    {org.instagram && (
                      <div className="flex gap-2 items-center">
                        <svg className="shrink-0 text-[#6B6460]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                        </svg>
                        <span className="text-[#6B6460]">{org.instagram}</span>
                      </div>
                    )}
                    {org.hours && (
                      <div className="flex gap-2 items-start">
                        <svg className="shrink-0 mt-0.5 text-[#6B6460]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{org.hours}</span>
                      </div>
                    )}
                  </div>

                  {org.notes && (
                    <p className="text-xs text-[#6B6460] leading-relaxed border-t border-[#0A0A0A]/8 pt-3 mt-1">
                      {org.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 p-8 bg-[#EDE8DF] text-center">
            <p className="text-sm text-[#3A3A3A] mb-2">
              Know a shelter, rescue, or vet we should add?
            </p>
            <a
              href="mailto:woof@klyshi.org"
              className="text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
            >
              Submit a Listing →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
