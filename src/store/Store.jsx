import { observable, action, computed} from 'mobx'
import {createContext} from "react"

class Store {
    @observable isCheck = false;
    @observable comments = ["trong","ngo"];
    @observable users = ["Jonathan","Tommy"]; 
    @observable userss =[{
        username: "trongngo",
        password: "123"
    }]

    @computed get isUser (){
        console.log("vao day")
        return this.isCheck;
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