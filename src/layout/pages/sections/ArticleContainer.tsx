import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { t } from "i18next";
import { articles } from '../../../../data/articles'
import { ArticleCard } from "./ArticleCard";

export default function ArticlesList() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container size="75%" py="xl">
      <Stack mb="lg">
        <Title order={1} fw={600}>
          {t("navbar.articles.label")}
        </Title>
        <Text c="dimmed">{t("navbar.articles.description")}</Text>
      </Stack>

      <Grid gutter="xl" justify="center">
        {articles.map((article) => (
          <Grid.Col
            key={article.title}
            span={isMobile ? 12 : 6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ArticleCard article={article} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
