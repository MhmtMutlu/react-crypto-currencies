import React from "react"
import "./Currencies.css"

const Currencies = ({name, price, priceChange, symbol, image, rank}) => {
    return (
        <div className="currency card text-dark bg-light mb-3 mx-2" style={{width: 350, height:300}}>
            <div className="card-header">
                <img className="mb-2" src={image} alt={name} style={{width: 35, height: 35}}/>
                <h3 className="d-inline p-3 fw-bold"> {name}</h3>
            </div>
            <div className="card-body">
                <h3 className="card-title">{symbol.toUpperCase()}</h3>
                <h5 className="card-text">Price: {price} $</h5>
                <p className="card-text fw-bold">Change percentage 24h</p>
                {priceChange.toFixed(2) > 0
                    ?
                    <p className="fs-5" style={{ color: 'green' }}>{priceChange.toFixed(2)}</p>
                    :
                    <p className="fs-5" style={{ color: 'red' }}>{priceChange.toFixed(2)}</p>
                }
                <hr />
                <p className="card-text fw-bold">Market Rank: {rank}</p>
            </div>
        </div>
    )
}

export default Currencies