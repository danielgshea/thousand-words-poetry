import re
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Launch the Chrome browser using Selenium WebDriver
driver = webdriver.Chrome()

# Load the Google Images page
query = "coffee"
driver.get(f"https://www.google.com/search?q={query}&tbm=isch")

# Scroll down to load more images (you may need to adjust this depending on how many images you want to scrape)
for _ in range(5):  # Change the range according to your needs
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)  # Adjust sleep time as necessary

# Get the HTML content after scrolling
html = driver.page_source

# Close the browser
driver.quit()

# Now you can use BeautifulSoup to parse the HTML content
soup = BeautifulSoup(html, "html.parser")

# Write your code to extract image URLs here


# This will get a tag as param
# If the tag is an image tag, and its src has "data:image/jpeg..." then this function returns true
# false otherwise
def is_happy_image(tag):
    if tag.name != "img":
        return False
    if tag.get("id") is not None and re.search(r"dimg", tag.get("id")) is not None:
        if tag.get("src") is not None and re.search(r"data:image/jpeg", tag.get("src")) is not None:
            return True
    return False


images = soup.find_all("img")

print(len(images))
for i in range(0, 50):
    print(images[i])
