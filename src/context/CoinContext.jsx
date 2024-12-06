const { createContext, useState, useEffect } = require("react");

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoins = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json',
                     'x-cg-demo-api-key': 'CG-BB7K3SpjGBWPABagbnsMwbqX'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoins(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoins();
    }, [currency])

    const contextValue = {
        allCoins, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;