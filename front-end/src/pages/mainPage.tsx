import Header from "../components/header";
import Footer from "../components/footer";
import SectionOne from "../components/MainPage/sectionOne";
import FrontEnd from "../components/MainPage/frontEnd";
import BackEnd from "../components/MainPage/backEnd";
import DevTools from "../components/MainPage/devTools";

const MainPage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <FrontEnd />
      <BackEnd />
      <DevTools />
      <Footer />
    </>
  );
}

export default MainPage;

