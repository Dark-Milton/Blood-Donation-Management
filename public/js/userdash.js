const confirmationTag = document.querySelector(".confirmation")
const unregisterButton = document.querySelector(".unregister")
const cancelButton = document.querySelector(".cancel")
unregisterButton.addEventListener('click', () => {
    confirmationTag.style.display = "block"

})
cancelButton.addEventListener('click', () => {
    confirmationTag.style.display = "none"

})
