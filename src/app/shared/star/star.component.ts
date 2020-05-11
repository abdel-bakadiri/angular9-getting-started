import { ProductService } from './../../service/product.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating;
  @Output() emitRating: EventEmitter<number> = new EventEmitter<number>();
  starWidth: number;
  constructor() {}

  // detect change for input proprety
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClick() {
    this.emitRating.emit(this.rating);
  }

  ngOnInit() {}
}
