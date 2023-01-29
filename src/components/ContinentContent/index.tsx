import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Flex, Grid, Heading, Text, Tooltip } from '@chakra-ui/react';

import { ContinentInfoCount } from './ContinentInfoCount';

import type { ContinentDetailsInfo } from '@/interfaces';
interface ContinentContentProps {
  continent: ContinentDetailsInfo;
}

export function ContinentContent({ continent }: ContinentContentProps) {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}>
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify">
        {continent.aboutDescription}
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <ContinentInfoCount
          count={continent.countriesCount}
          textInfo="Países"
        />
        <ContinentInfoCount
          count={continent.languagesCount}
          textInfo="Línguas"
        />

        <Flex
          direction="column"
          justify="center"
          align={['flex-start', 'flex-start', 'center']}>
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500">
            {continent.citiesCount}
          </Heading>
          <Flex
            fontWeight="500"
            fontSize={['md', 'xl']}
            color="gray.700"
            justifyContent="space-between"
            alignItems="center">
            Cidades +100
            <Tooltip label={'Cities'} h="100%">
              <InfoOutlineIcon color="dark.info.100" h={4} />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
}
