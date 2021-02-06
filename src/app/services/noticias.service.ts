import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadlines } from '../intefaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key' : apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){ // <T> indica que recibira algun tipo esto para no 
      query = apiUrl + query;
      return this.http.get<T>( query, { headers } );
  }

  getTopHeadlines() {
    // return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/everything?q=tesla&from=2021-01-04&sortBy=publishedAt&apiKey=862f5761f24445eca738dc9f4fe88e9b');
    return this.ejecutarQuery<RespuestaTopHeadlines>('/everything?q=tesla&from=2021-01-04&sortBy=publishedAt');
  }

  getTopHeadlinesCategoria(categoria: string){
    // return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=862f5761f24445eca738dc9f4fe88e9b');
    console.log(categoria);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);
  }
}