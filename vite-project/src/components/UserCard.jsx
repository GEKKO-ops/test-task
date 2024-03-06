import PropTypes from 'prop-types';

export const UserCard = ({ item }) => {
  return (
    <li className='user_item' key={item.id}>
      <img
        src={item.photo}
        alt={`${item.photo}-image`}
        className='user_photo'
      />
      <p className='user_name'>{item.name}</p>
      <div className='user_description'>
        <p>{`${item.position}`}</p>
        <p>{`${item.email}`}</p>
        <p>{`${item.phone}`}</p>
      </div>
    </li>
  );
};

UserCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
