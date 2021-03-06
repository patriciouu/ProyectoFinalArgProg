import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class FileUploaderServService {

  private urlUploads: string = "https://salty-caverns-78118.herokuapp.com/portfolio"

  constructor(private http: HttpClient) { }


   upload(file: File): Observable<HttpEvent<any>> {
     const formData: FormData = new FormData();
     formData.append('file', file);
     const req = new HttpRequest('POST', `${this.urlUploads}/upload`, formData, {
       reportProgress: true,
       responseType: 'json'
     });
     return this.http.request(req);
   }

   getFiles(): Observable<any> {
     return this.http.get(`${this.urlUploads}/files`);
   }

}
