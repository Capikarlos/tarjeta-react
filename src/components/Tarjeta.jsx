import "./Tarjeta.css"; // Si usas CSS externo

function Tarjeta() {
  const nombre = "Ana Pérez";
  const profesion = "Desarrolladora Web";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  return (
    <div className="tarjeta">
      <img src="https://img.freepik.com/vector-premium/mujer-cabello-verde-camisa-roja-que-dice-que-esta-sonriendo_227414-527.jpg" alt="Avatar de Ana" className="tarjeta__avatar" />
      <h2 className="tarjeta__nombre">{nombre}</h2>
      <h4 className="tarjeta__profesion">{profesion}</h4>
      <p className="tarjeta__mensaje">{mensaje}</p>
      <button className="tarjeta__btn">Contactar</button>
    </div>
  );
}

export default Tarjeta;
