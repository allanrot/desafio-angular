import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaAdmissaoCooperadoComponent } from './nova-admissao-cooperado.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../shared/components/components.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [NovaAdmissaoCooperadoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatIconModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    LayoutModule
  ],
  providers: [ApiService],
})
export class NovaAdmissaoCooperadoModule {}
