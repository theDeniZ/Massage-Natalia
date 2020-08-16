import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Massage Natalia';
  @Input() feedbackThanks = false;

  constructor(private http: HttpClient) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mnqglawl',
          { name: email.Name, replyto: email.Email, message: email.Message },
          { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            contactForm.setValue({ Name: '', Email: '', Message: '' });
            this.feedbackThanks = true;
          }
      );
    }
  }
}
