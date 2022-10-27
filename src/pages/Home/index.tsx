import { PageIntro } from './components/PageIntro'
import { ProductList } from './components/ProductList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <PageIntro />
      <h2>Nossos cafés</h2>
      <div className="menu">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </HomeContainer>
  )
}
