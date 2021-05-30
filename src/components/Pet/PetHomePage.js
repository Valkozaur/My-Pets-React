import { NavLink } from 'react-router-dom';

const Pet = ({ id, name, category, imgURL, description, likes }) => {
  return (
    <li className="otherPet">
      <h3>Name: {name}</h3>
      <p>Category: {category}</p>
      <p className="img">
        <img src={imgURL} />
      </p>
      <p className="description">{description}</p>
      <div className="pet-info">
        <a href="#">
          <button className="button">
            <i className="fas fa-heart"></i> Pet
          </button>
        </a>
        <NavLink to={`/pets/${id}`} >
          <button className="button">Details</button>
        </NavLink>
        <i className="fas fa-heart"></i> <span> {likes}</span>
      </div>
    </li>
  );
};

export default Pet;
