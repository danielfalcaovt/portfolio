import "@mantine/core/styles.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import i18n from "./i18n/configuration";
import { MantineProvider } from "@mantine/core";
import RouteSetup from "./configuration/routes/RouteSetup";
import { theme } from "./configuration/theme";
import { useEffect, useState } from "react";
import i18next from "i18next";

export default function App() {
  const [, setForceUpdate] = useState(false);
  console.log(i18n)
  useEffect(() => {
    const handleLanguageChanged = () => {
      setForceUpdate((prev) => !prev); // força render
    };
    i18next.on("languageChanged", handleLanguageChanged);
    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <RouteSetup />
      </MantineProvider>
    </>
  );
}
