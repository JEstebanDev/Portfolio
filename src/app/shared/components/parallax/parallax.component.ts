import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss'],
})
export class ParallaxComponent implements OnInit {
  public parallax_item: Array<any> | undefined;
  constructor() {}
  ngOnInit(): void {
    this.parallax_item = [
      {
        top: '10%',
        left: '10%',
        size: 'small',
        rotate: '10',
        opacity: '1',
        inversion: 'true',
        src: 'assets/icon-home/html.webp',
      },
      {
        top: '18%',
        left: '25%',
        size: 'middle',
        rotate: '20',
        opacity: '1',
        src: 'assets/icon-home/css.svg',
      },
      {
        top: '80%',
        left: '80%',
        size: 'big',
        rotate: '20',
        opacity: '1',
        src: 'assets/icon-home/js.svg',
      },
      {
        top: '70%',
        left: '22%',
        size: 'big',
        rotate: '-15',
        opacity: '1',
        movement: '0.087',
        src: 'assets/icon-home/angular.svg',
      },
      {
        top: '75%',
        left: '42%',
        size: 'middle',
        rotate: '15',
        opacity: '1',
        movement: '0.087',
        src: 'assets/icon-home/ts.webp',
      },
      {
        top: '40%',
        left: '12%',
        size: 'middle',
        rotate: '-15',
        opacity: '1',
        inversion: 'true',
        movement: '0.087',
        src: 'assets/icon-home/kubernetes.webp',
      },
      {
        top: '45%',
        left: '92%',
        inversion: 'true',
        size: 'middle',
        rotate: '20',
        opacity: '0.87',
        src: 'assets/icon-home/redux.webp',
      },
      {
        top: '10%',
        left: '65%',
        size: 'middle',
        rotate: '20',
        opacity: '1',
        src: 'assets/icon-home/graphql.webp',
      },
      {
        top: '85%',
        left: '62%',
        size: 'middle',
        rotate: '30',
        inversion: 'true',
        opacity: '1',
        src: 'assets/icon-home/docker.svg',
      },
      {
        top: '24%',
        left: '45%',
        size: 'middle',
        rotate: '-30',
        inversion: 'true',
        opacity: '1',
        src: 'assets/icon-home/postgresql.webp',
      },
      {
        top: '65%',
        left: '5%',
        size: 'middle',
        rotate: '20',
        opacity: '1',
        src: 'assets/icon-home/java.webp',
      },
      {
        top: '14%',
        left: '85%',
        size: 'big',
        rotate: '20',
        opacity: '1',
        inversion: 'true',
        movement: '0.087',
        src: 'assets/icon-home/react.webp',
      },
    ];
  }
}
