import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero }           from '../models/hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`http://localhost:3030/heroes/?name=${term}`)
               .map((r: Response) => r.json());
  }
}