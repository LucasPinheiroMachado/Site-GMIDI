import './EmailWhatsapp.css';

const EmailWhatsapp = () => {
  return (
    <div className="MainContact">
      <div className="ChildMainContact">
        <h1>Contato GMIDI:</h1>
        <div className="linksContact">
          <a
            href="https://wa.me/5522992167939?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20parcerias%20e%2Fou%20servi%C3%A7os%20GMIDI"
            className="btn-contact"
          >
            Contato via WhatsApp
          </a>

          <a
            href="mailto:gmidioficial@gmail.com?subject=Parcerias%20e%2Fou%20Servi%C3%A7os%20GMIDI&body=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20parcerias%20e%2Fou%20servi%C3%A7os%20GMIDI"
            className="btn-contact"
          >
            Contato via E-mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailWhatsapp;
