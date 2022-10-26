import imageIntro from '../../../../assets/image-page-intro.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import {
  IconCart,
  IconCoffee,
  IconPackage,
  IconTimer,
  PageIntroContainer,
  PageItems,
} from './styles'

export function PageIntro() {
  return (
    <PageIntroContainer>
      <div className="boxText">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className="subTitleSlogan">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <PageItems>
          <div>
            <p>
              <IconCart>
                <ShoppingCart size={16} weight="fill" />
              </IconCart>
              Compra simples e segura
            </p>
            <p>
              <IconTimer>
                <Timer size={16} weight="fill" />
              </IconTimer>
              Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <IconPackage>
                <Package size={16} weight="fill" />
              </IconPackage>
              Embalagem mantém o café intacto
            </p>
            <p>
              <IconCoffee>
                <Coffee size={16} weight="fill" />
              </IconCoffee>
              O café chega fresquinho até você
            </p>
          </div>
        </PageItems>
      </div>
      <section>
        <img src={imageIntro} alt="" />
      </section>
    </PageIntroContainer>
  )
}
