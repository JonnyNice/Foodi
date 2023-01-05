import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const { username, onClick, ...otherProps } = props;
  let pathname;
  if (username === 'all') {
    pathname = '/users';
  } else {
    pathname = `/userpage/${username}`;
  }
  return (
    <Link
      {...otherProps}
      to={{
        pathname: '/userpage',
        search: `?username=${username}`,
      }}
      onClick={() => {
        if (onClick) {
          onClick(username);
        }
      }}
    >
      <button>View Profile</button>
    </Link>
  );
};

export default LinkButton;