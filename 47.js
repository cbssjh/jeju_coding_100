const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };
  
  let result = new Set();
  // 여기서 Set 객체는 중복을 중요하지 않는 값을 저장하는 자료구조이다. 일단 빈 객체.

  for (let key in people) { 
    result.add(people[key]); // for in 루프에서 key에 해당하는 전화번호를 result set 객체에 추가되는데, 중복된 값은 자동으로 Set 객체에 의해 자동 삭제된다. 
  }
  console.log(result.size); //size 는 set 객체 내 값의 개수를 반환합니다.