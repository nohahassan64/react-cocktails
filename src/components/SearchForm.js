import React  , { useRef , useEffect  } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');

    useEffect( () => {
        searchValue.current.focus();
    } , []);
    const searchCocktails = () => {
        setSearchTerm(searchValue.current.value);
    }
    return (
        <section className="section search">
            <form className="search-form" onSubmit={ (e) => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="name">
                        Search your favourite cocktails
                    </label>
                    <input 
                        id="name"
                        type="text"
                        ref={searchValue}
                        onChange={searchCocktails}
                    />

                </div>
            </form>
            
        </section>
    )
}

export default SearchForm
