import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  title: string = "Available Courses";
  wishlist: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}
  
  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      }, 
      error: (err) => {
        console.error("Error fetching courses: ", err);
      }
    });
    // console.log("CoursesList initialized!");
  }

  onCourseBooked(course: Course): void {
    console.log("Parent heard about booking: ", course.title);
  }

  onWishList(course: Course): void {
    console.log("Parent heard about wishlist to ad: ", course.title);
    if (!this.wishlist.includes(course))
      this.wishlist.push(course);
  }
}
