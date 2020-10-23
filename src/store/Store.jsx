import { observable, action, computed, runInAction } from 'mobx'
import {createContext} from "react"

class Store {
    @observable comments = ["trong","ngo"];
    @observable users = ["Jonathan","Tommy"]; 

    @action updateComment = (comment) => {
        runInAction ("run update", ()=> {
            this.comments.push(comment);
            console.log(this.comments);
        })

    }
    @computed get commentCount(){
        return this.comments.length;
    }
}

export default createContext(new Store());