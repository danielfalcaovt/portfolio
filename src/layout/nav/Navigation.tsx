import { useEffect, useState } from "react";
import {
  Group,
  ActionIcon,
  Button,
  Image,
  Select,
  Popover,
} from "@mantine/core";
import { IconArticle, IconHome, IconWorld } from "@tabler/icons-react";
import { SMALLICON } from "../../configuration/utils/icon";
import { useNavigate } from "react-router";
import i18next, { t } from "i18next";

const LANGUAGE_OPTIONS = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
];

export default function Navigation() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(i18next.language || "pt");

  // Atualiza i18next quando o Select muda
  useEffect(() => {
    if (i18next.language !== language) {
      i18next.changeLanguage(language);
    }
  }, [language]);

  return (
    <Group mih={80} justify="space-between" mx={80}>
      <ActionIcon variant="subtle" bg="transparent" w={60} h={60}>
        <Image src="./logo/logo.png" alt="Logo" />
      </ActionIcon>

      <Group gap={20}>
        <Button
          h={40}
          leftSection={
            <ActionIcon bg="transparent" variant="subtle">
              <IconHome size={SMALLICON} />
            </ActionIcon>
          }
          onClick={() => navigate("/")}
        >
          {t("navbar.home.label")}
        </Button>

        <Button
          h={40}
          variant="default"
          leftSection={
            <ActionIcon bg="transparent" variant="subtle">
              <IconArticle size={SMALLICON} />
            </ActionIcon>
          }
          onClick={() => navigate("articles")}
        >
          {t("navbar.articles.label")}
        </Button>

        <Popover>
          <Popover.Target>
            <ActionIcon variant="subtle">
              <IconWorld size={SMALLICON} />
            </ActionIcon>
          </Popover.Target>

          <Popover.Dropdown>
            <Select
              label={t("navbar.language.label")}
              placeholder={t("navbar.language.description")}
              value={language}
              onChange={(value) => {
                setLanguage(value || language);
              }}
              data={LANGUAGE_OPTIONS}
              comboboxProps={{ withinPortal: false }}
            />
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Group>
  );
}
