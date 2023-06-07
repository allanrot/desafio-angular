import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, FooterComponent],
  imports: [MatIconModule, MatSidenavModule, MatButtonModule, CommonModule],
  exports: [SidebarComponent, NavbarComponent, FooterComponent],
})
export class LayoutModule {}
