// 답안 변수명이 헷갈리게 선언되어있어 변경

function solution(arrayTime, nowTime){
    let answer = [];
    nowTime = nowTime.split(':').map(n => parseInt(n, 10));
    // 분단위로 바꿔준다
    nowTime = (nowTime[0] * 60) + nowTime[1];
    console.log(nowTime);
  
    // 같은 방식으로 for 문을 통해 시간을 받아온다
    for (let i in arrayTime){
      let busTime = arrayTime[i].split(':').map(n => parseInt(n, 10));
      busTime = (busTime[0] * 60) + busTime[1];
        
      if (busTime < nowTime){
        answer.push('지나갔습니다');
      } else{
        let h = parseInt((busTime - nowTime) / 60, 10);
        let m = (busTime - nowTime) % 60;
        answer.push(String(h).padStart(2, 0) + 'h ' + String(m).padStart(2, 0) + 'm');
      }
    }
    return answer;
  }
  
  console.log(solution(["12:30", "13:20", "14:13"], "12:40"));