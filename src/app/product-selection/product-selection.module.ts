
import { NgModule } from '@angular/core';
import  {RouterModule} from '@angular/router';
import { ProductSelectionComponent } from './product-selection.component';

@NgModule({
  imports: [
    RouterModule.forChild ([
           {path:'productSelection',component:ProductSelectionComponent}
    	])
  ],
  declarations: [
    ProductSelectionComponent
  ],

})
export class UserModule { }