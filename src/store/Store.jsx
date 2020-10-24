import { observable, action, computed} from 'mobx'
import {createContext} from "react"
import {Users} from "../model/Users"
class Store {
    @observable isCheck = false;
    @observable comments = ["trong","ngo"];
    @observable users = ["Jonathan","Tommy"]; 
    @observable userss = Users;

    @computed get isUser (){
        return this.isCheck;
    }

    @action signUp = (username,password) =>{
        this.userss.push({
            username: username,
            password: password
        })
    }

    @action checkLogin = (username, password) =>{
        console.log("login "+ username + password)
        for (let user of this.userss){
            if(user.username === username && user.password === password) this.isCheck = true;
        }
        console.log(this.isCheck)
    }

    @action updateComment = (comment) => {
        this.comments.push(comment);
        console.log(this.comments);

    }
    @computed get commentCount(){
        return this.comments.length;
    }
}

export default createContext(new Store());