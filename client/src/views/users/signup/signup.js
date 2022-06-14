import "./signup.css";

export default function signup() {
  return (
    <div className="container">
      <div className="signup">
        {/*  Tarjeta  */}
        <div className="card mt-3 signup-card">
          <span className="signup-title text-center">Registro</span>
          <form className="signup-form">
            {/* Información solicitada al cliente */}
            {/*---*/}
            <label>Primer Nombre</label>
            <input 
              type="text" pattern="[A-Za-z]*"
              className="form-control" 
              placeholder="Mario" />

            {/*---*/}
            <label>Segundo Nombre</label>
            <input 
              type="text" pattern="[A-Za-z]*"
              className="form-control" 
              placeholder="Luís" />

            {/*---*/}
            <label>Apellido Paterno</label>
            <input
              type="text" pattern="[A-Za-z]*"
              className="form-control"
              placeholder="Pérez"
            />

            {/*---*/}
            <label>Apellido Materno</label>
            <input
              type="text" pattern="[A-Za-z]*"
              className="form-control"
              placeholder="Gonzáles"
            />

            {/*---*/}
            <label>RUT</label>
            <div class="input-group">
              <input
                type="number" pattern="[0-9]*"
                className="form-control"
                placeholder="12345678"
              />
              <span class="imput-group-addon">-</span>
              <div class="digit">
                <input 
                  type="number" pattern="[0-9]{1}"
                  className="form-control" 
                  placeholder="9"
                />
              </div>
            </div>

            {/*---*/}
            <label>Email</label>
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="form-control"
              placeholder="soy_mejor_que_tu@ejemplo.com"
            />

            {/*---*/}
            <label>Contraseña</label>
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}"
              className="form-control"
              placeholder="****"
            />

            {/*---*/}
            <label>Revalidar contraseña</label>
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
              className="form-control"
              placeholder="****"
            />
          </form>
          <div className="text-left">
            {/*  Botón  */}
            <button
              type="submit"
              className="submit-button btn btn-primary
                                            border border-white border-opacity-25
                                            btn-gorup
                                            mt-4 me-4
                                            shadow rounded-pill"
            >
              {" "}
              {/*Parámetros de diseño en bootstrap para el boton */}
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
