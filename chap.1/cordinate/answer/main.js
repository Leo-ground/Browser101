const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal') ;
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

addEventListener('load', () => {
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x} ${y}`);
    
        // left, top사용시 이벤트 발생할때 마다 layout부터 다시 작성되기 때문에 성능개선 필요(chap.2)
        //vertical.style.left = `${x}px`;
        //horizontal.style.top = `${y}px`;
    
        //composition만 다시 발생하는 transform를 사용
        vertical.style.transform = `translateX(${x}px)`
        horizontal.style.transform = `translateX(${y}px)`
        target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`
        tag.style.transform = `translate(${x}px,${y}px)`
    
        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;
        tag.innerHTML = `${x}px, ${y}px`
    
    
        
    });
});