import { Gamepad2, MessageCircle, Video, Camera, Tv, MessageSquare, ArrowRight } from 'lucide-react';

const FOOTER_LINKS = {
  Games: ['Neon Breach', 'Realms of Kaelen', 'Ashfall', 'Upcoming Titles'],
  Studio: ['About Us', 'Careers', 'Press Kit', 'Blog'],
  Support: ['Help Center', 'Community', 'Contact Us', 'Privacy Policy'],
};

const SOCIALS = [
  { Icon: MessageCircle, label: 'Twitter', href: '#' },
  { Icon: Video, label: 'YouTube', href: '#' },
  { Icon: Camera, label: 'Instagram', href: '#' },
  { Icon: Tv, label: 'Twitch', href: '#' },
  { Icon: MessageSquare, label: 'Discord', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Newsletter banner */}
      <div className="relative border-b border-white/5 py-12 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-podium text-2xl uppercase text-white sm:text-3xl">Stay in the Loop</h3>
            <p className="mt-1 font-inter text-sm text-white/50">Get early access, patch notes, and studio updates.</p>
          </div>
          <div className="flex max-w-md flex-1 gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/20 border-r-0 px-4 py-3 font-inter text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/60 transition-colors"
            />
            <button className="flex items-center gap-2 bg-cyan-400 px-5 py-3 font-inter text-xs uppercase tracking-widest text-black font-bold hover:bg-cyan-300 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <Gamepad2 className="h-6 w-6 text-cyan-400" />
                <span className="font-podium text-xl uppercase tracking-widest text-white">VANGUARD</span>
              </div>
              <p className="mb-6 max-w-xs font-inter text-sm leading-relaxed text-white/50">
                Crafting worlds, forging legends, and pushing the boundaries of interactive entertainment since 2014.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-5 font-inter text-xs uppercase tracking-widest text-white/40">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-inter text-sm text-white/60 transition-colors duration-200 hover:text-cyan-400"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-inter text-xs text-white/30">
              © {new Date().getFullYear()} Vanguard Game Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <a key={item} href="#" className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
