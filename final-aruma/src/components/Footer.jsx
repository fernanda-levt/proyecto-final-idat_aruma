function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/*RRSS*/}
        <div className="footer-left">
          <h2>Suelta. <span>Disfruta.</span></h2>
          <div class="social-icons">
            <a href="https://www.tiktok.com/@aruma.pe" target="_blank" rel="noopener noreferrer" class="btn-icon">
              <i class="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/aruma.pe/" target="_blank" rel="noopener noreferrer" class="btn-icon">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://pe.linkedin.com/company/arumalindcorp" target="_blank" rel="noopener noreferrer" class="btn-icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/@arumape" target="_blank" rel="noopener noreferrer" class="btn-icon">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/arumaperu/" target="_blank" rel="noopener noreferrer" class="btn-icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/*División*/}
        <div class="divider"></div>

        {/*Aruma*/}
        <div className="footer-column">
          <h3>Aruma</h3>
          <a href="#">Quiénes somos</a>
          <a href="#">Tiendas Aruma</a>
          <a href="#">Magenta Points</a>
        </div>

        {/*Servicio al cliente*/}
        <div className="footer-column">
          <h3>Servicio al cliente</h3>
          <a href="#">Cómo comprar</a>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Cambios y devoluciones</a>
          <a href="#">Medios de pago</a>
          <a href="#">Libro de reclamaciones</a>
        </div>

        {/*Información legal*/}
        <div className="footer-column">
          <h3>Información legal</h3>
          <a href="#">Facturación electrónica</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones Aruma.pe</a>
          <a href="#">Términos y condiciones MagentaPoints</a>
          <a href="#">Términos y condiciones Máquina Expendedora</a>
          <a href="#">Legales</a>
        </div>

        <p>Aruma Copyright © 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer