import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag.model';

const baseURL ='http://localhost:8085/api/tutorials'

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private httpClient: HttpClient) { }
  getAllTags(tutorialId: any):Observable<Tag[]>{
      return this.httpClient.get<Tag[]>(`${baseURL}/${tutorialId}/tags`)
  }
}
