"use client";

import { Box } from "@chakra-ui/react";
import {
  FeatureSection,
  PageHighLight,
  TrustedLogo,
} from "@app/components/modules";

const slides = [
  {
    imageUrl: "/images/brands/circle.png",
    imageAlt: "Circle - Brand Logo",
  },
  {
    imageUrl: "/images/brands/fox_hub.png",
    imageAlt: "Fox Hub - Brand Logo",
  },
  {
    imageUrl: "/images/brands/Treva.png",
    imageAlt: "Treva - Brand Logo",
  },
  {
    imageUrl: "/images/brands/muzica.png",
    imageAlt: "Muzica - Brand Logo",
  },
  {
    imageUrl: "/images/brands/goldline.png",
    imageAlt: "Goldline - Brand Logo",
  },
];

export default function Home() {
  return (
    <Box as="main" width={'100vw'} overflow={'hidden'}>
      <PageHighLight headline="Field sales software for humans">
        Supersales enables your team to perform at the highest level, yet stay
        human. With a sleek design and an easy-to-navigate app.
      </PageHighLight>
      <FeatureSection featureImage={"/images/preview-image.jpg"} featureImageAlt="Feature image"/>
      <TrustedLogo title="Trusted by leading companies" items={slides} />
    </Box>
  );
}
