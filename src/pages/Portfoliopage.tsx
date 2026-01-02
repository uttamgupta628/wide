
import Breadcrumb from '../components/Global/Breadcrumb'
import Portfolio from '../components/portfolio/Portfolio'

function Portfoliopage() {
  return (
    <div>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />
      <Portfolio/>
    </div>
  )
}

export default Portfoliopage
