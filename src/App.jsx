import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="container">
        <Header />
        <Content />
        <Footer />
    </div>
  
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


