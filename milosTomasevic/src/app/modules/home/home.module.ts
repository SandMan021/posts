import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RowColorDirective } from './row-color.directive';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';


@NgModule({
  declarations: [
    HomePageComponent,
    RowColorDirective,
    DetailedViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class HomeModule { }
