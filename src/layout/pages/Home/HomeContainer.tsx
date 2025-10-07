import { Stack } from "@mantine/core";
import { PortfolioCarousel } from "./components/Portfolio/Portfolio";
import { HeroPresentation } from "./components/Presentation";
import Footer from "../../footer/Footer";

export default function HomeContainer() {
  return (
    <Stack>
      <HeroPresentation />
      <PortfolioCarousel />
      <Footer />
    </Stack>
  );
}
