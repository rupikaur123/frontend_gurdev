import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  res:any
  baseUrl: any = 'http://api.gurdevhospital.co/'
  constructor(private route: Router, public http:HttpClient) {}

  ngOnInit(): void {
    this.getServiceList()
  }
  navigate(data:any) {
    this.route.navigate(['/treatment/details/' + data.id]);
  }
  getServiceList(){
    this.http.get<any>(this.baseUrl + 'api/get_services')
      .subscribe(data => {
        console.log("Get completed sucessfully. The response received " + data);
        this.res = data.data;
        this.treatment_name = this.res
        console.log('treatment_name', this.treatment_name)
      },
        error => {
          console.log("failed with the errors", error.error);
          if (error.error) {
            this.toster.error(error.error.message);
          } else {
            this.toster.error('Something went wrong');
          }
        }
      );
  }
}
