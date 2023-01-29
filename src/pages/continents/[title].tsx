import {
  ContinentBanner,
  ContinentCities,
  ContinentContent,
  Header,
  Loading,
} from '@/components';
import {
  getContinentsInformation,
  getContinentsInformationByName,
} from '@/services/continents';
import { Flex } from '@chakra-ui/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ContinentDetailsInfo } from '@/interfaces/continents-details';
interface ContinentProps {
  continent: ContinentDetailsInfo;
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;

  if (!continent)
    return (
      <DefaultErrorPage statusCode={500} title={`Continent data not found`} />
    );

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {continent.title}</title>

        <meta property="og:title" content={`WorldTrip ${continent.title}`} />
        <meta property="og:description" content={continent.aboutDescription} />
        <meta name="twitter:title" content={`WorldTrip ${continent.title}`} />

        <meta name="twitter:image" content={continent.imageUrl} />
        <meta name="twitter:image:src" content={continent.imageUrl} />
        <meta property="og:image" content={continent.imageUrl} />
        <meta property="og:image:secure_url" content={continent.imageUrl} />
      </Head>

      <Header />
      <ContinentBanner continent={continent} />

      <Flex
        direction="column"
        w="100%"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
        overflowX="hidden"
        h="fit-content">
        <ContinentContent continent={continent} />
        <ContinentCities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await getContinentsInformation();

  const paths = continents.map(continent => {
    return {
      params: {
        title: continent.title.toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { title } = context.params;
    const titleSearched = title as string;
    const continent: ContinentDetailsInfo =
      await getContinentsInformationByName(titleSearched);

    return {
      props: {
        continent,
      },
      revalidate: 1800,
    };
  } catch (error) {
    return {
      props: {
        error: (error as Error).message,
      },
      revalidate: 1800,
    };
  }
};
