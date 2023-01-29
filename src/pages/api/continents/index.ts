// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import continentsData from '@/mock/continents.json';

import type { NextApiRequest, NextApiResponse } from 'next';

type ContinentInfoApi = {
  id: number;
  title: string;
  summary: string;
  image_url: string;
};

const continents: ContinentInfoApi[] = continentsData.map(data => {
  const { id, title, summary, image_url } = data;
  return {
    id,
    title,
    summary,
    image_url,
  } as ContinentInfoApi;
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContinentInfoApi[]>,
) {
  if (continents?.length == 0) return res.status(204);

  return res.status(200).json({ ...continents });
}
