import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { MytestComponent } from './mytest.component';

@NgModule({
  declarations: [
    MytestComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
})
export class MytestModule { }
