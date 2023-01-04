import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const { creatorName = 'all', onClick, ...otherProps } = props;
  return (
    <Link
      {...otherProps}
      to={{
        pathname: '/creator',
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