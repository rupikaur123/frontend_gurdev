import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookApptComponent } from './book-appt.component';

describe('BookApptComponent', () => {
  let component: BookApptComponent;
  let fixture: ComponentFixture<BookApptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookApptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
