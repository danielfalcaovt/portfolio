import { Stack } from "@mantine/core";
import { PortfolioCarousel } from "./components/Portfolio/Portfolio";
import { HeroPresentation } from "./components/Presentation";
import Footer from "../../footer/Footer";
import { PricingCards } from "./components/Pricing";

export default function HomeContainer() {
  return (
    <Stack>
      <HeroPresentation />
      <PortfolioCarousel />
      <PricingCards />
      <Footer />
    </Stack>
  );
}
