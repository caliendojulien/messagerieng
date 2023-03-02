import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMessageComponent } from './nouveau-message.component';

describe('NouveauMessageComponent', () => {
  let component: NouveauMessageComponent;
  let fixture: ComponentFixture<NouveauMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
