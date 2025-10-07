import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import Navigation from "../../nav/Navigation";

export default function HomePage() {
  return (
    <AppShell
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <AppShell.Header>
        <Navigation />
      </AppShell.Header>

      <AppShell.Main mt={80}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
