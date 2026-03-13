import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-add-new-course-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-course-form.html',
  styleUrl: './add-new-course-form.css',
})
export class AddNewCourseForm implements OnInit {
  addNewCourseForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string = "";

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {}

  ngOnInit(): void {
    this.addNewCourseForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      date: ['', [Validators.required]],
      image: [''],
      onSale: [false]
    });
  }

  get title() {
    return this.addNewCourseForm.get('title');
  }

  get description() {
    return this.addNewCourseForm.get('description');
  }

  get price() {
    return this.addNewCourseForm.get('price');
  }

  get date() {
    return this.addNewCourseForm.get('date');
  }

  get image() {
    return this.addNewCourseForm.get('image');
  }

  get onSale() {
    return this.addNewCourseForm.get('onSale');
  }

  onSubmit(): void {
      if(this.addNewCourseForm.invalid)
        return;
  
      const newCourse: Course = {
        id: 0,
        title: this.addNewCourseForm.value.title,
	      description: this.addNewCourseForm.value.description,
        price: this.addNewCourseForm.value.price,
        date: this.addNewCourseForm.value.date,
        image: this.addNewCourseForm.value.image.split('\\').pop(),
        soldOut: false,
        onSale: this.addNewCourseForm.value.onSale
      };
  
      this.courseService.addCourse(newCourse).subscribe({
        next: (course) => {
          console.log("Course sussessfully added: ", course);
          this.submissionSuccess = true;
          this.addNewCourseForm.reset();
        },
  
        error: (err) => {
          console.error('Error adding new course: ', err);
          this.submissionError = "There was an error submitting your add-new-course form. Please try again.";
        }
      });
    }
}
