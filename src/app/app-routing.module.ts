import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankerComponent } from './banker/banker.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  /*{path:"",component:SenderComponent},*/
  {path:"banker",component:BankerComponent},
  {path:"sender",component:SenderComponent},
  {path:"receiver",component:ReceiverComponent},
  {path:"transaction",component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
