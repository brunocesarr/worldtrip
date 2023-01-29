import { Flex, Grid, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { Logo } from './Logo';

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['50px', '100px']}
      align="center"
      justify="center">
      <Grid
        h={['50px', '100px']}
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start">
        {!isHomePage && (
          <Link href="/">
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </Link>
        )}
        <Logo />
      </Grid>
    </Flex>
  );
}
