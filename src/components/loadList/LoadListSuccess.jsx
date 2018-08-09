import React, { Component } from 'react';
import Pagination from './Pagination';
import BaseLine from './BaseLine';
import Loading from '../loading/Loading';
import MessageTip from '../messageTip/MessageTip';



export default class LoadListSuccess extends Component{ 
    constructor(props){
        super(props);
        this.state =  {
            isRefreshDOM: false, //上拉刷新
        };
    }

    handlePageUp = (newState) =>{
        if(this.props.isRefresh){
            this.setState({
                isRefreshDOM: newState.refresh
            },function(){
                if(!newState.refresh){
                    this.scrollFlip(1);
                }
            })
        }  
        this.props.onPageUp(newState);      
    }
    
    handlePageDown = (newState) =>{
        const { stopFlip, endPage } = this.props;
        if (newState.currentPage >= 1 && !stopFlip && !endPage) {
            this.scrollFlip(newState.currentPage);
        }
    }
      
    scrollFlip = (pageNo) =>{
        this.props.onPageDown(pageNo);
    }
    
    renderDataList(){       
        var listIndex,
            self = this;
        const { children, itemKeyName, dataSource, renderItem } = this.props;
        const { onChange } = this;
        let itemKey;
        return dataSource.map(function(item, listIndex, array) {
            itemKey = item[itemKeyName] ? item[itemKeyName] : listIndex;
            return renderItem(item, onChange, listIndex, array, itemKey);
        });
    }    
   
    renderDataListLoading(){
        const { isLoading } = this.props;
        if(isLoading){
            return (
                <Loading content = '加载中'/>
            )
        }
        return null;       
    }
    
    renderMessage(){
        const {messageTip} = this.props;
        if(messageTip.length > 0){
            return (
                <MessageTip content = {this.props.messageTip}/>
            )   
        }
        return null;        
    }
    
    renderIsRrfreshDOM(){
        if(this.state.isRefreshDOM){
            return (
                <Loading content = '加载中,松开之后刷新'/>
            )
        }
        return null;
    }
    
    renderBaseLine(){
        const { endPage } = this.props;
        if(endPage){
            renderPageEnd && renderPageEnd;
            return (
                <BaseLine className = 'datalist-baseline'/>
            )
        }
        return null;
    }
    
    render() {
        const { className, currentPage, stopFlip, endPage } = this.props;
        const stopPageDown = stopFlip || endPage;
        return (
            <Pagination
                className = {className} 
                currentPage = {currentPage}
                onPageUp = {this.handlePageUp} 
                onPageDown = {this.handlePageDown} 
                stopPageDown = {stopPageDown}
            >
                {this.renderIsRrfreshDOM()}
                {this.renderDataList()}
                {this.renderDataListLoading()}
                {this.renderMessage()}
                {this.renderBaseLine()}
            </Pagination>
        );
    }
}


