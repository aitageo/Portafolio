import { Injectable } from '@angular/core';
import {global} from './global';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public url : String;

  constructor() {
    this.url = global.url;
   }


   //funcion que carga una imagen en la url dada mediante ajax
   RequestFile(url:string,files: Array<File>,name:string){
        return new Promise((resolve,reject)=>{
          let formData:any = new FormData();
          let xhr = new XMLHttpRequest();

          for (let i = 0; i < files.length; i++) {
            formData.append(name,files[i],files[i].name); 
            
          }

          xhr.onreadystatechange = ()=>{
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
              } else {
                reject(xhr.response);
              }
            }
          }
          xhr.open('Post',url,true);
          xhr.send(formData); 

        

         })
   }
}
