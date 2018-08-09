import React, { Component } from 'react';
import { LoadList } from '../src/index';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class Demo00 extends Component{
    render(){
        return (
            <LoadList
                dataSource = {data}
                renderItem = {item =>(<div>{item}</div>)}
            />
        )
    }
}
