import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookformComponent } from './bookform/bookform.component';
import { TabComponent } from './tab/tab.component';
import { PriceDiscountPipe } from './price-discount.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  {path:'employee-form',component:EmployeeFormComponent},
  { path: 'book', component: BookCatlogComponent },
  { path: 'book-add', component: BookformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    EmployeeFormComponent,
    BookCatlogComponent,
    BookListComponent,
    BookComponent,
    BookformComponent,
    TabComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
