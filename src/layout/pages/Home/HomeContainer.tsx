import { Stack } from "@mantine/core";
import { PortfolioCarousel } from "./components/Portfolio/Portfolio";
import { HeroPresentation } from "./components/Presentation";
import { PricingCards } from "./components/Pricing";
import ContactUs from "./components/ContactUs";

export default function HomeContainer() {
  return (
    <Stack>
      <HeroPresentation />
      <PortfolioCarousel />
      <PricingCards />
      <ContactUs />
    </Stack>
  );
}
