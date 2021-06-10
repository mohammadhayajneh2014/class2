import React from 'react';
import { Card, Button } from 'react-bootstrap';



class HornedBeasts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0

    }
  }

  favouriteCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      }
    )
  }

  displayModael= () => {
    this.props.dataFromMainToModwal();

  }

  render() {
    return (
      <>


        <Card style={{ width: '10rem' }} className="text-center"
        onClick={this.displayModael}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img onClick={this.favouriteCounter} src={this.props.imgSrc} />
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              favourit❤️:{this.state.counter}
            </Card.Text>
            <Button variant="primary">like </Button>

          </Card.Body>
        </Card>



      </>
    )
  }
}

export default HornedBeasts;