import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UploadService } from '../service/upload.service'
import { Audio } from '../class/audio'

@Component({
    selector: 'file-uploader',
    templateUrl: 'app/template/file-uploader.component.html'
})
export class FileUploaderComponent implements OnInit {

  @Input() audio:Audio;
  responseStatus:Object= [];
  status:boolean ;
  urlServer: string = "http://192.168.236.67:3003/upload";

  constructor(private uploadService: UploadService) {}

  public uploader:FileUploader = new FileUploader({url: this.urlServer});

  submitPost()
  {
    //console.log("submit Post click happend " + this.message.name)
    this.uploadService.postAudio(this.audio).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
    );
    this.status = true;
  }

  ngOnInit() {
       this.audio = new Audio();
    }
}
