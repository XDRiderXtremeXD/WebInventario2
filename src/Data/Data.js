export const tablaStock = [
        // Ferretería
        { imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", stock: 30, id: 1, categoria: "Ferreteria" },
        { imagen: "/imagenesProductos/taladro.jpg", titulo: "Taladro Inalámbrico", stock: 40, id: 2, categoria: "Ferreteria" },
        { imagen: "/imagenesProductos/martillo.jpg", titulo: "Martillo de Uña", stock: 10, id: 3, categoria: "Ferreteria" },
        { imagen: "/imagenesProductos/destornillador.jpg", titulo: "Juego de Destornilladores", stock: 15, id: 4, categoria: "Ferreteria" },
        { imagen: "/imagenesProductos/alicate.jpg", titulo: "Alicate de Corte", stock: 14, id: 5, categoria: "Ferreteria" },
    
        // Muebles
        { imagen: "/imagenesProductos/mesavidrio.jpg", titulo: "Mesa de Vidrio", stock:200, id: 6, categoria: "Muebles" },
        { imagen: "/imagenesProductos/sillon.jpg", titulo: "Sillón Reclinable", stock: 400, id: 7, categoria: "Muebles" },
        { imagen: "/imagenesProductos/armario.jpg", titulo: "Armario de Madera", stock: 25, id: 8, categoria: "Muebles" },
        { imagen: "/imagenesProductos/estante.jpg", titulo: "Estante para Libros", stock: 50, id: 9, categoria: "Muebles" },
        { imagen: "/imagenesProductos/cama.jpg", titulo: "Cama Matrimonial", stock: 2, id: 9, categoria: "Muebles" },
    
        // Electrónica
        { imagen: "/imagenesProductos/sillagamer.jpg", titulo: "Celular Sansung A15", stock: 20, id: 11, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/televisor.jpg", titulo: "Televisor Smart 42\"", stock: 31, id: 12, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/laptop.jpg", titulo: "Laptop Dell Inspiron", stock: 13, id: 13, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/mouse.jpg", titulo: "Mouse Inalámbrico", stock: 6, id: 14, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/teclado.jpg", titulo: "Teclado Mecánico", stock: 27, id: 15, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/reloj.jpg", titulo: "Reloj Inteligente", stock: 43, id: 16, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/camara.jpg", titulo: "Cámara Fotográfica DSLR", stock: 41, id: 17, categoria: "Electrónica" },
        { imagen: "/imagenesProductos/auriculares.jpg", titulo: "Auriculares Bluetooth", stock: 70, id: 18, categoria: "Electrónica" },
    
        // Electrodomésticos
        { imagen: "/imagenesProductos/cafetera.jpg", titulo: "Cafetera Eléctrica", stock: 31, id: 19, categoria: "Electrodomésticos" },
        { imagen: "/imagenesProductos/ventilador.jpg", titulo: "Ventilador de Pie", stock: 8, id: 20, categoria: "Electrodomésticos" },
        { imagen: "/imagenesProductos/microondas.jpg", titulo: "Microondas Digital", stock: 60, id: 21, categoria: "Electrodomésticos" },
        { imagen: "/imagenesProductos/lavadora.jpg", titulo: "Lavadora Automática", stock: 31, id: 22, categoria: "Electrodomésticos" },
        { imagen: "/imagenesProductos/refrigeradora.jpg", titulo: "Refrigeradora", stock: 3, id: 23, categoria: "Electrodomésticos" },
        { imagen: "/imagenesProductos/licuadora.jpg", titulo: "Licuadora de Alta Velocidad", stock: 69, id: 24, categoria: "Electrodomésticos" }
    ];


    export const usuarios = [
        {
            id: 1,
            Nombre: "Juan Pérez",
            Email: "juan.perez@example.com",
            DNI: "12345678",
            TipoUsuario: "Master",
            Contraseña: "A1b2C3d4"
        },
        {
            id: 2,
            Nombre: "María Gómez",
            Email: "maria.gomez@example.com",
            DNI: "87654321",
            TipoUsuario: "Usuario",
            Contraseña: "E5f6G7h8"
        },
        {
            id: 3,
            Nombre: "Carlos Sánchez",
            Email: "carlos.sanchez@example.com",
            DNI: "11223344",
            TipoUsuario: "Usuario",
            Contraseña: "I9j0K1l2"
        },
        {
            id: 4,
            Nombre: "Ana Fernández",
            Email: "ana.fernandez@example.com",
            DNI: "22334455",
            TipoUsuario: "Master",
            Contraseña: "M3n4O5p6"
        },
        {
            id: 5,
            Nombre: "Luis Martínez",
            Email: "luis.martinez@example.com",
            DNI: "33445566",
            TipoUsuario: "Usuario",
            Contraseña: "Q7r8S9t0"
        },
        {
            id: 6,
            Nombre: "Sofía Ramírez",
            Email: "sofia.ramirez@example.com",
            DNI: "44556677",
            TipoUsuario: "Usuario",
            Contraseña: "U1v2W3x4"
        },
        {
            id: 7,
            Nombre: "Miguel Torres",
            Email: "miguel.torres@example.com",
            DNI: "55667788",
            TipoUsuario: "Master",
            Contraseña: "Y5z6A7b8"
        },
        {
            id: 8,
            Nombre: "Laura Castro",
            Email: "laura.castro@example.com",
            DNI: "66778899",
            TipoUsuario: "Usuario",
            Contraseña: "C9d0E1f2"
        },
        {
            id: 9,
            Nombre: "David López",
            Email: "david.lopez@example.com",
            DNI: "77889900",
            TipoUsuario: "Usuario",
            Contraseña: "G3h4I5j6"
        },
        {
            id: 10,
            Nombre: "Elena Rojas",
            Email: "elena.rojas@example.com",
            DNI: "88990011",
            TipoUsuario: "Master",
            Contraseña: "K7l8M9n0"
        }
    ];

    export const tablaMovimiento = [
        { id_producto: 1, imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", tipoMovimiento: "Entrada", cantidad: 5, fecha: "2024-08-01", usuario_registro: 1 },
        { id_producto: 2, imagen: "/imagenesProductos/taladro.jpg", titulo: "Taladro Inalámbrico", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-02", usuario_registro: 2 },
        { id_producto: 3, imagen: "/imagenesProductos/martillo.jpg", titulo: "Martillo de Uña", tipoMovimiento: "Entrada", cantidad: 4, fecha: "2024-08-03", usuario_registro: 3 },
        { id_producto: 4, imagen: "/imagenesProductos/destornillador.jpg", titulo: "Juego de Destornilladores", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-04", usuario_registro: 4 },
        { id_producto: 5, imagen: "/imagenesProductos/alicate.jpg", titulo: "Alicate de Corte", tipoMovimiento: "Entrada", cantidad: 3, fecha: "2024-08-05", usuario_registro: 5 },
        { id_producto: 6, imagen: "/imagenesProductos/mesavidrio.jpg", titulo: "Mesa de Vidrio", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-06", usuario_registro: 6 },
        { id_producto: 7, imagen: "/imagenesProductos/sillon.jpg", titulo: "Sillón Reclinable", tipoMovimiento: "Entrada", cantidad: 2, fecha: "2024-08-07", usuario_registro: 7 },
        { id_producto: 8, imagen: "/imagenesProductos/armario.jpg", titulo: "Armario de Madera", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-08", usuario_registro: 8 },
        { id_producto: 9, imagen: "/imagenesProductos/estante.jpg", titulo: "Estante para Libros", tipoMovimiento: "Entrada", cantidad: 3, fecha: "2024-08-09", usuario_registro: 9 },
        { id_producto: 10, imagen: "/imagenesProductos/cama.jpg", titulo: "Cama Matrimonial", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-10", usuario_registro: 10 },
        { id_producto: 19, imagen: "/imagenesProductos/cafetera.jpg", titulo: "Cafetera Eléctrica", tipoMovimiento: "Entrada", cantidad: 4, fecha: "2024-08-11", usuario_registro: 1 },
        { id_producto: 12, imagen: "/imagenesProductos/televisor.jpg", titulo: "Televisor Smart 42\"", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-12", usuario_registro: 2 },
        { id_producto: 13, imagen: "/imagenesProductos/laptop.jpg", titulo: "Laptop Dell Inspiron", tipoMovimiento: "Entrada", cantidad: 2, fecha: "2024-08-13", usuario_registro: 3 },
        { id_producto: 1, imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", tipoMovimiento: "Salida", cantidad: 3, fecha: "2024-08-14", usuario_registro: 4 },
        { id_producto: 14, imagen: "/imagenesProductos/mouse.jpg", titulo: "Mouse Inalámbrico", tipoMovimiento: "Entrada", cantidad: 5, fecha: "2024-08-15", usuario_registro: 5 },
        { id_producto: 15, imagen: "/imagenesProductos/teclado.jpg", titulo: "Teclado Mecánico", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-16", usuario_registro: 6 },
        { id_producto: 16, imagen: "/imagenesProductos/reloj.jpg", titulo: "Reloj Inteligente", tipoMovimiento: "Entrada", cantidad: 3, fecha: "2024-08-17", usuario_registro: 7 },
        { id_producto: 18, imagen: "/imagenesProductos/auriculares.jpg", titulo: "Auriculares Bluetooth", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-18", usuario_registro: 8 },
        { id_producto: 19, imagen: "/imagenesProductos/cafetera.jpg", titulo: "Cafetera Eléctrica", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-19", usuario_registro: 9 },
        { id_producto: 23, imagen: "/imagenesProductos/refrigeradora.jpg", titulo: "Refrigeradora", tipoMovimiento: "Entrada", cantidad: 2, fecha: "2024-08-20", usuario_registro: 10 }
    ];