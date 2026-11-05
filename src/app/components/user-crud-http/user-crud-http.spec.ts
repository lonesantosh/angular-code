import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCrudHttp } from './user-crud-http';

describe('UserCrudHttp', () => {
  let component: UserCrudHttp;
  let fixture: ComponentFixture<UserCrudHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCrudHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCrudHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
