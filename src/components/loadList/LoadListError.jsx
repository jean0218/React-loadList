import React, { Component } from 'react';
import Pagination from './Pagination';
import BaseLine from './BaseLine';
import MessageTip from '../messageTip/MessageTip';
import DataIsNull from '../unusual/DataIsNull';


export default class LoadListError extends Component{
    renderDataListIsNoData(){
        const { renderDataIsNull } = this.props;
        if(renderDataIsNull === null){
            return (
                <DataIsNull 
                    src = {require('../../images/data_isNull.png')} 
                    errorMsg = '没有找到符合条件的记录'/>
            ) 
        }
        return renderDataIsNull;
    }   
    
    renderMessage(){
        const {messageTip} = this.props;
        if(messageTip !== null && messageTip.length > 0){
            return (
                <MessageTip content = {this.props.messageTip}/>
            )   
        }
        return null;        
    }
    
    render() {
        return (
            <div>
                {this.renderDataListIsNoData()}
                {this.renderMessage()}
            </div>
        )
    }
}


