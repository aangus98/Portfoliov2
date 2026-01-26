import Layout from "../components/MainPage/sectionOne";
import { useEffect} from "react";

const MainPage = () => {
  useEffect(() => {
    document.title = "Andrew Angus";
  }, []);
  return (
    <>
      <Layout />
    </>
  );
}

export default MainPage;

