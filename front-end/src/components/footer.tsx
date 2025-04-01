import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGoodreads } from "react-icons/fa";
import "../css/footer.css"; // Ensure you have a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p className="copywright">&copy; {new Date().getFullYear()} Andrew Angus. All rights reserved.</p>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/andrew-angus-3404551a5/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin size={24} />
          </a>
        </li>
        <li>
          <a href="https://github.com/aangus98" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/user/show/174972405-andrew-angus" target="_blank" rel="noopener noreferrer">
            <FaGoodreads size={24} />
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
