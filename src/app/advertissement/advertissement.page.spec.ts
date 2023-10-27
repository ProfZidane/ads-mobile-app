import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertissementPage } from './advertissement.page';

describe('AdvertissementPage', () => {
  let component: AdvertissementPage;
  let fixture: ComponentFixture<AdvertissementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvertissementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
