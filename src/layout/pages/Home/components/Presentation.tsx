import { IconCheck } from "@tabler/icons-react";
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  List,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { t } from "i18next";
import AboutMe from "./AboutMe";

export function HeroPresentation() {
  return (
    <Group justify="center" align="center" h="100%">
      <Container size="75%" py="xl">
        {/* O Grid permite definir larguras de coluna personalizadas */}
        <Grid gutter="xl">
          {/* Coluna de Texto: ocupa 7 de 12 colunas (~60%) em telas médias (md) ou maiores */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack mt={80}>
              <Box>
                <Title order={1} fw={500} fz={44} lh={1.2} mb="md">
                  {t("home.sections.presentation.title")}
                </Title>

                <Text c="dimmed" mt="md">
                  {t("home.sections.presentation.description")}
                </Text>

                <List
                  mt="xl"
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      <IconCheck size={12} stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    {t("home.sections.presentation.features.backendExpertise")}
                  </List.Item>
                  <List.Item>
                    {t("home.sections.presentation.features.dataStructures")}
                  </List.Item>
                  <List.Item>
                    {t(
                      "home.sections.presentation.features.fullstackDevelopment"
                    )}
                  </List.Item>
                  <List.Item>
                    {t("home.sections.presentation.features.problemSolving")}
                  </List.Item>
                  <List.Item>
                    {t("home.sections.presentation.features.optimization")}
                  </List.Item>
                </List>

                <Group mt="xl">
                  <Button
                    size="md"
                    style={{ flex: 1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const contactElement = document.querySelector("#contact");
                      contactElement?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {t("home.sections.presentation.contact")}
                  </Button>
                  <Button
                    size="md"
                    variant="default"
                    style={{ flex: 1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const plansElement = document.querySelector("#plans");
                      plansElement?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {t("home.sections.presentation.plans")}
                  </Button>
                </Group>
              </Box>
              <AboutMe />
            </Stack>
          </Grid.Col>

          {/* Coluna da Imagem: ocupa 5 de 12 colunas (~40%) em telas médias (md) ou maiores */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Center
              style={{
                alignSelf: "flex-start",
              }}
              pos={{ base: "static", md: "sticky" }}
              top="25%"
            >
              <Image
                src="./images/heroimg.png"
                width={376}
                height={356}
                style={{ objectFit: "contain", backgroundSize: 'contain' }}
              />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Group>
  );
}
