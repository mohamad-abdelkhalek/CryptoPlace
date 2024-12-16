# CryptoPlace 💹

CryptoPlace is a cryptocurrency tracking application built using **React**, the **CoinGecko API** for cryptocurrency data, and **Google Charts** for visualizing coin trends. This app allows users to view essential details of cryptocurrencies, such as their rank, name, current price, 24-hour price change, and market capitalization. Additionally, users can explore detailed information, including a **line chart of the last 10 days' prices**, for any selected cryptocurrency.

---

## Features

### Main Dashboard:
- **Coin List**:
  - View a list of top cryptocurrencies with the following information:
    - Rank
    - Name
    - Current Price
    - 24-Hour Change (%)
    - Market Cap

### Coin Details:
- **Detailed View**:
  - Click on any coin to view:
    - A **line chart** visualizing the coin's price over the last 10 days.
    - Historical price trends.

---

## Tech Stack
### Frontend:
- **React**: For building the user interface.
- **Google Charts**: For rendering line charts of cryptocurrency prices.

### API:
- **CoinGecko API**: For fetching real-time and historical cryptocurrency data.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamad-abdelkhalek/cryptoPlace.git
   cd cryptoplace

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the root directory and add your API base URL:
   ```bash
   REACT_APP_COINGECKO_BASE_URL=https://api.coingecko.com/api/v3

4. Start the development server:
   ```bash
   npm run dev

5. Open your browser and navigate to http://localhost:3000.

---

## Usage

1. Launch the app.
2. Browse the list of cryptocurrencies on the main dashboard.
3. Click on a cryptocurrency to view detailed information and a 10-day price trend chart.

---

## Acknowledgements

- CoinGecko API for cryptocurrency data.
- Google Charts for interactive visualizations.

Feel free to reach out for any queries or suggestions! 🚀
