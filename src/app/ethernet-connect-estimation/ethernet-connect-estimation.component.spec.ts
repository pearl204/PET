import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthernetConnectEstimationComponent } from './ethernet-connect-estimation.component';

describe('EthernetConnectEstimationComponent', () => {
  let component: EthernetConnectEstimationComponent;
  let fixture: ComponentFixture<EthernetConnectEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthernetConnectEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthernetConnectEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
