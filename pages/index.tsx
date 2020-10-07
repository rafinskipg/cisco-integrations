import Layout from "../components/Layout";
import RoomList from "../components/room-list";
import Topper from "../components/topper";
import Hero from "../components/hero";
import Header from "../components/header"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Topper/>
    <Header/>
    <Hero>
      <h1>Hello Cisco 👋</h1>
    </Hero>
    <RoomList />
  </Layout>
);

export default IndexPage;
