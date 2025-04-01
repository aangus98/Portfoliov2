import Header from "../components/header";
import Footer from "../components/footer";
import BasicInfo from "../components/AboutMe/basicInfo";
import ContactBox from "../components/MainPage/contactMe";


const AboutMe = () => {
  return (
    <>
      <Header />
      <BasicInfo />
      <ContactBox />
      <Footer />
    </>
  );
};

export default AboutMe;