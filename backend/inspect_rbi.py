
import requests
from html.parser import HTMLParser
from urllib.parse import urljoin

class LinkFinder(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            link = dict(attrs).get("href")
            if link:
                self.links.append(link)

url = "https://data.rbi.org.in/"

try:
    response = requests.get(url, timeout=20)
    response.raise_for_status()

    finder = LinkFinder()
    finder.feed(response.text)

    print("RBI Data website links:")
    print("-----------------------")

    for link in finder.links[:30]:
        print(urljoin(url, link))

    print("-----------------------")
    print("Total links found:", len(finder.links))

except requests.RequestException as error:
    print("Error:", error)
