import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Producto } from '../models/producto';

@Injectable()
export class ProductoService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private productosUrl = 'http://localhost:3030/catalogo';  // URL to web api
    private productUrl = 'http://localhost:3030/fileProducto';  // URL to web api

    constructor(private http: Http) { }

    getProductos(): Promise<Producto[]> {
        return this.http.get(this.productosUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getProducto(id: number): Promise<Producto> {
        return this.getProductos()
            .then(productos => productos.find(producto => producto.id === id));
    }

    create(nombre: string): Promise<Producto> {
        return this.http
            .post(this.productUrl, JSON.stringify({ nombre: nombre }), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    update(producto: Producto): Promise<Producto> {
        const url = `${this.productUrl}/${producto.id}`;
        return this.http
            .put(url, JSON.stringify(producto), { headers: this.headers })
            .toPromise()
            .then(() => producto)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.productUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}