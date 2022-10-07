import { PageIntro } from './components/PageIntro'
import { ProductList } from './components/ProductList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <PageIntro />
      <ProductList />
    </HomeContainer>
  )
}
