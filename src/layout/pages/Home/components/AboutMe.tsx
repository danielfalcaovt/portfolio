import {
  Avatar,
  Badge,
  Box,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { t } from "i18next";
import { extraTechnologies, technologies } from "./AboutMeData";
import { IconCrown } from "@tabler/icons-react";
import { SMALLICON } from "../../../../configuration/utils/icon";

export default function AboutMe() {
  return (
    <Box mt={100} h="80vh">
      <Stack align="center" w="100%" h="70%">
        <Stack align="flex-start" justify="center" h="100%">
          <Group mb={24}>
            <Image
              src="./images/me.jpeg"
              w={100}
              radius="50%"
              style={{
                boxShadow: "0px 0px 12px 0px #C2A9D622",
              }}
              bd="3px solid var(--mantine-color-default)"
            />
            <Stack gap={8}>
              <Title order={1} fw={500} fz={44} lh={1.2} mt="md">
                {t("aboutme.title")}
              </Title>
              <Group>
                <Badge variant="dot">Fullstack Developer</Badge>
                <Badge variant="light" bg="indigo.9">
                  React Enthusiast
                </Badge>
              </Group>
              <Group>
                <Badge variant="outline">Coffeeholic</Badge>
                <Badge variant="light" bg="green.8">
                  NodeJS Specialist
                </Badge>
              </Group>
            </Stack>
          </Group>
          <Text maw="400px">{t("aboutme.pleasure")}</Text>
          <Avatar.Group>
            {technologies.map((tech) => {
              const isFavorite = tech.favorite; // flag para saber se este é o avatar que deve ter coroa
              return (
                <Box key={tech.name} style={{ position: "relative" }}>
                  <Tooltip label={tech.name}>
                    <Avatar
                      style={tech.style || {}}
                      src={tech.imgSrc}
                      radius="xl"
                    />
                  </Tooltip>

                  {isFavorite && (
                    <IconCrown
                      size={SMALLICON}
                      style={{
                        position: "absolute",
                        top: -17, // sobe acima do avatar
                        left: "25%",
                        transform: "translateX(-50%)",
                        color: "gold",
                      }}
                    />
                  )}
                </Box>
              );
            })}

            <Tooltip
              label={extraTechnologies.map((tech) => tech.name).join(", ")}
            >
              <Avatar>+{extraTechnologies.length}</Avatar>
            </Tooltip>
          </Avatar.Group>
        </Stack>
      </Stack>
    </Box>
  );
}
