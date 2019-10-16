import { TestBed } from '@angular/core/testing';
import { CarComponent } from './car.component';

describe('CarComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    })
  })

  it('should create component instance', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should render tag h4  with text 'My Car Header'`, () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const component: HTMLElement = fixture.nativeElement;
    const text = component.querySelector('h1');
    expect(text.textContent).toEqual('My Car Header');
  })

});