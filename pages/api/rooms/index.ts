import { NextApiRequest, NextApiResponse } from 'next'

import { getRooms } from '../../../lib/webex'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await getRooms()

    res.status(200).json(rooms)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
