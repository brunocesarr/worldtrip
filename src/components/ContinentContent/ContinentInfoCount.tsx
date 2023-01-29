import { Flex, Heading, Text } from '@chakra-ui/react';

interface ContinentInfoCount {
  count: number;
  textInfo: string;
}

export function ContinentInfoCount({ count, textInfo }: ContinentInfoCount) {
  return (
    <Flex
      direction="column"
      justify="center"
      align={['flex-start', 'flex-start', 'center']}>
      <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
        {count}
      </Heading>
      <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
        {textInfo}
      </Text>
    </Flex>
  );
}
