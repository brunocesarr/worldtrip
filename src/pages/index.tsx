import { Banner, Divider, Header, Slider, TravelTypes } from '@/components';
import { getContinentsInformation } from '@/services/continents';
import { Flex, Heading } from '@chakra-ui/react';
import DefaultErrorPage from 'next/error';

import type { GetStaticProps } from 'next';
import type { ContinentInfo } from '@/interfaces';
interface HomeProps {
  continents?: ContinentInfo[];
  error?: string;
}

export default function Home({ continents, error }: HomeProps) {
  if (error)
    return (
      <DefaultErrorPage
        statusCode={500}
        title={`Internal Error. Message: ${error}`}
      />
    );

  if (!continents)
    return (
      <DefaultErrorPage
        statusCode={500}
        title={`Internal Error. Message: Continents information not found`}
      />
    );

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}>
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const continents = await getContinentsInformation();

    return {
      props: {
        continents,
      },
    };
  } catch (error) {
    return {
      props: {
        error: (error as Error).message,
      },
    };
  }
};
