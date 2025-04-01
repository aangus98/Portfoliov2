import Header from "../components/header";
import Footer from "../components/footer";
import SectionOne from "../components/MainPage/sectionOne";
import FrontEnd from "../components/MainPage/frontEnd";
import BackEnd from "../components/MainPage/backEnd";
import DevTools from "../components/MainPage/devTools";
import ContactBox from "../components/AboutMe/contactMe";

const MainPage = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <FrontEnd />
      <BackEnd />
      <DevTools />
      <ContactBox />
      <Footer />
    </>
  );
}

export default MainPage;

