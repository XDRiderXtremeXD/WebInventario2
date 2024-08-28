import Swal from "sweetalert2";

const Alertas = ({ tipo, frase, funcionAcepta, funcionDeniega }) => {
    if (tipo === "error") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: frase
        });
    }
    else if (tipo === "pregunta") {
        Swal.fire({
            title: frase,
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                if (typeof (funcionAcepta) == "function")
                    funcionAcepta();
            }
            else
                if (typeof (funcionDeniega) == "function")
                    funcionDeniega();
        });
    }
    else if(tipo==="ok"){
        Swal.fire({
            position: "center",
            icon: "success",
            title: frase,
            showConfirmButton: false,
            timer: 1500
          });
    }
    else if(tipo==="info"){
        Swal.fire(frase);
    }
};
export default Alertas