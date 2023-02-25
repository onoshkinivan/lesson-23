let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let coll = document.querySelectorAll('*')

for (let el of coll) {
    el.addEventListener('click', function (event) {
        console.log(`Погружение ${el.tagName}`)
        console.log(event.target)
    }, true)
}
/*
elem1.addEventListener('click', function () {
    console.log('желтый');

})

elem2.addEventListener('click', function (event) {
    console.log('синий');
    event.stopImmediatePropagation();

})

elem2.addEventListener('click', function (event) {
    console.log('синий 2');
    event.stopPropagation();

})

elem3.addEventListener('click', function () {
    console.log('красный');

})*/