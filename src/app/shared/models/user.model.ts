export class User {
  nome!: string;
  idade!: string;
  cpf!: string;
  rg!: string;
  data_nasc!: string;
  sexo!: string;
  signo!: string;
  mae!: string;
  pai!: string;
  email!: string;
  senha!: string;
  cep!: string;
  endereco!: string;
  numero!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  telefone_fixo!: string;
  celular!: string;
  altura!: string;
  peso!: string;
  tipo_sanguineo!: string;
  cor!: string;
  conta_nome!: string;
  conta_corrente_num!: string;
  conta_aplicacao_num!: string;
  situacao!: boolean;

  constructor(object: Partial<User> = {}) {
    Object.assign(this, object);
  }
}
