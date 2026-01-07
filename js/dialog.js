const dialogSitet = document.querySelector("#dialog-sitet");
const dialogProces = document.querySelector("#dialog-proces");
const openSitet = document.querySelector(".dialog-sitet-open");
const openProces = document.querySelector(".dialog-proces-open");
const closeSitet = document.querySelector(".dialog-s-close");
const closeProces = document.querySelector(".dialog-p-close");

openSitet.addEventListener("click", DialogOpenSitet);
function DialogOpenSitet() {
  dialogSitet.showModal();
}

closeSitet.addEventListener("click", DialogCloseSitet);
function DialogCloseSitet() {
  dialogSitet.close();
}

openProces.addEventListener("click", DialogOpenProces);
function DialogOpenProces() {
  dialogProces.showModal();
}

closeProces.addEventListener("click", DialogCloseProces);
function DialogCloseProces() {
  dialogProces.close();
}
