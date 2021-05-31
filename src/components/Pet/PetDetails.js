import { Component } from "react";

import * as petService from "../../services/petsService";

class OtherPetDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pet: {},
      likes: 1,
    };

    this.givePet = this.givePet.bind(this);
  }

  componentDidMount() {
    petService
      .getOne(this.props.match.params.petId)
      .then((res) =>
        this.setState(
          {
            pet: res,
            likes: res.likes
          }))
  }

  async givePet() {
    let likesPlusOne = this.state.likes + 1;

    await petService.givePet(this.state.pet.id, likesPlusOne)
    let pet = await petService
      .getOne(this.props.match.params.petId)
    

    this.setState({
      pet: pet, 
      likes: pet.likes
    })
  }

  render() {
    return (
      <section className="detailsOtherPet">
        <h3>{this.state.pet.name}</h3>
        <p>
          Pet counter: {this.state.pet.likes}
          <a href="#">
            <button className="button" onClick={this.givePet}>
              <i className="fas fa-heart"></i> Pet
            </button>
          </a>
        </p>
        <p className="img">
          <img src={this.state.pet.imageURL} />
        </p>
        <p className="description">{this.state.pet.description}</p>
      </section>
    );
  }
}

export default OtherPetDetails;
