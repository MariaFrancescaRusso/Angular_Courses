import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetail } from './course-detail/course-detail';
import { About } from './about/about';

export const routes: Routes = [
	// Our two main routes:
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{ path: 'courses', component: CoursesList },
	{ path: 'courses/:id', component: CourseDetail },
	{ path: 'about', component: About }
];
