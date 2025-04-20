import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CandlePattern from "./pages/Learn/CandlePattern";
import CandleDetail from "./pages/candleDetails/CandleDetails";
import Home from "./pages/Home/Home";
import ChatBot from "./pages/ChatBot/ChatBot";
import Login from "./pages/Login/Login";
import CryptoMarket from "./pages/CryptoMarket/CryptoMarket";
import CryptoDetail from "./pages/CryptoMarket/CryptoDetail";
import StockMarket from "./pages/IndianStocks/StockMarket";
import PredictForm from "./PredictForm";
 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/Learn" element={<CandlePattern />} />
        <Route path="/crypto" element={<CryptoMarket />} />
        <Route path="/crypto/:id" element={<CryptoDetail />} />
        <Route path="/stock" element={<StockMarket />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/candle/:candleName" element={<CandleDetail />} />
        <Route path="/predict" element={<PredictForm />} />

      </Routes>
    </Router>
  );
};

export default App;


