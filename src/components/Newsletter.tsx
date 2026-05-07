import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome to the awakening", { description: `${email} added to the scroll.` });
    setEmail("");
  };

  return (
    <section id="drops" className="relative overflow-hidden bg-ink py-24 grain">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.55 0.24 25 / 0.4) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-12">
        <span className="font-jp text-6xl font-black text-blood">予告</span>
        <h2 className="display mt-4 text-4xl text-bone md:text-6xl">
          Next drop incoming.
        </h2>
        <p className="mt-4 text-sm text-bone/60 md:text-base">
          Drop 04 unlocks in 14 days. Subscribers get 24h early access + a free
          enamel pin with every order.
        </p>
        <form onSubmit={submit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 border border-bone/20 bg-ash px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:border-blood focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blood px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-bone transition hover:shadow-blood pulse-blood"
          >
            Subscribe
          </button>
        </form>
      </div>

      <footer id="contact" className="relative mt-24 border-t border-bone/10 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.25em] text-bone/40 md:flex-row md:px-12">
          <div>© 2025 三 Worlds Apparel · Osaka</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blood">Instagram</a>
            <a href="#" className="hover:text-blood">TikTok</a>
            <a href="#" className="hover:text-blood">Discord</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
