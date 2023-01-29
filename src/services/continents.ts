import type { ContinentDetailsInfo, ContinentInfo } from '@/interfaces';

let continentsInfo: ContinentInfo[] = [];

type ContinentInfoApi = {
  id: number;
  title: string;
  summary: string;
  image_url: string;
};

type ContinentDetailsInfoApi = ContinentInfoApi & {
  about_description: string;
  countries_count: number;
  languages_count: number;
  cities_count: number;
  cities: {
    name: string;
    country_name: string;
    image_url: string;
    flag: string;
  }[];
};

export async function getContinentsInformation(): Promise<ContinentInfo[]> {
  try {
    if (continentsInfo.length > 0) return continentsInfo;

    const response = await fetch(`http://localhost:3000/api/continents`);
    const data: ContinentInfoApi = (await response.json()) as ContinentInfoApi;

    if (data) {
      continentsInfo = Object.keys(data).map((key: string) => {
        const { id, title, summary, image_url }: ContinentInfoApi = data[
          key
        ] as ContinentInfoApi;
        return {
          id,
          title,
          summary,
          imageUrl: image_url,
        } as ContinentInfo;
      });
    }

    return continentsInfo;
  } catch (error: unknown) {
    throw new Error(`Error in request: ${(error as Error).message}`);
  }
}

export async function getContinentsInformationByName(
  continentName: string,
): Promise<ContinentDetailsInfo> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/continents/${continentName.toLowerCase()}`,
    );
    const data: ContinentDetailsInfoApi =
      (await response.json()) as ContinentDetailsInfoApi;

    let continentInfo: ContinentDetailsInfo;
    if (data) {
      const {
        id,
        title,
        summary,
        image_url,
        about_description,
        cities_count,
        countries_count,
        languages_count,
        cities,
      }: ContinentDetailsInfoApi = data;
      continentInfo = {
        id,
        title,
        summary,
        imageUrl: image_url,
        aboutDescription: about_description,
        cities: cities.map(city => {
          return {
            name: city.name,
            countryName: city.country_name,
            thumbnail: city.image_url,
            flag: city.flag,
          };
        }),
        citiesCount: cities_count,
        countriesCount: countries_count,
        languagesCount: languages_count,
      };
    }

    return continentInfo;
  } catch (error: unknown) {
    throw new Error(`Error in request: ${(error as Error).message}`);
  }
}
