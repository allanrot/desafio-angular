import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { NovaAdmissaoCooperadoComponent } from './nova-admissao-cooperado.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { mask } from '../../shared/utils/mask';
import { User } from 'src/app/shared/models/user.model';

describe('NovaAdmissaoCooperadoComponent', () => {
  let component: NovaAdmissaoCooperadoComponent;
  let fixture: ComponentFixture<NovaAdmissaoCooperadoComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceMock = jasmine.createSpyObj('ApiService', ['httpGetUserByCpf']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [NovaAdmissaoCooperadoComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaAdmissaoCooperadoComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set found_user to false and display error message for invalid CPF input', () => {
    component.form.patchValue({ cpf: '123' });

    component.onSubmit();

    expect(component.found_user).toBeFalse();
    expect(component.error).toBeTrue();
    expect(component.error_message).toBe('Insira um CPF válido');
  });

  it('should call httpGetUserByCpf with masked CPF and set user and found_cpf when user is found', () => {
    const mockUser = new User({ nome: 'John Doe' });
    const mockCpf = '12345678900';
    const maskedCpf = mask.cpf(mockCpf);

    apiServiceSpy.httpGetUserByCpf.and.returnValue(of([mockUser]));

    component.form.patchValue({ cpf: mockCpf });
    component.onSubmit();

    expect(apiServiceSpy.httpGetUserByCpf).toHaveBeenCalledWith(maskedCpf);
    expect(component.user).toEqual(mockUser);
    expect(component.found_cpf).toBe(maskedCpf);
    expect(component.found_user).toBeTrue();
    expect(component.error).toBeFalse();
    expect(component.error_message).toBe('');
  });

  it('should set found_user to false and display error message when user is not found', () => {
    const mockCpf = '12345678900';
    const maskedCpf = mask.cpf(mockCpf);

    apiServiceSpy.httpGetUserByCpf.and.returnValue(of([]));

    component.form.patchValue({ cpf: mockCpf });
    component.onSubmit();

    expect(apiServiceSpy.httpGetUserByCpf).toHaveBeenCalledWith(maskedCpf);
    expect(component.found_user).toBeFalse();
    expect(component.error).toBeTrue();
    expect(component.error_message).toBe('CPF não encontrado');
  });

  it('should set found_user to false and display error message when an error occurs during API call', () => {
    const mockCpf = '12345678900';
    const maskedCpf = mask.cpf(mockCpf);

    apiServiceSpy.httpGetUserByCpf.and.returnValue(throwError('API Error'));

    component.form.patchValue({ cpf: mockCpf });
    component.onSubmit();

    expect(apiServiceSpy.httpGetUserByCpf).toHaveBeenCalledWith(maskedCpf);
    expect(component.found_user).toBeFalse();
    expect(component.error).toBeTrue();
    expect(component.error_message).toBe('CPF não encontrado');
  });

  it('should set found_user to false if validateUser receives an empty user object', () => {
    const mockUser = new User();

    component.validateUser(mockUser);

    expect(component.found_user).toBeFalse();
  });

  it('should set found_user to true if validateUser receives a non-empty user object', () => {
    const mockUser = new User({ nome: 'John Doe' });

    component.validateUser(mockUser);

    expect(component.found_user).toBeTrue();
  });

  it('should return true when all conditions are met for validateDisableButton', () => {
    const mockCpf = '12345678900';
    const maskedCpf = mask.cpf(mockCpf);

    component.found_user = true;
    component.form.patchValue({ cpf: mockCpf });
    component.found_cpf = maskedCpf;

    const result = component.validateDisableButton();

    expect(result).toBeTrue();
  });

  it('should return false when any condition is not met for validateDisableButton', () => {
    const mockCpf = '12345678900';
    const maskedCpf = mask.cpf(mockCpf);

    component.found_user = false;
    component.form.patchValue({ cpf: mockCpf });
    component.found_cpf = maskedCpf;

    let result = component.validateDisableButton();
    expect(result).toBeFalse();

    component.found_user = true;
    component.form.patchValue({ cpf: '123' });
    component.found_cpf = maskedCpf;

    result = component.validateDisableButton();
    expect(result).toBeFalse();

    component.found_user = true;
    component.form.patchValue({ cpf: mockCpf });
    component.found_cpf = '111.222.333-44';

    result = component.validateDisableButton();
    expect(result).toBeFalse();
  });
});
