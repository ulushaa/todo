let input = document.querySelector('input'),
    btn = document.querySelector('button'),
    list = document.querySelector('ol');

btn.addEventListener('click', function() {
    if(input.value != '') {
        todo();
    }
})

input.addEventListener('keyup', function(e) {
    if(e.keyCode === 13 && input.value != ''){
        todo();
    }
})



function todo() {
    let li = document.createElement('li');
    li.textContent = input.value;
    li.style.color = 'white';
    li.style.fontSize = '24px';
    list.append(li);
    input.value = '';
}