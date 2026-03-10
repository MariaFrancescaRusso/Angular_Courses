import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishList = new EventEmitter<any>();

  constructor(private router: Router) {}

  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onWishList(): void {
    this.wishList.emit(this.course);
  }

  onSeeDetailByID(id: number): void {
    this.router.navigate(['/courses', id]);
  }
}
