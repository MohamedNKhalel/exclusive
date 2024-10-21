import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule,ReactiveFormsModule,ToastrModule.forRoot(),NgxSpinnerModule
  ],
  exports:[ReactiveFormsModule,SearchPipe,NgxSpinnerModule]
})
export class SharedModule { }
