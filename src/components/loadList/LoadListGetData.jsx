import React, { Component } from 'react';
import LoadList from './LoadList';
import mergeList from './mergeList';


export default class LoadListGetData extends Component{
    static defaultProps = {
        dataFieldName:"",
    };

    constructor(props){
        super(props);
        this.state = {          
            totalList: [],//合并后的总list
            currentPage: 1,
            isLoading: true, //是否显示加载中
            messageTip: '',
            endPage: false,
            stopFlip: false,
        };
    }

    handlePageDown = (pageNo, newQueryParam) =>{
        this.setState({
            isLoading: true,
            currentPage: pageNo,
            stopFlip: true,
        });
        const that = this,
            { getData, dataFieldName } = this.props;
        let { queryParam } = this.props,
            endPage = false,
            totalList = this.state.totalList,
            mergeTotalList,
            dataList;
        
        if(newQueryParam){//新参数
            queryParam = newQueryParam;
        }
        const { pageSize } = queryParam;
        queryParam.pageNo = pageNo;
        getData(queryParam).then(function(result) {
            dataList = result.dataList;
            mergeTotalList = mergeList(pageNo, dataList, totalList);
            if ((dataList.length === 0 && pageNo != 1) || dataList.length < pageSize) {
                endPage = true;
            };
            that.setState({
                totalList: mergeTotalList,
                currentPage: pageNo,
                messageTip: result.errMsg,
                isLoading: false,
                endPage: endPage,
                stopFlip: false,
            });
            return;
        }).catch(function(error) {
            that.setState({
                totalList: [],
                messageTip: error.errMsg,
                currentPage: pageNo,
                isLoading: false,
                stopFlip: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.getData.abort();
    }

    render(){
        const { endPage, isLoading, totalList, messageTip, currentPage, stopFlip } = this.state;
        return(
            <LoadList
                {...this.props}
                dataSource = {totalList}
                onPageDown = {this.handlePageDown}
                currentPage = {currentPage}
                isLoading = {isLoading}
                endPage = {endPage}
                stopFlip = {stopFlip}
                messageTip = {messageTip}
            />
        )
    }
};


