"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#f3f0e8] border-b border-neutral-950 z-50 text-[#244e31]">
      <nav className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-lg font-semibold">Ash</div>
        <div className="flex space-x-4">
          <a
            href="#about"
            className="min-w-[3rem] hover:font-bold transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#work"
            className="min-w-[3rem] hover:font-bold transition-colors duration-200"
          >
            Work
          </a>
        </div>
      </nav>
    </header>
  );
}
