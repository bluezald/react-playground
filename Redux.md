# Redux
- The whole state of your app is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, an object describing what happened.
- The only way to mutate the internal state is to dispatch an action.

![Redux Flow](https://cdn-images-1.medium.com/max/800/1*ucOxan56LKUm3gkjaePwRg.png)

```js
import { createStore } from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
```
- Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application's state.

- Redux attempts to make state mutations predictable

- **Redux can be described in 3 fundamental principles**
1. Single source of truth - the "state" of your app is stored in an **object** tree within a single store
2. State is readonly - the only way to change the state is to emit an action, and object describing what happened. Expresses an intent to transform the state.
3. Changes are made with **pure functions** - Reducers are just pure functions that take the previous state and an action and return the next state. Remember to return **new** state instead of mutating the previous state.

### Actions
- Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
- Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

## Async
- When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

## Container Components
- "Container components are components that are aware of Redux"

Well, a container component is a component that is responsible for retrieving data, and in order to get that data, the component needs to use Redux's connect and mapStateToProps functions.

---

# Redux Thunk
- With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store
- A **thunk** is a function that wraps an expression to delay its evaluation.
### Asynchronous thunks

```js
function fetchData(fn){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => fn(json))
}


const asyncThunk = function (){
   return fetchData(function getData(data){
      console.log(data)
  })
}

asyncThunk()
```
- In the above code we are not calling the getData function immediately we only call the getData function whenever the data is available from the API endpoint.


### Middleware
- middleware is some code you can put between the framework receiving a request, and the framework generating a response.

# API Reference

## connect()
- connects a React component to a Redux store.
- It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
- The connect function is provided by Redux. It subscribes our container component to the store, so that it will be alerted when state changes.
- Not every component will be connected, or subscribed, to the store. Only container, or "stateful", components will be connected to the store.


- https://react-redux.js.org/api/connect
- https://www.thegreatcodeadventure.com/react-redux-tutorial-part-iv-the-index-feature/

- connect accepts four different parameters, all optional. By convention, they are called:
    - mapStateToProps?: Function
    - mapDispatchToProps?: Function | Object
    - mergeProps?: Function
    - options?: Object

### mapStateToProps
```
mapStateToProps?: (state, ownProps?) => Object
```

### mapDispatchToProps
```
mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
```


Sources:
- https://redux.js.org/introduction/getting-started
- https://redux.js.org/advanced/async-actions
- https://www.thegreatcodeadventure.com/the-react-plus-redux-container-pattern/
- https://github.com/reduxjs/redux-thunk
- https://medium.com/@aurelie.lebec/redux-and-react-native-simple-login-example-flow-c4874cf91dde
- https://reactgo.com/thunks-javascript/