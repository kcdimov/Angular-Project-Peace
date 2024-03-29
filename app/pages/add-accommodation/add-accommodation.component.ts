import {Component, OnInit, ViewChild} from '@angular/core';
import {PageServiceService} from "../page-service.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.css'],
  exportAs: 'ngForm'
})
export class AddAccommodationComponent implements OnInit {

  @ViewChild('form', {read: NgForm, static: false})
  form!: NgForm;
  NgForm = NgForm

  constructor(private pageService: PageServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addAccommodation(form: NgForm): void {
    if (form.invalid) {
      return
    }
    const { postName, description, imageUrl } = form.value;
    console.log(form.value);
    this.pageService.addAccommodation({postName, description, imageUrl}).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }, error: (err) => {
        console.log(err);
    }
    })
  }

}
