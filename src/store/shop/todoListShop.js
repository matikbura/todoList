import { defineStore } from "pinia"

export const todoListShop = defineStore({
    id: "info", // id是唯一的，如果有多个文件，ID不能重复
    state: () => {
        return {
            checked:"未完成",
            choose:"学习",
            data: [
                {
                    title: "学习",
                    completeList:[],
                    incompleteList:["哈哈哈哈哈"]
                },
                {
                    title: "看电影",
                    completeList:[],
                    incompleteList:[]
                },
                {
                    title: "打游戏",
                    completeList:[],
                    incompleteList:[]
                }
            ],
        }
    },
    actions: {
    },
    // 开启数据缓存，在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage
    // 默认所有 state 都会进行缓存，你可以通过 paths 指定要持久化的字段，其他的则不会进行持久化，如：paths: ['userinfo'] 替换key的位置
    persist: {
        enabled: true,
        strategies: [
            {
                key: "users",
                storage: localStorage,
            },
        ],
    },
})