import { NgModule, Pipe, PipeTransform, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatButtonModule,
   MatButtonToggleModule,
    MatIconModule,
     MatProgressSpinnerModule,
      MatToolbarModule,
       MatSidenavModule,
      MatMenuModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import {MatFormFieldModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
// import { ModalModule } from './_modal';
import { MatBadgeModule } from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {MatButtonModule} from '@angular/material/button';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatInputModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  FormsModule,
  HttpClientModule,
  MatCheckboxModule,
  MatRadioModule
    // ModalModule
];

@NgModule({
  imports: [Material, ],
  exports: [Material, ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialModule { }
