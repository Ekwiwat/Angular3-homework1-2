import { Component, OnInit, Input } from '@angular/core';
import { Exp } from '../../exp';
import { ExpService } from '../../exp.service';

@Component({
  selector: 'app-exp-content',
  templateUrl: './exp-content.component.html',
  styleUrls: ['./exp-content.component.css']
})
export class ExpContentComponent implements OnInit {
  exp: Exp[];

  constructor(private expService: ExpService) { }



  ngOnInit(): void {
    this.getExp();
  }

  getExp(): void {
    this.exp = this.expService.getExps();
  }

}
