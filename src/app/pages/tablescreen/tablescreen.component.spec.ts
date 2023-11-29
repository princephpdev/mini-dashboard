import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablescreenComponent } from './tablescreen.component';

describe('TablescreenComponent', () => {
  let component: TablescreenComponent;
  let fixture: ComponentFixture<TablescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablescreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
