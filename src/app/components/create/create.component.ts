import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public title :String;
  public project : Project;
  public FilesToUpload: Array<File>
 

  constructor(private projectservice: ProjectService,private upload:UploadService) { 
    this.title = "Crear Proyecto";
    this.project = new Project("","","",2022,"","")
  }


  ngOnInit(): void {
  }

   OnSubmit(form:any){
    console.log(this.project);
    this.projectservice.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
            //subir imagen
            this.upload.RequestFile(global.url+'Uploads_images/'+response.project._id,this.FilesToUpload,'image')
            .then((result:any)=>{
              console.log(result);
              console.log("Projecto guardado");
              form.reset();//para resetear el form
              
            });
        }
        else {
          alert("No se pudo guardar el projecto");
        }
      },
      error=>{
        console.log(<any>error);
        
      }
    );
    
  }

  uploadImage(fileInput:any){
    console.log(fileInput);
    
    this.FilesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.FilesToUpload);
    
    
  }


}
