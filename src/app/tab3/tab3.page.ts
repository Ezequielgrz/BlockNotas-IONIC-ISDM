import { Component } from '@angular/core';
import { UnsplashService } from '../services/unsplash.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  numberOfImages: number = 3;
  imageUrls: string[] = [];

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    this.getRandomImages();
  }

  getRandomImages() {
    const numberOfImages = 3;
    this.unsplashService.getRandomImages(numberOfImages).then(urls => {
      this.imageUrls = urls;
    });
  }

  updateGallery() {
    this.unsplashService.getRandomImages(this.numberOfImages).then(urls => {
      this.imageUrls = urls;
    });
  }
}
