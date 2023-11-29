import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivescreenComponent } from './directivescreen.component';

describe('DirectivescreenComponent', () => {
  let component: DirectivescreenComponent;
  let fixture: ComponentFixture<DirectivescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivescreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
