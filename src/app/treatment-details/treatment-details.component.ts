import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.css'],
})
export class TreatmentDetailsComponent implements OnInit {
  banner: any;
  title: any;
  content: any;
  serviceId: any;
  constructor(private route: Router, private router: ActivatedRoute) {
    this.banner = '../../assets/img/img2.jpg';
    this.title = 'Arthroscopy – Sports Injury';
    this.content =
      'What is Arthroscopy Surgery?Arthroscopy, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.';
    this.serviceId = this.router.snapshot.params['id'];
    console.log('this.serviceId', this.serviceId);
  }

  ngOnInit(): void {}
  navigate() {
    this.route.navigate(['/book/appt/' + this.serviceId]);
  }
}
