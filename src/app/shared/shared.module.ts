import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { DuplicateInformationComponent } from './table/duplicate-information/duplicate-information.component';

const MODULES: any[] = [
  CommonModule,
  MaterialModule,
];
const COMPONENTS: any[] = [
  DuplicateInformationComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
})
export class SharedModule { }
