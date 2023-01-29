import { Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Image
      src="/assets/img/logo.png"
      alt="WorldTrip Logo"
      w={['81px', '184px']}
      justifySelf="center"
      gridColumn="2"
    />
  );
}
