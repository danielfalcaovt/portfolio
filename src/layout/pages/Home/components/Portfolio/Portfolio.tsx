import { Carousel } from "@mantine/carousel";
import { Stack, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { PortfolioData } from "./PortfolioData";
import { ProjectCard } from "./components/ProjectCard";

export function PortfolioCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = PortfolioData.map((item) => (
    <Carousel.Slide key={item.name}>
      <ProjectCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Stack h='80vh' mx={"10%"}>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={12}
        emblaOptions={{ align: "start", slidesToScroll: mobile ? 1 : 2 }}
      >
        {slides}
      </Carousel>
    </Stack>
  );
}
