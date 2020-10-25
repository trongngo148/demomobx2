import { observable, action, computed} from 'mobx'
import {createContext} from "react"
import {Users} from "../model/Users"
class Store {
    @observable isCheckLogin = false;
    @observable comments = ["trong","ngo"];
    @observable userComments = ["Jonathan","Tommy"]; 
    @observable userss = Users;
    @observable indexUsersCurrent = null;
    @observable isCheckUserExist = false;

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

    @action checkUserName = (username) =>{
        for (let user of this.userss){
            if(user.username === username){
                 this.isCheckUserExist= true;}
        }
        console.log(this.isCheckLogin)
    }
    @action addUser = (username,password) =>{
        this.indexUsersCurrent = this.userss.length;
        this.isCheckLogin = true;
        this.userss.push({
            username: username,
            password: password,
            post:[
                {
                    img:"https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg",
                    alt:"dog1",
                    countLike:0,
                    comment:{
                        commentUser:["Jon","TrongNgo"],
                        commentContent:["Aww So Cute !","A Beautiful Dog !"],
                    },
                }
            ]
        });
    }

    @action addPost = (imgUrl) =>{
       
        this.userss[this.indexUsersCurrent].post.push({
            img:`${imgUrl}`,
            alt:"dog",
            countLike:0,
            comment:{
                commentUser:[],
                commentContent:[],
            }});
         console.log('============BBBBB==================');
         console.log(imgUrl);
         console.log('============BBBBB==================');
    }

    @action updateComment = (comment,user,index) => {
        let convertIndex = this.userss[this.indexUsersCurrent].post.length-1 - index;
        this.userss[this.indexUsersCurrent].post[convertIndex].comment.commentUser.push(user);
        this.userss[this.indexUsersCurrent].post[convertIndex].comment.commentContent.push(comment);
        console.log('====================================');
        console.log(this.userss[this.indexUsersCurrent].post[convertIndex].comment.commentContent);
        console.log('====================================');

    }
    @computed get isUser (){
        return this.isCheckLogin;
    }
    @computed get isUserExist (){
        return this.isCheckUserExist;
    }
    @computed get commentCount(){
        return this.comments.length;
    }
    @computed get userName(){
        return this.userss[this.indexUsersCurrent].username;
    }
}

export default createContext(new Store());