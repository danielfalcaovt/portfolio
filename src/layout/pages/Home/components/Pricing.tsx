import {
    IconBuildings,
  IconCircleCheck,
  IconCookie,
  IconHome,
} from "@tabler/icons-react";
import {
  Badge,
  Card,
  Container,
  Group,
  List,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { t } from "i18next";

const mockdata = [
  {
    type: "free",
    title: "pricing.free.title",
    description: "pricing.free.description",
    icon: IconCookie,
    features: [],
  },
  {
    type: "common",
    title: "pricing.common.title",
    description: "pricing.common.description",
    icon: IconHome,
    features: [
      "emailSupport",
      "basicAnalytics",
      "seoOptimization",
      "socialMediaIntegration",
    ],
  },
  {
    type: "enterprise",
    title: "pricing.enterprise.title",
    description: "pricing.enterprise.description",
    icon: IconBuildings,
    features: [
      "everythingInMedium",
      "customIntegrations",
      "24x7Support",
      "performanceOptimization",
    ],
  },
];

export function PricingCards() {
  const theme = useMantineTheme();

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      padding="xl"
      style={{
        backgroundColor:
          feature.type === "enterprise"
            ? theme.colors.dark[7]
            : theme.colors.dark[8],
        border:
          feature.type === "enterprise"
            ? `1px solid ${theme.colors.dark[1]}`
            : `1px solid ${theme.colors.dark[5]}`,
      }}
    >
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />

      <Text
        fz="lg"
        fw={500}
        mt="md"
        style={{
          position: "relative",
          paddingBottom: theme.spacing.sm,
        }}
      >
        {t(feature.title)}
        <span
          style={{
            content: "''",
            display: "block",
            backgroundColor: theme.colors.blue[6],
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
          }}
        />
      </Text>

      <Text fz="sm" c="dimmed" mt="sm">
        {t(feature.description)}
      </Text>
      <Group mt={24}>
        {feature.features.length > 0 && (
          <List
            spacing="xs"
            size="sm"
            center
            
            icon={
              <ThemeIcon color="" size={24} radius="xl">
                <IconCircleCheck size={16} />
              </ThemeIcon>
            }
          >
            {feature.features
              .filter((item) => !!item)
              .map((item) => {
                return (
                  <List.Item key={item}>
                    {t(`pricing.${feature.type}.features.${item}`)}
                  </List.Item>
                );
              })}
          </List>
        )}
      </Group>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" id="plans">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          GOAT
        </Badge>
      </Group>

      <Title
        order={2}
        ta="center"
        mt="sm"
        style={{
          fontSize: "34px",
          fontWeight: 500,
          [`@media (max-width: ${theme.breakpoints.sm})`]: {
            fontSize: "24px",
          },
        }}
      >
        {t("pricing.title")}
      </Title>

      <Text
        c="dimmed"
        ta="center"
        mt="md"
        style={{
          maxWidth: 600,
          margin: "auto",
          position: "relative",
        }}
      >
        {t("pricing.description")}
        <span
          style={{
            content: "''",
            display: "block",
            backgroundColor: theme.colors.blue[6],
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
