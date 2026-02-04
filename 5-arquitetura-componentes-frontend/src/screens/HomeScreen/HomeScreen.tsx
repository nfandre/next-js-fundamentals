import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      $styleSheet={{
        backgroundColor: theme.colors.positive.x100,
        flex: 1,
        alignItems: "center"
      }}
    >
      <Link colorVariant="accent" href="/sobre" >
        Vá para a página Sobre
      </Link>
      <Link href="https://google.com">
        Ir para o google
      </Link>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h1" variant="display1">
          Últimas atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />

    </Box>
  )
}
