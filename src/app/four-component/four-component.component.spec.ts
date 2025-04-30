import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourComponentComponent } from './four-component.component';

describe('FourComponentComponent', () => {
  let component: FourComponentComponent;
  let fixture: ComponentFixture<FourComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
