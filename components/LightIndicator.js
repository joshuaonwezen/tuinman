import styles from '../styles/LightIndicator.module.scss';
import React, { Component } from 'react';
import Slider from 'react-input-slider'

class LightIndicator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 10,
        }
    }

    changeHandler = (x) => {
        this.setState({ x: x })
    }

    componentDidMount(){

    }

    render() {
      return (
        <Slider 
            axis="x"
            x={this.state.x}
            onChange={({ x }) => this.changeHandler(x)}
            styles={{
                track: {
                    background: 'linear-gradient(45deg, #000 5%, #ffb366 100%)',
                    height: 30,
                },
                active: {
                    backgroundColor: 'transparent'
                },
                thumb: {
                    width: 35,
                    height: 35
                },
                disabled: {
                    opacity: 0.5
                }
            }}
        />
      )
    }
}

export default LightIndicator;