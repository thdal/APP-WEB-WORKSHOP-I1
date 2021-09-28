import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFooterComponent } from './block-footer.component';

describe('BlockFooterComponent', () => {
  let component: BlockFooterComponent;
  let fixture: ComponentFixture<BlockFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
