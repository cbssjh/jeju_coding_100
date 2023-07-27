/*Constructor
클래스에는 '생성자' 함수가 존재한다. 이는 new 연산자를 통한 클래스 오브젝트 생성시 최초로 동작하는 메소드이며, constructor라는 이름을 사용한다.
-> 주로 생성한 객체의 멤버 변수를 초기화하는 역할을 한다!
(출처 : https://jongdai.tistory.com/67)
*/

/*
JavaScript 에서의 this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 차조 변수 이다
this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로터티나 메소드를 참조할 수 있다.
*/

// 생성자 역할을 하는 constuctor!
class Wizard {
    // 예외 없이 , 무조건 생성될 때 동작한다!
    constructor (health, mana, armor){ // 생성자 호출
        this.health = health; //
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log('파이어볼');
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();