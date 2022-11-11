import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public title :String;
  public project : Project;

  constructor(private projectservice: ProjectService) { 
    this.title = "Crear Proyecto";
    this.project = new Project("","","",2022,"","")
  }


  ngOnInit(): void {
  }

   OnSubmit(form:any){
    console.log(this.project);
    this.projectservice.saveProject(this.project).subscribe(
      response=>{
            console.log(response);
            
      },
      error=>{
        console.log(<any>error);
        
      }
    );
    
  }

}
