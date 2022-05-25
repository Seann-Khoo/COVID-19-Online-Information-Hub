import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform, Sanitizer } from '@angular/core';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
