import React, { Component } from 'react';
import Demo00 from './Demo00';
import Demo01 from './Demo01';

export default class LoadListMobile extends Component{
    render(){
        return (
            <div className = "iframe_mobile_content">
                <h2>示例1</h2>
                <Demo00 />
                <h2>示例2</h2>
                <Demo01 />
            </div>
        )
    }
}
