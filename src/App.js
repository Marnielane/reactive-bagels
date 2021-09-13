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
        <BagelsContainer bagels={this.state.bagels}/>
      </>
    );
  }
}

export default App;
