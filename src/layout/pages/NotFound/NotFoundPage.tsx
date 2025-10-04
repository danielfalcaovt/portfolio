import { Stack, Text, Center, ThemeIcon, ActionIcon } from "@mantine/core";
import { IconChevronLeft, IconMoodConfuzedFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <ActionIcon
        bg="transparent"
        onClick={(e) => navigate("/")}
        w={60}
        h={60}
        pos="relative"
        left={15}
        top={15}
      >
        <IconChevronLeft size={60} />
      </ActionIcon>
      <Center style={{ width: "100%", height: "80vh" }}>
        <Stack align="center" gap="lg">
          <ThemeIcon variant="transparent" size={80} c="gray">
            <IconMoodConfuzedFilled style={{ width: "100%", height: "100%" }} />
          </ThemeIcon>
          <Stack align="center" gap={0}>
            <Text fz={28} fw={700} c="dimmed">
              404
            </Text>
            <Text fz="lg" c="dimmed">
              Página Não Encontrada
            </Text>
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
