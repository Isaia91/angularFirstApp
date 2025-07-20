import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComposantComponent } from './second-composant.component';

describe('SecondComposantComponent', () => {
  let component: SecondComposantComponent;
  let fixture: ComponentFixture<SecondComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComposantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
