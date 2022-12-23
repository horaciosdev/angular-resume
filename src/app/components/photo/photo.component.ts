import { Component } from '@angular/core';
import { FileExistsService } from 'src/app/services/file-exists.service';
import { environment } from 'src/app/environments/environment';
import { SharedResumeService } from 'src/app/services/shared-resume.service';
import { Resume } from '../Resume';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {
  name: string = '';
  photoUrl: string = '';
  role: string = '';
  baseApiUrl: string = environment.baseApiUrl;

  constructor(
    private fileExistsService: FileExistsService,
    private sharedResumeService: SharedResumeService
  ) {}

  ngOnInit(): void {
    let resume: Resume = this.sharedResumeService.getResume();
    this.name = resume.name;
    this.photoUrl = resume.photoUrl;
    this.role = resume.role;
    this.loadImage(this.photoUrl);
  }

  loadImage(url: string): void {
    this.fileExistsService.checkFileExists(url).subscribe((fileExists) => {
      if (!fileExists) {
        this.photoUrl = `${this.baseApiUrl}assets/image/default.png`;
      }
    });
  }
}
