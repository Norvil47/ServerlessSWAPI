const { leerRegistros } = require("../src/leerRegistros");


describe("leerRegistros", () => {
    test("devolver un array",()=>{
        var event = { };
        const res = await leerRegistros(event).then();
        expect(res.body).toBeInstanceOf(Array);
    });
    

})