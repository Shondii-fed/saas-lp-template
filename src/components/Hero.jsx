export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">


                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Launch Your SaaS Faster 🚀
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        A clean, modern landing page template built with React + Tailwind.
                        Perfect for startups, indie hackers, and Sass products.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#pricing"
                            className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
                        >
                            Get Started
                        </a>
                        <a
                            href="#features"
                            className="px-6 py-3 rounded-xl border border-white/50 font-semibold hover:bg-white/10 transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>


                {/* Image / Screenshot Placeholder */}
                <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                    <div className="w-[90%] h-64 md:h-80 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                        <span className="text-white/70">[ SaaS Screenshot Here ]</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
