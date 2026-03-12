import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | null = null;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        const id = +idStr;
        this.onCourseDetailByID(id);
      }
    });
  }

  onCourseDetailByID(id: number): void {
    console.log("Parent heard about detail of course with ID: ", id);
    this.courseService.getCourseByID(id).subscribe({
      next: (data: Course) => {
        this.course = data;
      }, 
      error: (err) => {
        console.error("Error fetching course by ID: ", err);
      }
    })
  }
}
