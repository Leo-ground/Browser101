const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아온다
    const text = input.value;
    //console.log(text);
    if(text === ''){
        input.focus();
        return;
    }

    //2. 새로운 아이템을 만든다(텍스트 + 삭제 버튼)
    const item = createItem(text);
    //3. items 컨테이너 안에 새로만든 아이템을 추가한다
    items.appendChild(item);
    
    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block:'center'});
    
    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

let id = 0; //UUID를 사용하는 것이 좋다
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.setAttribute('data-id',id);
    // const item = document.createElement('div');
    // item.setAttribute('class','item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class','item__delete');
    // deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    // deleteBtn.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // })
    
    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class','item__divider');

    // item.appendChild(name);
    // item.appendChild(deleteBtn);
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);

    itemRow.innerHTML = `
    <div class="item">
        <li class="item__row">
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="itme__delete ">
                    <i class="fa-solid fa-trash-can" data-id=${id}></i>
                </button>
            </div>
        </li>
    </div>
    <div class="itme__divider"></div>
    `;
    id++;
    return itemRow;
};

addBtn.addEventListener('click', () => {
    onAdd();
})

// input.addEventListener('keypress', (event) => {
//     // console.log('key');
//     if(event.key ==='Enter') {
//         onAdd();
//     }
// })


input.addEventListener('keydown', (event) => {
    // console.log('key');
    //keydown사용의 경우 한글사용시 두번씩 입력되는문제가 발생 하기처럼 수정 아니면 간단하게 keyup을 사용
    if(event.isComposing) {
        return;
    }
    if(event.key ==='Enter') {
        onAdd();
    }
})


items.addEventListener('click', (event) => {
    // 다른 i 태그가 추가될경우 오류가 발생함
    // if(event.target.nodeName ==='I'){
    //     console.log('he');
    // }
    const id =event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});