import re
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

def make_google_images_soup(query):
    # Launch the Chrome browser using Selenium WebDriver
    driver = webdriver.Chrome()

    # Load the Google Images page
    driver.get(f"https://www.google.com/search?q={query}&tbm=isch")

    # Scroll down to load more images 
    for _ in range(2): 
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(1) 

    # Get the HTML content after scrolling
    html = driver.page_source

    # Close the browser
    driver.quit()

    # Return the soup
    return BeautifulSoup(html, "html.parser")


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


def get_urls(query):
    soup = make_google_images_soup(query)
    image_tags = soup.find_all(is_happy_image)
    imgs = []
    for image in image_tags:
        tag = image.get("src")
        if tag is not None:
            imgs.append(image.attrs)
    return imgs

get_urls("bananas")