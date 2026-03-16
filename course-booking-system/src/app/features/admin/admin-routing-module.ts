import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCourseForm } from './add-new-course-form/add-new-course-form';
import { App } from '../../app';
import { StudentList } from './student-list/student-list';

const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: 'add-new-course', component: AddNewCourseForm },
      { path: 'students', component: StudentList }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
