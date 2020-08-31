"use strict";
import React, { Component } from "react"
import { observable,computed,action,autorun,runInAction} from 'mobx';

import {
    inject,
    observer
} from 'mobx-react'

@inject ('store') @observer

class Home extends Component {

    // 利用 observable 来观测值
    // Observable 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射

    @observable age = 12
    length = 2
    list = observable([1,2,3])

    @computed get squared(){
        return  this.length * this.length
    } 

    @action.bound change(){
        this.age += 10
    }

    numbers = observable([1,2,3]);
    sum = computed(() => this.numbers.reduce((a, b) => a + b, 0));
 
    disposer = autorun(() => console.log(this.sum.get()));
    // 输出 '6'

    @action getData = async () => {
        try {
            let movies = await fetch("https://facebook.github.io/react-native/movies.json");
            let text = await movies.text();
            runInAction(() => {
                this.result = text;
                console.log(this.result)
            })
        } catch(error) {
            console.log(error);
        }
    };


    constructor(props) {
        super(props)
    }
    render() {
        let { store } = this.props
    
        return (
        <div>
            <div>我是home页面</div>
        
            <div>{store.name}</div>
            <hr/>
            <div>价格：{store.price}</div>
            <div>数量：{store.num}</div>
            <div>总价：{store.total}</div>
            <hr/>
            <div>{this.age}</div>
            <div>{this.list}</div>
            
            <button onClick={()=>this.change()}>增加10</button>
            <hr/>
            <div>
                长度:{this.length}
                面积:{this.squared}

    
            </div>
            <hr/>
            <button onClick={()=>this.getData()}>获取数据</button>
            {/* {setTimeout(() => {
                ()=>this.change()
            }, 1000)} */}
        </div>
        )
        
        
    }
    
}
export default Home