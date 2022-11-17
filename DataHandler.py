import json, re, mysql.connector
from mysql.connector import pooling, Error

try: 
    connection_pool = pooling.MySQLConnectionPool(
        pool_name = "TravelInfo_pool",
        pool_size = 10,
        pool_reset_session = True,
        host = 'localhost',
        database = 'website',
        user = 'root',
        password = 'Ppp0935082190'
    )
    print("Printing connection pool properties ")
    print("Connection Pool Name - ", connection_pool.pool_name)
    print("Connection Pool Size - ", connection_pool.pool_size)

except Error as e:
    print("Error while connecting to MySQL using Connection pool ", e)

def requestCon(sql, args):  
    connection_object = connection_pool.get_connection()
    cursor = connection_object.cursor()
    cursor.execute(sql, args,)
    record = cursor.fetchall()
    connection_object.commit()
    cursor.close()
    connection_object.close()
    print("MySQL connection is closed")
    print("Your connected to - ", record)
    return record

with open('data/taipei-attractions.json', 'r' , encoding='utf-8') as j:
    data = json.load(j)
    data = data["result"]["results"]

# print(data["result"]["results"][0])

# def splitHttp (String):
#     Rex = re.compile(r"https?:\/\/", flags=re.I)
#     URLIndices = []
#     matches = re.finditer(Rex, String)
#     for match in matches:
#         URLIndices.append(match.start(0)) #紀錄每一個匹配的起點index，由於 finditer 會尋找非重疊的匹配。

#     for i in range(0, len(URLIndices)):
#         if (i + 1) < len(URLIndices):
#             print(String[URLIndices[i]:URLIndices[i+1]])
#         else:
#             print(String[URLIndices[i]:])
#     return URLIndices
    
def splitHttp (String):
    Rex = re.compile(r"https?:\/\/", flags=re.I)
    URL = []
    matches = re.finditer(Rex, String)

    previous = -1

    for match in matches:
        start = match.start(0)
        if previous > -1:
            URL.append(String[previous:start])
        previous = start

    if previous > -1:
        URL.append(String[previous:])

    return URL

def splitExtension (List):
    Rex = re.compile(r"jpg", flags=re.I)
    return [i for i in List if re.search(Rex, i)]
SQLData = []
for datum in data:
    id = datum["_id"]
    name = datum["name"]
    category = datum["CAT"]
    description = datum["description"]
    address = datum["address"]
    transport = datum["direction"]
    mrt = datum["MRT"]
    lat = datum["latitude"]
    lng = datum["longitude"]
    images = splitHttp(datum["file"])
    images = splitExtension(images)
    SQLData.append(
        {
            "id": id,
            "name": name,
            "category": category,
            "description": description,
            "address": address,
            "transport": transport,
            "mrt": mrt,
            "lat": lat,
            "lng": lng,
            "images": images
        }
    )
for fields in SQLData:
    # print(fields['id'], fields['name'], fields['category'], fields['description'], fields['address'], fields['transport'], fields['mrt'], fields['lat'], fields['lng'])
    # print(fields['mrt'])
    for files in fields['images']:
        sql = """
        insert into urls (id, url) values(%s, %s)
        """
        args = (fields['id'], files)
        requestCon(sql, args)
    # requestCon(sql, args)

print("inset completed")
    # print(SQLData)
#       "id": 10,
#       "name": "平安鐘",

#       "category": "公共藝術",
#       "description": "平安鐘祈求大家的平安，這是為了紀念 921 地震週年的設計",
#       "address": "臺北市大安區忠孝東路 4 段 1 號",
#       "transport": "公車：204、212、212直",
#       "mrt": "忠孝復興",
#       "lat": 25.04181,
#       "lng": 121.544814,
#       "images": [
#         "http://140.112.3.4/images/92-0.jpg ]
