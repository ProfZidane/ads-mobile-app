import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdUpdatePage } from './ad-update.page';

describe('AdUpdatePage', () => {
  let component: AdUpdatePage;
  let fixture: ComponentFixture<AdUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
