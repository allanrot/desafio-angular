import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  showFiller = false;
  public menu = ['menu', 'search', 'star', 'sms', 'tune', 'account_balance']
  constructor(){}
  ngOnInit(): void {
  }
}
