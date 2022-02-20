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
