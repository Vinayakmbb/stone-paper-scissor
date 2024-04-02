import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {

  start_but:boolean=true;
  start_game(){
    this.start_but=true;
  }

 user:number=0;
 num:number=0;
 res:number=0;

 t_match:number=0;

 h_win:number=0;
 h_draw:number=0;
 h_lost:number=0;

 m_win:number=0;
 m_draw:number=0;
 m_lost:number=0;

 OverallWinner:string="";
 human_res:string="";
 machine_res:string="";

 l_img_url:string="assets/images/left_paper.jpeg";
 r_img_url:string="assets/images/right_paper (2).jpeg";
 

  paper(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=10;
    this.res=this.user+this.num;
    this.final_result(this.res);

  }
  rock(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=20;
    this.res=this.user+this.num;
    this.final_result(this.res);


  }
  scissor(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=30;
    this.res=this.user+this.num;
    this.final_result(this.res);


  }
  final_result(a:number){

      switch(a){
        case 11:alert("paper wins");
        this.paper_win();
        break;
        case 12:alert("paper loss");
        this.paper_loss();
        break;
        case 13:alert(" draw");
        this.paper_draw();
        break;
        case 21:alert("rock wins");
        this.rock_win();
        break;
        case 22:alert("rock loss");
        this.rock_loss();
        break;
        case 23:alert(" draw");
        this.rock_draw();
        break;
        case 31:alert("scissor wins");
        this.scissor_win();
        break;
        case 32:alert("scissor loss");
        this.scissor_loss();
        break;
        case 33:alert(" draw");
        this.scissor_draw();
        break;
      }
    }
    paper_win(){
      this.t_match=this.t_match+1;
      this.h_win=this.h_win+2;
      this.m_lost=this.m_lost+1;
      this.l_img_url="assets/images/left_paper.jpeg";
      this.r_img_url="assets/images/right_rock.jpeg";
    }
    paper_draw(){
            this.t_match=this.t_match+1;
            this.m_draw=this.m_draw+1;
            this.h_draw=this.h_draw+1;  
            this.l_img_url="assets/images/left_paper.jpeg";
            this.r_img_url="assets/images/right_paper (2).jpeg";
    }
    paper_loss(){
            this.t_match=this.t_match+1;
            this.m_win=this.m_win+2;
            this.h_lost=this.h_lost+1;
            this.l_img_url="assets/images/left_paper.jpeg";
            this.r_img_url="assets/images/right_scissor.jpeg";
    }
    rock_win(){
            this.t_match=this.t_match+1;
            this.h_win=this.h_win+2;
            this.m_lost=this.m_lost+1;
            this.l_img_url="assets/images/left_rock.jpeg";
            this.r_img_url="assets/images/right_scissor.jpeg";
    }
    rock_draw(){
            this.t_match=this.t_match+1;
            this.m_draw=this.m_draw+1;
            this.h_draw=this.h_draw+1;
            this.l_img_url="assets/images/left_rock.jpeg";
            this.r_img_url="assets/images/right_rock.jpeg";
    }
    rock_loss(){
            this.t_match=this.t_match+1;
            this.m_win=this.m_win+2;
            this.h_lost=this.h_lost+1;
            this.l_img_url="assets/images/left_rock.jpeg";
            this.r_img_url="assets/images/right_paper (2).jpeg";
    }
    scissor_win(){
            this.t_match=this.t_match+1;
            this.h_win=this.h_win+2;
            this.m_lost=this.m_lost+1;
            this.l_img_url="assets/images/left_scissor.jpeg";
            this.r_img_url="assets/images/right_paper (2).jpeg";
    }
    scissor_loss(){
           
            this.t_match=this.t_match+1;
            this.m_win=this.m_win+2;
            this.h_lost=this.h_lost+1;
            this.l_img_url="assets/images/left_scissor.jpeg";
            this.r_img_url="assets/images/right_rock.jpeg";
    }
    scissor_draw(){
            this.t_match=this.t_match+1;
            this.m_draw=this.m_draw+1;
            this.h_draw=this.h_draw+1;
            this.l_img_url="assets/images/left_scissor.jpeg";
            this.r_img_url="assets/images/right_scissor.jpeg";
    }
    
    
    
}