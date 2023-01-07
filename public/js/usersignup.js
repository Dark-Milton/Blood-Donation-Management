const submit = document.querySelector('button');
const doneTag = document.querySelector(".done")

submit.addEventListener('click', () => {
    doneTag.style.display="block";
})