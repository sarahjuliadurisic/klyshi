"use client";

import { useState } from "react";

type FormType = "volunteer" | "partner" | null;

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Thank you. We'll be in touch soon.
        </p>
        <p className="text-sm text-[#6B6460]">
          Expect a reply within 3–5 working days. Check your spam folder just in case.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fname">First Name *</label>
          <input id="fname" type="text" required placeholder="Ardita" className="form-input" />
        </div>
        <div>
          <label htmlFor="lname">Last Name *</label>
          <input id="lname" type="text" required placeholder="Berisha" className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="email">Email Address *</label>
        <input id="email" type="email" required placeholder="your@email.com" className="form-input" />
      </div>

      <div>
        <label htmlFor="location">Your Location *</label>
        <input id="location" type="text" required placeholder="City, Country" className="form-input" />
      </div>

      <div>
        <label htmlFor="role">How would you like to help? *</label>
        <select id="role" required className="form-input">
          <option value="">Select an option</option>
          <option>Foster a dog in Kosovo</option>
          <option>Foster a dog internationally</option>
          <option>Volunteer on the ground in Prishtina</option>
          <option>Help with social media / content</option>
          <option>Help with translation (Albanian, German, other)</option>
          <option>Transport coordination</option>
          <option>Fundraising</option>
          <option>Photography / videography</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="availability">Availability</label>
        <input id="availability" type="text" placeholder="e.g. Weekends, evenings, flexible" className="form-input" />
      </div>

      <div>
        <label htmlFor="message">Tell us a bit about yourself</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Any relevant experience with animals, languages you speak, or anything else we should know..."
          className="form-input resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-block bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#1A1A1A] transition-colors"
      >
        Submit Application
      </button>
    </form>
  );
}

function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Enquiry received. Thank you.
        </p>
        <p className="text-sm text-[#6B6460]">
          We review partnership enquiries weekly. We'll respond within 5 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="org">Organisation Name *</label>
        <input id="org" type="text" required placeholder="Rescue Dogs Berlin e.V." className="form-input" />
      </div>

      <div>
        <label htmlFor="contact-name">Contact Person *</label>
        <input id="contact-name" type="text" required placeholder="Your name" className="form-input" />
      </div>

      <div>
        <label htmlFor="contact-email">Email Address *</label>
        <input id="contact-email" type="email" required placeholder="contact@organisation.org" className="form-input" />
      </div>

      <div>
        <label htmlFor="country">Country of Operation *</label>
        <input id="country" type="text" required placeholder="e.g. Germany" className="form-input" />
      </div>

      <div>
        <label htmlFor="partnership-type">Type of Partnership *</label>
        <select id="partnership-type" required className="form-input">
          <option value="">Select an option</option>
          <option>Adoption partner (receive dogs for rehoming)</option>
          <option>Transport partner</option>
          <option>Vet / medical support</option>
          <option>Fundraising or grant partnership</option>
          <option>Media or communications collaboration</option>
          <option>Corporate / brand sponsorship</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="partner-message">Tell us about your organisation</label>
        <textarea
          id="partner-message"
          rows={4}
          placeholder="Your capacity, current work, and how you'd like to work with Klyshi..."
          className="form-input resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-block bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#1A1A1A] transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}

