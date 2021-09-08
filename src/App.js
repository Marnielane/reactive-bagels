import React from 'react'
import BagelsContainer from './components/BagelsContainer'
import Form from './components/Form'

class App extends React.Component {

  state = {
    bagels:['bagel 1', 'bagel 2']
  }
  
  render(){
    return (
      <>
        <h1>This is our Bagels App</h1>
        <Form/>
        <BagelsContainer/>
      </>
    );
  }
}

export default App;
