import { NextApiRequest, NextApiResponse } from 'next'
import { getMessagesForRoom, sendMessageToRoom } from '../../../lib/webex'

async function getMessages(_req: NextApiRequest, res: NextApiResponse) {
  const roomId = _req.query.roomId as string

  try {
    const messages = await getMessagesForRoom(roomId)

    res.status(200).json(messages)

  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}


async function addMessage(_req: NextApiRequest, res: NextApiResponse) {
  const roomId = _req.query.roomId as string
  const text = _req.body.text
  try {
    await sendMessageToRoom(roomId, text)

    res.status(200).json({
      sent: true
    })

  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  switch (_req.method) {
    case 'GET':
      getMessages(_req, res)
      break;

    case 'POST':
      addMessage(_req, res);
      break;

    default:
      res.status(400).json({
        error: 'Invalid method})
      }
  }
}

  export default handler
