
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
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/user/show/your-profile" target="_blank" rel="noopener noreferrer">
            Goodreads
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
