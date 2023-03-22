// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Article } from '@/commons/interface';
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../data/contentData.json';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{data: Article[]}>
  ) {
    const params = req.query.params
    const detail = data.data.filter(article => article.id == params)

    res.status(200).json(
      {
        data: detail
      }
    )
}