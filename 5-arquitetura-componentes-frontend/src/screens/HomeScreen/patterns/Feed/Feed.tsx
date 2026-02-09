import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
         Olá pessoas
      </Button>
      <Button.Base href="https://globo.com">
        <Image
          styleSheet={{
            width: '128px',
            height: '128px',
            borderRadius: '100%',
          }}
          src="https://github.com/omariosouto.png"
          alt="Imagem de perfil do Mario Souto"
        />
        <Link href="https://youtube.com">
          <Icon name="youtube" />
        </Link>
        <Icon name="twitter" />
        <Icon name="instagram" />
        <Icon name="github" />
        <Text>Feed Header</Text>
      </Button.Base>

    </Box>
  );
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
}
