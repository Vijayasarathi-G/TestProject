import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserformComponent } from './components/userform/userform.component';
import { UsersService } from './shared_service/users.service';
import { HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatGridListModule,MatInputModule,MatIconModule} from '@angular/material';
import { LoginFormComponent } from './login-form/login-form.component';
// MDB Angular Free
import { InputsModule, WavesModule, ButtonsModule, CardsFreeModule } from 'angular-bootstrap-md';

const appRoute : Routes = [
  { 
    path : '',
    component : ListuserComponent
  },
  { 
    path : 'login',
    component : LoginFormComponent
  },
  {
    path : 'op',
    component : UserformComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserformComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }