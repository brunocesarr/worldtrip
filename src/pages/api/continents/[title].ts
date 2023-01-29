// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import continentsData from '@/mock/continents.json';

import type { NextApiRequest, NextApiResponse } from 'next';

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

const continents: ContinentDetailsInfoApi[] = continentsData.map(data => {
  const {
    id,
    title,
    summary,
    image_url,
    about_description,
    countries_count,
    languages_count,
    cities_count,
    cities,
  } = data;
  return {
    id,
    title,
    summary,
    image_url,
    about_description,
    countries_count,
    languages_count,
    cities_count,
    cities,
  } as ContinentDetailsInfoApi;
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContinentDetailsInfoApi | { errors: string }>,
) {
  try {
    const { title } = req.query;
    const titleSearched = title as string;

    if (!titleSearched)
      return res.status(400).json({ errors: 'Invalid Param.' });

    const continent: ContinentDetailsInfoApi = continents.find(info =>
      info.title.toLowerCase().includes(titleSearched.toLowerCase()),
    );
    if (!continent) return res.status(204);

    return res.status(200).json({ ...continent });
  } catch (error) {
    return res.status(500).json({ errors: `${(error as Error).message}` });
  }
}
