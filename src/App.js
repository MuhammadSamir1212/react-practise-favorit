import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetups />} />

          <Route path="/new-meetup" element={<NewMeetup />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
