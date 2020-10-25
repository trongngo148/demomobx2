import { observable, action, computed, runInAction} from 'mobx'
import {createContext} from "react"
class ImgStore {
  id = 1;
  @observable isGetImage = false;
  @observable imageUrl ="https://www.hindisoch.com/wp-content/uploads/2019/11/Cutest-Puppies-Dog-Picture-Stylish-Lovely-Dog.jpg";
  @observable data = null;
  @action async fetchImage(){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      runInAction(() => {
          this.isGetImage = true;
          this.imageUrl = data.message;
          console.log('================AAAAA==================');
          console.log(this.imageUrl);
          console.log('================AAAAA==============');
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