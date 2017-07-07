import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maths Quiz';
  showHide: false;
  counter  = 0
  ex0 = "PLEASE READ BEFORE STARTNG ..."
  ex1 = "This is a primary school maths quiz with 20 questions.";
  ex2 = "You will have 2 minutes to complete as much as you can.";
  ex3 = "At the end , you will be given a score which you will be able to save into the scoreboard.";
  ex4 = "Answers must be to 1 decimal place unless the answer is a whole number."
  p = 0
  checked = false ;
  usersInput;
 diff = 10
 pick1 = "Easy"
 diff1(){
   this.diff = 10
   this.pick1 = "Easy"
   //alert("number 1 to 10 selected")
 }

 diff2(){
   this.diff = 20
   this.pick1 = "Medium"
  // alert("number 1 to 20 selected")
 }

 diff3(){
   this.diff = 30
   this.pick1 = "Hard"
   //alert("number 1 to 30 selected")
 }
 num1 = Math.floor(Math.random() * (this.diff) + 1);
 num2 = Math.floor(Math.random() * (this.diff) + 1);
 myArray = ['+', '-', '*',"/"];
 user =[];
 rightans =[];
 questions =[];
 ended= true;
 noScore = true;
 reset = true;
 data = true;
 ex = false;
 noTimer = false;
 ans = true;
 showScoreboard = true;
 start = false;
 scoreboard = [];
 name = "";
 class = "";
 board = false;
 options = false;
 timer;

 timestring;
 rand = this.myArray[Math.floor(Math.random() * this.myArray.length)];
pick2 = "+,-,*,/"
arr1(){
  this.myArray = ['+', '-']
  this.pick2 = " +,-"
  //alert("+,- has been selected")
}

arr2(){
  this.myArray = ['+', '-', '*',"/"]
  this.pick2 = " +,-,*,/"

  //  alert("+,-,*,/ has been selected")
}

keypress(e){
 var code = e.keyCode || e.which;
 if(code == 13){
   this.Click();
 }
}

 Click(){
   console.log(this.p)
   if (this.p < 20){
   this.user.push(this.usersInput)
   console.log(this.usersInput);
   this.usersInput =""
 }
 this.p++;

 if(this.p == 20){
   clearInterval(this.timer);
   this.checkAnswer();
 }
}

 createTimer(){
   this.options = true;
   this.board = true;
   this.noTimer = false;
 this.generateQuestion();
 this.ans = false;
 this.start = true;
 this.reset = false;
  var cd = 119;
  var a2 = this;
  a2.timestring = "2m 0s ";

  this.timer = setInterval(function() {
  var minutes = Math.floor(cd / 60)
  var seconds  = cd % 60
  if (cd < 0 ) {
    clearInterval(this.timer);
    a2.checkAnswer();
  }
  cd--;
  a2.timestring =  minutes + "m " + seconds + "s ";
}, 1000);
//this.generateQuestion();
}

score = 0
  checkAnswer(){
    var i = 0
    this.score = 0
    while (i<20){
      if (this.user[i] === this.rightans[i] ){
        this.score++;
          }
      else{
            }
       i++;
      }

    this.ended = false;
    this.noTimer = true;
    this.noScore = false;
    this.ex = true;
    this.options = true;
    this.ans = true;
    this.data = false;
    this.reset = true;
    this.board = true;
}

  generateQuestion(){
    var a = 0
    while (a<20){
      this.num1= Math.floor(Math.random() * (this.diff) + 1);
      this.num2= Math.floor(Math.random() * (this.diff) + 1);
      this.rand = this.myArray[Math.floor(Math.random() * this.myArray.length)];
      var quest = this.num1 + this.rand + this.num2
      var answer = eval(quest)
      if(answer % 1 !== 0){
        answer = answer.toFixed(1);
          }
      answer = answer.toString();
      this.questions.push(quest)
      this.rightans.push(answer)
      a++;
      }
}

  refreshPage(){
      //  window.location.reload();
        clearInterval(this.timer)
        this.p = 0 ;
        this.noTimer = true;
        this.score = 0;
        this.user = [];
        this.rightans = [];
        this.questions = [];
        this.board = false;
        this.options = false;
        this.start = false;
        this.reset = true;
        this.showScoreboard = true;
        this.noScore = true;
        this.ex = false;
        this.data = true;
        this.ended = true;
        this.ans = true;


      }
Scoreboard(){
  this.noScore = true;
  this.ended = true;
  this.ex = true;
  this.data = true;
  this.board = true;
  this.options = true;
  this.showScoreboard = false;
  this.reset = false;
  this.start = true;
}

Sub2(){
  this.scoreboard.push({class:this.class , name:this.name , score:this.score})
  this.data = true;
  this.noScore = true;
  console.log(this.scoreboard);
  console.log(this.name)
  this.class = "";
  this.name = "";
  this.data = true;
  this.Scoreboard()
}
}
