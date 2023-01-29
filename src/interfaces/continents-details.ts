import type { ContinentInfo } from './continents';

export type ContinentDetailsInfo = ContinentInfo & {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;

  aboutDescription: string;
  countriesCount: number;
  languagesCount: number;
  citiesCount: number;
  cities: City[];
};

type City = {
  name: string;
  countryName: string;
  thumbnail: string;
  flag: string;
};
