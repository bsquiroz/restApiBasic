import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>
    res.json({
        obtenerProductos: { metodo: "GET", ruta: "/products" },
        obtenerProducto: { metodo: "GET", ruta: "/products/:id" },
        crearProducto: { metodo: "POST", ruta: "/products" },
        modificarProducti: { metodo: "PUT", ruta: "/products/:id" },
        obtenerProducto: { metodo: "DEL", ruta: "/products/:id" },
    })
);

export default router;
