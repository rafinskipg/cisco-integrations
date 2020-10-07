import Hero from "../../components/hero";
import Layout from '../../components/Layout'
import RoomDetail from '../../components/room-detail'
import { useRouter } from 'next/router'

const RoomPage = () => {
  const router = useRouter()
  const roomId = router.query.roomId as string
  const roomTitle = router.query.roomTitle as string

  return (<Layout title="Webex integrations">
    <Hero>
      <h1>{roomTitle}</h1>
    </Hero>
    <RoomDetail roomId={roomId} />

    <style jsx>{`

    `}</style>
  </Layout>)
}


export default RoomPage
