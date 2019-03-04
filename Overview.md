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

* ref