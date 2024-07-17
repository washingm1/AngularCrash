import { Routes, RouterOutlet, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: TasksComponent },
    { path: 'about', component: AboutComponent },
];
