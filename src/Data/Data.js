export const categorias = [
    "Ferretería",
    "Muebles",
    "Electrónica",
    "Electrodomésticos",
]

export const proveedores = [
    // Ferretería
    "ToolMaster Pro",
    "FixIt Hardware",
    "PowerTools Express",
    "IronClad Supplies",
    
    // Muebles
    "HomeComfort Designs",
    "Elegant Living Furnishings",
    "PrimeWood Creations",
    "ModernSpaces Interiors",
    
    // Electrónica
    "TechGiant Solutions",
    "FutureWave Electronics",
    "ElectroMax Innovations",
    "SmartGizmos Co.",
    
    // Electrodomésticos
    "ApplianceMasters Inc.",
    "HomeEase Appliances",
    "EcoTech Homeware",
    "QuickFix Electronics"
];

export const tablaStock = [
    // Ferretería
    {
        imagen: "/imagenesProductos/tornillo.jpg",
        titulo: "Tornillo Cabeza Plana",
        stock: 30,
        id: 1,
        categoria: "Ferreteria",
        descripcion: "Tornillo de cabeza plana de acero inoxidable, ideal para trabajos de montaje y ensamblaje."
    },
    {
        imagen: "/imagenesProductos/taladro.jpg",
        titulo: "Taladro Inalámbrico",
        stock: 40,
        id: 2,
        categoria: "Ferreteria",
        descripcion: "Taladro inalámbrico con batería recargable, adecuado para perforar madera y metal."
    },
    {
        imagen: "/imagenesProductos/martillo.jpg",
        titulo: "Martillo de Uña",
        stock: 10,
        id: 3,
        categoria: "Ferreteria",
        descripcion: "Martillo de uña con mango ergonómico, perfecto para clavar y retirar clavos."
    },
    {
        imagen: "/imagenesProductos/destornillador.jpg",
        titulo: "Juego de Destornilladores",
        stock: 15,
        id: 4,
        categoria: "Ferreteria",
        descripcion: "Juego de destornilladores de diferentes tamaños y tipos, ideal para reparaciones diversas."
    },
    {
        imagen: "/imagenesProductos/alicate.jpg",
        titulo: "Alicate de Corte",
        stock: 14,
        id: 5,
        categoria: "Ferreteria",
        descripcion: "Alicate de corte con mango antideslizante, útil para cortar cables y alambres."
    },

    // Muebles
    {
        imagen: "/imagenesProductos/mesavidrio.jpg",
        titulo: "Mesa de Vidrio",
        stock: 200,
        id: 6,
        categoria: "Muebles",
        descripcion: "Mesa de vidrio templado con estructura metálica, elegante y resistente."
    },
    {
        imagen: "/imagenesProductos/sillon.jpg",
        titulo: "Sillón Reclinable",
        stock: 400,
        id: 7,
        categoria: "Muebles",
        descripcion: "Sillón reclinable de diseño moderno, con mecanismos ajustables para mayor comodidad."
    },
    {
        imagen: "/imagenesProductos/armario.jpg",
        titulo: "Armario de Madera",
        stock: 25,
        id: 8,
        categoria: "Muebles",
        descripcion: "Armario de madera de alta calidad con múltiples compartimentos para almacenamiento."
    },
    {
        imagen: "/imagenesProductos/estante.jpg",
        titulo: "Estante para Libros",
        stock: 50,
        id: 9,
        categoria: "Muebles",
        descripcion: "Estante de madera con múltiples niveles, ideal para organizar libros y decoraciones."
    },
    {
        imagen: "/imagenesProductos/cama.jpg",
        titulo: "Cama Matrimonial",
        stock: 2,
        id: 10,
        categoria: "Muebles",
        descripcion: "Cama matrimonial con estructura sólida y colchón incluido para una máxima comodidad."
    },

    // Electrónica
    {
        imagen: "/imagenesProductos/sillagamer.jpg",
        titulo: "Celular Samsung A15",
        stock: 20,
        id: 11,
        categoria: "Electrónica",
        descripcion: "Celular Samsung A15 con pantalla AMOLED y cámara de alta resolución."
    },
    {
        imagen: "/imagenesProductos/televisor.jpg",
        titulo: "Televisor Smart 42\"",
        stock: 31,
        id: 12,
        categoria: "Electrónica",
        descripcion: "Televisor Smart de 42 pulgadas con resolución Full HD y acceso a aplicaciones de streaming."
    },
    {
        imagen: "/imagenesProductos/laptop.jpg",
        titulo: "Laptop Dell Inspiron",
        stock: 13,
        id: 13,
        categoria: "Electrónica",
        descripcion: "Laptop Dell Inspiron con procesador Intel y capacidad de almacenamiento de 1TB."
    },
    {
        imagen: "/imagenesProductos/mouse.jpg",
        titulo: "Mouse Inalámbrico",
        stock: 6,
        id: 14,
        categoria: "Electrónica",
        descripcion: "Mouse inalámbrico ergonómico con batería de larga duración y conexión Bluetooth."
    },
    {
        imagen: "/imagenesProductos/teclado.jpg",
        titulo: "Teclado Mecánico",
        stock: 27,
        id: 15,
        categoria: "Electrónica",
        descripcion: "Teclado mecánico con retroiluminación y teclas de alta respuesta para jugadores y escritores."
    },
    {
        imagen: "/imagenesProductos/reloj.jpg",
        titulo: "Reloj Inteligente",
        stock: 43,
        id: 16,
        categoria: "Electrónica",
        descripcion: "Reloj inteligente con monitor de ritmo cardíaco y notificaciones de smartphone."
    },
    {
        imagen: "/imagenesProductos/camara.jpg",
        titulo: "Cámara Fotográfica DSLR",
        stock: 41,
        id: 17,
        categoria: "Electrónica",
        descripcion: "Cámara DSLR con lentes intercambiables y capacidades avanzadas de fotografía."
    },
    {
        imagen: "/imagenesProductos/auriculares.jpg",
        titulo: "Auriculares Bluetooth",
        stock: 70,
        id: 18,
        categoria: "Electrónica",
        descripcion: "Auriculares Bluetooth con sonido de alta fidelidad y cancelación de ruido."
    },

    // Electrodomésticos
    {
        imagen: "/imagenesProductos/cafetera.jpg",
        titulo: "Cafetera Eléctrica",
        stock: 31,
        id: 19,
        categoria: "Electrodomésticos",
        descripcion: "Cafetera eléctrica con capacidad de hasta 12 tazas y función de mantener el café caliente."
    },
    {
        imagen: "/imagenesProductos/ventilador.jpg",
        titulo: "Ventilador de Pie",
        stock: 8,
        id: 20,
        categoria: "Electrodomésticos",
        descripcion: "Ventilador de pie ajustable con múltiples velocidades y oscilación para una mejor circulación del aire."
    },
    {
        imagen: "/imagenesProductos/microondas.jpg",
        titulo: "Microondas Digital",
        stock: 60,
        id: 21,
        categoria: "Electrodomésticos",
        descripcion: "Microondas digital con funciones preprogramadas y capacidad de 25 litros."
    },
    {
        imagen: "/imagenesProductos/lavadora.jpg",
        titulo: "Lavadora Automática",
        stock: 31,
        id: 22,
        categoria: "Electrodomésticos",
        descripcion: "Lavadora automática con capacidad de carga de 7 kg y múltiples programas de lavado."
    },
    {
        imagen: "/imagenesProductos/refrigeradora.jpg",
        titulo: "Refrigeradora",
        stock: 3,
        id: 23,
        categoria: "Electrodomésticos",
        descripcion: "Refrigeradora de doble puerta con eficiencia energética y compartimiento para congelador."
    },
    {
        imagen: "/imagenesProductos/licuadora.jpg",
        titulo: "Licuadora de Alta Velocidad",
        stock: 69,
        id: 24,
        categoria: "Electrodomésticos",
        descripcion: "Licuadora de alta velocidad con cuchillas de acero inoxidable y varias velocidades."
    }
];

