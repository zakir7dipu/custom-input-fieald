let inputs = document.querySelectorAll('input');
inputs.forEach(item => {
    item.addEventListener('keyup', () => {
        if (item.value) {
            item.classList.add("styled-input")
            item.closest(".input-group").querySelector('label').classList.add("styled-input-label")
        } else {
            item.classList.remove("styled-input")
            item.closest(".input-group").querySelector('label').classList.remove("styled-input-label")
        }
    })
    inputAnimated(item)
})

let selectBox = document.querySelectorAll(".input-select-box");
selectBox.forEach(item => {
    item.querySelector('input').addEventListener('click', () => {
        let options = document.querySelectorAll(".options");
        options.forEach(ops=>{
            ops.classList.remove("show")
        })
        item.querySelector('.options').classList.toggle("show")
    })
    item.querySelectorAll(".option").forEach(opt=>{
        opt.addEventListener("click", (e)=>{
            item.querySelector('input').value = e.target.dataset.value;
            inputAnimated(item.querySelector('input'))
            e.target.parentElement.classList.remove("show");
        })
    })
})

function inputAnimated(item) {
    if (item.value != "") {
        item.classList.add("styled-input")
        item.closest(".input-group").querySelector('label').classList.add("styled-input-label")
    } else {
        item.classList.remove("styled-input")
        item.closest(".input-group").querySelector('label').classList.remove("styled-input-label")
    }
}