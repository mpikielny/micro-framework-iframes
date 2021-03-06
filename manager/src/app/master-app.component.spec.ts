import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MasterAppComponent } from './master-app.component';

describe('MasterAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MasterAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MasterAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'manager'`, () => {
    const fixture = TestBed.createComponent(MasterAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('manager');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MasterAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to manager!');
  });
});
