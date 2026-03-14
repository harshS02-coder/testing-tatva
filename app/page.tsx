import Image from "next/image";

const highlights = [
  "Free shipping over $120",
  "2-year warranty on signature gear",
  "Designed for travel, work, and home",
];

const products = [
  {
    name: "Aero Carry Pack",
    price: "$148",
    description: "A modular commuter bag with hidden pockets, weatherproof fabric, and a laptop sleeve.",
    image: "/products/aero-carry-pack.svg",
    accent: "Graphite / Sand",
  },
  {
    name: "Pulse Bottle",
    price: "$42",
    description: "Double-wall steel bottle with a soft-grip finish and a leakproof magnetic cap.",
    image: "/products/pulse-bottle.svg",
    accent: "Mist Blue",
  },
  {
    name: "Halo Desk Lamp",
    price: "$96",
    description: "Warm LED lighting with touch dimming and a low-profile silhouette for clean desks.",
    image: "/products/halo-desk-lamp.svg",
    accent: "Soft Brass",
  },
  {
    name: "Cloud Lounge Chair",
    price: "$320",
    description: "A sculpted accent chair with textured fabric and compact dimensions for small rooms.",
    image: "/products/cloud-lounge-chair.svg",
    accent: "Oat / Walnut",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f2e8_0%,#fffdf8_42%,#ffffff_100%)] text-stone-900">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-14 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="flex flex-col justify-between gap-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
                Arc Atelier
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Refined essentials for city living.
              </p>
            </div>
            <a
              href="#featured-products"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
            >
              Shop the drop
            </a>
          </div>

          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-amber-300/70 bg-amber-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-900">
              Spring collection 2026
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-none tracking-[-0.04em] text-stone-950 sm:text-6xl lg:text-7xl">
                Designed to sell the quiet luxury of everyday objects.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Discover polished carry goods, desk objects, and lounge accents crafted for people who want fewer things, but better ones.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#featured-products"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
              >
                Explore featured products
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-900"
              >
                Why customers switch
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-stone-200/70 bg-white/70 p-4 shadow-[0_10px_30px_rgba(28,25,23,0.06)] backdrop-blur"
                >
                  <p className="text-sm font-medium leading-6 text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="story"
            className="grid gap-4 rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-6 text-stone-50 sm:grid-cols-3"
          >
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">12k+</p>
              <p className="mt-2 text-sm text-stone-300">Orders delivered across premium home and office collections.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">4.9/5</p>
              <p className="mt-2 text-sm text-stone-300">Average review score from customers who reordered in 90 days.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">48 hrs</p>
              <p className="mt-2 text-sm text-stone-300">Dispatch window for stocked pieces across the latest release.</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-8 top-6 h-24 w-24 rounded-full bg-amber-200/70 blur-2xl" />
          <div className="absolute bottom-14 right-8 h-28 w-28 rounded-full bg-stone-300/70 blur-3xl" />

          <div className="relative w-full rounded-[2.5rem] border border-stone-200 bg-[linear-gradient(160deg,#fffdf8_0%,#f3ede1_100%)] p-5 shadow-[0_30px_90px_rgba(28,25,23,0.12)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-4 shadow-[0_16px_40px_rgba(28,25,23,0.08)] sm:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Editor&apos;s pick</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-950">Aero Carry Pack</h2>
                  </div>
                  <p className="rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-stone-50">$148</p>
                </div>
                <Image
                  src="/products/aero-carry-pack.svg"
                  alt="Aero Carry Pack product preview"
                  width={920}
                  height={620}
                  priority
                  className="h-auto w-full rounded-[1.5rem]"
                />
              </div>

              <div className="rounded-[2rem] bg-[#f6efe4] p-4 shadow-[0_16px_40px_rgba(28,25,23,0.08)]">
                <Image
                  src="/products/pulse-bottle.svg"
                  alt="Pulse Bottle product preview"
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-[1.5rem]"
                />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Pulse Bottle</p>
                    <p className="text-sm text-stone-600">Travel hydration</p>
                  </div>
                  <span className="text-sm font-semibold text-stone-900">$42</span>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#ece8df] p-4 shadow-[0_16px_40px_rgba(28,25,23,0.08)]">
                <Image
                  src="/products/halo-desk-lamp.svg"
                  alt="Halo Desk Lamp product preview"
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-[1.5rem]"
                />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Halo Desk Lamp</p>
                    <p className="text-sm text-stone-600">Focused ambient light</p>
                  </div>
                  <span className="text-sm font-semibold text-stone-900">$96</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products" className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Featured products</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl">
              High-conversion product blocks with image-led storytelling.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            Each card combines a clean image, one-line category cue, strong price anchor, and concise detail copy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_18px_45px_rgba(28,25,23,0.07)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(28,25,23,0.12)]"
            >
              <div className="bg-[linear-gradient(180deg,#f7f2e8_0%,#efe6d9_100%)] p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={640}
                  className="h-auto w-full rounded-[1.5rem]"
                />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">{product.accent}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-stone-950">{product.name}</h3>
                  </div>
                  <p className="text-lg font-semibold text-stone-950">{product.price}</p>
                </div>
                <p className="text-sm leading-7 text-stone-600">{product.description}</p>
                <button className="w-full rounded-full bg-stone-950 px-4 py-3 text-sm font-semibold text-stone-50 transition group-hover:bg-stone-800">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
