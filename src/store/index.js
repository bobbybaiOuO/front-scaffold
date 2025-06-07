import { defineStore } from "pinia";

// 创建一个全局的状态、容器
// 容器接收两个参数，第一个参数为容器ID 第二个为容器的内容
// defineStore返回的是一个函数，这个函数按照useXXX命名
// storeDemo --> useStoreDemo
export const useStoreDemo = defineStore("storeDemo", {
    // 容器的内容
    // state 用来存储全局状态或者数据，可以理解为数据配置的位置
    state: () => {
        return {
            msg: "Hello Pinia"
        }
    },
    // 类似于组件中的computed，用来封装计算属性，有缓存的功能
    getters: {

    },
    // 类似于组件中的methods，封装业务逻辑，修改state
    actions: {
        // 接收参数
        changeStoreDemo(value) {
            this.msg = value
        }
    }
})

// 怎么被其他组件使用呢？