import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowPopupComponent } from './add-row-popup.component';

describe('AddRowPopupComponent', () => {
  let component: AddRowPopupComponent;
  let fixture: ComponentFixture<AddRowPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRowPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
