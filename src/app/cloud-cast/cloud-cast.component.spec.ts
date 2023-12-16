import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCastComponent } from './cloud-cast.component';

describe('CloudCastComponent', () => {
  let component: CloudCastComponent;
  let fixture: ComponentFixture<CloudCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
