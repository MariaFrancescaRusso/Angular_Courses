import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCourseForm } from './add-new-course-form/add-new-course-form';
import { StudentList } from './student-list/student-list';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
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
