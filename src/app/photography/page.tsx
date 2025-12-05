"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

// --- Photo Data ---
const photos = [
  {
    title: "The Stillness Before the Leap",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970639/hobby_by_ap_1758299593_3725209450391402740_74495944737_1_hk8u2q.jpg",
  },
  {
    title: "Between Sky and Shadow",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970638/hobby_by_ap_1758299187_3725206045439135024_74495944737_och4qa.jpg",
  },
  {
    title: "Royal Silence",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970637/hobby_by_ap_1751939128_3671853996880219963_74495944737_jp9buj.jpg",
  },
  {
    title: "Wild Eyes Behind Steel",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970636/hobby_by_ap_1751939058_3671853412529808130_74495944737_ac1x0b.jpg",
  },
  {
    title: "Small Feast, Sharp Eyes",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970632/hobby_by_ap_1751913898_3671642356199122462_74495944737_j5kuhf.jpg",
  },
  {
    title: "The Quiet Watchman",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970632/hobby_by_ap_1751914489_3671647317364379706_74495944737_qhikwe.jpg",
  },
  {
    title: "Concrete Companions",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970630/hobby_by_ap_1749927063_3654975578068799898_74495944737_z8qszg.jpg",
  },
  {
    title: "The Gentle Rebel",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970631/hobby_by_ap_1751912635_3671631764608450663_74495944737_ajqi5e.jpg",
  },
  {
    title: "Stone That Breathes",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970630/hobby_by_ap_1749926889_3654974117041839365_74495944737_ylmkdx.jpg",
  },
  {
    title: "Wisdom in Feathers",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970630/hobby_by_ap_1749926936_3654974509184168054_74495944737_br9xu6.jpg",
  },
  {
    title: "Caught in Curiosity",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1749926795_3654973328680525833_74495944737_og2frs.jpg",
  },
  {
    title: "The Everyday Messenger",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1749926740_3654972869924140209_74495944737_gkyope.jpg",
  },
  {
    title: "Colors That Once Flew",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1748706998_3644740930413854555_74495944737_mdochc.jpg",
  },
  {
    title: "Stories in Wrinkles",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970626/hobby_by_ap_1748706553_3644737194832540389_74495944737_h6gdiz.jpg",
  },
  {
    title: "Home in Twigs",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1747060683_3630930637531590912_74495944737_gxb9in.jpg",
  },
  {
    title: "Geometry of Stillness",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1747059853_3630923678451487861_74495944737_hv9wfg.jpg",
  },
  {
    title: "Nature’s Quiet Chord",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1748707068_3644741517096434689_74495944737_gecery.jpg",
  },
  {
    title: "Armored Wanderer",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970625/hobby_by_ap_1747062934_3630949518115409967_74495944737_mta4er.jpg",
  },
  {
    title: "Resting Between Tides",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970624/hobby_by_ap_1747058215_3630909932232361519_74495944737_ydadme.jpg",
  },
  {
    title: "Where the Day Exhales",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/hobby_by_ap_1747051557_3630854079865195602_74495944737_fgirru.jpg",
  },
  {
    title: "City in Motion",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/hobby_by_ap_1747043559_3630786987375973909_74495944737_w3iv4u.jpg",
  },
  {
    title: "Drifting Thoughts",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/hobby_by_ap_1747043396_3630785625191769113_74495944737_xq6xez.jpg",
  },
  {
    title: "Soft Mischief",
    url: "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970623/2_gofwcz.jpg",
  },
];

// --- Shuffle Helper ---
function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Component ---
export default function PhotographyGallery() {
  const [images, setImages] = useState(photos);

  useEffect(() => {
    setImages(shuffleArray(photos));
  }, []);

  return (
    <section className="min-h-screen bg-neutral-950 py-16 px-4 sm:px-8 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
      >
        {images.map((photo, index) => (
          <motion.div
            key={photo.url}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative mb-6 break-inside-avoid overflow-hidden rounded-xl bg-neutral-900 group"
          >
            <motion.img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto object-cover transform transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
              loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Title on Hover (fixed hover scope) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <p className="translate-y-4 opacity-0 text-lg font-semibold text-white transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 mb-2">
                {photo.title}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
