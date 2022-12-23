import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingSkillsComponent } from './programming-skills.component';

describe('ProgrammingSkillsComponent', () => {
  let component: ProgrammingSkillsComponent;
  let fixture: ComponentFixture<ProgrammingSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
