"use client";

import { Box } from "@chakra-ui/react";
import {
  FeatureSection,
  PageHighLight,
  TrustedLogo,
} from "@app/components/modules";
import { getBrands } from "@app/services";


export default function Home() {
  return (
    <Box as="main" width={'100vw'} overflow={'hidden'}>
      <PageHighLight headline="Field sales software for humans">
        Supersales enables your team to perform at the highest level, yet stay
        human. With a sleek design and an easy-to-navigate app.
      </PageHighLight>
      <FeatureSection featureImage={"/images/preview-image.jpg"} featureImageAlt="Feature image"/>
      <TrustedLogo title="Trusted by leading companies" items={getBrands()} />
    </Box>
  );
}
