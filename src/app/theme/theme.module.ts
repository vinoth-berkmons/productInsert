
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Angular Material */
import {MatToolbarModule} from '@angular/material/toolbar';

/* Components */
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[HeaderComponent]
})
export class ThemeModule { }
