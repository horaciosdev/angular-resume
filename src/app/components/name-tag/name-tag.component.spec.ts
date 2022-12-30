import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTagComponent } from './name-tag.component';

describe('NameTagComponent', () => {
  let component: NameTagComponent;
  let fixture: ComponentFixture<NameTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
