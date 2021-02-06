import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/intefaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input () noticias: Article[] = [];
  // @Input () noticia: Article;


  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadlines()
     .subscribe( resp => {
        console.log('Noticias', resp);
        this.noticias.push(...resp.articles);
     });
  }

}
