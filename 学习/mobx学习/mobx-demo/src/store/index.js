import { observable, computed } from 'mobx';


class Store {
    @observable name = 'fwy'
    price = 20
    num = 10
    @observable todos = []

    @computed get total(){
        return this.price*this.num
    }
}

const store = new Store()

export default store