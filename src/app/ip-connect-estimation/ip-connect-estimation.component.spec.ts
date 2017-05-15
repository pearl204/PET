import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpConnectEstimationComponent } from './ip-connect-estimation.component';

describe('IpConnectEstimationComponent', () => {
  let component: IpConnectEstimationComponent;
  let fixture: ComponentFixture<IpConnectEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpConnectEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpConnectEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
