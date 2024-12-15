import Project from "./Project";

const projects = [
  {
    name: "bana.nz: Short and sweet URLs",
    description: "Easy to share links for kids",
    tags: ["React", "Express", "MongoDB"],
    url: "http://bana.nz/",
    image: "/projects/bananz.png",
    video: "",
  },
  {
    name: "WebSRD",
    description: "Searchable docs for playing D&D",
    tags: ["Jekyll", "Vanilla JS"],
    url: "https://websrd.app",
    image: "",
    video: "/projects/5eDocsDemo.mov",
  },
  {
    name: "Pomo",
    description: "Pomodoro timer for minimalists",
    tags: ["React", "CSS Animations", "Keyboard controls"],
    url: "https://pomo.ashkatta.dev",
    image: "",
    video: "/projects/pomoDemo.mov",
  },
  {
    name: "MPLS Alt Music Events Calendar",
    description: "Events calendar for underground music scene.",
    tags: ["Python", "Web scraping", "BeautifulSoup", "React"],
    url: "https://example.com",
    image: "/projects/TC Events Cal.png",
    video: "",
  },
  {
    name: "Ephemeral Insurance",
    description:
      "A beautiful landing page for a fictional insurance company. I used the recently released Scroll-driven Animations CSS specification to incorporate story telling.",
    tags: ["CSS", "Scroll-driven animations"],
    url: "https://ashkatta.dev/ephemeral/",
    image: "",
    video: "/projects/ephemeralDemo.mov",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="max-w-screen-lg mx-auto px-4 py-16 bg-[#f3f0e8] "
    >
      <h1 className="text-4xl text-center font-bold leading-10 tracking-tight text-[#244e31] dark:text-neutral-100">
        Featured Projects
      </h1>

      <div className="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7 mt-7">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
