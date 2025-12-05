"use client";
import Image from "next/image";
import React from "react";

interface Photo {
  title: string;
  url: string;
  orientation?: "landscape" | "portrait" | "square";
}

const photos: Photo[] = [
  {
    title: "Grass Hopper",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970639/hobby_by_ap_1758299593_3725209450391402740_74495944737_1_hk8u2q.jpg",
    orientation: "landscape",
  },
  {
    title: "Crow Flying",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970638/hobby_by_ap_1758299187_3725206045439135024_74495944737_och4qa.jpg",
    orientation: "portrait",
  },
  {
    title: "Peacock",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970637/hobby_by_ap_1751939128_3671853996880219963_74495944737_jp9buj.jpg",
    orientation: "portrait",
  },
  {
    title: "Caged Lioness",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970636/hobby_by_ap_1751939058_3671853412529808130_74495944737_ac1x0b.jpg",
    orientation: "portrait",
  },
  {
    title: "Crow Eating Berry",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970632/hobby_by_ap_1751913898_3671642356199122462_74495944737_j5kuhf.jpg",
    orientation: "portrait",
  },
  {
    title: "Eagle on Branch",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970632/hobby_by_ap_1751914489_3671647317364379706_74495944737_qhikwe.jpg",
    orientation: "portrait",
  },
  {
    title: "Pegions",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970630/hobby_by_ap_1749927063_3654975578068799898_74495944737_z8qszg.jpg",
    orientation: "landscape",
  },
  {
    title: "Curly Horned Goat",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970631/hobby_by_ap_1751912635_3671631764608450663_74495944737_ajqi5e.jpg",
    orientation: "portrait",
  },
  {
    title: "Temple Sculpture",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970630/hobby_by_ap_1749926889_3654974117041839365_74495944737_ylmkdx.jpg",
    orientation: "portrait",
  },
  {
    title: "Owl",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970630/hobby_by_ap_1749926936_3654974509184168054_74495944737_br9xu6.jpg",
    orientation: "portrait",
  },
  {
    title: "Peeking Mice",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1749926795_3654973328680525833_74495944737_og2frs.jpg",
    orientation: "square",
  },
  {
    title: "Pegion",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1749926740_3654972869924140209_74495944737_gkyope.jpg",
    orientation: "square",
  },
  {
    title: "Wall Painting of Birds",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1748706998_3644740930413854555_74495944737_mdochc.jpg",
    orientation: "portrait",
  },
  {
    title: "Random Person (Old)",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1748706553_3644737194832540389_74495944737_h6gdiz.jpg",
    orientation: "portrait",
  },
  {
    title: "Bird Nest",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1747060683_3630930637531590912_74495944737_gxb9in.jpg",
    orientation: "portrait",
  },
  {
    title: "Building",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1747059853_3630923678451487861_74495944737_hv9wfg.jpg",
    orientation: "portrait",
  },
  {
    title: "Harmony",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1748707068_3644741517096434689_74495944737_gecery.jpg",
    orientation: "landscape",
  },
  {
    title: "Crab",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1747062934_3630949518115409967_74495944737_mta4er.jpg",
    orientation: "portrait",
  },
  {
    title: "Boat",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970624/hobby_by_ap_1747058215_3630909932232361519_74495944737_ydadme.jpg",
    orientation: "portrait",
  },
  {
    title: "Beach Sunset",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/hobby_by_ap_1747051557_3630854079865195602_74495944737_fgirru.jpg",
    orientation: "portrait",
  },
  {
    title: "Street Scene",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/hobby_by_ap_1747043559_3630786987375973909_74495944737_w3iv4u.jpg",
    orientation: "landscape",
  },
  {
    title: "Clouds",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/hobby_by_ap_1747043396_3630785625191769113_74495944737_xq6xez.jpg",
    orientation: "landscape",
  },
  {
    title: "Kitten",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/2_gofwcz.jpg",
    orientation: "landscape",
  },
];

export default function PhotographyGallery() {
  return (
    <section className="min-h-screen bg-neutral-950 py-16 px-4">
      {/* <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-10">
        Photography by A.P.
      </h1> */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl group break-inside-avoid"
          >
            <Image
              src={photo.url}
              alt={photo.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-medium">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
