import React, { Component, PropTypes } from 'react';

class PokemonItem extends Component {

    generateTypes(){
        let types = [];
        this.props.types.map((item,index)=>{
            types.push(<li key={index}>{item.name}</li>);
        })
        return types;
    }

    render() {
        return (
            <div>
                <img src={`http://pokeapi.co/media/img/${this.props.id}.png`}/>
                <h1>{this.props.name}</h1>
                <ul>{this.generateTypes()}</ul>
            </div>
        );
    }
}


export default PokemonItem;