import {
  Box,
  Button,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { t } from "i18next";
import { useState } from "react";

export default function ContactUs() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <Box
      mt={100}
      px={isMobile ? 20 : 100}
      id="contact"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: isMobile ? 40 : 100,
      }}
    >
      {/* Lado esquerdo: imagem */}
      <Box
        style={{
          flex: isMobile ? "none" : 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="./images/contactus.png"
          radius="md"
          maw={isMobile ? 300 : 400}
          style={{
            boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.1)",
          }}
        />
      </Box>

      {/* Lado direito: formulário */}
      <Box
        style={{
          flex: isMobile ? "none" : 1,
          padding: isMobile ? 24 : 48,
          borderRadius: theme.radius.xl,
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
        maw={isMobile ? "80%" : "45%"}
        w="100%"
      >
        <Stack>
          <Title order={1} fz={isMobile ? 32 : 42} fw={600}>
            {t("contact-us.title")}
          </Title>
          <Text c="dimmed" mb="md">
            {t("contact-us.message")}
          </Text>

          <TextInput
            label="E-mail"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            radius="md"
            size="md"
            withAsterisk
          />

          <Textarea
            label={t("commons.message")}
            placeholder="Tell us how we can help"
            minRows={4}
            autosize
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            radius="md"
            size="md"
            withAsterisk
          />

          <Group justify="flex-end" mt="md">
            <Button
              size="md"
              radius="xl"
              variant="outline"
              bg={theme.colors.dark[7]}
              onClick={handleSubmit}
              style={{
                paddingInline: 32,
                transition: "transform 0.1s ease",
              }}
              w="100%"
            >
              {t("commons.submit")}
            </Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
}
