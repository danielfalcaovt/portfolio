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
import type { Project } from "../PortfolioData";
import { t } from "i18next";
import { useDisclosure } from "@mantine/hooks";
import ProjectDetailsModal from "./ProjectDetailsModal";

export function ProjectCard(project: Project) {
  const [opened, { open: openModal, close: closeModal }] = useDisclosure();

  const { image, name, description, type, technologies } = project;

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
          h={150}
          pl="md"
          pr="md"
          pb="md"
          mt="md"
        >
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {name}
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
            {description}
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
