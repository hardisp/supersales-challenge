import { getMenu } from "@app/services";
import { Container, Heading } from "@chakra-ui/react";

export async function generateStaticParams() {
  const paths = getMenu([])?.filter((m) => m.link !== "/") as any[];
  return paths?.map((post) => ({
    slug: post.link,
  }));
}

export default function Page({ params }: { params: any }) {
  const { slug } = params;
  return (
    <Container>
      <Heading as={'h1'} textTransform={'uppercase'}>{slug}</Heading>
    </Container>
  );
}
