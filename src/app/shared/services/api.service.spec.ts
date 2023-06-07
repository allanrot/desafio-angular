import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users by CPF', () => {
    const mock_cpf = '291.940.230-77'; // CPF de exemplo
    const mock_response: User[] = [{
      "nome": "Daniel Nicolas Souza",
      "idade": "60",
      "cpf": "291.940.230-77",
      "rg": "40.520.043-2",
      "data_nasc": "01/03/1963",
      "sexo": "Masculino",
      "signo": "Peixes",
      "mae": "Nair Lúcia",
      "pai": "Carlos Edson Souza",
      "email": "daniel_souza@solviagens.com",
      "senha": "eUrQ5Sjn4A",
      "cep": "59635-062",
      "endereco": "Rua Manoel Lucas Mendes",
      "numero": "399",
      "bairro": "Bom Jesus",
      "cidade": "Mossoró",
      "estado": "RN",
      "telefone_fixo": "(84) 2625-6233",
      "celular": "(84) 99295-5044",
      "altura": "1,83",
      "peso": "101",
      "tipo_sanguineo": "A+",
      "cor": "vermelho",
      "conta_nome": "Cooperativa Viacredi",
      "conta_corrente_num": "123456-7",
      "conta_aplicacao_num": "321654-7",
      "situacao": true
    }]; // Mock da resposta esperada

    service.httpGetUserByCpf(mock_cpf).subscribe(users => {
      expect(users).toEqual(mock_response); // Verifica se a resposta recebida é igual à resposta esperada
    });

    const req = httpTestingController.expectOne(`${service.api_url}/users?cpf=${mock_cpf}`);
    expect(req.request.method).toBe('GET');

    req.flush(mock_response); // Simula o retorno da requisição com o mockResponse
  });
});