export const usuarios = [
    {
        id: 1,
        Nombre: "Juan Pérez",
        Email: "juan.perez@example.com",
        DNI: "12345678",
        TipoUsuario: "Master",
        password: "Xp8zKw4N",
        telefono: "555-1234",
        direccion: "Av. Libertad 123, Ciudad"
    },
    {
        id: 2,
        Nombre: "María Gómez",
        Email: "maria.gomez@example.com",
        DNI: "87654321",
        TipoUsuario: "Usuario",
        password: "Yh7fWq3D",
        telefono: "555-5678",
        direccion: "Calle de la Paz 456, Ciudad"
    },
    {
        id: 3,
        Nombre: "Carlos Sánchez",
        Email: "carlos.sanchez@example.com",
        DNI: "11223344",
        TipoUsuario: "Usuario",
        password: "Rf9pZl8J",
        telefono: "555-9101",
        direccion: "Av. San Martín 789, Ciudad"
    },
    {
        id: 4,
        Nombre: "Ana Fernández",
        Email: "ana.fernandez@example.com",
        DNI: "22334455",
        TipoUsuario: "Master",
        password: "Mn6vQk2X",
        telefono: "555-1122",
        direccion: "Calle de la Alegría 321, Ciudad"
    },
    {
        id: 5,
        Nombre: "Luis Martínez",
        Email: "luis.martinez@example.com",
        DNI: "33445566",
        TipoUsuario: "Usuario",
        password: "Vp3sLm1B",
        telefono: "555-3344",
        direccion: "Calle del Sol 654, Ciudad"
    },
    {
        id: 6,
        Nombre: "Sofía Ramírez",
        Email: "sofia.ramirez@example.com",
        DNI: "44556677",
        TipoUsuario: "Usuario",
        password: "Zq5nTr7H",
        telefono: "555-5566",
        direccion: "Av. del Mar 987, Ciudad"
    },
    {
        id: 7,
        Nombre: "Miguel Torres",
        Email: "miguel.torres@example.com",
        DNI: "55667788",
        TipoUsuario: "Master",
        password: "Bc9yWv4P",
        telefono: "555-7788",
        direccion: "Calle del Bosque 543, Ciudad"
    },
    {
        id: 8,
        Nombre: "Laura Castro",
        Email: "laura.castro@example.com",
        DNI: "66778899",
        TipoUsuario: "Usuario",
        password: "Kj2fYx9R",
        telefono: "555-9900",
        direccion: "Av. de los Pinos 876, Ciudad"
    },
    {
        id: 9,
        Nombre: "David López",
        Email: "david.lopez@example.com",
        DNI: "77889900",
        TipoUsuario: "Usuario",
        password: "Sd7pWq6F",
        telefono: "555-1230",
        direccion: "Calle de la Luna 135, Ciudad"
    },
    {
        id: 10,
        Nombre: "Elena Rojas",
        Email: "elena.rojas@example.com",
        DNI: "88990011",
        TipoUsuario: "Master",
        password: "Lf5xNj3V",
        telefono: "555-2468",
        direccion: "Calle del Río 246, Ciudad"
    },
    {
        id: 11,
        Nombre: "Angelo Chumpitaz",
        Email: "angelo_chumpitaz@correo.com",
        DNI: "88990011",
        TipoUsuario: "Master",
        password: "123456",
        telefono: "555-1357",

    }];

    export const tablaMovimiento = [
        { id_producto: 1, imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", tipoMovimiento: "Entrada", cantidad: 5, fecha: "2024-08-01", usuario_registro: 1, proveedor: "ToolMaster Pro" },
        { id_producto: 2, imagen: "/imagenesProductos/taladro.jpg", titulo: "Taladro Inalámbrico", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-02", usuario_registro: 2, proveedor: "ToolMaster Pro" },
        { id_producto: 3, imagen: "/imagenesProductos/martillo.jpg", titulo: "Martillo de Uña", tipoMovimiento: "Entrada", cantidad: 4, fecha: "2024-08-03", usuario_registro: 3, proveedor: "FixIt Hardware" },
        { id_producto: 4, imagen: "/imagenesProductos/destornillador.jpg", titulo: "Juego de Destornilladores", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-04", usuario_registro: 4, proveedor: "FixIt Hardware" },
        { id_producto: 5, imagen: "/imagenesProductos/alicate.jpg", titulo: "Alicate de Corte", tipoMovimiento: "Entrada", cantidad: 3, fecha: "2024-08-05", usuario_registro: 5, proveedor: "PowerTools Express" },
        { id_producto: 6, imagen: "/imagenesProductos/mesavidrio.jpg", titulo: "Mesa de Vidrio", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-06", usuario_registro: 6, proveedor: "HomeComfort Designs" },
        { id_producto: 7, imagen: "/imagenesProductos/sillon.jpg", titulo: "Sillón Reclinable", tipoMovimiento: "Entrada", cantidad: 2, fecha: "2024-08-07", usuario_registro: 7, proveedor: "Elegant Living Furnishings" },
        { id_producto: 8, imagen: "/imagenesProductos/armario.jpg", titulo: "Armario de Madera", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-08", usuario_registro: 8, proveedor: "PrimeWood Creations" },
        { id_producto: 9, imagen: "/imagenesProductos/estante.jpg", titulo: "Estante para Libros", tipoMovimiento: "Entrada", cantidad: 3, fecha: "2024-08-09", usuario_registro: 9, proveedor: "ModernSpaces Interiors" },
        { id_producto: 10, imagen: "/imagenesProductos/cama.jpg", titulo: "Cama Matrimonial", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-10", usuario_registro: 10, proveedor: "ModernSpaces Interiors" },
        { id_producto: 19, imagen: "/imagenesProductos/cafetera.jpg", titulo: "Cafetera Eléctrica", tipoMovimiento: "Entrada", cantidad: 4, fecha: "2024-08-11", usuario_registro: 1, proveedor: "EcoTech Homeware" },
        { id_producto: 12, imagen: "/imagenesProductos/televisor.jpg", titulo: "Televisor Smart 42\"", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-12", usuario_registro: 2, proveedor: "TechGiant Solutions" },
        { id_producto: 13, imagen: "/imagenesProductos/laptop.jpg", titulo: "Laptop Dell Inspiron", tipoMovimiento: "Entrada", cantidad: 2, fecha: "2024-08-13", usuario_registro: 3, proveedor: "FutureWave Electronics" },
        { id_producto: 1, imagen: "/imagenesProductos/tornillo.jpg", titulo: "Tornillo Cabeza Plana", tipoMovimiento: "Salida", cantidad: 3, fecha: "2024-08-14", usuario_registro: 4, proveedor: "PowerTools Express" },
        { id_producto: 14, imagen: "/imagenesProductos/mouse.jpg", titulo: "Mouse Inalámbrico", tipoMovimiento: "Entrada", cantidad: 5, fecha: "2024-08-15", usuario_registro: 5, proveedor: "SmartGizmos Co." },
        { id_producto: 15, imagen: "/imagenesProductos/teclado.jpg", titulo: "Teclado Mecánico", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-16", usuario_registro: 6, proveedor: "SmartGizmos Co." },
        { id_producto: 16, imagen: "/imagenesProductos/reloj.jpg", titulo: "Reloj Inteligente", tipoMovimiento: "Entrada", cantidad: 3, fecha: "2024-08-17", usuario_registro: 7, proveedor: "TechGiant Solutions" },
        { id_producto: 18, imagen: "/imagenesProductos/auriculares.jpg", titulo: "Auriculares Bluetooth", tipoMovimiento: "Salida", cantidad: 2, fecha: "2024-08-18", usuario_registro: 8, proveedor: "FutureWave Electronics" },
        { id_producto: 19, imagen: "/imagenesProductos/cafetera.jpg", titulo: "Cafetera Eléctrica", tipoMovimiento: "Salida", cantidad: 1, fecha: "2024-08-19", usuario_registro: 9, proveedor: "EcoTech Homeware" },
        { id_producto: 23, imagen: "/imagenesProductos/refrigeradora.jpg", titulo: "Refrigeradora", tipoMovimiento: "Entrada", cantidad: 2, fecha: "2024-08-20", usuario_registro: 10, proveedor: "ApplianceMasters Inc." }
    ];
    