import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import expresso from '../../../../assets/xicaras/expresso.png'

import { CoffeeCard } from './styles'

export function ProductList() {
  const [cartQuantity, setCartQuantity] = useState(0)
  return (
    <CoffeeCard>
      <img src={expresso} alt="" />

      <div className="additional">
        <p>tradicional</p>
        <p>com leite</p>
        <p>alcoólico</p>
      </div>

      <h1 className="coffeeFlavor">Expresso Tradicional</h1>

      <p className="description">
        O tradicional café feito com água quente e grãos moidos
      </p>

      <div className="footerCard">
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div className="itemAndCart">
          <div className="numberItems">
            <button onClick={() => setCartQuantity(cartQuantity - 1)}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{cartQuantity}</span>
            <button onClick={() => setCartQuantity(cartQuantity + 1)}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="cart">
            <ShoppingCartSimple size={20} weight="bold" />
          </button>
        </div>
      </div>
    </CoffeeCard>
  )
}
