// app/ui/Project.tsx
import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  tags: string[];
  url: string;
  image?: string;
  video?: string;
}

export default function Project({
  name,
  description,
  tags,
  url,
  image,
  video,
}: ProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group h-100 rounded-2xl"
    >
      <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950"></span>
      <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
      <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="block w-full">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={600}
              height={338} // Adjust to match the aspect ratio
              className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
            />
          ) : video ? (
            <video
              src={video}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
            ></video>
          ) : null}
        </div>
        <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
          <span className="flex items-center mb-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {name}
          </span>
          <span className="text-sm text-neutral-600 dark:text-neutral-400 block truncate">
            {description}
          </span>
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 border border-black rounded-2xl uppercase text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </span>
      </span>
    </a>
  );
}
