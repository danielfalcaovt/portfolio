import {
  Modal,
  Stack,
  Text,
  Image,
  Group,
  Divider,
  Button,
  Tooltip,
  Avatar
} from "@mantine/core";
import type { Project } from "../PortfolioData";
import {
  IconBrandGithub,
  IconFileDescription,
  IconPlayerPlay,
  IconWorldWww,
} from "@tabler/icons-react";
import { SMALLICON } from "../../../../../../configuration/utils/icon";
import { technologies } from "../../AboutMeData";
import { t } from "i18next";

export default function ProjectDetailsModal({
  opened,
  onClose,
  project,
}: {
  opened: boolean;
  onClose: () => void;
  project?: Project;
}) {
  if (!project) return null;

  const technologiesComponents = technologies.map((tech) => (
    <Tooltip label={tech.name}>
      <Avatar style={tech.style || {}} src={tech.imgSrc} />
    </Tooltip>
  ));

  return (
    <Modal
      onClose={onClose}
      opened={opened}
      size="lg"
      title={t(`portfolio.project${project.id}.name`)}
    >
      <Stack>
        <Stack gap={5}>
          <Image src={project.image} alt={project.name} radius="md" />

          <Group justify="space-between" align="center">
            <Text size="sm" c="dimmed">
              {project.type}
            </Text>
            <Avatar.Group>{technologiesComponents}</Avatar.Group>
          </Group>
        </Stack>

        <Text> {t(`portfolio.project${project.id}.description`)}</Text>

        <Divider label={<IconFileDescription />} variant="dashed" />

        <Text fw={500}> {t(`portfolio.project${project.id}.details`)}</Text>

        {(project.github || project.deploy || project.video) && (
          <Divider label={<IconPlayerPlay />} variant="dashed" />
        )}

        <Group justify="flex-end">
          {project.github && (
            <Button
              component="a"
              href={project.github}
              target="_blank"
              variant="outline"
              leftSection={<IconBrandGithub size={SMALLICON} />}
            >
              GitHub
            </Button>
          )}

          {project.deploy && (
            <Button
              component="a"
              href={project.deploy}
              target="_blank"
              variant="filled"
              color="green"
              leftSection={<IconWorldWww size={SMALLICON} />}
            >
              Deploy
            </Button>
          )}

          {project.video && (
            <Button
              component="a"
              href={project.video}
              target="_blank"
              variant="light"
              color="red"
              leftSection={<IconPlayerPlay size={SMALLICON} />}
            >
              Vídeo
            </Button>
          )}
        </Group>
      </Stack>
    </Modal>
  );
}
