import React, { Component } from 'react';
import { LoadListGetData } from '../src/index';

const result = {"code":"0000","data":{"contentls":[{"id":63,"title":"孩子王","logUrl":"https://www.ucardvip.com/external-blob?type=0.5&id=9deac28014c442e1a934d50b22eaeba2","description":"2018年4月1日-12月31日"},{"id":60,"title":"平和堂","logUrl":"https://www.ucardvip.com/external-blob?type=0.5&id=960b459d00be41f888eda02c70e5eb95","description":"每月最后一个周五，平和堂“银联会员日”"}],"shopls":[{"shopNo":"701901010000015","shopName":"GLAM EVER","url":"https://www.ucardvip.com/external-blob?id=123&type=0.5","address":"芙蓉中路416号泊富icity美好生活中心2楼","geoDistance":"","activenames":[]},{"shopNo":"701901010000017","shopName":"牛海哥潮汕火锅","url":"https://www.ucardvip.com/external-blob?type=0.5&id=40e67600f8a448619a02745e449b8fb0","address":"芙蓉中路416号泊富icity美好生活中心3楼","geoDistance":"","activenames":[]},{"shopNo":"701901010000018","shopName":"知乎茶也","url":"https://www.ucardvip.com/external-blob?id=292&type=0.5","address":"芙蓉中路416号泊富icity美好生活中心3楼","geoDistance":"","activenames":[]},{"shopNo":"701901010000035","shopName":"温鼎泊富店","url":"https://www.ucardvip.com/external-blob?id=95&type=0.5","address":"芙蓉中路416号泊富icity美好生活中心4楼","geoDistance":"","activenames":[]},{"shopNo":"701901010000041","shopName":"福柒","url":"https://www.ucardvip.com/external-blob?id=315&type=0.5","address":"芙蓉中路416号泊富icity美好生活中心3楼","geoDistance":"","activenames":[]},{"shopNo":"898901161207022","shopName":"天福连锁(桂花坪店)","url":"https://www.ucardvip.com/external-blob?id=1680&type=0.5","address":"芙蓉南路地铁一号线桂花坪站2号出口","geoDistance":"","activenames":[]},{"shopNo":"898901161207030","shopName":"天福连锁(开福区政府店)","url":"https://www.ucardvip.com/external-blob?id=1668&type=0.5","address":"芙蓉北路地铁一号线开福区政府站2号出口","geoDistance":"","activenames":[]},{"shopNo":"711902008548776","shopName":"鸭先知便利店","url":"https://www.ucardvip.com/external-blob?id=471&type=0.5","address":"长沙医学院内街","geoDistance":"","activenames":[]},{"shopNo":"898430154115167","shopName":"步步高超市（长沙西站店）","url":"https://www.ucardvip.com/external-blob?id=493&type=0.5","address":"汽车西站达美步步高超市","geoDistance":"","activenames":[]},{"shopNo":"1054301541124081495605905","shopName":"咿呀母婴（香樟路店）","url":"https://www.ucardvip.com/external-blob?id=1063&type=0.5","address":"香樟路336号明政学院对面","geoDistance":"","activenames":[]}]},"errMsg":null}
export default function Demo01(){        
    const queryParam = {
        pageSize:10,
        pageNo:1
    }
    return (
        <LoadListGetData
            queryParam = {queryParam}
            getData = {(queryParam) => new Promise(function(resolve, reject) {          
                    // const postList = fetch('https://www.ucardvip.com/gateway/api/discount/getNearMchtShop', {method:'POST',body:JSON.stringify(queryParam)});
                    // postList.then(result =>{
                        resolve({
                            code:result.code,
                            dataList:result.data.shopls,
                            errMsg:result.errMsg || '',
                        });
                    // }).catch(function(error) {
                    //     reject(error);
                    // });
                })
            }
            renderItem = {item =>(<div>{item.address}</div>)}
        />
    )
};
