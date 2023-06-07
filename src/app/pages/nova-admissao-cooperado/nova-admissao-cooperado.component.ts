import { validate } from './../../shared/utils/validate';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { mask } from '../../shared/utils/mask';
import { Step } from 'src/app/shared/models/step.model';

@Component({
  selector: 'app-nova-admissao-cooperado',
  templateUrl: './nova-admissao-cooperado.component.html',
  styleUrls: ['./nova-admissao-cooperado.component.scss'],
})
export class NovaAdmissaoCooperadoComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false;
  user: User = {} as User;
  found_user: boolean = false;
  steps: Array<Step> = [
    {order: 1, name: 'Início', active: true},
    {order: 2, name: 'Documentos', active: false},
    {order: 3, name: 'Dados cadastrais', active: false},
    {order: 4, name: 'Admissão', active: false},
  ]

  constructor(private form_builder: FormBuilder, private service: ApiService) {}

  ngOnInit(): void {
    this.form = this.form_builder.group({
      cpf: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.error = true;
      this.found_user = false;
      return;
    }
    this.error = false;
    const param = mask.cpf(this.form.value.cpf);
    this.service.httpGetUserByCpf(param).subscribe({
      next: (response: User[]) => {
        this.validateUser(response[0]);
        this.user = response[0];
      },
      error: () => {
        this.found_user = false;
      },
    });
  }

  validateUser(user: User) {
    if (validate.emptyObject(user)) {
      this.found_user = false;
      return;
    }
    this.found_user = true;
  }
}
