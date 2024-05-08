import { FooterContainer } from '../styles/footer.ts'
import qrcode from '../assets/qrcode.png'

function Footer() {
  return (
    <FooterContainer>
      <i>Rio de janeiro, RJ, 08 de Fevereiro de 2024</i>

      <h1>
        Paulo Maurício de Almeida Coutinho <br /> Presidente
      </h1>

      <p>Consulte Via leitor de QR Code</p>
      <img src={qrcode} alt={''} />
      <p>
        Código de Validação: <b>C4FBCD7FF75DBCA0CA4AE8713BD5B640</b> <br />{' '}
        Consulte autencididade desta declaração em CLUBECOLT45.COM.BR
      </p>
    </FooterContainer>
  )
}

export default Footer
