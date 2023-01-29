import '@/styles/components/slider.module.css';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ContinentInfo } from '@/interfaces';
interface SliderProps {
  continents: ContinentInfo[];
}

export function Slider({ continents }: SliderProps) {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}>
      <Swiper
        className="mySwiper"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          width: '100%',
          flex: '1',
        }}
        lazy={true}
        modules={[Lazy, Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}>
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              h={['250px', '450px']}
              alignContent="center"
              justifyContent="center"
              direction="column"
              bgImage={`url('${continent.imageUrl}')`}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              p={['8']}>
              <Link href={`/continents/${continent.title.toLowerCase()}`}>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="white"
                  fontWeight="bold">
                  {continent.title}
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.100"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}>
                  {continent.summary}
                </Text>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
