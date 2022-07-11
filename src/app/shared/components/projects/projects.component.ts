import { Component, Input, OnInit } from '@angular/core';
import { ListRepositoriesCustom } from '../../interface/ListRepositoriesCustom.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent implements OnInit {
  @Input() repositories!: ListRepositoriesCustom;
  constructor() {}

  ngOnInit(): void {}
}
