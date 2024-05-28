one.addEventListener('click' , function(myfunc){
    myfunc.preventDefault()
    const one = parseInt(document.querySelector('#one'))
    const result = document.querySelector('#result')

    result.innerHTML= `<span>${1}</span>`
})

function myfunc() {
    console.log(1)
}
function myfunc2() {
    console.log(2)
}
function myfunc3() {
    console.log(3)
}
function myfunc4() {
    console.log(input)
}

function myoperation(){
    console.log(myfunc)
}

