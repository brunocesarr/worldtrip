import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import type { ContinentDetailsInfo } from '@/interfaces';
interface ContinentCitiesProps {
  continent: ContinentDetailsInfo;
}

export function ContinentCities({ continent }: ContinentCitiesProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}>
        {continent.cities.map(city => (
          <Box borderRadius="4px" overflow="hidden" key={city.name}>
            <Image
              src={city.thumbnail}
              alt={`${city.name}, ${city.countryName}`}
              h="170px"
              w="100%"
            />
            <Flex
              p="6"
              align="center"
              justify="space-between"
              bg="white"
              border="1px"
              borderColor="yellow.300"
              borderTop="0">
              <Flex direction="column">
                <Heading fontSize="xl" fontWeight="500">
                  {city.name}
                </Heading>
                <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
                  {city.countryName}
                </Text>
              </Flex>
              <Image
                src={city.flag}
                alt={`${city.name}, ${city.countryName}`}
                w="30px"
                h="30px"
                borderRadius="50%"
                objectFit="cover"
              />
            </Flex>
          </Box>
        ))}
      </Grid>
    </>
  );
}
