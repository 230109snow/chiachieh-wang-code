import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCatComponent } from './fetch-cat.component';

describe('FetchCatComponent', () => {
  let component: FetchCatComponent;
  let fixture: ComponentFixture<FetchCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
