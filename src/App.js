import React, { Component } from "react";
import BandCard from "./components/BandCard";
import Wrapper from "./components/Wrapper";
import bands from "./bands.json";
import HelloNav from "./components/NavBar/HelloNav";
import Counter from "./components/Counter";

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
        <HelloNav />
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

  Counter() {
    return <Counter />;
  }

}

export default App;