import { Container, Stack, Text, Title, Code } from "@mantine/core";
import { useParams } from "react-router";
import { articles } from "../../../../data/articles";

export function ArticleDetails() {
  const { id } = useParams();

  // garante que id seja number se seu Article.id for number
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <Container py="xl" ta="center">
        <Title order={2}>Article not found</Title>
        <Text>The requested article doesn’t exist.</Text>
      </Container>
    );
  }

  return (
    <Container py="xl" size="md">
      <Stack>
        <Title order={1}>{article.title}</Title>

        {article.sections.map((section, index) => (
          <Stack key={index}>
            <Title order={3}>{section.title}</Title>

            {section.content && <Text>{section.content}</Text>}

            {section.description && <Text>{section.description}</Text>}

            {section.code && (
              <Code block>
                {section.code.content}
              </Code>
            )}

            {section.analysis && (
              <Text c="dimmed" size="sm">
                {section.analysis}
              </Text>
            )}
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
