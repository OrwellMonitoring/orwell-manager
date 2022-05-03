import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageaddComponent } from './imageadd.component';

describe('ImageaddComponent', () => {
  let component: ImageaddComponent;
  let fixture: ComponentFixture<ImageaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
