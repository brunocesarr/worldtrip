import { Divider as ChakraDivider } from '@chakra-ui/react';

export function Divider() {
  return (
    <ChakraDivider
      orientation="vertical"
      w={['60px', '90px']}
      mx="auto"
      h="2px"
      bg="gray.700"
      my={['9', '20']}
    />
  );
}
