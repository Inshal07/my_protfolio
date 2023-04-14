import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.scss']
})
export class AcheivementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 listCertificate=[
   {
     Name:'Angular Developer Bootcamp',
     url: '../../assets/certificates/Angular-Certificate.jpg'
   },
  {
    Name:'Front-End Javascript Frameworks: Angular',
    url: '../../assets/certificates/Angular-Certificate-Coursera.jpg'
  },
  {
    Name:'DevOps on AWS: Specialization',
    url: '../../assets/certificates/DevOps-on-AWS-Coursera.jpg'
  },
  {
    Name:'Foundation of User Experience (UX) Design',
    url: '../../assets/certificates/UX-Foundation-Cousera.jpg'
  },
  {
    Name:'Server-side Development with NodeJS, Express and MongoDB',
    url: '../../assets/certificates/Node-Express-Mongo-Certificate-Coursera.jpg'
  },
  {
    Name:'Getting Started with Python',
    url: '../../assets/certificates/Coursera.jpg'
  },
  {
    Name:'Introduction to HTML5',
    url: '../../assets/certificates/Coursera-HTML5.jpg'
  },
  {
    Name:'Crash Course Python',
    url: '../../assets/certificates/Python_google_Coursera.jpg'
  },
  {
    Name:'Python and Django Full-Stack Web Developer Bootcamp',
    url: '../../assets/certificates/Python-Django.jpg'
  },
  {
    Name:'UI/UX Design Training ',
    url: '../../assets/certificates/UI_UX.jpg'
  }
 ];
 listEvents=[
  {
    Name:'Pulzion`21 Hackthon ',
    url: '../../assets/certificates/Pulzion.jpg'
  },
 {
   Name:'Google Solution Challenge',
   url: '../../assets/certificates/Google.jpg'
 },
 {
   Name:'Chefs Hack',
   url: '../../assets/certificates/Chefs.jpg'
 },
 {
   Name:'UI Design Challenge DocoNation',
   url: '../../assets/certificates/UI.jpg'
 },
 {
   Name:'Virtual Hackathon- HackNation DocoNation',
   url: '../../assets/certificates/Docogen.jpg'
 }

]

onAchieve = ()=>window.scroll(0, 600);


 onEvent = () => window.scroll(0, 7300);

}
