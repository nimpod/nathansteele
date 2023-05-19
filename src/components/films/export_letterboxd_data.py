import time
from urllib3.exceptions import InsecureRequestWarning
from urllib3 import disable_warnings
disable_warnings(InsecureRequestWarning)
from selenium import webdriver
from selenium.webdriver.common.by import By


def read_txt_file(relative_path_to_txt_file: str):
    """ Read content of a txt file """
    with open(file=relative_path_to_txt_file) as f:
        lines = f.read()
    return lines

# setup selenium...
export_letterboxd_data_url = "https://letterboxd.com/settings/data/"
driver = webdriver.Chrome()
driver.get(url=export_letterboxd_data_url)

# enter username & password...
username = driver.find_element(By.ID, "signin-username")
username.send_keys(read_txt_file('../../../../blahu.txt'))
password = driver.find_element(By.ID, "signin-password")
password.send_keys(read_txt_file('../../../../blahp.txt'))

# click sign in button
button_sign_in = driver.find_element(By.CSS_SELECTOR, "div.button-container > input")
button_sign_in.click()

# wait for website to load properly...
time.sleep(10)

# click the "EXPORT YOUR DATA" button
button_export_data_link = driver.find_element(By.CLASS_NAME, 'export-data-link')
button_export_data_link.click()

# wait for the other window to appear...
time.sleep(5)

# click the "EXPORT DATA" button
button_export_data = driver.find_element(By.CLASS_NAME, 'export-data-button')
button_export_data.click()

# wait for zip file to download...
time.sleep(10)

# close web browser
driver.close()