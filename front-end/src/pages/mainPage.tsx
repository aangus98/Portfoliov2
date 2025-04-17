import Header from "../components/header";
import Footer from "../components/footer";
import SectionOne from "../components/MainPage/sectionOne";
import FrontEnd from "../components/MainPage/frontEnd";
import BackEnd from "../components/MainPage/backEnd";
import DevTools from "../components/MainPage/devTools";
import ContactBox from "../components/MainPage/contactMe";
import ProjectsPreview from "../components/Projects/projectCards";
import { useEffect} from "react";

const MainPage = () => {
  useEffect(() => {
    document.title = "Andrew Angus";
  }, []);
  return (
    <>
      <Header />
      <SectionOne />
      <ProjectsPreview />
      <FrontEnd />
      <BackEnd />
      <DevTools />
      <ContactBox />
      
      <Footer />
    </>
  );
}

export default MainPage;

