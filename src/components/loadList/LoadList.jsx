import React, { Component } from 'react';
import Loading from '../loading/Loading';
import MessageTip from '../messageTip/MessageTip';
import LoadListSuccess from './LoadListSuccess';
import LoadListError from './LoadListError';


export default class LoadList extends Component{
    // static propTypes = {
    //     list: React.PropTypes.array.isRequired
    // };
    
    static defaultProps = { //设置样式、错误提示初始化值
        className: 'datalist-list', //列表样式        
        dataSource: [],
        currentPage: 1,
        stopFlip: false,
        messageTip: '',
        itemKeyName:'',//item中的key的值，该key主要用于优化性能
        isRefresh:false, //上滑重新请求
        onPageUp:() =>{},//向上翻页
        onPageDown:() =>{},//向下翻页
        renderDataIsNull:null,//没有数据时显示的组件
        renderPageEnd:null,//访问到最后一页时显示的组件
        renderServiceError:null,
    };
    
    componentDidMount() { 
        this.scrollFlip(1);
    }
      
    scrollFlip = (pageNo) =>{
        this.props.onPageDown(pageNo);
    }    
    
    render() {
        const { dataSource, currentPage, isLoading, stopFlip, endPage } = this.props;
        if(isLoading && currentPage === 1){
            return (
                <Loading 
                    content = '加载中'
                    classPrefix = "init"
                />
            )
        }
        if(dataSource != null && dataSource.length > 0){
            return (
                <LoadListSuccess 
                    {...this.props}
                />
            );
        }
        return (
            <LoadListError
                {...this.props}
            />
        )
    }
}


