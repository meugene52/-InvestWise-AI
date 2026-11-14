# InvestWise AI

## NIFTY 50 Stock Analysis and Financial Literacy Platform



### 1. Project Overview



InvestWise AI is a web-based educational application designed to help students and beginner investors understand the Indian stock market, financial ratios, technical indicators, investment risks, and financial literacy concepts.



The application supports 50 Indian listed companies and provides interactive educational tools.



### 2. Main Features



- **Fundamental Analysis:** P/E ratio, P/B ratio, ROE, ROCE, EPS, debt-to-equity ratio, and other financial indicators.

- **Technical Analysis:** Interactive price chart with 20-day and 50-day moving averages, RSI, and trend information.

- **Risk & Return:** Educational investment risk and return analysis.

- **Financial Literacy Academy:** Nine educational topics with links to relevant learning videos.

- **Financial Chatbot:** Provides predefined educational answers about investing and financial concepts.

- **Roshni Chatbot:** Answers financial literacy questions and retrieves available company information from Yahoo Finance through the Flask backend.

- **Investor Questions:** A collection of 121 educational questions and answers.



### 3. Technologies Used



- HTML, CSS, and JavaScript

- Python

- Flask

- Yahoo Finance through the yfinance Python library

- Gunicorn for cloud deployment

- GitHub for source-code hosting

- Render for online website hosting



### 4. Online Website



https://investwise-ai-lrvm.onrender.com/website



Open this link in a web browser to use InvestWise AI.



The website is hosted on Render. The free hosting instance may take additional time to respond after a period of inactivity.



### 5. Project Structure



```text

InvestWise-AI/

    backend/

        app.py

        inspect_rbi.py

        test_50_companies.py

        test_rbi.py

        test_tcs.py

    education/

        investor_questions.js

    ind_nifty50list.csv

    investwise_nifty50_roshni_sources.html

    requirements.txt

    wsgi.py

    README.md

```



### 6. Requirements for Local Execution



- Python installed on the computer

- Internet connection for Yahoo Finance requests

- A modern web browser, such as Chrome or Microsoft Edge



### 7. How to Run the Project Locally



**Step 1:** Extract the project ZIP file.



**Step 2:** Open Command Prompt in the extracted project folder.



**Step 3:** Install the required Python packages:



```cmd

python -m pip install -r requirements.txt

```



**Step 4:** Start the Flask application:



```cmd

python backend\app.py

```



**Step 5:** Open the following address in a browser:



http://127.0.0.1:5000/website



Keep the Command Prompt window running while using the website.



### 8. Financial Data Disclaimer



The main Fundamental Analysis, Technical Analysis, and Risk & Return sections use simulated educational data. These values are not actual stock recommendations or verified current market prices.



Roshni can retrieve available financial information from Yahoo Finance. Such information may be delayed, incomplete, or temporarily unavailable.



The chatbots provide educational assistance and are not generative AI models.



This application is intended for educational and academic demonstration purposes only, not investment advice.



### 9. Project Submission



**Project Name:** InvestWise AI



**Project Type:** College Mini-Project



**Category:** Financial Technology / Financial Education



**Deliverables:** Online website, source code, and local execution instructions.

