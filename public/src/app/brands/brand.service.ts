import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BrandService {

    constructor(private httpClient: HttpClient) {}

    find(): Observable < any > {
        return this.httpClient
            .get(`/api/v1/brands`)
            .pipe(
                map((body: any) => body),
                catchError(() => of ('Error, could not load data :-('))
            );
    }

    findOne(id: string): Observable < any > {
        return this.httpClient
            .get('/api/v1/brands/' + id)
            .pipe(
                map((body: any) => body),
                catchError(() => of ('Error, could not load data :-('))
            );
    }

    edit(data: any): Observable < any > {
        return this.httpClient
            .put('/api/v1/brands/' + data._id, data)
            .pipe(
                map((body: any) => body),
                catchError(() => of ('Error, could not load data :-('))
            );
    }

    create(data: any): Observable < any > {
        return this.httpClient
            .post('/api/v1/brands', data)
            .pipe(
                map((body: any) => body),
                catchError(() => of ('Error, could not load data :-('))
            );
    }

    delete(id: string): Observable < any > {
        return this.httpClient
            .delete('/api/v1/brands/' + id)
            .pipe(
                map((body: any) => body),
                catchError(() => of ('Error, could not load data :-('))
            );
    }

}
