import React from "react"
import CarouselHome from '../../components/Carousel'
import TaxesHome from '../../components/TaxesHome'

export default function Home() {

  return (
    <>
      <header className="o-header">
      </header>
      <div className="App-wrapper">
        <div className="App-main">
            <CarouselHome/>
            <TaxesHome/>
        </div>
      </div>
    </>
  )
}