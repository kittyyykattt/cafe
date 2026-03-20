"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import type { GalleryImage, GalleryLayout } from "@/data/siteConfig";

type GalleryProps = {
  title: string;
  intro: string;
  layout: GalleryLayout;
  images: GalleryImage[];
};

export function Gallery({ title, intro, layout, images }: GalleryProps) {
  const heightClasses = [
    "h-[18rem]",
    "h-[22rem]",
    "h-[16rem]",
    "h-[24rem]",
    "h-[18.5rem]",
    "h-[21rem]",
  ];

  return (
    <SectionWrapper id="gallery" eyebrow="gallery" title={title} intro={intro}>
      {layout === "carousel" ? (
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group relative h-80 min-w-[75%] shrink-0 snap-center overflow-hidden rounded-[4px] border border-[var(--warm-fog)]/55 md:min-w-[40%]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 75vw"
              />
              <figcaption className="absolute inset-0 flex items-end bg-[color-mix(in_srgb,var(--cream)_84%,transparent)] p-4 text-sm tracking-[0.06em] text-[var(--espresso)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="grid auto-rows-min grid-flow-row-dense gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative min-h-0 overflow-hidden rounded-[4px] border border-[var(--warm-fog)]/55 ${
                index % 3 === 0
                  ? "lg:col-span-7"
                  : index % 3 === 1
                    ? "lg:col-span-5 lg:mt-8"
                    : "lg:col-span-6"
              } ${heightClasses[index % heightClasses.length]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="absolute inset-0 flex items-end bg-[color-mix(in_srgb,var(--cream)_84%,transparent)] p-4 text-sm tracking-[0.06em] text-[var(--espresso)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
