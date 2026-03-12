import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      enrolledCourseId: [null, Validators.required]
    });

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },

      error: (err) => {
        console.error('Error fetching courses: ', err);
      }
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCourseId');
  }
}
