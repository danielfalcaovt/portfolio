import { Center, Image, Stack, Title } from "@mantine/core";
import { t } from "i18next";

export default function ArticleContainer() {
  return (
    <>
      <Center h='80vh'>
        <Stack align="center">
          <Title size={18}>{t("developing")}</Title>
          <Image src="./images/working.png" w={128} />
        </Stack>
      </Center>
    </>
  );
}
