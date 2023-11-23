import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private accessKey = 'JKLHVJq4ZtZevaYCcHh555ZxSIjykA547iXchusU0cw';

  getRandomImages(count: number) {
    const url = `https://api.unsplash.com/photos/random?client_id=${this.accessKey}&count=${count}`;

    return axios.get(url)
      .then(response => response.data.map((image: any) => image.urls.regular))
      .catch(error => {
        console.error('Error al obtener imágenes de Unsplash:', error);
        return [];
      });
  }

  constructor() { }
}
