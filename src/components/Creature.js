import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Creature.css';

export default class Creature extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    yearIntroduced: PropTypes.number.isRequired,
    episodes: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    homePlanet: PropTypes.string.isRequired
  }

  render() {
    const { image, yearIntroduced, episodes, species, about, homePlanet } = this.props;
    return (
      <div className={styles.box}>
        <img className={styles.image} src = {image} />
        <p className={styles.species}>{species}</p>
        <div className={styles.line}><p>Year Introduced:</p><p>{yearIntroduced}</p></div>
        <div className={styles.line}><p>Episodes:</p><p>{episodes}</p></div>
        <div className={styles.line}><p>Home Planet:</p><p>{homePlanet}</p></div>
        <div className={styles.line}><p>About:</p><p>{about}</p></div>
      </div>
    );
  }
}
