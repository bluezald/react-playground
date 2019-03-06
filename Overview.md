# React
- React is a declarative, efficient and flexible JS library for building user interfaces.

## Create React App
- https://github.com/facebook/create-react-app
- Using npm: ```npm init react-app my-app```

It lets you compose complex UIs from small and isolated pieces of code called “components”.



**props** - properties

**state**
- a way to help components remember things. should be considered as private to a React component
- When you call setState in a component, React automatically updates the child components inside of it too.

- Props and state are related. The state of one component will often become the props of a child component.

**Immutability**
- The main benefit of immutability is that it helps you build pure components in React. Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering.

- All React component classes that have a constructor should start it with a super(props) call.

In React, **function components** are a simpler way to write components that only contain a render method and don’t have their own state.

## Reserved Words
- key
    - Keys do not need to be globally unique; they only need to be unique between components and their siblings.
    -  A “key” is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section.
    - The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
    - We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
    - When handling arrays in React, utilisation of the 'key' attribute on each element can be crucial for avoiding needless rerender performance hits
    - A good rule of thumb is that elements inside the map() call need keys.

* ref
---
## JSX
- syntax extension to JavaScript
- Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
- JSX Prevents Injection Attacks

## Elements
- are the smallest building blocks of React apps
- elements are what components are made of
- Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
- To render a React element into a root DOM node, pass both to ReactDOM.render():
- React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
- React Only Updates What’s Necessary - React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

## Components
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Defining Components:
```js
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```
- thru class
```js
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

- A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

## Props
- We recommend naming props from the component’s own point of view rather than the context in which it is being used.
- Props are readonly

- **All React components must act like pure functions with respect to their props.**

## State
- State is similar to props, but it is private and fully controlled by the component.

3 Things to take note with State
- 1.) Do not modify state directly
```js
this.state.comment = 'Hello' // wrong
this.setState({comment: 'Hello'}); // correct
```
- 2.) State updates may be asynchronous
```js
// you can use a different way of set state if state is updated
// asynchrnously
this.setState((state, props) => {
    counter: state.counter + props.increment
});
```
- 3.) State updates are merged

- A component may choose to pass its state down as props to its child components

## Lifecycle Methods
- are methods you can add in the class when the component gets mounted or destroyed.

```componentDidMount()```
- whenever the component is rendered to the DOM for the first time.
- runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

```componentWillUnmount()```
- whenever the DOM produced by the component is removed. This is called “unmounting” in React.

## Handling Events
- React events are named using camelCase, rather than lowercase.
- It is recommended: binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

## Conditional Rendering
```js
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
        <h1>Hello!</h1>
        // boolean && expression
        {unreadMessages.length > 0 &&
            <h2>
            You have {unreadMessages.length} unread messages.
            </h2>
        }
        </div>
    );
}
```
- Using Conditional Operator
```js
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}
```
```js
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
        {isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
            <LoginButton onClick={this.handleLoginClick} />
        )}
        </div>
    );
}
```
- Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.