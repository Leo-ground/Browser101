1. 변수

   - 데이터를 담고 있다
   - let 을 이용해 할당 가능
     ```javascript
     //number, string, boolean, null, undefined, symbol
     let age = 2;
     let num = "2";
     ```
   - 변수를 선언할때 메모리에 해당 변수의 공간이 생김, 해당 공간에 데이터가 적재된다.

     ```javascript
     //number2 에는 number의 값이 적재된다.
     let number = 2;
     let number2 = number;
     console.log(number); //2
     console.log(number2); //2

     number2 = 3;
     //따라서 number2의 값을 업데이트해도 number에 영향을 주지 않는다
     console.log(number); //2
     console.log(number2); //3
     ```

2. Object

   - 다양한 데이터를 한군데다 묶어 놓은 것
   - object는 너무 크기때문에 해당 object의 주소값을 obj변수에 할당함

     ```javascript
     let obj = {
       name: "ellie",
       age: 5,
     };
     console.log(obj.name);
     //변수에 기존변수를 할당할때는 그 변수에 들어있는 값이 복사되어서 들어옴
     //따라서 obj의 주소값이 할당됨
     let obj2 = obj;
     console.log(obj.name);
     //따라서 obj를 업데이트하게 되면, obj2까지 영향을 받음
     obj.name = "james";
     console.log(obj.name);
     console.log(obj2.name);

     //const로 상수선언을 할 경우 해당 값은 변화할 수없다.
     const day = 3;
     day = 4;
     console.log(day);
     //하지만 object를 const로 선언할 경우 해당 주소값이 상수로 되기 때문에 obj의 값들은 수정이 가능하다
     const obj = {
       name: "ellie",
       age: 5,
     };
     obj.name = "john";
     console.log(obj.name);
     ```

3. function

   - 반복되는 기능을 함수로 정의해 불필요한 반복을 없앤다.
     ```javascript
     function add(a, b) {
       return a + b;
     }
     //함수를 호출 한다는 것은 add라는 함수의 a, b에 3, 4를 할당해 해당 함수의 기능을 하고 return되는 것
     const sum = add(3, 4); //sum = 7
     console.log(sum); //7
     ```
   - 함수를 정의 할 때 정의한 코드블럭이 메모리 어딘가에 만들어짐(어떤 변수를 받아서 어떤걸 return)
   - 해당 함수가 들어있는 ref 주소같은 값이 함수명(add)에 할당됨

     ```javascript
     const doSomething = add; //add의 ref값이 할당됨
     const result = doSomething(2, 3);
     console.log(result); // 5
     const result2 = add(2, 3);
     console.log(result2); // 5

     //함수의 인자, 함수명 등 직관적으로 알 수있게 설정해주는 것이 좋다.
     function print(name, age) {
       console.log(`${name}, ${age}`);
     }

     //함수의 ref를 전달해서 함수를 전달한다
     function surprise(operator) {
       const result = operator(2, 3);
       console.log(result);
     }

     surprise(add); //5
     ```

4. boolean

   ```javascript
   //false: 0, -0, '', null, undefined (데이터가 없고 비어있는것)
   //true: -1, 'hello'
   let num; //undefined
   if (false) {
     console.log("true!");
   } else {
     console.log("false!");
   }

   // &&연산자는 && 앞부분이 true이어야 뒷부분이 실행한다
   let obj = {
     name: "ellie",
   }; // 데이터가 비어있으면 undefined
   if (obj) {
     console.log(obj.name);
   }

   obj && console.log(obj.name); //obj가 데이터가 있어야 뒷부분이 실행됨
   ```

5. class 와 callback 함수

   - 클래스안에서 콜백 함수를 호출하는 형식으로 해서 해당 클래스의 함수부분을 좀더 자유롭게 수정 활용 할 수 있다

   ```javascript
   // 함수에 매번 콜백함수를 입력하는 것은 불편하기 때문에 counstructor에 전달해줌
   class Counter {
     constructor(runEveryFiveTimes) {
       this.counter = 0;
       this.callback = runEveryFiveTimes;
     }

     increase(runIf5Times) {
       this.counter++;
       console.log(this.counter);
       if (this.counter % 5 === 0) {
         //console.log('yo!');
         //runIf5Times(this.counter);
         if (this.callback) {
           this.callback(this.counter);
         }
         //간단하게 this.callback && this.callback(this.counter);
       }
     }
   }

   function printSomething(num) {
     console.log(`${num} yo!`);
   }
   function alertNum(nuw) {
     alert(`Wow! ${num}`);
   }

   //const coolCounter = new Counter();
   const coolCounter = new Counter(printSomething); //constructor에 함수전달시 간편해짐

   coolCounter.increase();
   coolCounter.increase();
   coolCounter.increase();
   coolCounter.increase();
   coolCounter.increase();
   coolCounter.increase();
   coolCounter.increase();
   coolCounter.increase();
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(printSomething);
   //coolCounter.increase(alertNum);
   ```
