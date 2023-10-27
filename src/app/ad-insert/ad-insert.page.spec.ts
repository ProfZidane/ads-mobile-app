import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdInsertPage } from './ad-insert.page';

describe('AdInsertPage', () => {
  let component: AdInsertPage;
  let fixture: ComponentFixture<AdInsertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
