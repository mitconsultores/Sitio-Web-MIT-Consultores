import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/inicio.tsx"),
    route("nosotros", "routes/nosotros.tsx"),
    route("servicios/corporativo", "routes/servicios.corporativo.tsx"),
    route("servicios/propiedad-intelectual", "routes/servicios.propiedad-intelectual.tsx"),
    route("servicios/migratorio", "routes/servicios.migratorio.tsx"),
    route("servicios/headhunter", "routes/servicios.headhunter.tsx"),
    route("contacto", "routes/contacto.tsx"),
    route("sitemap.xml", "routes/sitemap.xml.tsx"),
] satisfies RouteConfig;
