import { Component } from '@angular/core';
import { TutorialService } from '../service/tutorial.service';
import { Tutorial } from '../model/tutorial.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-tutorial',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent {

  tutorial : Tutorial = {
    title : '',
    description : '',
    published : false
  };

  submitted = false;
  constructor (private tutorialService : TutorialService){}

  saveTutorial() : void{
    const data = {
      title : this.tutorial.title,
      description : this.tutorial.description
    };

    this.tutorialService.create(data).subscribe({
      next : (res) => {
        console.log(res);
        this.submitted = true;
      }, error : (e) => console.error(e)
    });
  }

  newTutorial() : void{
    this.submitted = false;
    this.tutorial = {title : "", description : "", published : false};
  }

}