export default function GetInvolvedPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
            Join the Network
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get Involved
          </h1>
          <p className="mt-5 text-base text-[#6B6460] max-w-xl leading-relaxed">
            There are many ways to support Klyshi's work — from fostering or
            volunteering in Prishtina, to donating, spreading the word, or
            partnering from wherever you are in the world.
          </p>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mt-8" />
        </div>
      </section>

      {/* ── OPTIONS GRID ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Donate */}
            <div className="bg-[#0A0A0A] text-[#F7F3EC] p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-white/40 mb-4">01</p>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Donate
                </h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Every donation goes directly to vet bills, sterilisations,
                  emergency rescue operations, and transport costs. Even a
                  small monthly contribution funds life-changing care.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <a
                  href="https://ko-fi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-[#0A0A0A] text-[11px] font-semibold tracking-[0.14em] uppercase py-3.5 hover:bg-[#F7F3EC] transition-colors"
                >
                  Donate Once
                </a>
                <a
                  href="https://ko-fi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-white/40 text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase py-3.5 hover:border-white transition-colors"
                >
                  Monthly Support
                </a>
              </div>
            </div>

            {/* Volunteer */}
            <div className="bg-[#EDE8DF] p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#6B6460] mb-4">02</p>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Volunteer
                </h2>
                <p className="text-sm text-[#3A3A3A] leading-relaxed">
                  We need hands in Prishtina and remote support globally.
                  Fosters, transport helpers, translators, social media
                  managers, photographers — all welcome.
                </p>
              </div>
              <button
                onClick={() => setActiveForm(activeForm === "volunteer" ? null : "volunteer")}
                className="mt-8 bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase py-3.5 hover:bg-[#1A1A1A] transition-colors"
              >
                {activeForm === "volunteer" ? "Close Form ↑" : "Apply to Volunteer →"}
              </button>
            </div>

            {/* Foster */}
            <div className="bg-[#C4A882] p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#0A0A0A]/40 mb-4">03</p>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Foster
                </h2>
                <p className="text-sm text-[#0A0A0A]/65 leading-relaxed">
                  Fostering saves lives. Open your home to a dog while they
                  wait for adoption. We cover all vet costs and provide full
                  support. Available in Kosovo and internationally.
                </p>
              </div>
              <a
                href="mailto:woof@klyshi.org?subject=Foster Enquiry"
                className="mt-8 block text-center bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase py-3.5 hover:bg-[#1A1A1A] transition-colors"
              >
                Enquire About Fostering →
              </a>
            </div>

            {/* Partner */}
            <div className="border border-[#0A0A0A] p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#6B6460] mb-4">04</p>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Partner
                </h2>
                <p className="text-sm text-[#3A3A3A] leading-relaxed">
                  We work with shelters, rescues, vets, transport coordinators,
                  brands, and corporates. If you share our mission, let's build
                  something together.
                </p>
              </div>
              <button
                onClick={() => setActiveForm(activeForm === "partner" ? null : "partner")}
                className="mt-8 bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase py-3.5 hover:bg-[#1A1A1A] transition-colors"
              >
                {activeForm === "partner" ? "Close Form ↑" : "Partnership Enquiry →"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INLINE FORMS ── */}
      {activeForm === "volunteer" && (
        <section className="py-16 px-6 lg:px-10 bg-[#EDE8DF] border-t border-[#0A0A0A]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2
                className="text-2xl lg:text-3xl font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Volunteer Application
              </h2>
              <p className="mt-3 text-sm text-[#6B6460] leading-relaxed">
                Tell us about yourself and we'll find the right fit for your
                skills and availability.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <VolunteerForm />
            </div>
          </div>
        </section>
      )}

      {activeForm === "partner" && (
        <section className="py-16 px-6 lg:px-10 bg-[#EDE8DF] border-t border-[#0A0A0A]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2
                className="text-2xl lg:text-3xl font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Partnership Enquiry
              </h2>
              <p className="mt-3 text-sm text-[#6B6460] leading-relaxed">
                We welcome collaborations of all kinds — from formal MoUs to
                informal referral networks.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <PartnerForm />
            </div>
          </div>
        </section>
      )}

      {/* ── SPREAD THE WORD ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-5">
                No time? No worries.
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Follow. Share. Tell a friend.
              </h2>
              <div className="w-8 h-px bg-[#0A0A0A] my-6" />
              <p className="text-sm leading-relaxed text-[#3A3A3A] max-w-lg">
                Sometimes the most powerful thing you can do is share a dog's
                story. Follow us on Instagram and Facebook, share the dogs
                you love, and help us reach the right families. Word of mouth
                has placed more dogs than almost anything else we do.
              </p>
              <div className="mt-8 flex gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Instagram →
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Facebook →
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            <div className="bg-[#EDE8DF] p-10">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-5">
                Direct contact
              </p>
              <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Questions?
              </p>
              <p className="text-sm text-[#3A3A3A] leading-relaxed mb-6">
                We're a small team and we read every message personally.
                Whether you want to adopt, volunteer, donate, or simply ask
                about a dog you saw on our page — we'd love to hear from you.
              </p>
              <a
                href="mailto:woof@klyshi.org"
                className="text-[11px] font-semibold tracking-[0.14em] uppercase border-b border-[#0A0A0A] pb-0.5 hover:opacity-60 transition-opacity"
              >
                woof@klyshi.org →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
