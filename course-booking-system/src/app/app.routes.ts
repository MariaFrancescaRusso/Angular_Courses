import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetail } from './course-detail/course-detail';
import { About } from './about/about';
import { SignUpForm } from './sign-up-form/sign-up-form';
import { AddNewCourseForm } from './add-new-course-form/add-new-course-form';

export const routes: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{ path: 'courses', component: CoursesList },
	{ path: 'courses/:id', component: CourseDetail },
	{ path: 'sign-up', component: SignUpForm },
	{ path: 'add-new-course', component: AddNewCourseForm },
	{ path: 'about', component: About }
];
