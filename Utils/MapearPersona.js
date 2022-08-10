 const mapearPersona = (persona) => {
  return {
    id: persona.id,
    idPeople: persona.idPeople,
    nombre: persona.name,
    altura: persona.height,
    masa: persona.mass,
    color_cabello: persona.hair_color,
    color_piel: persona.skin_color,
    color_ojos: persona.eye_color,
    genero: persona.gender,
  };
};

module.exports= {
    mapearPersona
}