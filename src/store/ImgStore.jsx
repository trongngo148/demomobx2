import { observable, action, computed, runInAction} from 'mobx'
import {createContext} from "react"
class ImgStore {
  id = 1;
  @observable isGetImage = false;
  @observable imageUrl ="https://afamilycdn.com/150157425591193600/2020/9/24/13e011a64b3d19746510c8fd7b9711b7-1600919177017867010083.jpg";
  @observable data = null;
  @action async fetchImage(){
      const characterId = ++this.id;
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      runInAction(() => {
          this.isGetImage = true;
          this.imageUrl = data.message;
          console.log('====================================');
          console.log(this.imageUrl);
          console.log('====================================');
      });
  }
  @computed get getImage(){
      return this.imageUrl;
  }
  @computed get getIsGetImage(){
    return this.isGetImage;
}
}

export default createContext(new ImgStore());