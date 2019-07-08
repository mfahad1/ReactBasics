# Setup for Reducer

1) npm install --save redux
2) npm install react-redux

We have to complete this cycle

1) component will ask for change of data through action
2) action will trigger reducer flag
3) reducer will check for that particular among all the other flags
4) finally will tell the store to update that data
5) store will then trigger the render cycle of component who is subscribed to that data

component -> action -> reducer -> store -> component
