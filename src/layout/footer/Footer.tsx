import React from "react";
import {
  ActionIcon,
  Container,
  Group,
  Text,
  useMantineTheme,
  rem,
  Image,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { t } from "i18next";
const data = [
  {
    title: "about",
    links: [
      { label: "Daniel Falcão", link: "https://danielfalcao.dev" },
      { label: "Portfólio", link: "https://danielfalcao.dev#projects" },
      { label: "Contato", link: "mailto:deenedev@gmail.com" },
    ],
  },
  {
    title: "project",
    links: [
      {
        label: "Repositórios no GitHub",
        link: "https://github.com/danielfalcaovt",
      },
      {
        label: "TransiScale",
        link: "https://www.linkedin.com/posts/contcode_hackacont-inovaaexaeto-tecnologia-activity-7266938783026073601-l6PJ",
      }
    ],
  },
  {
    title: "community",
    links: [
      {
        label: "Discussões no GitHub",
        link: "https://github.com/danielfalcaovt/discussions",
      },
    ],
  },
];


export default function FooterLinks() {
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const groups = data.map((group, idx) => (
    <div
      key={group.title}
      style={{ width: rem(120), marginRight: theme.spacing.xl }}
    >
      <Text
        size="lg"
        w={500}
        style={{
          fontFamily: "Outfit, var(--mantine-font-family)",
          marginBottom: 6,
          color: theme.white,
        }}
      >
        {t(`footer.${group.title}.title`)}
      </Text>

      {group.links.map((link, idx) => (
        <Text
          key={idx}
          component="a"
          onClick={(e) =>
            window.open(link.link, "_blank")
          }
          size="sm"
          style={{
            display: "block",
            paddingTop: 3,
            paddingBottom: 3,
            color: theme.colors.dark[1],
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {t(`footer.${group.title}.link${idx}.label`)}
        </Text>
      ))}
    </div>
  ));

  return (
    <footer
      style={{
        marginTop: 120,
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        backgroundColor: theme.primaryColor[6],
        borderTop: `1px solid ${theme.colors.dark[5]}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: smallScreen ? "center" : "flex-start",
          gap: theme.spacing.xl,
          flexDirection: smallScreen ? "column" : "row",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: smallScreen ? "center" : "flex-start",
            textAlign: smallScreen ? "center" : "left",
          }}
        >
          <Group>
            <Image src="./logo/logo.png" w={60} />
            <Stack gap={0}>
              <Text
                style={{
                  fontFamily: "Outfit, var(--mantine-font-family)",
                }}
              >
                Daniel Falcão
              </Text>
              <Text size="xs" c="dimmed">
                Fullstack Developer
              </Text>
            </Stack>
          </Group>
          <Text
            size="xs"
            c="dimmed"
            style={{
              marginTop: 5,
              textAlign: smallScreen ? "center" : "left",
            }}
          >
            {t("footer.description")}
          </Text>
        </div>

        <div
          style={{
            display: smallScreen ? "none" : "flex",
            flexWrap: "wrap",
            gap: theme.spacing.lg,
            maxWidth: `calc(100% - 400px)`,
          }}
        >
          {groups}
        </div>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: theme.spacing.xl,
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
          borderTop: `1px solid ${theme.colors.dark[4]}`,
          flexDirection: smallScreen ? "column" : "row",
          textAlign: smallScreen ? "center" : "left",
        }}
      >
        <Text c="dimmed" size="sm">
          © 2023 - {new Date().getFullYear()} danielfalcao.dev{" "}
          {t("footer.copyright")}.
        </Text>

        <Group
          gap={0}
          style={{ marginTop: smallScreen ? theme.spacing.xs : 0 }}
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="twitter"
            onClick={() =>
              window.open("https://linkedin.com/in/danielfalcaodev", "_blank")
            }
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="youtube"
            onClick={() =>
              window.open("https://www.youtube.com/@deenedev", "_blank")
            }
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/danielfalcao.dev/",
                "_blank"
              )
            }
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="github"
            style={{
              zIndex: 1
            }}
            onClick={() =>
              window.open(
                "https://www.github.com/danielfalcao.dev/",
                "_blank"
              )
            }
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <Image
        src="./images/moon.png"
        pos="absolute"
        w={600}
        top="20%"
        right={"-10%"}
        style={{
          zIndex: 0,
          filter:
            "grayscale(1) brightness(0.8) drop-shadow(0 0 20px var(--mantine-primary-color-3))",
        }}
        opacity={0.2}
      />
    </footer>
  );
}
