import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/pages/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: 'resume/', pathMatch: 'full' },
  { path: 'resume/:id', component: ResumeComponent },
  { path: '**', redirectTo: 'resume/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
