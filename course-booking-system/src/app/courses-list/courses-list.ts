import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const descr = params.get("description");
      this.loadCourses(descr);
    })
    // console.log("CoursesList initialized!");
  }

  loadCourses(description: string | null): void {
    this.courseService.getCourses(description).subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      }, 
      error: (err) => {
        console.error("Error fetching courses: ", err);
      }
    });
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
