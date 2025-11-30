import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import { type Project } from "../PortfolioData";
import i18next, { t } from "i18next";
import { useDisclosure } from "@mantine/hooks";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { useEffect, useState } from "react";

export function ProjectCard(project: Project) {
  const [opened, { open: openModal, close: closeModal }] = useDisclosure();

  const { image, name, type, technologies, id } = project;

  const [, setForceUpdate] = useState(false);
  useEffect(() => {
    const handleLanguageChanged = () => {
      setForceUpdate((prev) => !prev); // força render
    };
    i18next.on("languageChanged", handleLanguageChanged);
    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const technologiesComponents = technologies.map((tech) => (
    <Tooltip label={tech.name}>
      <Avatar style={tech.style || {}} src={tech.imgSrc} />
    </Tooltip>
  ));

  return (
    <>
      <ProjectDetailsModal
        onClose={closeModal}
        project={project}
        opened={opened}
      />
      <Card
        withBorder
        radius="md"
        h={"100%"}
        p="md"
        style={{
          backgroundColor:
            "light-dark(var(--mantine-color-white), var(--mantine-color-dark-7))",
        }}
      >
        <Card.Section>
          <Image
            src={image}
            fit="cover"
            draggable
            style={{
              objectPosition: "top",
            }}
            alt={name}
            height={240}
          />
        </Card.Section>

        <Card.Section
          style={{
            borderBottom:
              "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
          }}
          pl="md"
          pr="md"
          pb="md"
          mt="md"
        >
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {t(`portfolio.project${id}.name`)}
            </Text>

            <Group gap={5}>
              {type.split(", ").map((bad) => {
                return (
                  <Badge size="sm" variant="default">
                    {bad}
                  </Badge>
                );
              })}
            </Group>
          </Group>
          <Text fz="sm" mt="xs">
            {t(`portfolio.project${id}.description`)}
          </Text>
        </Card.Section>

        <Card.Section
          style={{
            borderBottom:
              "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
          }}
          h={"max-content"}
          pl="var(--mantine-spacing-md)"
          pr="var(--mantine-spacing-md)"
          pb="var(--mantine-spacing-md)"
        >
          <Text
            mt="md"
            style={{
              fontSize: "var(--mantine-font-size-xs)",
            }}
            fw={700}
            tt="uppercase"
            c="dimmed"
          >
            STACK
          </Text>
          <Group justify="space-between">
            <Avatar.Group>{technologiesComponents}</Avatar.Group>
            <Button onClick={openModal}>{t("portfolio.details")}</Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}
