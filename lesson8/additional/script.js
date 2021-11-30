let arr= [];
let body = document.querySelectorAll('body')[0];
function rec(el) {
    if (el.className) {
        arr.push(el.className)
    }
    if(el.children.length) {
        for (let item of el.children) {
            rec(item)
        }
    }



}

// rec(body);
// console.log(arr);
