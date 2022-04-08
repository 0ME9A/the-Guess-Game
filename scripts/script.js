
      // gallary used only for guess box it suffle multiple time after refress
      const gallary_for_guess = [
          "Avenger_Profile/ant.png",
          "Avenger_Profile/captain.png",
          "Avenger_Profile/doctor.png",
          "Avenger_Profile/hawkeye.png",
          "Avenger_Profile/hulk.png",
          "Avenger_Profile/loki.png",
          "Avenger_Profile/panther.png",
          "Avenger_Profile/rocket.png",
          "Avenger_Profile/sam.png",
          "Avenger_Profile/spider.png",
          "Avenger_Profile/star.png",
          "Avenger_Profile/thor.png",
          "Avenger_Profile/tony.png",
          "Avenger_Profile/vision.png",
          "Avenger_Profile/wanda.png",
          "Avenger_Profile/widow.png",
      ]

      // gallary used only for chose this picture it suffle only one time after refress
      const gallary_for_whereis = [
          'Avenger_Profile/ant.png',
          'Avenger_Profile/captain.png',
          'Avenger_Profile/doctor.png',
          'Avenger_Profile/hawkeye.png',
          'Avenger_Profile/hulk.png',
          'Avenger_Profile/loki.png',
          'Avenger_Profile/panther.png',
          'Avenger_Profile/rocket.png',
          'Avenger_Profile/sam.png',
          'Avenger_Profile/spider.png',
          'Avenger_Profile/star.png',
          'Avenger_Profile/thor.png',
          'Avenger_Profile/tony.png',
          'Avenger_Profile/vision.png',
          'Avenger_Profile/wanda.png',
          'Avenger_Profile/widow.png',
      ]

      const for_guess = document.getElementsByClassName('for-guess')
      const whereis = document.getElementsByClassName('whereis')
      const correct_ans_element = document.getElementById('correct-ans');
      const wrong_ans_element = document.getElementById('wrong-ans');
      const life_element = document.getElementById('life');
      const level_indicator = document.getElementsByClassName('level-indicator');
      const points_element = document.getElementById('points')
      const quit_element = document.getElementById('quit');
      
      // alert box elements variable
      const alert_box_parent = document.getElementsByClassName('alert-box-parent');
      const alert_header = document.getElementById('alert-title')
      const alert_correct_ans_element = document.getElementById('alert-correct-ans');
      const alert_wrong_ans_element = document.getElementById('alert-wrong-ans');
      const alert_life_element = document.getElementById('alert-life');
      const close_score = document.getElementById("close-scores");
      const sher_score = document.getElementById('shere-scores');
      const alert_points_element = document.getElementById('alert-points')




      var corret_ans=0;
      var wrong_ans=0;
      var life=5;
      

      var correct_arr=[];
      var wrong_arr=[];


      var win_num=0;


      // win or lost variable
      const win = "You Win!!!";
      const lost = "You Lost!!!";
      const quit = "You Quit!!!";

      // suffle function for randomize image randomaly
      function suffle(argu) {
          return argu.sort(function(a, b){return 0.5 - Math.random()});
      }


      // function by level
      function level(suffle_time=3, intervel=1000, blur='5px') {
          var time_out = 0;
          
          var Time = setInterval(function () {
              time_out++;
              if (time_out>suffle_time) {
                  clearInterval(Time)
              }
              else{
                  var rand = suffle(gallary_for_guess);
                  for (let i = 0; i < gallary_for_guess.length; i++) {
                      const element = rand[i];
                      for_guess[i].src = element;
                      for_guess[i].alt = element;
                      for_guess[i].style.filter="blur("+blur+")"
                  }
              }
          },intervel);
      }



      // splite user level from anchor tag 
      var check_level = window.location.href.split("?")[1].split("=")[1];
      // call suffle functions by user level
      switch (check_level) {
          case 'beginer':
              level();
              break;
          case 'medium':
              level(5, 800, '8px')
              break;
          case 'hard':
              level(7, 600, '10px')
              break;
          case 'too+hard':
              level(10, 300, '14px')
              break;
          case 'extream':
              level(15, 100, '18px')
              break;
          default:
              level();
              break;
      }

      // set level of game for the user more then 1 elements
      for (let i = 0; i < level_indicator.length; i++) {
          const element = level_indicator[i];
          element.firstElementChild.innerHTML=check_level.replace("+", " ");
      }



      // function created for show alert box for win or lose take 5 parameter min 4
      function alert_box(status, wrong, correct, life, math=0) {
          alert_box_parent[0].style.transform="scale(1)";
          alert_header.innerHTML=status;
          alert_wrong_ans_element.innerHTML=wrong+math;
          alert_correct_ans_element.innerHTML=correct;
          alert_life_element.innerHTML=life-math;
          alert_points_element.innerHTML=correct*5;
      }


      // here is the image what we are going to guess we set img random form rand2 variable
      var rand2 = suffle(gallary_for_whereis)
      whereis[0].src=rand2[0]
      whereis[0].alt=rand2[0]

      // set default poits for score, lifes and others
      life_element.innerHTML=life;
      correct_ans_element.innerHTML=corret_ans;
      wrong_ans_element.innerHTML=wrong_ans;

      for (let i = 0; i < for_guess.length; i++) {
          // when click on left side images we call a function here


          const element = for_guess[i];
          element.onclick=function(){

              if (this.alt==whereis[0].alt && life>=1) {
                  // first check that selected img and asked img are same or not


                  if (whereis[0].alt == gallary_for_whereis[0]) {
                      // if selected img and asked img are same then check again that asked img are in the special array or not

                      
                      if (gallary_for_whereis.length>0) {
                          // after all check last check for that asked img special arrary contain more then one img or not if yes then it work else stop


                          gallary_for_whereis.splice(0,1)
                          corret_ans=corret_ans+1;
                          correct_ans_element.innerHTML=corret_ans;
                          points_element.innerHTML=corret_ans*5;

                          this.style.filter="blur(0)";
                          win_num= win_num+1;
                          this.onclick=false;

                          whereis[0].src=rand2[0]
                          whereis[0].alt=rand2[0]

                          if (win_num==16) {
                              // check that all question done and after that show win alert


                              whereis[0].remove();
                              alert_box(win,wrong_ans, corret_ans, life,)
                          }

                      }
                      else{
                          // if the special array empty mean your question done and won


                          alert_box(win, wrong_ans, corret_ans, life);
                          console.log('Wow.... you win....')
                      }
                  } else {
                      // if questioned img positon and the special array postion not same then it appear they must be same


                      console.log('something strange happened just now, please contact to admin...')
                  }
              } else {
                  if (life===1) {
                      // if life is 0 mean if you lost then lose alert box will appear


                      alert_box(lost, wrong_ans, corret_ans, life, 1)
                  }
                  else{
                      // if you select wrong img and questioned img are different then you get (-) points and your life will decrease to select


                      wrong_ans=wrong_ans+1
                      life=life-1
                      life_element.innerHTML=life;
                      wrong_ans_element.innerHTML=wrong_ans;
                  }
              }

          }
      }


      quit_element.onclick=function(){
          alert_box(quit, wrong_ans, corret_ans, life)
      }
      close_score.onclick = function(){
          // function for close the alert box 


          alert_box_parent[0].style.transform='scale(0)';
          setTimeout(() => {
              window.location.reload();
          }, 400);
      }
