import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignSystemPlayground } from './design-system-playground';

describe('DesignSystemPlayground', () => {
  let component: DesignSystemPlayground;
  let fixture: ComponentFixture<DesignSystemPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemPlayground],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignSystemPlayground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
