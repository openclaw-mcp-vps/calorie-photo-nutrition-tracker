export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          AI-Powered Nutrition
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Snap a photo.<br />
          <span className="text-[#58a6ff]">Know your calories instantly.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-8">
          SnapCalorie uses AI to identify every food item in your meal photo and automatically logs calories, macros, and full nutritional data — no manual entry ever.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start Tracking for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-semibold text-white mb-1">Photo Recognition</h3>
            <p className="text-sm text-[#8b949e]">AI identifies every ingredient and dish in your photo with high accuracy.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Full Macro Breakdown</h3>
            <p className="text-sm text-[#8b949e]">Get calories, protein, carbs, fat, and micronutrients from the USDA database.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Daily Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Track trends, set goals, and visualize your nutrition over time.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff]">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$7</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to hit your nutrition goals.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited photo scans</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Full macro &amp; micro breakdown</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily &amp; weekly dashboards</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Goal setting &amp; progress tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export data as CSV</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the food recognition?</h3>
            <p className="text-sm text-[#8b949e]">We use Google Vision AI combined with the USDA nutritional database to deliver highly accurate results. Most common meals and ingredients are recognized with over 90% accuracy.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes, absolutely. You can cancel at any time from your account settings. You'll retain access until the end of your billing period with no questions asked.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What types of photos work best?</h3>
            <p className="text-sm text-[#8b949e]">Clear, well-lit overhead or angled shots of your plate work best. The AI handles home-cooked meals, restaurant dishes, packaged foods, and even smoothies or drinks.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} SnapCalorie. All rights reserved.
      </footer>
    </main>
  );
}
