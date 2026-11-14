
/*
 InvestWise AI - Investor Education Library
 Category 1: Basic Financial Concepts
 Educational explanations, not investment advice.
*/

const INVESTOR_ANSWERS = {
  "what is the stock market":
    "The stock market is a marketplace where investors buy and sell shares of publicly listed companies. In India, NSE and BSE are the major stock exchanges.",

  "what is the difference between nse and bse":
    "NSE means National Stock Exchange, while BSE means Bombay Stock Exchange. Both are regulated stock exchanges in India. NSE's major index is NIFTY 50, while BSE's major index is SENSEX.",

  "what is a share":
    "A share represents a small ownership interest in a company. Investors may earn returns through share price increases or dividends, but losses are also possible.",

  "what is an ipo":
    "IPO means Initial Public Offering. It is the process through which a company offers shares to the public for the first time.",

  "what is a stock exchange":
    "A stock exchange is an organized marketplace where securities such as company shares are bought and sold under established trading rules.",

  "what is a demat account":
    "A demat account holds shares and other securities electronically. In India, investors typically open one through a registered Depository Participant.",

  "what is a trading account":
    "A trading account allows investors to place buy and sell orders through a stockbroker. A demat account holds the securities after settlement.",

  "what is the difference between investing and trading":
    "Investing generally focuses on building wealth over longer periods. Trading focuses on buying and selling over shorter periods to benefit from price movements. Both involve risk.",

  "what is a bull market and bear market":
    "A bull market describes a sustained period of rising market prices. A bear market describes a sustained decline, often associated with falling investor confidence.",

  "what is market capitalisation":
    "Market capitalisation is the total market value of a company's outstanding shares.\n\nFormula: Current Share Price × Number of Outstanding Shares.",

  "what is a dividend":
    "A dividend is a distribution of a company's profits or reserves to shareholders, usually in cash. Dividends are not guaranteed.",

  "what is compound interest":
    "Compound interest means earning interest on both the original principal and previously accumulated interest.\n\nExample: ₹1,000 growing at 10% annually becomes ₹1,100 after one year and ₹1,210 after two years, assuming annual compounding.",

  "what is inflation":
    "Inflation is the general increase in prices of goods and services over time. It reduces the purchasing power of money.",

  "what is liquidity":
    "Liquidity describes how easily an asset can be bought or sold without significantly affecting its price. Cash is highly liquid; some investments may be harder to sell.",

  "what is portfolio diversification":
    "Portfolio diversification means spreading investments across different companies, sectors or asset classes to reduce concentration risk. It does not eliminate all investment risk.",

  // Category 2: Starting an Investment Journey

  "how much money do i need to start investing":
    "There is no single minimum amount for every investment. The amount depends on the investment product and its price. Beginners should first consider emergency savings, financial goals and their ability to handle losses.",

  "can i start investing with ₹500":
    "Yes. Some mutual fund SIPs accept contributions of ₹500 or less, depending on the scheme. Individual shares may also be affordable if their market price is within your budget. Check minimum investment requirements and charges.",

  "how do i open a demat account":
    "Choose a SEBI-registered Depository Participant or broker. Complete the application and KYC verification, provide the required identity and bank details, and review account charges. After approval, your demat account can hold securities electronically.",

  "which investment is suitable for a beginner":
    "The suitability of an investment depends on your goals, time horizon and risk tolerance. Beginners often study diversified mutual funds, index funds and lower-risk savings products before selecting individual shares. No investment is suitable for everyone.",

  "should i invest in stocks or mutual funds":
    "Individual stocks provide ownership in specific companies but require company research and involve concentration risk. Mutual funds pool investors' money and can provide diversification and professional management. Compare costs, risks and investment objectives.",

  "how do i select my first stock":
    "Study the company's business, revenue, profits, debt, cash flows, valuation and management. Compare it with competitors and understand the risks. Avoid choosing a stock only because its price is low or someone recommended it.",

  "what is the minimum investment period":
    "There is no universal minimum investment period. It depends on the product, your financial goals and any applicable lock-in rules. Equity investments are generally better suited to longer horizons because short-term prices can fluctuate significantly.",

  "how much of my monthly salary should i invest":
    "There is no fixed percentage suitable for everyone. Start by reviewing essential expenses, debt payments, emergency savings and financial goals. Invest only an amount you can afford without affecting important financial needs.",

  "is it safe to invest in the stock market":
    "Stock market investments involve risk, including the possibility of losing money. Regulation helps protect market integrity but does not guarantee returns. Diversification, research and a suitable investment horizon can help manage risk.",

  "what mistakes should beginners avoid":
    "Common mistakes include following unverified tips, investing borrowed money without understanding the risks, concentrating everything in one stock, ignoring fees, expecting guaranteed returns and making emotional buying or selling decisions.",

  // Category 3: Fundamental Analysis

  "how do i analyse a company's financial statements":
    "Start with three financial statements:\n\n" +
    "1. Income Statement: Revenue, expenses and profit.\n" +
    "2. Balance Sheet: Assets, liabilities and equity.\n" +
    "3. Cash Flow Statement: Cash generated and used.\n\n" +
    "Compare several years of results, examine debt and profitability, and read the auditor's notes.",

  "what is the p/e ratio":
    "P/E means Price-to-Earnings Ratio.\n\n" +
    "Formula: Share Price / Earnings Per Share (EPS).\n\n" +
    "Example: If a share costs ₹200 and EPS is ₹10, P/E = 20.\n\n" +
    "A high P/E can reflect growth expectations or an expensive valuation. Compare companies in the same industry.",

  "what is the p/b ratio":
    "P/B means Price-to-Book Ratio.\n\n" +
    "Formula: Market Price per Share / Book Value per Share.\n\n" +
    "Example: If a share costs ₹150 and its book value per share is ₹100, P/B = 1.5.\n\n" +
    "This ratio is particularly useful for some asset-heavy businesses and financial institutions.",

  "what is roe":
    "ROE means Return on Equity.\n\n" +
    "Formula: Net Profit / Average Shareholders' Equity × 100.\n\n" +
    "Example: If annual profit is ₹20 crore and average equity is ₹100 crore, ROE = 20%.\n\n" +
    "Higher ROE can indicate efficient use of shareholder capital, but excessive debt can also increase ROE.",

  "what is roce":
    "ROCE means Return on Capital Employed.\n\n" +
    "Formula: EBIT / Capital Employed × 100.\n\n" +
    "It measures how efficiently a business generates operating profit from its capital. Compare ROCE over several years and with industry peers.",

  "what is eps":
    "EPS means Earnings Per Share.\n\n" +
    "Formula: Profit attributable to ordinary shareholders / Weighted Average Shares Outstanding.\n\n" +
    "Example: If profit attributable to ordinary shareholders is ₹100 crore and weighted average shares are 10 crore, EPS = ₹10.\n\n" +
    "EPS helps investors evaluate profitability per share.",

  "what is the debt-to-equity ratio":
    "Debt-to-Equity Ratio compares a company's borrowings with shareholders' equity.\n\n" +
    "Formula: Total Debt / Shareholders' Equity.\n\n" +
    "Example: ₹50 crore debt divided by ₹100 crore equity gives a ratio of 0.5.\n\n" +
    "A high ratio can indicate financial risk. Appropriate levels differ by industry, and banks require different analysis.",

  "what is the current ratio":
    "Current Ratio measures a company's ability to cover short-term liabilities.\n\n" +
    "Formula: Current Assets / Current Liabilities.\n\n" +
    "Example: ₹200 crore in current assets divided by ₹100 crore in current liabilities gives a current ratio of 2.\n\n" +
    "Interpret it alongside cash flows and industry requirements.",

  "how do i identify an undervalued stock":
    "An undervalued stock may trade below a reasonable estimate of its intrinsic value.\n\n" +
    "Study earnings, cash flows, business growth, debt and valuation ratios such as P/E and P/B. Compare with similar companies.\n\n" +
    "A low share price or low P/E alone does not prove undervaluation.",

  "how do i identify a financially strong company":
    "Look for consistent revenue and profit performance, healthy operating cash flow, manageable debt, adequate liquidity and sustainable profitability.\n\n" +
    "Review ROE, ROCE, margins, financial statements and management disclosures over several years.",

  "is a company with high roe always good":
    "No. High ROE can indicate strong profitability, but it may also result from high borrowing or unusually low shareholders' equity.\n\n" +
    "Check debt levels, cash flow, ROCE and whether the company can maintain its performance.",

  "how do i compare two companies in the same industry":
    "Compare companies using similar reporting periods and accounting measures.\n\n" +
    "Review revenue growth, profit margins, ROE, ROCE, debt, cash flows and valuation ratios.\n\n" +
    "Also examine business models, competitive advantages and company-specific risks.",

  "how do i analyse a company's balance sheet":
    "A balance sheet shows a company's assets, liabilities and shareholders' equity at a particular date.\n\n" +
    "Formula: Assets = Liabilities + Equity.\n\n" +
    "Examine cash, receivables, inventory, borrowings and working capital. Compare changes across reporting periods.",

  "what is free cash flow":
    "Free Cash Flow (FCF) represents cash remaining after capital expenditure.\n\n" +
    "A common formula is: Operating Cash Flow - Capital Expenditure.\n\n" +
    "Positive free cash flow may help a company repay debt, pay dividends or invest in growth, but it should be evaluated over several periods.",

  "how do i evaluate a company's profitability":
    "Evaluate profitability using gross margin, operating margin, net profit margin, ROE and ROCE.\n\n" +
    "Compare revenue and profit growth over several years, examine operating expenses and assess cash flow quality.\n\n" +
    "Compare the company with similar businesses in its industry.",

  // Category 4: Technical Analysis

  "what is technical analysis":
    "Technical analysis studies historical price movements, trading volume and chart patterns to evaluate market trends.\n\n" +
    "It uses indicators such as moving averages, RSI and MACD.\n\n" +
    "Technical analysis does not guarantee future price movements.",

  "what is a candlestick chart":
    "A candlestick chart displays a security's opening, highest, lowest and closing prices over a selected period.\n\n" +
    "The candle body shows the difference between opening and closing prices, while the wicks show the high and low.\n\n" +
    "Candlestick patterns help traders study price behaviour.",

  "what is support and resistance":
    "Support is a price area where buying interest may help slow a decline.\n\n" +
    "Resistance is a price area where selling interest may slow an increase.\n\n" +
    "These are approximate zones, not guaranteed price boundaries.",

  "what is rsi":
    "RSI means Relative Strength Index. It is a momentum indicator that measures the speed and magnitude of recent price changes.\n\n" +
    "RSI usually ranges from 0 to 100.\n\n" +
    "Above 70 is commonly considered overbought, while below 30 is commonly considered oversold. These levels are not guaranteed trading signals.",

  "what is macd":
    "MACD means Moving Average Convergence Divergence.\n\n" +
    "It is a trend-following momentum indicator based on the relationship between two exponential moving averages.\n\n" +
    "Common settings use the 12-period EMA, 26-period EMA and a 9-period signal line.\n\n" +
    "Traders study MACD crossovers and changes in momentum.",

  "what is a moving average":
    "A moving average smooths historical price data to help identify trends.\n\n" +
    "For example, a 50-day moving average represents the average closing price over approximately 50 trading days.\n\n" +
    "Moving averages are lagging indicators because they use past prices.",

  "what is the difference between sma and ema":
    "SMA means Simple Moving Average. It gives equal weight to all prices in the selected period.\n\n" +
    "EMA means Exponential Moving Average. It gives greater weight to more recent prices.\n\n" +
    "EMA generally reacts faster to recent price changes than SMA.",

  "what is a breakout":
    "A breakout occurs when a security's price moves beyond an identified support or resistance area.\n\n" +
    "Traders often examine trading volume to evaluate the strength of the movement.\n\n" +
    "Some breakouts fail, so a breakout alone does not guarantee continued movement.",

  "what is a trendline":
    "A trendline is a line drawn on a price chart to help identify the direction of price movement.\n\n" +
    "An upward trendline may connect rising lows, while a downward trendline may connect falling highs.\n\n" +
    "Trendlines are analytical guides rather than guaranteed support or resistance.",

  "how do i identify an entry and exit point":
    "Entry and exit points can be evaluated using price trends, support and resistance, trading volume and technical indicators.\n\n" +
    "A trading plan should also consider risk tolerance, position size and potential losses.\n\n" +
    "No indicator can reliably identify the perfect time to buy or sell.",

  "what is trading volume":
    "Trading volume is the number of shares or contracts traded during a particular period.\n\n" +
    "Higher volume can indicate increased market activity and interest.\n\n" +
    "Traders often compare volume with price changes to evaluate the strength of a trend.",

  "what is a golden cross":
    "A golden cross occurs when a shorter-term moving average crosses above a longer-term moving average.\n\n" +
    "A common example is the 50-day moving average crossing above the 200-day moving average.\n\n" +
    "It is often interpreted as a bullish signal, but it can produce false signals.",

  "what is a death cross":
    "A death cross occurs when a shorter-term moving average crosses below a longer-term moving average.\n\n" +
    "A common example is the 50-day moving average crossing below the 200-day moving average.\n\n" +
    "It is often interpreted as a bearish signal, but it does not guarantee further price declines.",

  "what is a stop-loss":
    "A stop-loss is an instruction intended to limit losses by triggering an order when a security reaches a specified price.\n\n" +
    "Example: An investor buys a share at ₹100 and sets a stop-loss trigger at ₹95.\n\n" +
    "Execution prices may differ from the trigger price, particularly during volatile markets.",

  "how do i identify bullish and bearish trends":
    "A bullish trend generally shows rising prices, often with higher highs and higher lows.\n\n" +
    "A bearish trend generally shows falling prices, often with lower highs and lower lows.\n\n" +
    "Moving averages, trendlines and trading volume can help evaluate trends, but none provides certainty.",

  // Category 5: Banking and Monetary Policy

  "what is the rbi repo rate":
    "The repo rate is the interest rate at which the Reserve Bank of India (RBI) lends short-term funds to eligible banks against approved securities under its liquidity operations.\n\n" +
    "The RBI uses the policy repo rate to influence borrowing costs, liquidity and inflation.\n\n" +
    "For the latest repo rate, check the official RBI website: https://www.rbi.org.in",

  "how does an increase in repo rate affect the stock market":
    "An increase in the RBI repo rate can raise borrowing costs for banks, businesses and consumers.\n\n" +
    "Higher interest rates may reduce spending, borrowing and corporate profits, which can put pressure on stock valuations.\n\n" +
    "However, the actual market reaction depends on expectations and economic conditions.",

  "what is crr":
    "CRR means Cash Reserve Ratio.\n\n" +
    "It is the percentage of a bank's applicable net demand and time liabilities that must be maintained as cash reserves with the RBI.\n\n" +
    "CRR is one of the tools used to manage banking-system liquidity.",

  "what is slr":
    "SLR means Statutory Liquidity Ratio.\n\n" +
    "It is the minimum percentage of applicable net demand and time liabilities that banks must maintain in prescribed liquid assets, such as cash, gold and eligible government securities.\n\n" +
    "SLR helps support liquidity and financial stability.",

  "what is monetary policy":
    "Monetary policy refers to actions taken by a central bank to influence interest rates, money supply and financial conditions.\n\n" +
    "In India, the RBI conducts monetary policy with the primary objective of maintaining price stability while keeping growth in mind.",

  "how does inflation affect stock prices":
    "Inflation can increase business costs, reduce consumers' purchasing power and influence interest rates.\n\n" +
    "Companies that can pass higher costs to customers may manage inflation better than others.\n\n" +
    "The effect on stock prices varies by industry, company and economic conditions.",

  "what happens when rbi reduces interest rates":
    "When the RBI reduces its policy interest rate, borrowing costs may decrease over time.\n\n" +
    "Lower rates can encourage lending, spending and business investment.\n\n" +
    "However, banks do not necessarily reduce every loan rate immediately, and the economic impact is not guaranteed.",

  "how do bank interest rates affect investments":
    "Bank interest rates influence borrowing costs, savings returns and investment decisions.\n\n" +
    "Higher deposit rates may make fixed-income savings more attractive, while higher borrowing costs may affect business profits.\n\n" +
    "Investors should compare expected returns, inflation, risk and investment horizon.",

  "what is the relationship between inflation and purchasing power":
    "Inflation reduces the purchasing power of money because the same amount buys fewer goods and services over time.\n\n" +
    "Example: If an item costs ₹100 today and its price rises by 5%, it will cost ₹105.\n\n" +
    "Investors often consider inflation when evaluating real investment returns.",

  "how does rupee depreciation affect the indian stock market":
    "Rupee depreciation means the Indian rupee loses value relative to another currency, such as the US dollar.\n\n" +
    "It may benefit some exporters receiving foreign-currency revenue, while increasing costs for businesses importing goods or materials.\n\n" +
    "The overall stock-market impact depends on company exposure, inflation, capital flows and economic conditions.",

  // Category 6: Indian Economic Statistics

  "what is india's current gdp growth rate":
    "GDP growth measures how much India's inflation-adjusted economic output has increased compared with an earlier period.\n\n" +
    "The latest GDP growth rate depends on the reporting period, such as a quarter or financial year, and whether the figure is an estimate or a revision.\n\n" +
    "For the latest official figure, check the Ministry of Statistics and Programme Implementation (MoSPI): https://www.mospi.gov.in\n\n" +
    "This educational chatbot does not retrieve live GDP statistics, so it cannot verify the current rate.",

  "what is the current inflation rate":
    "India's headline retail inflation is commonly measured by the Consumer Price Index (CPI).\n\n" +
    "The inflation rate measures the percentage change in consumer prices over a specified period, commonly compared with the same month one year earlier.\n\n" +
    "For the latest official CPI inflation release, visit MoSPI: https://www.mospi.gov.in\n\n" +
    "This educational chatbot does not retrieve live inflation statistics, so it cannot verify the current rate.",

  "what is cpi":
    "CPI means Consumer Price Index.\n\n" +
    "It measures changes in the prices of a basket of goods and services purchased by consumers.\n\n" +
    "CPI is widely used to monitor retail inflation and changes in the cost of living in India.",

  "what is wpi":
    "WPI means Wholesale Price Index.\n\n" +
    "It measures price changes for a basket of goods at the wholesale level in India.\n\n" +
    "WPI helps analysts study price movements in goods such as manufactured products, fuel and primary articles.\n\n" +
    "It differs from CPI, which measures consumer prices.",

  "what is iip":
    "IIP means Index of Industrial Production.\n\n" +
    "It measures changes in the volume of industrial production in India, including manufacturing, mining and electricity.\n\n" +
    "IIP helps economists assess industrial activity and economic trends.",

  "how does unemployment affect the economy":
    "Unemployment means people who are available for work and seeking employment are unable to find jobs.\n\n" +
    "High unemployment can reduce household income, consumer spending and economic growth.\n\n" +
    "It may also affect business revenue, government finances and investor confidence.",

  "what is fiscal deficit":
    "Fiscal deficit is the amount by which a government's total expenditure exceeds its total receipts, excluding borrowings.\n\n" +
    "It indicates the government's borrowing requirement during a financial period.\n\n" +
    "A fiscal deficit is often expressed as a percentage of GDP.",

  "what is current account deficit":
    "A current account deficit occurs when a country's current account payments to the rest of the world exceed its current account receipts.\n\n" +
    "The current account includes trade in goods and services, primary income and secondary income such as remittances.\n\n" +
    "A deficit may require financing through capital inflows or changes in external assets and liabilities.",

  "how does gdp growth influence stock market performance":
    "GDP growth reflects changes in overall economic activity.\n\n" +
    "Stronger growth may support company sales and earnings, potentially improving investor confidence.\n\n" +
    "However, stock prices also depend on valuations, interest rates, inflation and market expectations.\n\n" +
    "GDP growth does not guarantee positive stock-market returns.",

  "how do government budget announcements affect investors":
    "Government budget announcements can influence investors through changes in taxes, public spending, borrowing and industry policies.\n\n" +
    "For example, infrastructure spending may affect construction-related companies, while tax changes may influence household savings and business profits.\n\n" +
    "Investors should examine the actual policy details rather than assuming every budget announcement will increase stock prices.",


  // Category 7: Investment Products

  "what are mutual funds":
    "Mutual funds pool money from multiple investors and invest it in assets such as shares, bonds or money-market instruments.\n\n" +
    "They are managed according to the fund's investment objectives.\n\n" +
    "In India, mutual funds are regulated by SEBI. Returns are not guaranteed.",

  "what is an sip":
    "SIP means Systematic Investment Plan.\n\n" +
    "It is a method of investing a fixed amount regularly in a mutual fund, such as ₹1,000 every month.\n\n" +
    "SIPs encourage disciplined investing, but do not guarantee profits.",

  "what is an index fund":
    "An index fund aims to track the performance of a selected market index, such as the Nifty 50.\n\n" +
    "It generally invests in securities representing that index.\n\n" +
    "Index funds offer diversification but remain exposed to market risk.",

  "what is an etf":
    "ETF means Exchange-Traded Fund.\n\n" +
    "An ETF is an investment fund whose units trade on a stock exchange, similar to shares.\n\n" +
    "ETFs may track indices, bonds, gold or other investment strategies.",

  "what are bonds":
    "Bonds are debt instruments through which investors lend money to a government, company or other issuer.\n\n" +
    "The issuer generally promises interest payments and repayment according to the bond's terms.\n\n" +
    "Bonds can involve credit, interest-rate and liquidity risks.",

  "what are government securities":
    "Government securities are debt instruments issued by governments to raise funds.\n\n" +
    "In India, examples include Treasury Bills and dated government securities.\n\n" +
    "Their market prices can fluctuate when interest rates change.",

  "what is a fixed deposit":
    "A Fixed Deposit, or FD, is a bank deposit held for a specified period at an agreed interest rate.\n\n" +
    "For example, a customer may deposit ₹50,000 for one year.\n\n" +
    "Early withdrawal may attract penalties. Eligible Indian bank deposits have DICGC insurance subject to limits and conditions.",

  "what is gold investment":
    "Gold investment means gaining exposure to gold through physical gold, gold ETFs or other eligible gold-linked products.\n\n" +
    "Gold is sometimes used for diversification.\n\n" +
    "Gold prices can fluctuate, and physical gold may involve storage costs.",

  "what are reits":
    "REIT means Real Estate Investment Trust.\n\n" +
    "A REIT allows investors to gain exposure to income-generating real estate without directly buying an entire property.\n\n" +
    "In India, listed REIT units can trade on stock exchanges.\n\n" +
    "Returns may include distributions and changes in unit prices, and involve real-estate and market risks.",

  "what is the difference between equity and debt investments":
    "Equity investments represent ownership in a business, while debt investments generally represent money lent to an issuer.\n\n" +
    "Equity investors may benefit from price appreciation and dividends.\n\n" +
    "Debt investors generally receive contractual repayment rights, but may face credit and interest-rate risks.",

  "what are futures and options":
    "Futures and options are derivative contracts whose values depend on underlying assets such as stocks or indices.\n\n" +
    "Futures generally create contractual obligations, while options give buyers rights under specified terms.\n\n" +
    "Derivatives can involve substantial losses and require careful risk management.",

  "what is cryptocurrency":
    "Cryptocurrency is a digital asset that commonly uses cryptographic technology and distributed ledger systems.\n\n" +
    "Examples include Bitcoin and Ethereum.\n\n" +
    "Cryptocurrency investments can involve high volatility, fraud, custody and regulatory risks.",


  "what is the difference between direct and regular mutual funds":
    "A direct mutual fund plan is purchased without a distributor commission built into the plan's expense structure.\n\n" +
    "A regular mutual fund plan involves distribution arrangements and generally has a higher expense ratio than the corresponding direct plan.\n\n" +
    "Both plans normally follow the same underlying investment strategy, but their net returns can differ because of expenses.",

  // Category 8: Risk Management

  "what is investment risk":
    "Investment risk is the possibility that an investment's actual return will differ from the expected return, including the possibility of losing money.\n\n" +
    "Risks may arise from market movements, company performance, inflation, interest rates or liquidity.\n\n" +
    "Understanding risk helps investors make informed decisions.",

  "what is market risk":
    "Market risk is the possibility of investment losses caused by movements in overall market prices.\n\n" +
    "Factors such as economic conditions, interest rates, inflation and geopolitical events can affect market prices.\n\n" +
    "Diversification can reduce some risks but cannot eliminate broad market risk.",

  "what is systematic risk":
    "Systematic risk is risk that affects a large part of the financial market.\n\n" +
    "Examples include recessions, major interest-rate changes and widespread economic shocks.\n\n" +
    "It generally cannot be eliminated through diversification within the same market.",

  "what is unsystematic risk":
    "Unsystematic risk is risk associated with a particular company or industry.\n\n" +
    "Examples include poor management decisions, product failures or company-specific financial problems.\n\n" +
    "Diversification across companies and industries can help reduce unsystematic risk.",

  "how do i calculate investment risk":
    "Investment risk can be evaluated using measures such as standard deviation, beta, maximum drawdown and potential loss.\n\n" +
    "For example, standard deviation measures how widely historical returns vary around their average.\n\n" +
    "No single calculation captures every risk, and historical measurements cannot guarantee future outcomes.",

  "what is beta":
    "Beta measures how sensitive an investment's returns have historically been to movements in a selected market benchmark.\n\n" +
    "A beta of 1 suggests similar sensitivity to the benchmark. A beta above 1 suggests greater sensitivity, while a beta below 1 suggests lower sensitivity.\n\n" +
    "Beta does not measure every type of investment risk.",

  "what is standard deviation":
    "Standard deviation measures how widely investment returns vary around their average.\n\n" +
    "A higher standard deviation generally indicates greater historical return volatility.\n\n" +
    "For example, a stock with widely fluctuating returns may have a higher standard deviation than a more stable investment.\n\n" +
    "It does not predict future losses with certainty.",

  "what is the sharpe ratio":
    "The Sharpe ratio measures historical excess return relative to the volatility of returns.\n\n" +
    "Formula: Sharpe Ratio = (Investment Return - Risk-Free Rate) / Standard Deviation of Returns.\n\n" +
    "A higher Sharpe ratio generally indicates more excess return per unit of historical volatility, assuming comparable measurement periods.\n\n" +
    "It should not be used alone to evaluate an investment.",

  "how do i diversify my portfolio":
    "Portfolio diversification means spreading investments across different assets, companies, sectors and sometimes geographic markets.\n\n" +
    "For example, an investor might hold a combination of diversified equity funds, suitable debt instruments and other assets according to their financial goals.\n\n" +
    "Diversification can reduce concentration risk but cannot prevent all investment losses.",

  "how do i reduce investment losses":
    "Investment losses cannot be eliminated, but risks can be managed through diversification, research and appropriate position sizing.\n\n" +
    "Investors can also consider their time horizon, emergency savings, liquidity needs and tolerance for market declines.\n\n" +
    "Avoiding excessive borrowing and emotionally driven decisions may help limit unnecessary risks.",

  "how much risk should a beginner take":
    "A beginner should understand their financial goals, investment time horizon, emergency savings and ability to tolerate losses before taking investment risk.\n\n" +
    "Learning with small amounts and diversified investment products may be more manageable than taking large concentrated positions.\n\n" +
    "There is no single suitable risk level for every beginner.",

  "what is a risk-reward ratio":
    "A risk-reward ratio compares the potential loss of a trade with its potential gain.\n\n" +
    "Example: If a trade has a potential loss of ₹100 and a potential gain of ₹300, the risk-to-reward ratio is 1:3.\n\n" +
    "A favourable ratio does not guarantee a profitable trade because the probability of success also matters.",

  "what is portfolio rebalancing":
    "Portfolio rebalancing means adjusting investment holdings to bring a portfolio closer to its intended asset allocation.\n\n" +
    "For example, if shares increase significantly and become a larger percentage of the portfolio than planned, an investor may adjust holdings to restore the target allocation.\n\n" +
    "Rebalancing can help control risk but may involve taxes, fees and transaction costs.",

  // Category 9: Social Media and Investment Information

  "can i trust stock recommendations on instagram":
    "Stock recommendations on Instagram should not be accepted without independent verification.\n\n" +
    "Some creators provide educational information, while others may promote stocks without disclosing financial interests.\n\n" +
    "Check the source, supporting evidence and relevant SEBI registration before relying on investment recommendations.",

  "how do i identify fake investment influencers":
    "Warning signs include guaranteed profit claims, promises of unusually high returns, fake screenshots and pressure to invest immediately.\n\n" +
    "Be cautious of influencers requesting money through personal accounts or claiming access to secret trading opportunities.\n\n" +
    "Verify relevant registration details through SEBI's official website: https://www.sebi.gov.in",

  "are telegram stock market tips reliable":
    "Telegram stock market tips are not automatically reliable.\n\n" +
    "Some groups spread misleading recommendations, promote risky trades or attempt to manipulate stock prices.\n\n" +
    "Avoid acting on anonymous tips without independent research and verification.",

  "how do i verify financial information from youtube":
    "Check whether the creator provides reliable sources, explains assumptions and distinguishes facts from opinions.\n\n" +
    "Compare company claims with stock exchange filings, annual reports and official regulatory information.\n\n" +
    "For Indian listed companies, useful sources include NSE, BSE and SEBI.",

  "what is a pump-and-dump scheme":
    "A pump-and-dump scheme is a form of market manipulation in which misleading promotion is used to increase demand and artificially raise a security's price.\n\n" +
    "Those promoting the security may then sell their holdings at inflated prices, leaving other investors exposed to losses.\n\n" +
    "Be cautious of sudden price increases accompanied by aggressive social media promotion.",

  "how does social media influence stock prices":
    "Social media can influence investor sentiment by spreading news, opinions, rumours and trading recommendations.\n\n" +
    "Viral posts may increase attention and trading activity, especially in less-liquid securities.\n\n" +
    "However, social media popularity does not establish a company's financial value.",

  "how do i identify misleading financial news":
    "Check the publication date, original source, supporting evidence and whether the headline accurately reflects the article.\n\n" +
    "Be cautious of exaggerated claims, missing context and screenshots without verifiable sources.\n\n" +
    "Compare important financial news with official company announcements and reputable publications.",

  "should i invest based on influencer recommendations":
    "Investment decisions should not be based solely on influencer recommendations.\n\n" +
    "Consider the company's fundamentals, valuation, financial risks and your own investment goals.\n\n" +
    "Check whether the person giving regulated investment advice has the appropriate SEBI registration, and remember that registration does not guarantee returns.",

  "how do i verify whether a stock market news article is authentic":
    "Check the article's publication date, author, publisher and original sources.\n\n" +
    "For company-specific announcements, compare the information with official NSE or BSE disclosures and the company's investor relations website.\n\n" +
    "Avoid forwarding or trading on unverified market rumours.",

  "how can i avoid investment scams":
    "Be suspicious of guaranteed returns, urgent payment requests, fake trading platforms and unsolicited investment offers.\n\n" +
    "Verify financial intermediaries through official regulatory sources and avoid sharing passwords, OTPs or account credentials.\n\n" +
    "Use legitimate investment platforms and report suspected securities-market fraud through appropriate official channels, including SEBI's SCORES system where applicable.",

  // Category 10: Personal Investment Decision-Making

  "which stock should i analyse before investing":
    "Begin by studying companies whose businesses you understand and whose financial reports are available.\n\n" +
    "Review revenue growth, profitability, debt, cash flow, valuation and industry conditions.\n\n" +
    "For beginners, analysing established companies can be a useful learning exercise, but no stock is automatically a suitable investment.",

  "is this company financially strong":
    "A company's financial strength can be evaluated using revenue and profit trends, debt levels, cash flow, ROE, ROCE and liquidity ratios.\n\n" +
    "Compare these indicators over several years and against similar companies.\n\n" +
    "Please specify the company you want to analyse. Without identifying the company and checking current financial statements, I cannot determine whether it is financially strong.",

  "is this stock overvalued or undervalued":
    "A stock's valuation can be studied using ratios such as P/E, P/B and EV/EBITDA, along with earnings growth and cash-flow estimates.\n\n" +
    "Compare valuation measures with similar companies and the company's historical performance.\n\n" +
    "A low ratio does not automatically mean a stock is undervalued, and a high ratio does not always mean it is overvalued.\n\n" +
    "Please specify the stock for a more focused educational analysis.",

  "what are the major risks associated with this company":
    "Company risks may include high debt, declining profitability, weak cash flow, competition, regulatory changes and management concerns.\n\n" +
    "Industry-specific risks, currency movements and economic conditions can also affect performance.\n\n" +
    "Please specify the company so its particular risk factors can be examined.",

  "should i invest in large-cap, mid-cap or small-cap stocks":
    "Large-cap companies are generally more established, while mid-cap and small-cap companies may offer different growth opportunities and risks.\n\n" +
    "Smaller companies can experience greater volatility and liquidity challenges.\n\n" +
    "The appropriate mix depends on investment goals, time horizon, diversification and ability to tolerate losses.\n\n" +
    "No market-cap category is suitable for everyone.",

  "how do i compare two investment opportunities":
    "Compare investment opportunities using expected return, valuation, financial strength, risk, liquidity and investment horizon.\n\n" +
    "For stocks, examine revenue growth, profitability, debt, cash flow and industry outlook.\n\n" +
    "Use comparable measurement periods and consider whether the investments serve the same financial objective.",

  "how should i construct a diversified portfolio":
    "A diversified portfolio spreads investments across different assets, companies and sectors to reduce concentration risk.\n\n" +
    "Portfolio construction should consider financial goals, time horizon, emergency savings, liquidity needs and risk tolerance.\n\n" +
    "Investors may study diversified equity funds and suitable fixed-income products as educational examples.\n\n" +
    "Diversification reduces some risks but does not guarantee protection from losses.",

  "what factors should i consider before buying a stock":
    "Before buying a stock, examine the company's business model, financial statements, profitability, debt, cash flow and valuation.\n\n" +
    "Also consider management quality, competitive position, industry conditions and major risks.\n\n" +
    "Understand why you are considering the investment and whether potential losses fit your financial situation.",

  "how do i evaluate my investment performance":
    "Investment performance can be evaluated using total return, annualised return and comparisons with an appropriate benchmark.\n\n" +
    "Include dividends, fees and applicable taxes when calculating actual results.\n\n" +
    "For investments with multiple cash flows, measures such as XIRR may help evaluate annualised returns.\n\n" +
    "Also consider volatility, risk and whether the investment is meeting its intended goals.",

  "what should i consider before selling my shares":
    "Before selling shares, review whether your original investment reasons still hold.\n\n" +
    "Consider changes in company fundamentals, valuation, financial goals, diversification and liquidity needs.\n\n" +
    "Also examine potential taxes and transaction costs.\n\n" +
    "Avoid making decisions solely because of short-term price movements or social media rumours."









};
