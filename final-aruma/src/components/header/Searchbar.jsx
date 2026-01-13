function Searchbar () {
  return (
    <div className="main-header">
      <div className="header-content">

        <div className="logo img">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}icons/logo-aruma-nombre.png`} />
          </a>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Buscar producto" />
        </div>

        <div className="header-options">
          <a href="#">Hola, <br /> inicia sesión</a>
          <a href="#">Encuentra <br /> tu tienda</a>
          <a href="#">Carrito</a>
        </div>
      </div>
    </div>
  )
}

export default Searchbar