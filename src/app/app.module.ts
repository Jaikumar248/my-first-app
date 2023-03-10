import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { CustomdDirective } from './customd.directive';
import { HomeComponent } from './home/home.component';
// import { TodoFormComponent } from './todo-form/todo-form.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
import { PostService } from './services/post.services';
import { LoansComponent } from './loans/loans.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomdDirective,
    HomeComponent,
    LoansComponent,
    PaymentsComponent
    // TodoFormComponent,
    // TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
