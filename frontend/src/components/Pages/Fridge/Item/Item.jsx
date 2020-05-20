import React, { Component } from 'react'
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'
import sliderimg from '../../../../images/sliderwhite.png'
import './Item.css'
import SliderItem from './SliderItem/SliderItem'

class Items extends Component {

  render() {
    const items = this.props.data
    // console.log(items)

    return (
      <Carousel interval={null} controls={false} fade={true} touch={true}>
        {items ? items.map(item => (
          <Carousel.Item key={item._id} >
            <img className="d-block w-100" src={sliderimg} />
            <Carousel.Caption>
              <SliderItem data={item} />
            </Carousel.Caption>
          </Carousel.Item>
        )) : <Carousel.Item>
            <img className="d-block w-100"

              src={sliderimg}
              alt="slide" />
            <Carousel.Caption>
              <div>No items available</div>
            </Carousel.Caption>
          </Carousel.Item>}

        {this.props.error && <Carousel.Item>
          <img className="d-block w-100"

            src={sliderimg}
            alt="slide" />
          <Carousel.Caption>
            <div className="error">{this.props.error}</div>
          </Carousel.Caption>
        </Carousel.Item>}

      </Carousel>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.productReducer.listError,
  }
}

export default connect(mapStateToProps)(Items);