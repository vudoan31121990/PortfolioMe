import { MobileProjectComponent } from './pages/mobile-project/mobile-project.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'resume',
        component: ResumePageComponent
      },
      {
        path: 'work',
        component: WorkPageComponent
      },
      {
        path: 'project',
        component: ProjectPageComponent
      },
      {
        path: 'mobile',
        component: MobileProjectComponent
      },
      {
        path: 'contact-me',
        component: ContactPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'disabled',
    scrollPositionRestoration: 'disabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
