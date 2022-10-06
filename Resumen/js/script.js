var comision = false;
console.log("empezando comision es", comision)

userLogin = () => {
    let miuser = document.getElementsByClassName("menu2")
    let centrados = document.getElementsByClassName("youtube")
    console.log(miuser)
    if (comision) {
        for (var i=0; i<centrados.length;i++){
            centrados[i].style.display = "block";
        }
        miuser[0].style.display = "none";
        miuser[1].style.display = "block";
    } else {
        for (var i=0; i<centrados.length;i++){
            centrados[i].style.display = "none";
        }
        miuser[1].style.display = "none";
        miuser[0].style.display = "block";
    }
}
userLogin();
const getValueInput = () => {
    console.log("empezando getvalue comision es", comision)

    // console.log(typeof micuenta)
    let inputValue = document.getElementById("comision").value;
    let inputValue2 = document.getElementById("facilitador").value;
    if (inputValue != "22516" || inputValue2 != "Juan") {
        comision = false;
        const modal = document.querySelector("#ingresedatos");
        openModal(modal);
    } else {
        comision = true;
        const modal = document.querySelector("#ingresado_ok");
        openModal(modal);

    }

    console.log("en la funcion getvalue", comision);
    userLogin();

}

const salirLogin = () => {
    comision = false;
    inputValue = "";
    userLogin();
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay")


openModalButtons.forEach(button => {

    button.addEventListener("click", () => {
        if (button.dataset.modalTarget == "#micuenta") {
            if (comision == false) {
                const modal = document.querySelector("#micuenta");
                openModal(modal);
            } else {
                const modal = document.querySelector("#ingresado_ok");
                openModal(modal);
            }

        } else {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        }
    });
});


    closeModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            closeModal(modal);
        });
    });

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add("active");
        overlay.classList.add("active");
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }

    overlay.addEventListener("click", () => {
        const modals = document.querySelectorAll(".modal.active");
        modals.forEach(modal => {
            closeModal(modal);
        })
    });



