# Redux
- The whole state of your app is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, an object describing what happened.
- The only way to mutate the internal state is to dispatch an action.

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


Sources:
- https://redux.js.org/introduction/getting-started
- https://redux.js.org/advanced/async-actions