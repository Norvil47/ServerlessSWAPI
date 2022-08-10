import { obtenerPersonajeStarWars } from "../src/obtenerPersonajeStarWars";


describe("obtenerPersonajeStarWars", () => {
    test("responder un objeto",()=>{
        const res = obtenerPersonajeStarWars(1);
        expect(typeof obtenerPersonajeStarWars(1)).toBe("object");
    });
    test("responder un valor null - No existe ",()=>{
        const res = obtenerPersonajeStarWars(1000);
        expect(res).toBeNull();
    });

})