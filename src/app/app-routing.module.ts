import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/pages/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: 'resume/1', pathMatch: 'full' },
  { path: 'resume/:id', component: ResumeComponent },
  { path: '**', redirectTo: 'resume/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
