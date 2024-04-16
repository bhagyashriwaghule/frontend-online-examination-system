import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MathService } from '../math.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})

export class OperationComponent {
  no:number=0; 
  answer:number=0;
constructor(private op:MathService)
{

}
calculateCube()
{
this.answer=this.op.calculateCube(this.no);
}
}
