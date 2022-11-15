import json, re

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

for datum in data:
    SQLData = []
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
    print(SQLData)
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
