import { NextApiRequest, NextApiResponse } from 'next'

import { getRoom } from '../../../lib/webex'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const roomId = _req.query.roomId as string
    const room = await getRoom(roomId)

    res.status(200).json(room)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
