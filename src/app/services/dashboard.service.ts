import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, timeout } from 'rxjs';

type FakeIncerceptopType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  public fakeInterCeptopcall(): Observable<FakeIncerceptopType> {
    return this.http.get<FakeIncerceptopType>(
      'https://jsonplaceholder-errrr.typicode.com/posts/1'
    );
  }
}
