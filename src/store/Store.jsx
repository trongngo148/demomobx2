import { observable, action, computed} from 'mobx'
import {createContext} from "react"
import {Users} from "../model/Users"
class Store {
    @observable isCheckLogin = false;
    @observable comments = ["trong","ngo"];
    @observable userComments = ["Jonathan","Tommy"]; 
    @observable userss = Users;
    @observable indexUsersCurrent = null;

    @action signUp = (username,password) =>{
        this.userss.push({
            username: username,
            password: password
        })
    }

    @action checkLogin = (username, password) =>{
        console.log("login "+ username + password)
        for (let user of this.userss){
            if(user.username === username && user.password === password){
                 this.indexUsersCurrent = this.userss.indexOf(user);
                 this.isCheckLogin = true;}
        }
        console.log(this.isCheckLogin)
    }

    @action updateComment = (comment,user,index) => {
        this.userss[this.indexUsersCurrent].post[index].comment.commentUser.push(user);
        this.userss[this.indexUsersCurrent].post[index].comment.commentContent.push(comment);
        console.log('====================================');
        console.log(this.userss[this.indexUsersCurrent].post[index].comment.commentContent);
        console.log('====================================');

    }
    @computed get isUser (){
        return this.isCheckLogin;
    }
    @computed get commentCount(){
        return this.comments.length;
    }
    @computed get userName(){
        return this.userss[this.indexUsersCurrent].username;
    }
}

export default createContext(new Store());