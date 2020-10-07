import Layout from '../../components/Layout'
import RoomDetail from '../../components/room-detail'
import { useRouter } from 'next/router'

const RoomPage = () => {
  const router = useRouter()
  const roomId = router.query.roomId as string

  return (<Layout title="Webex integrations">
    <h1>Hello Cisco 👋</h1>
    <RoomDetail roomId={roomId} />

    <style jsx>{`

    `}</style>
  </Layout>)
}


export default RoomPage
