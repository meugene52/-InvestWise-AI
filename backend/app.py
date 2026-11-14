
from flask import Flask, jsonify
import yfinance as yf
from datetime import datetime, timezone

app = Flask(__name__)
# NIFTY 50 company symbols for Yahoo Finance
NIFTY_SYMBOLS = {
    "ADANIENT": "ADANIENT.NS",
    "ADANIPORTS": "ADANIPORTS.NS",
    "APOLLOHOSP": "APOLLOHOSP.NS",
    "ASIANPAINT": "ASIANPAINT.NS",
    "AXISBANK": "AXISBANK.NS",
    "BSE": "BSE.NS",
    "BAJAJ-AUTO": "BAJAJ-AUTO.NS",
    "BAJFINANCE": "BAJFINANCE.NS",
    "BAJAJFINSV": "BAJAJFINSV.NS",
    "BEL": "BEL.NS",
    "BHARTIARTL": "BHARTIARTL.NS",
    "CIPLA": "CIPLA.NS",
    "COALINDIA": "COALINDIA.NS",
    "DRREDDY": "DRREDDY.NS",
    "EICHERMOT": "EICHERMOT.NS",
    "ETERNAL": "ETERNAL.NS",
    "GRASIM": "GRASIM.NS",
    "HCLTECH": "HCLTECH.NS",
    "HDFCBANK": "HDFCBANK.NS",
    "HDFCLIFE": "HDFCLIFE.NS",
    "HINDALCO": "HINDALCO.NS",
    "HINDUNILVR": "HINDUNILVR.NS",
    "ICICIBANK": "ICICIBANK.NS",
    "ITC": "ITC.NS",
    "INFY": "INFY.NS",
    "INDIGO": "INDIGO.NS",
    "JSWSTEEL": "JSWSTEEL.NS",
    "JIOFIN": "JIOFIN.NS",
    "KOTAKBANK": "KOTAKBANK.NS",
    "LT": "LT.NS",
    "M&M": "M&M.NS",
    "MARUTI": "MARUTI.NS",
    "MAXHEALTH": "MAXHEALTH.NS",
    "NTPC": "NTPC.NS",
    "NESTLEIND": "NESTLEIND.NS",
    "ONGC": "ONGC.NS",
    "POWERGRID": "POWERGRID.NS",
    "RELIANCE": "RELIANCE.NS",
    "SBILIFE": "SBILIFE.NS",
    "SHRIRAMFIN": "SHRIRAMFIN.NS",
    "SBIN": "SBIN.NS",
    "SUNPHARMA": "SUNPHARMA.NS",
    "TCS": "TCS.NS",
    "TATACONSUM": "TATACONSUM.NS",
    "TMPV": "TMPV.NS",
    "TATASTEEL": "TATASTEEL.NS",
    "TECHM": "TECHM.NS",
    "TITAN": "TITAN.NS",
    "TRENT": "TRENT.NS",
    "ULTRACEMCO": "ULTRACEMCO.NS"
}


@app.route("/")
def home():
    return "Roshni Financial Data Server is running!"

@app.route("/api/company/TCS")
def get_tcs():
    try:
        stock = yf.Ticker("TCS.NS")
        info = stock.info

        if not info:
            return jsonify({"error": "No data available"}), 503

        roe = info.get("returnOnEquity")

        return jsonify({
            "company": info.get("longName", "TCS"),
            "symbol": "TCS.NS",
            "currency": info.get("currency", "INR"),
            "price": info.get("currentPrice"),
            "pe_ratio": info.get("trailingPE"),
            "roe_percent": round(roe * 100, 2) if roe is not None else None,
            "market_cap": info.get("marketCap"),
            "source": "Yahoo Finance",
            "retrieved_at": datetime.now(timezone.utc).isoformat(),
            "note": "Financial data may be delayed."
        })

    except Exception as error:
        return jsonify({"error": str(error)}), 503
@app.route("/api/company/<symbol>")
def get_company(symbol):
    symbol = symbol.upper()

    if symbol not in NIFTY_SYMBOLS:
        return jsonify({"error": "Company not supported"}), 404

    try:
        stock = yf.Ticker(NIFTY_SYMBOLS[symbol])
        info = stock.info

        if not info:
            return jsonify({"error": "No financial data available"}), 503

        roe = info.get("returnOnEquity")

        return jsonify({
            "company": info.get("longName", symbol),
            "symbol": NIFTY_SYMBOLS[symbol],
            "currency": info.get("currency", "INR"),
            "price": info.get("currentPrice"),
            "pe_ratio": info.get("trailingPE"),
            "roe_percent": round(roe * 100, 2) if roe is not None else None,
            "market_cap": info.get("marketCap"),
            "source": "Yahoo Finance",
            "retrieved_at": datetime.now(timezone.utc).isoformat(),
            "note": "Financial data may be delayed."
        })

    except Exception as error:
        return jsonify({"error": str(error)}), 503
from flask import send_file
@app.route("/education/investor_questions.js")
def investor_questions_file():
    questions_file = (
        Path(__file__).resolve().parent.parent
        / "education"
        / "investor_questions.js"
    )
    return send_file(questions_file, mimetype="application/javascript")
from pathlib import Path

@app.route("/website")
def website():
    website_file = Path(__file__).resolve().parent.parent / "investwise_nifty50_roshni_sources.html"
    return send_file(website_file)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
