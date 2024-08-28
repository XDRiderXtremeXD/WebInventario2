
import { useEffect, useState } from "react";

let imagenes = ["/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png"
]


const Carrusel = () => {
    const [indiceImagen, setIndiceImagen] = useState(0);

    useEffect(() => {
        const CambioImagen = () => {
            setIndiceImagen((prevIndice) => (prevIndice + 1) % 4);
        };

        const intervalo = setInterval(CambioImagen, 1500);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='imagenes'>
            <img src={imagenes[indiceImagen]} alt='imagen encabezado' />
        </div>
    );
};

export default Carrusel;