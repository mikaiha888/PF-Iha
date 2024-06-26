import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { HeaderFontSizeDirective } from './directives/header-font-size.directive';
import { DisplayFullnamePipe } from './pipes/display-fullname.pipe';
import { StudentsFormValidationsPipe } from './pipes/students-form-validations.pipe';
import { CoursesFormValidationsPipe } from './pipes/courses-form-validations.pipe';
import { ClassesFormValidationsPipe } from './pipes/classes-form-validations.pipe';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminsFormValidationsPipe } from './pipes/admins-form-validations.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    ListHeaderComponent,
    HeaderFontSizeDirective,
    DisplayFullnamePipe,
    StudentsFormValidationsPipe,
    CoursesFormValidationsPipe,
    ClassesFormValidationsPipe,
    AdminsFormValidationsPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [
    NavbarComponent,
    ReactiveFormsModule,
    ListHeaderComponent,
    DisplayFullnamePipe,
    StudentsFormValidationsPipe,
    CoursesFormValidationsPipe,
    ClassesFormValidationsPipe,
    AdminsFormValidationsPipe,
    HeaderFontSizeDirective,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
