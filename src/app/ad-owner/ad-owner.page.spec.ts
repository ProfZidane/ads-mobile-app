import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdOwnerPage } from './ad-owner.page';

describe('AdOwnerPage', () => {
  let component: AdOwnerPage;
  let fixture: ComponentFixture<AdOwnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
