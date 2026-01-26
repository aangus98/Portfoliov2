import Header from "../components/header";
import Footer from "../components/footer";
import SectionOne from "../components/MainPage/sectionOne";
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
      <Footer />
    </>
  );
}

export default MainPage;

