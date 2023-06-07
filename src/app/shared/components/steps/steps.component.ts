import { Component, OnInit, Input } from '@angular/core';
import { Step } from '../../models/step.model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input('steps') steps: Array<Step> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
