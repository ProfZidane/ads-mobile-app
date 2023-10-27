import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdDetailsPage } from './ad-details.page';

describe('AdDetailsPage', () => {
  let component: AdDetailsPage;
  let fixture: ComponentFixture<AdDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
