import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ComponentModule } from './component/component.module';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { MobileProjectComponent } from './pages/mobile-project/mobile-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ResumePageComponent,
    ContactPageComponent,
    WorkPageComponent,
    LayoutComponent,
    ProjectPageComponent,
    MobileProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
