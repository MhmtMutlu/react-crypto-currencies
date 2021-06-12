import React, {useState, useEffect} from "react"
import axios from "axios"
import Currencies from "../Currencies/Currencies"
import "./CurrencyData.css"

const CurrencyData = () => {
    
    const [currencies, setCurrencies] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => setCurrencies(response.data))
            .catch(error => console.log(error))
    }, [])

    const searchCurrency = (e) => {
        setSearch(e.target.value)
    }

    const filteredCurrencies = currencies.filter(currency =>
        currency.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="currencyList">
            <div className="header">
                <h1 className="title mb-5">Crypto Currencies</h1>
                <div className="d-flex justify-content-center align-items-center mb-5">
                    <input type="search" className="form-control p-2" style={{width: 600}} aria-describedby="inputGroup-sizing-default" onChange={searchCurrency} placeholder="Search for crypto currency..."/>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
                        {filteredCurrencies.map(currency => {
                            return (
                                <Currencies
                                key = {currency.id}
                                name = {currency.name}
                                price = {currency.current_price}
                                priceChange = {currency.price_change_percentage_24h}
                                symbol = {currency.symbol}
                                image = {currency.image}
                                rank = {currency.market_cap_rank}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyData