import React, { Component } from 'react';
import './App.css';

import Input from './Input';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';

import { connect } from 'react-redux'

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    const { success, guessedWords } = this.props

    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]} />
      </div>
    );

  }
}

const mapStateToProps = ({success, guessedWords, secretWord}) => ({
  success,
  guessedWords,
  secretWord
})

export default connect(mapStateToProps, {getSecretWord})(App);
