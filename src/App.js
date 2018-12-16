import React, { Component } from "react";
import BandCard from "./components/BandCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import bands from "./bands.json";

class App extends Component {

  state = {
    bands
  };

  removeBand = id => {

    const bands = this.state.bands.filter(band => band.id !== id);

    this.setState({ bands });
  };


  render() {
    return (
      <Wrapper>
        <Title>Bands List</Title>
        {this.state.bands.map(band => (
          <BandCard
            removeBand={this.removeBand}
            id={band.id}
            key={band.id}
            name={band.name}
            image={band.image}
            genre={band.genre}
            origin={band.origin}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;