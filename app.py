from flask import *
import json, re, mysql.connector
from mysql.connector import pooling, Error

app=Flask(__name__)
app.config["JSON_AS_ASCII"]=False
app.config["TEMPLATES_AUTO_RELOAD"]=True
app.config["JSON_SORT_KEYS"] = False

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
	if args == None:
		cursor.execute(sql)
		record = cursor.fetchall()
		cursor.close()
		connection_object.close()
		return record
	else:
		cursor.execute(sql, args)
		record = cursor.fetchall()
		# connection_object.commit()
		cursor.close()
		connection_object.close()
		return record

def makeAttractionsResp(list, page):
	dataDict = dict()
	dataDict["data"] = dict()
	temp = []
	if len(list) == 13:
		for i in range(0,12):
				temp.append(
					{
						"id": list[i][0],
						"name": list[i][1],
						"category": list[i][2],
						"description": list[i][3],
						"address": list[i][4],
						"transport": list[i][5],
						"mrt": list[i][6],
						"lat": list[i][7],
						"lng": list[i][8],
						"images":list[i][9]
					}
				)
	else: 
		for i in range((len(list))):
			temp.append(
					{
						"id": list[i][0],
						"name": list[i][1],
						"category": list[i][2],
						"description": list[i][3],
						"address": list[i][4],
						"transport": list[i][5],
						"mrt": list[i][6],
						"lat": list[i][7],
						"lng": list[i][8],
						"images":list[i][9]
					}
				)
		
	dataDict["data"] = temp
	if len(list) >= 13:
		dataDict["nextPage"] = int(page) + 1
		
	else:
		dataDict["nextPage"] = None

	return jsonify(dataDict)

def err(e, statusCode):
	msg = dict()
	msg["error"] = True
	msg["message"] = e
	return make_response(jsonify(msg), statusCode)


def appendURLs(sites):
	newSites = []
	for site in sites:
		args = (site[0],)
		urlsql = """
		select url from urls where id = %s
		"""
		urls = (requestCon(urlsql, args))
		newUrls = []
		for url in urls:
			newUrls.append(url[0])
		site += (newUrls,)
		newSites.append(site)
	return newSites


@app.route("/api/attractions")
def lookUpSitesAPI():
	if request.method == 'GET':
		page = request.args.get('page')
		keyword = request.args.get('keyword')
		if page != None and keyword == None:
			# newSites = []
			sql = """
			select * from websql order by id limit 13 offset %s;
			"""
			offset = int(page) * 12
			args = (offset,)
			sites = requestCon(sql, args)
			if not sites:
				msg = "伺服器錯誤"
				return err(msg, 500)
			else:
				newSites = appendURLs(sites)
				newSites = makeAttractionsResp(newSites,page)
				return make_response(newSites, 200)

		elif page != None and keyword != None:
			newSites = []
			sql = """
			select * from websql where name = %s order by id limit 13 offset %s;
			"""
			offset = int(page) * 12
			args = (keyword, offset)
			sites = requestCon(sql, args)
			if sites != []:
				newSites = appendURLs(sites)
				newSites = makeAttractionsResp(newSites,page)
				return make_response(newSites, 200)
			else:
				sql = """
				select * from websql where name like %s order by id limit 13 offset %s;
				"""
				keyword = "%" + keyword + "%"
				args = (keyword, offset)
				sites = requestCon(sql, args)
				if sites: 
					newSites = appendURLs(sites)
					newSites = makeAttractionsResp(newSites,page)
					return make_response(newSites, 200)
				else:
					msg = "輸入資料錯誤"
					return err(msg, 400)
		else:
			msg = "伺服器錯誤"
			return err(msg, 500)

			
@app.route("/api/attractions/<attractionId>")
def loopUpId(attractionId):
	if attractionId:
		sql = """
				select * from websql where id = %s;
				"""
		args = (attractionId,)
		sites = requestCon(sql, args)
		if sites:
			newSites = appendURLs(sites)
			newSites = makeAttractionsResp(newSites, 0)
			return newSites
		else:
			msg = "輸入資料錯誤"
			return err(msg, 400)
	else:
		msg = "輸入資料錯誤"
		return err(msg, 400)

# Pages
@app.route("/")
def index():
	return render_template("index.html")
@app.route("/attraction/<id>")
def attraction(id):
	return render_template("attraction.html")
@app.route("/booking")
def booking():
	return render_template("booking.html")
@app.route("/thankyou")
def thankyou():
	return render_template("thankyou.html")

app.run(port=3000)