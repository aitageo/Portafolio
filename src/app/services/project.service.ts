import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Project } from '../models/projects';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url: String;

  constructor(private http:HttpClient) {
    this.url = global.url;
   }


   testService(){
    return 'Probando el servicio';
   }


   saveProject(project:Project):Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.url+'save-project',params,{headers:headers});

   }

   //recibe un observable
   getProject():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');//cabeceras

    return this.http.get(this.url+'get_projects',{headers:headers});
   }
}
