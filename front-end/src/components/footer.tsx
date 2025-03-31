import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGoodreads } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f1f1f1' }}>
      <p>&copy; {new Date().getFullYear()} Andrew Angus. All rights reserved.</p>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          padding: 0,
          margin: 0,
        }}
      >
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
    </footer>
  );
};

export default Footer;
