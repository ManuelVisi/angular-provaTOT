import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major; /*proprety of AppComponent*/
  data="dataq"
  num = 100
  show=true
  color="purple"
  bgColor="red"
  /*users=['manuel', 'giorgio', 'fra', 'bro', 'filomena']*/
  users=[ /* ex uDetails *//* this is an array */
    { name:'manuel', email:'manuelvisi@oooo.it', phone:'321 32131232', accounts:['facebook', 'instagram', 'linkedin']},
    { name:'giorgio', email:'giorigo@oooo.it', phone:'e56 8427348927', accounts:['google', 'instagram', 'linkedin']},
    { name:'fra', email:'fra@oooo.it', phone:'267548926', accounts:['facebook', 'youtube', 'google']},
    { name:'bro', email:'bro@oooo.it', phone:'93746730', accounts:['yahoo', 'instagram', 'twitter']},
    { name:'filomena', email:'filomena-@oooo.it', phone:'3752986592', accounts:['facebook', 'reddit', 'youtube']},
  ]

  updateColor(){
      this.color="skyblue"
      this.bgColor="blue"
  }

  getVal() { /* cosi si definiscono le funzioni nella classe AppComponent */
    return "code prova"
  }
  
  getFunz(nome: string | number/*any per qualsiasi cosa*/){ /* in questo caso su componen.ts va messo il nome tra '' nelle () di getFunz() */
    alert(nome)
  }
  /*getFunz(){
    alert("MSG ALERT!")
  }*/
  displayVal:string='';
  getValue(val:string){
    this.displayVal=val
  }
  getData(par: string){
    console.warn(par)
  }
/* CONTATORE */
  count=0;
  counter(type:string){
    /*this.count++*/
    type==='add'?this.count++:this.count-- /* se type è = add allora incrementa count, else(:) decrementa count */
  }
  imgsrc="";
  getMouse(type:string){
    type==='true'?this.imgsrc="https://m.media-amazon.com/images/I/51Ccxuh0NwL._AC_SL1000_.jpg":this.imgsrc="https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T127A1MPA5161PT21X6Y7D152061453FS806/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/meme-bongo-cat-spille-piccole.jpg"
  }
}
