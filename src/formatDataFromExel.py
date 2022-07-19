import pandas as pd
from pandas import read_excel


pd.read_excel("Lambo-drikkelek-sporsmål.xlsx")  # kilde: https://stackoverflow.com/questions/16888888/how-to-read-a-xlsx-file-using-the-pandas-library-in-ipython
myData = pd.read_excel(r'Lambo-drikkelek-sporsmål.xlsx', engine='openpyxl', usecols="A:E")

for index, row in myData[0:len(myData)].iterrows():

# each row is returned as a pandas series

    print("{\n header: \"" + str(row[0])+ "\", \n value: \"" + str(row[1])+ "\", \n content:\"" + str(row[3]) + "\",\n}, ")
