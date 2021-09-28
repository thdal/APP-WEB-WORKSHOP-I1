import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBodyComponent } from './block-body.component';

describe('BlockBodyComponent', () => {
  let component: BlockBodyComponent;
  let fixture: ComponentFixture<BlockBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
