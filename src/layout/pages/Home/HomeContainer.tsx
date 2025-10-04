import { Stack } from "@mantine/core";
import { PortfolioCarousel } from "./components/Portfolio/Portfolio";
import { HeroPresentation } from "./components/Presentation";

export default function HomeContainer() {
  return (
    <Stack>
      <HeroPresentation />
      <PortfolioCarousel />
    </Stack>
  );
}
