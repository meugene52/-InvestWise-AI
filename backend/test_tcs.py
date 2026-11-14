
import yfinance as yf

print("Connecting to Yahoo Finance...")
print("Fetching TCS financial information...")
print("------------------------------------")

try:
    tcs = yf.Ticker("TCS.NS")
    info = tcs.info

    if not info or not info.get("symbol"):
        print("No company information returned.")
    else:
        print("Company:", info.get("longName", "N/A"))
        print("Symbol:", info.get("symbol", "N/A"))
        print("Currency:", info.get("currency", "N/A"))
        print("Current/Recent Price:", info.get("currentPrice", "N/A"))
        print("Market Cap:", info.get("marketCap", "N/A"))
        print("P/E Ratio:", info.get("trailingPE", "N/A"))
        print("Forward P/E:", info.get("forwardPE", "N/A"))

        roe = info.get("returnOnEquity")
        print("ROE:", f"{roe * 100:.2f}%" if roe is not None else "N/A")

        print("52 Week High:", info.get("fiftyTwoWeekHigh", "N/A"))
        print("52 Week Low:", info.get("fiftyTwoWeekLow", "N/A"))
        print("Dividend Yield:", info.get("dividendYield", "N/A"))

        print("------------------------------------")
        print("Source: Yahoo Finance")
        print("Note: Values may be delayed or unavailable.")

except Exception as error:
    print("Unable to retrieve TCS data:", error)
