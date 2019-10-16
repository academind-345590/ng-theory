import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarComponent } from './car.component';
import { CarService } from './car.service';

describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
  })

  it('should create component instance', () => {    
    expect(component).toBeTruthy();
  });

  it(`should render tag h4  with text 'My Car Header'`, () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const text = element.querySelector('h1').textContent;
    expect(text).toEqual('My Car Header');
  });

  it('should inject CarService', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility())
  });

  it('should display car if is visible', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.showCar();
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const text = element.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  it(`should't display car if is't visible`, () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.hideCar();
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const text = element.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });

});