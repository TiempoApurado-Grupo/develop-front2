import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {Post} from "../model/post";
import {Property} from "../model/property";
import {Lessor} from "../model/lessor";
import {Tenant} from "../model/tenant";
import {Comment} from "../model/comment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseURL = "http://localhost:3000";
  postURL=`${this.baseURL}/posts`;
  propertyURL=`${this.baseURL}/properties`;
  lessorURL=`${this.baseURL}/lessors`;
  tenantURL=`${this.baseURL}/tenants`;
  commentURL=`${this.baseURL}/comments`;
  constructor(private http:HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postURL);
  }
  getAllProperties():Observable<Property[]>{
    return this.http.get<Property[]>(this.propertyURL);
  }
  getAllLessors():Observable<Lessor[]>{
    return this.http.get<Lessor[]>(this.lessorURL);
  }
  getAllTenants():Observable<Tenant[]>{
    return this.http.get<Tenant[]>(this.tenantURL);
  }
  getAllComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentURL);
  }
  getItemById(postId: number): Observable<{ post: Post, property: Property } | undefined> {
    // @ts-ignore
    return this.http.get<any>(`${this.postURL}/${postId}`).pipe(
      switchMap((response: any) => {
        const posts = Array.isArray(response) ? response : [response];
        const post = posts.find(p => p.id === postId);
        if (post) {
          const propertyId = post.propertyId;
          return this.http.get<Property>(`${this.propertyURL}/${propertyId}`).pipe(
            map((property: Property) => ({ post, property })),
            catchError(() => of(undefined))
          );
        }
        return of(undefined);
      })
    );
  }
  searchPosts(filterItem: string): Observable<Post[]> {
    const params = new HttpParams().set('q', filterItem);
    return this.http.get<Post[]>(`${this.postURL}?search=${filterItem}`, { params });
  }

}
