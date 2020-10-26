import { observable, action, computed} from 'mobx'
import {createContext} from "react"
import {Users} from "../model/Users"
class Store {
    @observable isCheckLogin = false;
    @observable comments = ["trong","ngo"];
    @observable userComments = ["Jonathan","Tommy"]; 
    @observable users = Users;
    @observable indexUsersCurrent = null;
    @observable isCheckUserExist = false;
    //@observable alluser = Users; 

    @action signUp = (username,password) =>{
        this.users.push({
            username: username,
            password: password
        })
    }

    @action checkLogin = (username, password) =>{
        console.log("login "+ username + password)
        for (let user of this.users){
            if(user.username === username && user.password === password){
                 this.indexUsersCurrent = this.users.indexOf(user);
                 this.isCheckLogin = true;}
        }
        console.log(this.isCheckLogin)
    }

    @action checkUserName = (username) =>{
        this.isCheckUserExist = false;
        for (let user of this.users){
            if(user.username === username){
                 this.isCheckUserExist= true;}
        }
        console.log(this.isCheckLogin)
    }
    @action addUser = (username,password) =>{
        this.indexUsersCurrent = this.users.length;
        this.isCheckLogin = true;
        this.users.push({
            username: username,
            password: password,
            post:[
                {
                    img:"https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg",
                    alt:"dog1",
                    countLike:0,
                    comment:{
                        commentUser:[],
                        commentContent:[],
                    },
                }
            ]
        });
    }

    @action addPost = (imgUrl) =>{
        this.users[this.indexUsersCurrent].post.push({
            id: this.users[this.indexUsersCurrent].post.length,
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

    @action addPost2 = (imgUrl) => {
        this.addPost(imgUrl);
    }
    @action updateCommentNewFeed = (comment,user,index,userId) => {
        this.users[userId].post[index].comment.commentUser.push(user);
        this.users[userId].post[index].comment.commentContent.push(comment);
        console.log('====================================');
        console.log(this.users[userId].post[index].comment.commentContent);
        console.log('====================================');

    }

    @action updateComment = (comment,user,index) => {
        this.users[this.indexUsersCurrent].post[index].comment.commentUser.push(user);
        this.users[this.indexUsersCurrent].post[index].comment.commentContent.push(comment);
        console.log('====================================');
        console.log(this.users[this.indexUsersCurrent].post[index].comment.commentContent);
        console.log('====================================');

    }
    @action updateCountLikeNF= (index, userId) => {
        this.users[userId].post[index].countLike++;
        console.log('====================================');
        console.log(this.users[userId].post[index].countLike);
        console.log('====================================');

    }
    @action updateCountLike= (index) => {
        this.users[this.indexUsersCurrent].post[index].countLike++;
        console.log('====================================');
        console.log(this.users[this.indexUsersCurrent].post[index].countLike);
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
        return this.users[this.indexUsersCurrent].username;
    }
    @computed get getUser(){
        return this.users[this.indexUsersCurrent];
    }
    @computed get getAllUser(){
        //return this.alluser;
        return this.users;
    }
}

export default createContext(new Store());