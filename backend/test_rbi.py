
import requests
from datetime import datetime

url = "https://www.rbi.org.in/"

print("Testing RBI website connection...")

try:
    response = requests.get(url, timeout=15)
    print("HTTP Status:", response.status_code)

    if response.status_code == 200:
        print("SUCCESS: RBI website is reachable!")
    else:
        print("RBI returned status:", response.status_code)

    print("Checked at:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

except requests.RequestException as error:
    print("Connection failed:", error)
