import { Component, Input } from '@angular/core';
import { FileExistsService } from 'src/app/services/file-exists.service';
import { environment } from 'src/app/environments/environment';
import { Resume } from '../Resume';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  @Input() resume!: Resume;
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private fileExistsService: FileExistsService) {}

  ngOnInit(): void {
    this.loadImage(this.resume.image);
  }

  loadImage(url: string): void {
    this.fileExistsService.checkFileExists(url).subscribe((fileExists) => {
      if (!fileExists) {
        this.resume.image = `${this.baseApiUrl}assets/image/default.png`;
      }
    });
  }
}
