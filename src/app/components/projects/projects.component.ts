import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';
import { global } from 'src/app/services/global';
import { response } from 'express';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _projectService:ProjectService) {

   }

  ngOnInit(): void {
   console.log("Componente creado");
   this.getProject();//llamado del metodo
   
  }

  getProject(){
    this._projectService.getProject().subscribe(
      response=>{
          console.log(response);
          
      },

      err=>{
        console.log(<any>err);
        

      }
    );
  }



}
