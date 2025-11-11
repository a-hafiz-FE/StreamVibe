import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Main = (WrappedComponent) => {

  const hocComponent = (props) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
        {/* <Footer /> */}
      </>
    )
  }

  return hocComponent;
}

export default Main