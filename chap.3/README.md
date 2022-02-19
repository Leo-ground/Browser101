### EVENT

- mouse click
- keyboard
- resizing window
- close window
- page loading
- form submission
- video is being played
- error

1. capturing and bubbling

   - div1안에 div2 안에 button이 있다고 가정하자
   - button을 클릭하게 되면 div1>div2>button 순으로 내려오고 button에 등록된 EventHandler를 발동 (button이 event.target)
   - 부모에게 등록된 EventHandler를 호출 따라서 button>div2>div2순으로 호출됨 (부모는 event.currentTarget)
   - 주로 bubbling단계에서 조절을 하게 된다.
   - 이때 event.stopPropagation(), event.stopImmediatePropagation()을 사용하지 않도록 한다!!
   - 주로 조건문을 통해 처리여부를 check!!
     - if(event.target === event.currentTarget) { return; };

2. 이벤트 위임시 유의사항

   ```javascript
   //bad
   const lis = document.querySelectorAll("li");
   lis.forEach((ii) => {
     li.addEventListener("click", () => {
       li.classList.add("selected");
     });
   });

   //Cooooooool
   const ul = document.queryselector("ul");
   ul.addEventListener("click", (event) => {
     if (event.target.tagName == "li") {
       event.target.classList.add("selected");
     }
   });
   ```
