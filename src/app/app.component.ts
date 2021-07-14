import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Placeholder from './placeholder/placeholder';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  public editor: any;

  ngOnInit() {
    ClassicEditor.create(document.querySelector('#editor'), {
      extraPlugins: [Placeholder],
      toolbar: [ "heading",
      "bold",
      "italic",
      "numberedList",
      "bulletedList",
      "placeholder",],
      placeholderProps: {
        types: ["First Name", "Date"],
      },
    })
      .then(editor => {
        this.editor = editor;
      });
  }
}
