const { crearRegistro } = require("../src/crearRegistro");


describe("crearRegistro", () => {
    test("crear un registro - response 200",()=>{
        var event = {
            body: JSON.stringify({
                id: 1,
            }),
        };
        const res = await crearRegistro(event).then();
        expect(res.statusCode).toBe(200);
    });
    test("no registrar personaje -error 404 Not Found ",()=>{
        var event = {
            body: JSON.stringify({
                id: 1000,
            }),
        };
        const res = await crearRegistro(event).then();
        expect(res.statusCode).toBe(404);
    });

})