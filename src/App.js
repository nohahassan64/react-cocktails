import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import './Cocktails.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route  path="/about" component={About} />
                <Route  path="/cocktail/:id" component={SingleCocktail} />
                <Route  path="/" component={Home} />
                <Route path="*" component={Error} />
            </Switch>
            
        </BrowserRouter>
    )
}

export default App
