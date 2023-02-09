import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiverformsComponent } from './reactiverforms.component';

describe('ReactiverformsComponent', () => {
  let component: ReactiverformsComponent;
  let fixture: ComponentFixture<ReactiverformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiverformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiverformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
