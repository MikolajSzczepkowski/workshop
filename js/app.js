document.addEventListener("DOMContentLoaded", function() {
  var gallery = document.querySelector(".gallery-img"),
      prevButton = document.querySelector("#buttonPrev"),
      nextButton = document.querySelector("#buttonNext"),
      list = gallery.querySelectorAll("li"),
      currentPicture = 0,
      selectType = document.querySelector(".select-type"),
      selectMaterial = document.querySelector(".select-material"),
      addTransport = document.querySelector("#addTransport"),
      tableType = document.querySelector("#selectedType"),
      tableMaterial = document.querySelector("#selectedFabric"),
      tableTrasport = document.querySelector("#selectedTransport"),
      tableAmount = document.querySelector("#amount");

  prevButton.addEventListener("click", function() {
    list[currentPicture].classList.add("hide");
    currentPicture --;
    if (currentPicture < 0) {
      currentPicture = 0;
    }
    list[currentPicture].classList.remove("hide");
  });
  nextButton.addEventListener("click", function() {
    list[currentPicture].classList.add("hide");
    currentPicture ++;
    if (currentPicture >= list.length) {
      currentPicture = list.length -1;
    }
    list[currentPicture].classList.remove("hide");
  });
  selectType.addEventListener("change", function() {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i]
      if (this.children[i].selected) {
        tableType.innerHTML= this.children[i].innerText;
        switch (i) {
          case 1:
            tableType.nextElementSibling.innerHTML = "200";
            break;
          case 2:
            tableType.nextElementSibling.innerHTML = "300";
            break;
          case 3:
            tableType.nextElementSibling.innerHTML = "400";
            break;
          default:
            tableType.nextElementSibling.innerHTML = "0";
        }
      }
    }
    countAmount()
  });
  selectMaterial.addEventListener("change", function() {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i]
      if (this.children[i].selected) {
        tableMaterial.innerHTML= this.children[i].innerText;
        switch (i) {
          case 1:
            tableMaterial.nextElementSibling.innerHTML = "75";
            break;
          case 2:
            tableMaterial.nextElementSibling.innerHTML = "320";
            break;
          default:
            tableMaterial.nextElementSibling.innerHTML = "0";
        }
      }
    }
    countAmount()
  });
  addTransport.addEventListener("change", function() {
    if (this.checked) {
      tableTrasport.innerText = "Transport";
      tableTrasport.nextElementSibling.innerHTML = "150";
      countAmount()
    } else {
      tableTrasport.innerText = "";
      tableTrasport.nextElementSibling.innerHTML = "";
      countAmount()
    }
  });
function countAmount() {
  var typePrice = parseInt(tableType.nextElementSibling.innerText),
  materialPrice = parseInt(tableMaterial.nextElementSibling.innerText),
  transportPrice = parseInt(tableTrasport.nextElementSibling.innerText),
  amount;
  if (isNaN(typePrice)) {
    typePrice = 0;
  }
  if (isNaN(materialPrice)) {
    materialPrice = 0;
  }
  if (isNaN(transportPrice)) {
    transportPrice = 0;
  }
  amount = typePrice + materialPrice + transportPrice;
  return tableAmount.innerHTML = amount;
}
});
