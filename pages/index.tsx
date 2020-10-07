import Hero from "../components/hero";
import Layout from "../components/Layout";
import RoomList from "../components/room-list";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    
    <Hero>
      <h1>Hello Cisco 👋</h1>
    </Hero>
    <RoomList />
  </Layout>
);

export default IndexPage;
