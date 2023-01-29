import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      justify={['center', 'space-between']}
      align="center"
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      mx="auto"
      px={['4', '10', '15', '20', '36']}
      bgImage="url('/assets/img/Background.jpg')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover">
      <div>
        <Heading
          color="white"
          fontWeight="500"
          fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}>
          5 continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text
          color="gray.300"
          mt="5"
          fontSize={['0.8rem', 'xl']}
          maxW={['100%', '100%', '100%', '550px']}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </div>
      <Image
        w={['300px', '300px', '300px', '430px']}
        display={['none', 'none', 'block']}
        src="/assets/img/airplane.png"
        alt="Airplane into clouds."
        transform="translateY(48px)"
        ml="8"
      />
    </Flex>
  );
}
