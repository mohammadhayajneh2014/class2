import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {

  render() {
    return (
      <>

        <Modal show={this.props.modalShowFunction} onHide={this.props.handleClose}>

          <Modal.Header  show={this.props.modalShowFunction} 
           closeButton onHide={this.props.handleClose}>
            {this.props.modelHedar}
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.modelImag} alt='' style={{ width: "450px", height: "400px" }}></img>
          </Modal.Body>

          <Modal.Footer>
            {this.props.foterModel}

            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
                      </Button>
          </Modal.Footer>

        </Modal>

      </>
    )

  }
}


export default SelectedBeast;
