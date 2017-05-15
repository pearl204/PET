import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {MaterialModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

/* Feature Modules */
import { UserModule } from './product-selection/product-selection.module';
import { IpConnectEstimationComponent } from './ip-connect-estimation/ip-connect-estimation.component';
import { EthernetConnectEstimationComponent } from './ethernet-connect-estimation/ethernet-connect-estimation.component';

@NgModule({
  declarations: [
    AppComponent,
    IpConnectEstimationComponent,
    EthernetConnectEstimationComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot([
     {path:'welcome', component:AppComponent},
     {path:'',redirectTo:'welcome',pathMatch:'full'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
