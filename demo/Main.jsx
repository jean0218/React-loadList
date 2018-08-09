import React, { Component } from 'react';
import LoadListMobile from './LoadListMobile';
import './main.css';

export default class Main extends Component{
    render(){
        return (
            <div>
                <div className = "iframe_mobile">
                    <div className = "iframe_mobile_header_wrap">   
                        <div className = "iframe_mobile_header">                        
                        </div>
                        <input 
                            type = "text" 
                            className = "iframe_mobile_input" 
                            value = "demo" 
                        />             
                    </div>                    
                    <LoadListMobile />
                </div>
            </div>
        )
    }
}

