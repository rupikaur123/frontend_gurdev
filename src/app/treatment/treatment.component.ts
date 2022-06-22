import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css'],
})
export class TreatmentComponent implements OnInit {
  treatment_name = [
    {
      name: 'Asthroplasty',
      banner: '',
      title: 'Arthroscopy – Sports Injury',
      content:
        'What is Arthroscopy Surgery?Arthroscopy, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Cardiology',
      banner: '',
      title: 'Cardiology – Sports Injury',
      content:
        'What is Cardiology Surgery?Cardiology, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Asthroplasty',
      banner: '',
      title: 'Arthroscopy – Sports Injury',
      content:
        'What is Arthroscopy Surgery?Arthroscopy, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Cardiology',
      banner: '',
      title: 'Cardiology – Sports Injury',
      content:
        'What is Cardiology Surgery?Cardiology, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Asthroplasty',
      banner: '',
      title: 'Arthroscopy – Sports Injury',
      content:
        'What is Arthroscopy Surgery?Arthroscopy, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Cardiology',
      banner: '',
      title: 'Cardiology – Sports Injury',
      content:
        'What is Cardiology Surgery?Cardiology, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Asthroplasty',
      banner: '',
      title: 'Arthroscopy – Sports Injury',
      content:
        'What is Arthroscopy Surgery?Arthroscopy, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
    {
      name: 'Cardiology',
      banner: '',
      title: 'Cardiology – Sports Injury',
      content:
        'What is Cardiology Surgery?Cardiology, also termed as arthroscopic surgery, is a minimally invasive surgical procedure used by surgeons to examine, diagnose, envision and treat damages related to the interior of a joint. This procedure is performed using an arthroscope, a type of endoscope that is inserted into the joint through a small incision in the patient’s skin. Arthroscopic procedures are usually carried out either to examine or to treat a range of orthopaedic conditions. These conditions may include torn floating cartilage, torn surface cartilage, ACL reconstruction and trimming damaged cartilage.',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {}
  navigate() {
    this.route.navigate(['/treatment/details/' + 1]);
  }
}
