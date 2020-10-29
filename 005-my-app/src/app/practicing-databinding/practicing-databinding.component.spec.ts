import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingDatabindingComponent } from './practicing-databinding.component';

describe('PracticingDatabindingComponent', () => {
  let component: PracticingDatabindingComponent;
  let fixture: ComponentFixture<PracticingDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
