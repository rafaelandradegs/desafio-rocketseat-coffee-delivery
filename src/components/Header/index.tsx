import { CartBase, HeaderComponent } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const list = false

  return (
    <HeaderComponent>
      <img
        src={logo}
        alt="Logo com imagem de um copo de café roxo, com desenho de uma pessoas escrito em ingles (Coffee Delivery)"
      />
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <CartBase>
          <ShoppingCart size={22} weight="fill" />
          {list && <span>3</span>}
        </CartBase>
      </div>
    </HeaderComponent>
  )
}
