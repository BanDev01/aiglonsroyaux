"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-1 flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="newsletter" className="text-xs font-medium text-white/60">
        Recevez nos actualités
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter"
          type="email"
          placeholder="Votre email"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-royal-950 transition-colors hover:bg-gold-400"
        >
          OK
        </button>
      </div>
    </form>
  );
}
