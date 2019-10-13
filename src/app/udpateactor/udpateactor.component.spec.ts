import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactorComponent } from './udpateactor.component';

describe('UdpateactorComponent', () => {
  let component: UpdateactorComponent;
  let fixture: ComponentFixture<UpdateactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
