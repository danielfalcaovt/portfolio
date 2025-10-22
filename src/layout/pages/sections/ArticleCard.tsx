import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { t } from "i18next";
import { useNavigate } from "react-router";

export type Article = {
  id: number;
  title: string;
  img?: string;
  type: { label: string; color: string }[];
  sections: (
    | {
        title: string;
        content: string;
        description?: undefined;
        code?: undefined;
        analysis?: undefined;
      }
    | {
        title: string;
        description: string;
        code: {
          language: string;
          content: string;
        };
        analysis: string;
        content?: undefined;
      }
  )[];
};

export function ArticleCard({ article }: { article: Article }) {
  const navigate = useNavigate()
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={article.img} height={160} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{article.title}</Text>
        <Group>
          {article.type.map((type) => {
            return <Badge variant="light" color={type.color}>{type.label}</Badge>;
          })}
        </Group>
      </Group>

      <Text size="sm" c="dimmed">
        {article!.sections![0]!.content!.slice(0, 280)}...
      </Text>

      <Button onClick={() => navigate('/articles/' + article.id)} color="blue" fullWidth mt="md" radius="md">
        {t('navbar.articles.readmore')}
      </Button>
    </Card>
  );
}
