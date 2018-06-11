import React, { Component } from 'react';
import './baseLine.css';


export default function Loading(props){  
    return (
        <div className={props.className}>
            <div className="baseline"></div>
            <span>我是有底线的</span>
        </div>
    )
};