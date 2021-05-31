import { Component } from 'react';

import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import Pet from '../Pet/PetHomePage';

import * as petService from '../../services/petsService';

class Categories extends Component{
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
        };
    }

    componentDidMount() {
        petService.getAll()
        .then(res => this.setState({ pets: res }));
    }

    componentDidUpdate(prevState) {
        const category = this.props.match.params.category;

        if (prevState.match.params.category === category){
            return;
        }

        petService.getAll(this.props.match.params.category)
        .then(res => this.setState({ pets: res }));
    }
    
    render() {
        return (
            <section className="dashboard">
            <h1>Dashboard</h1>
            
            <CategoryNavigation />
            <ul className="other-pets-list">
                {this.state.pets.map(x =>
                    <Pet 
                        key={x.id}
                        id={x.id}
                        name={x.name}
                        category={x.category}
                        imgURL={x.imageURL}
                        description={x.description}
                        likes={x.likes}
                    />
                    )}
            </ul>
            </section>
        );
    }
}

export default Categories;
