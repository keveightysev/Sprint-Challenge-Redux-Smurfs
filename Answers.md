1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .filter(), and .reduce(). Map lets us create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

I like to think of actions as a type of listener where Redux waits for something specific to happen, and then collects information once that specific thing happens. Reducers take actions and apply the information collected towards the state. The store contains the state for the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is the state shared by every component in the app, to be used when multiple components need access to the state. Component state is state that only one component (or maybe one + child). Typically used for form changes.

1.  What is middleware?

Middleware lets you intercept actions before it completes the Redux loop, letting you stop actions, dispatch different actions, or dispatch multiple actions within one.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A thunk is a function that is returned by another function. It gives direct access to the dispatch function when building action-creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect()()
