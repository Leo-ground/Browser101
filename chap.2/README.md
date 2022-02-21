1. DOM: Document Object Model

   - HTML 파일을 Browser에서 읽게됨
   - Browser에서는 각각의 tag를 분석해서 Node로 변환
     - Browser가 이해 할 수 있는 자신들만의 오브젝트로 변환
     - HTML Tag -> JavaScript Node
   - EventTarget <- Node 모든 Node 오브젝트는 EventTarget을 상속받음
     - 모든 Node는 이벤트가 발생할 수 있다
     - Node <- Document, Element, Text 등 Node를 상속받아 이벤트가 발생할 수 있다

2. CSSOM: CSS Object Model

   - 브라우저에서 DOM을 만들게 되면 CSS와 결합해 CSSOM을 만들게 됨
     - DOM + CSS = CSSOM (contained that compute styles based on CSS cascading rules)

3. Render Tree

   - DOM + CSSOM = Render Tree

4. Critical rendering path

   1. HTML(requests/response) -> loading -> scripting(DOM요소로 변환) -> rendering -> layout(페이지에 얼만큼의 크기로) -> painting
      - Construction part: HTML ~ scripting (DOM CSSDOM RenderTree)
      - Operation part: rendering ~ painting (layout paint composition)

5. 참고
   http://csstriggers.com/
