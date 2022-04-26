// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Body = {
  start: number;
  limit: number;
}

const apiUrl = 'https://dev-api.confidence.org/v2/confidence/locations'
const headers = {
  'Content-Type': 'application/json',
  Username: 'amitphatak$r5labs.com',
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  
  try {
    const body: Body = req.body;
    axios.post(apiUrl, body, { headers })
      .then(response => res.status(200).json(response.data))
      .catch(error => {
        console.error(error)
        return res.status(500).end(error)
      })

  } catch (error) {
    console.error(error)
    return res.status(500).end('server error')
  }
}
