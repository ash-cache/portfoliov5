import Image from "next/image";
import Header from "./ui/Header";
import Projects from "./ui/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-[#f3f0e8]">
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-[#f3f0e8]"
        >
          <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-[#244e31]">
              <h1 className="text-4xl font-bold mb-4">
                Hey there, I’m Ash. I’m a mathematician, software developer, and
                home cook.
              </h1>
              <h1 className="text-4xl font-bold mb-4">
                I build for the web, specializing in building (and occasionally
                designing) exceptional digital products and experiences.
              </h1>
            </div>
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/photo.jpg"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
                priority // Ensures this image loads quickly
              />
            </div>
          </div>
        </section>

        <Projects />
      </main>
      <footer className="py-4 bg-[#f3f0e8]">
        <div className="max-w-screen-lg mx-auto text-center text-neutral-950">
          <p>&copy; 2024 Ash Katta. Built with ☕ and ❤️ by Ash</p>
        </div>
      </footer>
    </>
  );
}
