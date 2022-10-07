import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { CoffeeCard, ProductListContainer } from './styles'

export function ProductList() {
  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeCard>
        <img src="" alt="" />
        <span>Tradicionales</span>
        <h4>Expresso Tradicional</h4>
        <p>O tradicional café feito com água quente e grãos moidos</p>
        <div>
          <span>
            R$ <strong>9,90</strong>
          </span>
          <div>
            <Minus size={14} weight="bold" />
            <input type="text" />
            <Plus size={14} weight="bold" />
          </div>
          <button>
            <ShoppingCartSimple size={16} weight="bold" />
          </button>
        </div>
      </CoffeeCard>
    </ProductListContainer>
  )
}
