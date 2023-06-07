import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [CardComponent, StepsComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, StepsComponent]
})
export class ComponentsModule { }
