import { Link } from 'react-router-dom';
import './CSS/recipeCard.css'

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
        pathname: '/user/',
        search: `${username}`,
      }}
      onClick={() => {
        if (onClick) {
          onClick(username);
        }
      }}
    >
      <button className="creator_view_recipe">View Profile</button>
    </Link>
  );
};

export default LinkButton;