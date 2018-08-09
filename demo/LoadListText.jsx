import React, { Component } from 'react';
import Demo00Code from './Demo00Code';
import './main.css';

export default class LoadListText extends Component{
    render(){
        return (
            <div>
                <section>
                    <h2>LoadList</h2>
                    <p>移动端加载列表</p>
                </section>
                <section>
                    <h2>何时使用</h2>
                    <p>加载数据列表</p>
                </section>
                <section>
                    <h2>代码演示</h2>
                    <h4>默认</h4>
                    <Demo00Code />
                </section>
                <section>
                    <h2>API</h2>
                    <h4>List</h4>
                    <table className = "demo-api">
                        <thead>
                            <tr>
                                <th>参数</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>dataSource</td>
                                <td>数据列表，常用redux的时候用</td>
                                <td>Array</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>getData</td>
                                <td>与dataSoure API不能同时使用，返回的是promise，常用来使用AJAX或者fetch获取数据，常见用法见在示例2</td>
                                <td>Promise</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>renderItem</td>
                                <td>列表循环项,每个item能接收到的参数item, onChange, listIndex, array, itemKey</td>
                                <td>ReactNode</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>stopFlip</td>
                                <td>值为true时，禁止翻页</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>isRefresh</td>
                                <td>下滑刷新列表</td>
                                <td>boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>列表样式</td>
                                <td>string</td>
                                <td>load-list</td>
                            </tr>
                            <tr>
                                <td>renderDataIsNull</td>
                                <td>数据返回为空时显示的组件，值为null时，显示默认组件</td>
                                <td>ReactNode || null</td>
                                <td>null</td>
                            </tr>
                            <tr>
                                <td>renderPageEnd</td>
                                <td>访问到最后一页时显示的组件，值为null时，显示默认组件</td>
                                <td>ReactNode || null</td>
                                <td>null</td>
                            </tr>
                            <tr>
                                <td>renderServiceError</td>
                                <td>服务器返回错误时时显示的组件，值为null时，显示默认组件</td>
                                <td>ReactNode || null</td>
                                <td>null</td>
                            </tr>
                            <tr>
                                <td>onServiceError</td>
                                <td>服务器返回的错误时，处理的信息，如会话过期，操作失败，系统错误等错误发生后，希望调用的事件</td>
                                <td>function || {}</td>
                                <td>{}这个判断有点难啊==!</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}