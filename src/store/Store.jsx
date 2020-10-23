import { observable, action, computed } from 'mobx'

class Store {
    @observable comment = [""]
    @action updateComment(comment){
        this.comment.push(comment);
    }
}

const storeInstance = new Store()

export default storeInstance;