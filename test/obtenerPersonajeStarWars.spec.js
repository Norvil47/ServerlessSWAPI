import { obtenerPersonajeStarWars } from "../src/obtenerPersonajeStarWars";


describe("obtenerPersonajeStarWars", () => {
    test("responder un objeto",()=>{
        const res = await obtenerPersonajeStarWars(1);
        expect(res).toBe("object");
    });
    test("responder un valor null - No existe ",()=>{
        const res = await obtenerPersonajeStarWars(1000);
        expect(res).toBeNull();
    });

})