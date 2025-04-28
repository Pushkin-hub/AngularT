import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomTestComponent } from './boom-test.component';

describe('BoomTestComponent', () => {
  let component: BoomTestComponent;
  let fixture: ComponentFixture<BoomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoomTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
