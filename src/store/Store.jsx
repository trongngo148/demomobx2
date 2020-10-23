import { observable, action, computed } from 'mobx'

class Store {
    @observable comments = ["trong","ngo"]
    @observable users = ["Jonathan","Tommy"]
    @action updateComment(comment){
        console.log("AAA");
        this.comments.push(comment);
        console.log(this.comments);
    }
    @computed get commentCount(){
        return this.comments.length;
    }
}

const storeInstance = new Store()

export default storeInstance;