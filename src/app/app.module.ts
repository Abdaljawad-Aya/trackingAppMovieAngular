import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// for making an Api call connection with the internet so I 
// imported HttpClientModule and supports XSRF is type of mailcious exploit
// of a website where an authorized commands are submitted from the user that 
// the web apps trusts.
import { HttpClientModule } from '@angular/common/http';
import {
  NbButtonModule,
  NbIconModule,
  // NbInputModule, 
  NbLayoutModule, 
  NbSidebarModule, 
  NbThemeModule,
  NbCardModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    ButtonComponent,
    MoviesComponent,
    MoviesItemComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    NbCardModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'trackApp' }),
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
    // NbInputModule,
    // NbIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
