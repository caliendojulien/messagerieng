import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesActivesComponent } from './personnes-actives.component';

describe('PersonnesActivesComponent', () => {
  let component: PersonnesActivesComponent;
  let fixture: ComponentFixture<PersonnesActivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnesActivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnesActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
