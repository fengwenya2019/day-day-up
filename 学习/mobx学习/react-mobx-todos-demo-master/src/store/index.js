import {
    observable,
    action,
    computed
} from 'mobx'
import moment from 'moment'


class AppStore {
    @observable time = ''
    @observable todos = []
    @computed get desc() {
        return `${this.time} 还有 ${this.todos.length} 条任务待完成`
    }
    @action addTodo(todo) {
        // console.log(this.todos.length)
        this.todos.push(todo + (this.todos.length+1)*1)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNow() {
        // format
        // console.log(moment())
        this.time = moment().format('YYYY-MM-DD HH:mm:ss a')
    }
}


const store = new AppStore()

setInterval(()=>{
    store.getNow()
}, 1000)

export default store
