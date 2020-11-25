#container components are usually class components
    -usually render other components
    -job will often be to render components in components folder
    -can act as parent to components
    -job can also be to get data from our store
    -can pass down data to child compoents
    -can also handle some of the date such as componentDidMount or click function

App will usually render at least one container

Artist Reducer will be reponsible for updating part of our store that has to do with Artists

reducer takes in the previous state as the first argument and then an action object as the second argument and inside our reducer we will update the state according to the action type

first argument in reducer - set initial state in reducer to an object for consistency, set a key in that object called artists pointing to an empty array - that way we can add more key/value pairs if needed

second argument in reducer is action