import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';
import { global } from 'src/app/services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url : String;

  constructor(private _projectService:ProjectService) {
    this.url = global.url;
   }

  ngOnInit(): void {
   console.log("Componente creado");
   this.getProject();//llamado del metodo
   
  }

  getProject(){
    this._projectService.getProject().subscribe(
      response=>{
        if (response) {
           this.projects = response.projects;
        }
          console.log(response);
          
      },

      err=>{
        console.log(<any>err);
        

      }
    );
  }



}
