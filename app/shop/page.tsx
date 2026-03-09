import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Shop — Klyshi",
  description:
    "Klyshi merchandise — every purchase directly supports dog rescue in Prishtina, Kosovo.",
};

const PRODUCTS = [
  {
    name: "Klyshi Classic Tee",
    description: "100% organic cotton. The rotating bone logo on a cream or black base. Unisex fit.",
    price: "€32",
    status: "coming_soon",
    color: "#EDE8DF",
  },
  {
    name: "Bone Circle Tote",
    description: "Heavy canvas tote. Screen-printed bone circle logo. Roomy enough for a leash, treats, and a whole lot of dog hair.",
    price: "€22",
    status: "coming_soon",
    color: "#C4A882",
  },
  {
    name: "Klyshi Enamel Pin",
    description: "Hard enamel, 3cm diameter. Spinning bone motif. Goes on everything.",
    price: "€9",
    status: "coming_soon",
    color: "#8B7355",
  },
  {
    name: "Support a Dog Donation",
    description: "Not merch, but the most direct way to help. Choose an amount and it goes straight to vet care and rescue ops.",
    price: "Any amount",
    status: "live",
    color: "#0A0A0A",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-4">
            Wear the Mission
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop
          </h1>
          <p className="mt-5 text-base text-[#6B6460] max-w-xl leading-relaxed">
            Everything here directly funds Klyshi's rescue operations in Kosovo.
            Our first collection is almost ready.
          </p>
          <div className="w-10 h-0.5 bg-[#0A0A0A] mt-8" />
        </div>
      </section>

      {/* ── COMING SOON BANNER ── */}
      <section className="py-10 px-6 lg:px-10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo size={44} textSize="text-xs" dark />
            <div>
              <p className="text-[#F7F3EC] text-sm font-semibold">
                Collection 01 — Launching Spring 2025
              </p>
              <p className="text-white/40 text-xs mt-0.5">
                Sign up to be notified when we go live.
              </p>
            </div>
          </div>
          <a
            href="mailto:woof@klyshi.org?subject=Shop Launch Notification"
            className="shrink-0 bg-[#F7F3EC] text-[#0A0A0A] text-[11px] font-semibold tracking-[0.14em] uppercase px-6 py-3 hover:bg-[#EDE8DF] transition-colors"
          >
            Notify Me →
          </a>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="bg-white border border-[#0A0A0A]/8 flex flex-col">
              {/* Product image placeholder */}
              <div
                className="h-56 w-full flex items-center justify-center relative"
                style={{ backgroundColor: product.color }}
              >
                {product.name === "Support a Dog Donation" ? (
                  <Logo size={80} textSize="text-base" dark />
                ) : (
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold opacity-20"
                      style={{
                        fontFamily: "'Dancing Script', cursive",
                        color: product.color === "#EDE8DF" ? "#0A0A0A" : "#F7F3EC",
                      }}
                    >
                      KLYSHI
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[9px] font-bold tracking-[0.1em] uppercase px-2.5 py-1.5 ${
                      product.status === "live"
                        ? "bg-[#F7F3EC] text-[#0A0A0A]"
                        : "bg-[#0A0A0A]/60 text-[#F7F3EC]"
                    }`}
                  >
                    {product.status === "live" ? "Available" : "Coming Soon"}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2
                  className="text-lg font-bold mb-2 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h2>
                <p className="text-xs text-[#6B6460] leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#0A0A0A]/8">
                  <span className="font-semibold text-sm">{product.price}</span>
                  {product.status === "live" ? (
                    <a
                      href="https://ko-fi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold tracking-[0.12em] uppercase bg-[#0A0A0A] text-[#F7F3EC] px-4 py-2 hover:bg-[#1A1A1A] transition-colors"
                    >
                      Donate →
                    </a>
                  ) : (
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#6B6460]">
                      Notify me
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY SHOP ── */}
      <section className="py-20 px-6 lg:px-10 bg-[#EDE8DF]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6B6460] mb-6">
            Every Purchase Counts
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Buy a tee. Fund a vet bill.
          </h2>
          <p className="mt-5 text-sm text-[#3A3A3A] leading-relaxed max-w-lg mx-auto">
            Profit from every Klyshi purchase goes directly into our rescue
            fund. A single tee sale covers a dog's microchipping and first
            vaccination. A tote bag covers an emergency vet visit. A pin badge
            covers a day of food for a shelter dog.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#0A0A0A]/10">
            {[
              { item: "Tee or hoodie", funds: "Microchip + vaccination" },
              { item: "Tote bag", funds: "Emergency vet consultation" },
              { item: "Pin or sticker", funds: "One day's food & shelter care" },
            ].map(({ item, funds }) => (
              <div key={item} className="bg-[#EDE8DF] p-8">
                <p className="font-semibold text-sm mb-1">{item}</p>
                <p className="text-[11px] tracking-wide text-[#6B6460] uppercase">{funds}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 lg:px-10 bg-[#F7F3EC] border-t border-[#0A0A0A]/10 text-center">
        <p className="text-sm text-[#3A3A3A] mb-6">
          Can't wait for the shop? Donate directly to our rescue fund.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://ko-fi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0A0A0A] text-[#F7F3EC] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#1A1A1A] transition-colors"
          >
            Donate Now
          </a>
          <Link
            href="/adopt"
            className="inline-block border border-[#0A0A0A] text-[#0A0A0A] text-[11px] font-semibold tracking-[0.14em] uppercase px-10 py-4 hover:bg-[#0A0A0A] hover:text-[#F7F3EC] transition-colors"
          >
            Meet the Dogs
          </Link>
        </div>
      </section>
    </>
  );
}
