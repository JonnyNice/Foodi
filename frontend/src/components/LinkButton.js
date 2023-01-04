import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const { creatorName, onClick, ...otherProps } = props;
  let pathname;
  if (creatorName === 'all') {
    pathname = '/users';
  } else {
    pathname = `/users/${creatorName}`;
  }
  return (
    <Link
      {...otherProps}
      to={{
        pathname: '/recipes',
        search: `?creator_name=${creatorName}`,
      }}
      onClick={() => {
        if (onClick) {
          onClick(creatorName);
        }
      }}
    >
      Recipes!
    </Link>
  );
};

export default LinkButton;