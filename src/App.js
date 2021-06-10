import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import jsonSData from './component/data.json';
import SelectedBeast from './component/SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      hornedData: jsonSData,
      modelHedar: '',
      modelImag: '',
      foterModel: '',
      show: false



    }
  }
  

  
  handleClose = () => {
    this.setState({ show: false })
  }

  changingStateDataFunction = (selectedTitel, selectedImg, selectedDesc) => {


    this.setState(
      {
        modelHedar: selectedTitel,
        modelImag: selectedImg,
        foterModel: selectedDesc,
        show: true
      }
    )


  }
  render() {
    return (
      <>
        <Header />
        <Main hornedDataMain={this.state.hornedData} getDataFromApp={this.changingStateDataFunction} />

        <SelectedBeast modelHedar={this.state.modelHedar} modelImag={this.state.modelImag} foterModel={this.state.foterModel} modalShowFunction={this.state.show} handleClose={this.handleClose} > </SelectedBeast>
        <Footer />
      </>

    )
  }

}

export default App;
