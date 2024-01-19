import { Greeting } from "./components/Greeting/Greeting";
import { Layout } from "./components/Layout/Layout";
import { ListLinks } from "./components/ListLinks/ListLinks";

function App() {
  return (
    <Layout>
      <Greeting />
      <ListLinks />
    </Layout>
  );
}

export default App;
