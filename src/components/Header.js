import React, { Component } from 'react';

import styles from './App.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <nav>
          <ul>
            <li><a className={styles.active} href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </nav>
        <section>
          <h1>Dr Who Creature API</h1>
          <h2>This is it. This is all of them.</h2>
        </section>
      </header>
    );
  }
};
