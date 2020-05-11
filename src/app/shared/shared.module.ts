import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StarComponent, ConvertToSpacePipe],
  imports: [CommonModule],
  exports: [StarComponent, ConvertToSpacePipe, FormsModule, CommonModule],
})
export class SharedModule {}
