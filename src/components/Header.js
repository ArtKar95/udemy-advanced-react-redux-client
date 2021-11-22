import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <div className='header'>
      <Link to='/'>Redux auth</Link>
      {auth ? (
        <div>
          <Link to='signout'>sign out</Link>
          <Link to='feature'>feature</Link>
        </div>
      ) : (
        <div>
          <Link to='/signup'> sign up</Link>
          <Link to='/signin'>signin</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
