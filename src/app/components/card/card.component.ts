import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() imagen: string;
  @Input() descripcion: string;
  @Input() subtitulo: string;
  @Input() titulo: string;

  direcIMG = '../../../assets/imagenes/';
  constructor() { }

  ngOnInit() {
    if(this.imagen){
        this.direcIMG += this.imagen;
    }else{
      this.direcIMG += 'none.jpg';
    }
  }

}
