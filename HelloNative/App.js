import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

// (1) - The basics here, this a component that displays Hello World
class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

// (2) Props
class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

// (3) State - There are two types of data that control a component: 
// props and state. props are set by the parent and they are fixed throughout 
// the lifetime of a component. For data that is going to change, 
// we have to use state.
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

// This part here is the main view

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <HelloWorld />
        <Bananas /> 
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View> // A View is useful as a container for other components, to help control style and layout
    );
  }
}