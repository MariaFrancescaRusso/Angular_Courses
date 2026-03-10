import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetail } from './course-detail/course-detail';

export const routes: Routes = [
	// Our two main routes:
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{ path: 'courses', component: CoursesList },
	{ path: 'courses/:id', component: CourseDetail }
];
