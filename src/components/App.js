import React, { Component } from 'react';
import Creature from './Creature.js';
import Header from './Header.js';
import Footer from './Footer.js';
import styles from './Creature.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.results}>
          <Creature image="./src/assets/weeping-angels.jpg" species="Weeping Angels" yearIntroduced={2007} episodes="Blink, The Time of Angels, Flesh and Stone, The Angels Take Manhattan" homePlanet="Cronenberg" about="scary!" />
          <Creature image="./src/assets/boekind.jpg" species="Boekind" yearIntroduced={2005} episodes="The End of The World, New Earth, Gridlock" about="old!" />
          <Creature image="./src/assets/menoptera.jpg" species="Menoptera" yearIntroduced={1965} episodes="The Web Planet" homePlanet="Vortis" about="insects!" />
          <Creature image="./src/assets/sea-devils.jpg" species="Sea Devils" yearIntroduced={1972} episodes="The Seas Devils" homePlanet="Earth" about="wet!" />
          <Creature image="./src/assets/cheetah-people.jpg" species="Cheetah People" yearIntroduced={1989} episodes="Battlefield" homePlanet="Space" about="big!" />
          <Creature image="./src/assets/star-whale.jpg" species="Star Whale " yearIntroduced={2010} episodes="The Beast Below" homePlanet="Cronenberg" about="scary!" />
          <Creature image="./src/assets/spider-germ.jpg" species="Spider Germ" yearIntroduced={2014} episodes="Kill the Moon" homePlanet="The Moon" about="leggy!" />
          <Creature image="./src/assets/daleks.jpg" species="Daleks" yearIntroduced={1963} episodes="So many" homePlanet="Skaro" about="exterminate!" />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
