import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesExamplesComponent } from './pages/pipes-examples/pipes-examples.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'form/:id', component: UserFormComponent},
  {path: 'todo', component: TodoListComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'pipes-examples', component: PipesExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
