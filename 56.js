const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea']; //korea라는 key의 값을 w변수에 저장

delete nationWidth['korea']; //비교를 위해 korea 삭제

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

//gap에 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0], item[1] - w);