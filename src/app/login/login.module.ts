import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports:[
    FormsModule
  ]
})
export class LoginModule {}
