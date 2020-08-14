import React, { Component } from 'react';
import draw from './vis';
import hover from './hover';
import select from './select';
import {animate} from './animation';
import D3Chart from '../D3Chart';

export default class HeatMap extends Component {

    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(preProps) {
        draw(this.props);
    }

    render() {
        return (
            <D3Chart className='vis-heatmap' classId='vis-heatmap' draw={draw}  hover={hover} select={select} animate={animate} {...this.props}/>
        )
    }
}
