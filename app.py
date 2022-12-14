from flask import *
import json, re, mysql.connector
from mysql.connector import pooling, Error
import jwt, datetime
from flask_cors import CORS
import requests
import uuid
import pytz
import datetime


app=Flask(__name__)
CORS(app)
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
		connection_object.commit()
		cursor.close()
		connection_object.close()
		return record

def isUser(UserToken): 
	userInfo = decoding(UserToken)
	userEmail = userInfo["email"]
	checkDBSQL = """
	select * from member where email = %s
	"""
	args = (userEmail,)
	checkIfMember = requestCon(checkDBSQL, args)
	if checkIfMember:
		return True
	else:
		return False

def makeCategoriesRes(list):
	dataDict = dict()
	temp = []

	for category in list:
		temp.append(category[0])

	dataDict["data"] = temp	
	response = jsonify(dataDict)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

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

	if int(page) >= 0:	
		dataDict["data"] = temp
		if len(list) >= 13:
			dataDict["nextPage"] = int(page) + 1
			response = jsonify(dataDict)
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
			
		else:
			dataDict["nextPage"] = None
			response = jsonify(dataDict)
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
	else:
		dataDict["data"] = temp[0]
		response = jsonify(dataDict)
		response.headers.add('Access-Control-Allow-Origin', '*')
		return response

def handleOrderData(list):
	resp = dict()
	resp["data"] = dict()
	resp["data"]["attraction"] = dict()
	resp["data"]["attraction"]["id"] = list[0][3]
	resp["data"]["attraction"]["name"] = list[0][6]
	resp["data"]["attraction"]["address"] = list[0][7]
	resp["data"]["attraction"]["image"] = list[0][8]
	resp["data"]["date"] = list[0][9]
	resp["data"]["time"] = list[0][4]
	resp["data"]["price"] = list[0][5]
	return make_response(jsonify(resp),200)

def err(e, statusCode):
	msg = dict()
	msg["error"] = True
	msg["message"] = e
	response = jsonify(msg)
	response.headers.add('Access-Control-Allow-Origin', '*')
	return make_response(msg, statusCode)


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

def encoding(userInfo):
	secret = "B2822A1AC88C59F4A809E62C55D8B731BF6A092799BA3A591BB8F80D61A6EFE7"
	encode_jwt = jwt.encode(userInfo, secret, algorithm='HS256')
	return encode_jwt

def decoding(usrToken):
	secret = "B2822A1AC88C59F4A809E62C55D8B731BF6A092799BA3A591BB8F80D61A6EFE7"
	userInfo = jwt.decode(usrToken, secret, algorithms='HS256')
	return userInfo

@app.route("/api/profiles",methods=['POST','GET','DELETE'])
def profiles():
	userToken = request.cookies.get('token')
	if (isUser(userToken)):
		userInfo = decoding(userToken)
		print(userInfo)
		if request.method == 'POST':
			json = request.json
			print(json)
			avatarPic = json["url"]
			email = json["email"]
			updateAvtarsql = """
			UPDATE member SET avatar = %s
			where email = %s;
			"""
			args = (avatarPic, email)
			requestCon(updateAvtarsql, args)

			return make_response(jsonify(json), 200)
	else:
		return err("???????????????", 403)	

@app.route("/api/booking", methods=['POST','GET','DELETE'])
def book():
	userToken = request.cookies.get('token')
	print(userToken)
	if (isUser(userToken)):
		userInfo = decoding(request.cookies.get('token'))
		userID = userInfo["id"]
		userName = userInfo["name"]
		userEmail = userInfo["email"]
		print(userInfo)
		crossCheckedToken = encoding(userInfo)
		print(1)
		if request.method == 'POST':
			print(2)
			json = request.json
			time = json["time"]
			price = json["price"]
			id = json["attractionId"]
			date = json["date"]
			QueryData = loopUpId(id).get_json()
			site = QueryData["data"]["name"]
			address = QueryData["data"]["address"]
			image = QueryData["data"]["images"][0]
			checkOrderSQL = """
			select * from booking where userEmail = %s;
			"""
			args = (userEmail,)
			order = requestCon(checkOrderSQL, args)
			if order:
				overwriteSQL = """
				UPDATE booking SET
				userName = %s,
				userID = %s,
				attractionID = %s,
				time = %s,
				price =%s,
				site = %s,
				address = %s,
				image = %s,
				date = %s
				WHERE
				userEmail = %s;
				"""
				args = (userName, userID, id, time, price, site, address, image, date, userEmail)
				requestCon(overwriteSQL, args)
				resp = dict()
				resp["ok"] = True
				return make_response(jsonify(resp), 200)

			elif order == []: 
				orderSQL = """
				insert into booking (userEmail, userName, userID, attractionID, time, price, site, address, image, date) 
				values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
				"""
				args = (userEmail, userName, userID, id, time, price, site, address, image, date)
				requestCon(orderSQL, args)
				resp = dict()
				resp["ok"] = True
				return make_response(jsonify(resp), 200)

			else: 
				return err("????????????", 400)
		
		elif request.method == 'GET':
			orderSQL = """
			select * from booking where userEmail = %s;
			"""
			args = (userEmail,)
			order = requestCon(orderSQL, args)
			# print(order)
			if order != []:
				resp = handleOrderData(order)
				# print(resp.get_json())
				return resp.get_json()
			else:
				resp = dict()
				resp["data"] = None
				return make_response(resp, 200)
				
			
		elif request.method == 'DELETE':
			deleteSQL = """
			delete from booking where userEmail = %s;
			"""
			args = (userEmail,)
			requestCon(deleteSQL, args)
			resp = dict()
			resp["ok"] = True
			return make_response(jsonify(resp), 200)
		else:
			# print(3)
			return err("?????????????????????", 500)
	else:
		return err("???????????????", 403)

@app.route("/api/categories")
def lookUpCateAPI():
	if request.method == 'GET':
		sql = """
		select * from category;
		"""
		categories = requestCon(sql, None)
		categoriesJson = makeCategoriesRes(categories)
		if not categories:
			msg = "???????????????"
			return err(msg, 500)
		else:
			return categoriesJson

@app.route("/api/user", methods=['POST'])
def register():
	content_type = request.headers.get('Content-Type')
	if (content_type == 'application/json'):
		json = request.json
		# print(json)
		name = json["name"]
		email = json["emailAccount"]
		pwd = json["password"]
		sql = """
		select email from member where email = %s;
		"""
		emailArg = (email,)
		if requestCon(sql, emailArg) != []:
			e = "????????????????????????????????????????????????"
			return make_response(err(e, 400))
		else:
			insertSQL = """
			insert into member (name, email, pwd) values (%s,%s,%s);
			"""
			args = (name, email, pwd)
			requestCon(insertSQL, args)
			resp = dict()
			resp["ok"] = True
			resp = jsonify(resp)
			resp.headers.add('Access-Control-Allow-Origin', '*')
			return resp
	else:
		return 'Content-Type not supported'


@app.route("/api/user/auth", methods=['GET', 'PUT', 'DELETE'])
def auth():
	secret = "B2822A1AC88C59F4A809E62C55D8B731BF6A092799BA3A591BB8F80D61A6EFE7"
	content_type = request.headers.get('Content-Type')
	if (content_type == 'application/json'):
		if (request.method == 'PUT'):
			json = request.json
			email = json["emailAccount"]
			pwd = json["password"]
			authSQL = """
			select * from member where email = %s and pwd = %s;
			"""
			authArgs = (email, pwd)
			memberInfo = requestCon(authSQL, authArgs)
			if memberInfo:
				userInfo = dict()
				userInfo["id"] = memberInfo[0][0]
				userInfo["name"] = memberInfo[0][1]
				userInfo["email"] = memberInfo[0][2]
				userInfo["avatar"] = memberInfo[0][4]
				encode_jwt = jwt.encode(userInfo, secret, algorithm='HS256')
				# print(encode_jwt)
				resp = dict()
				resp["ok"] = True
				resp = jsonify(resp)
				resp = make_response(resp, 200)
				expire_date = datetime.datetime.now()
				expire_date = expire_date + datetime.timedelta(days=7)
				resp.set_cookie(key='token', value=encode_jwt, expires=expire_date)
				resp.headers.add('Access-Control-Allow-Origin', '*')
				return resp
			else:
				msg = "???????????????????????????????????????????????????"
				return err(msg, 400)
		elif (request.method == 'GET'):
			userToken = request.cookies.get('token')
			print(userToken)
			if userToken:
				# print(userToken)
				userInfo = jwt.decode(userToken,secret, algorithms='HS256')
				email = userInfo["email"]
				updateUserSatusSQL = """
				select * from member where email = %s;
				"""
				args = (email,)
				userNewStatus = requestCon(updateUserSatusSQL, args)
				userInfo = dict()
				userInfo["id"] = userNewStatus[0][0]
				userInfo["name"] = userNewStatus[0][1]
				userInfo["email"] = userNewStatus[0][2]
				userInfo["avatar"] = userNewStatus[0][4]
				resp = make_response(userInfo, 200)
				resp.headers.add('Access-Control-Allow-Origin', '*')
				return resp
			else:
				resp = dict()
				resp['id'] = None
				resp = make_response(resp)
				resp.headers.add('Access-Control-Allow-Origin', '*')
				return resp
		elif (request.method == 'DELETE'):
			userToken = request.cookies.get('token')
			resp = dict()
			resp["ok"] = True
			resp = jsonify(resp)
			resp = make_response(resp, 200)
			resp.set_cookie(key='token', value=userToken, expires=0)
			resp.headers.add('Access-Control-Allow-Origin', '*')
			return resp			
	else:
		msg = "?????????????????????"
		return err(msg, 500)

# @app.route("/api/user/auth")
# def checkUserStatus():
# 	userToken = request.cookies.get('token')
# 	secret = "B2822A1AC88C59F4A809E62C55D8B731BF6A092799BA3A591BB8F80D61A6EFE7"
# 	if userToken:
# 		userInfo = jwt.decode(userToken,secret, algorithms='HS256')
# 		print(userInfo)
# 		return
# 	else:
# 		return

@app.route("/api/orders", methods=['GET', 'POST'])
def ordersHandler():
	userToken = request.cookies.get('token')
	if (isUser(userToken)):
		data = dict()
		data["cardholder"] = dict()
		if request.method == 'POST':
			order = request.json
			data["prime"] = order["prime"]
			data["partner_key"] = "partner_IFz9mEpscF0mhV9nXpnSiALckVxIMs91KtxjfQt33LEDs5VsdCmCo8io"
			data["merchant_id"] = "ken5475ht_ESUN"
			data["details"] = "TapPay Test"
			data["amount"] = order["order"]["price"]
			data["cardholder"]["phone_number"] = order["order"]["trip"]["contact"]["phone"]
			data["cardholder"]["name"] = order["order"]["trip"]["contact"]["name"]
			data["cardholder"]["email"] = order["order"]["trip"]["contact"]["email"]
			orderid = str(uuid.uuid4())
			RecordOrderSQl = """
			insert into orderDetails (orderid, prime, price, siteid, name, address, image, date, time, username, email, phone, orderStatus) 
			values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
			"""
			args = (orderid, order["prime"], order["order"]["price"], order["order"]["trip"]["attraction"]["id"],
			order["order"]["trip"]["attraction"]["name"], order["order"]["trip"]["attraction"]["address"],
			order["order"]["trip"]["attraction"]["image"], order["order"]["trip"]["date"], order["order"]["trip"]["time"],
			order["order"]["trip"]["contact"]["name"], order["order"]["trip"]["contact"]["email"], order["order"]["trip"]["contact"]["phone"],
			"?????????")
			requestCon(RecordOrderSQl, args)

			RecordPaymentSQL = """
			insert into paymentDetails (orderid) values (%s);
			"""
			PaymentArgs = (orderid,)
			requestCon(RecordPaymentSQL, PaymentArgs)
			headers = {'Content-Type': 'application/json',
						'x-api-key': 'partner_IFz9mEpscF0mhV9nXpnSiALckVxIMs91KtxjfQt33LEDs5VsdCmCo8io'}
			response = requests.post('https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime', json=data, headers=headers)
			if (response.json()["status"] == 0):
				frontEndResp = dict()
				frontEndResp["data"] =dict()
				frontEndResp["data"]["payment"] = dict()
				response = response.json()
				print(response)
				UpdatePayStatusSQl = """
				update orderDetails set orderStatus = %s where orderid = %s;
				"""
				args = ("?????????", orderid)
				requestCon(UpdatePayStatusSQl, args)

				UpdatePaymentDetailsSQl = """
				update paymentDetails set 
				status = %s, 
				msg = %s, 
				amount = %s, 
				acquirer = %s, 
				currency = %s, 
				rec_trade_id = %s, 
				bank_transaction_id = %s, 
				auth_code = %s, 
				type = %s, 
				last_four = %s, 
				bin_code = %s, 
				transaction_time_millis = %s, 
				start_time_millis = %s, 
				end_time_millis = %s, 
				card_identifier = %s, 
				merchant_id = %s
				where orderid = %s;
				"""
				updatesArgs = (response["status"], response["msg"], response["amount"], 
				response["acquirer"], response["currency"],
				response["rec_trade_id"], response["bank_transaction_id"], 
				response["auth_code"], response["card_info"]["type"], response["card_info"]["last_four"], 
				response["card_info"]["bin_code"],
				response["transaction_time_millis"], response["bank_transaction_time"]["start_time_millis"],
				response["bank_transaction_time"]["end_time_millis"], response["card_identifier"], 
				response["merchant_id"], orderid)
				
				requestCon(UpdatePaymentDetailsSQl, updatesArgs)
				frontEndResp["data"]["number"] = orderid
				frontEndResp["data"]["payment"]["status"] = response["status"]
				frontEndResp["data"]["payment"]["message"] = "????????????"

				return make_response(jsonify(frontEndResp), 200)
			elif (response.json()["status"] != 0):
				msg = "????????????"
				return err(msg, 400)
			else:
				msg = "???????????????"
				return err(msg, 500)
		elif request.method == 'GET':
			print(1111)
			orderid = request.args.get('number')
			searchOrderSQL = """
			select * from orderDetails where orderid = %s
			"""
			args = (orderid,)
			result = requestCon(searchOrderSQL, args)
			if result != []:
				resp = dict()
				resp["data"] = dict()
				resp["data"]["trip"] = dict()
				resp["data"]["trip"]["attraction"] = dict()
				resp["data"]["contact"] = dict()
				dateTime = result[0][13]
				date = datetime.datetime.strptime(str(dateTime), '%Y-%m-%d %H:%M:%S')
				local_tz = pytz.timezone('Asia/Taipei')
				local_date = date.astimezone(local_tz)
				formatted_date = local_date.strftime('%Y-%m-%d')
				resp["data"]["number"] = result[0][0]
				resp["data"]["price"] = result[0][2]
				resp["data"]["trip"]["attraction"]["id"] = result[0][3]
				resp["data"]["trip"]["attraction"]["name"] = result[0][4]
				resp["data"]["trip"]["attraction"]["address"] = result[0][5]
				resp["data"]["trip"]["attraction"]["image"] = result[0][6]
				resp["data"]["trip"]["date"] = formatted_date
				resp["data"]["trip"]["time"] = result[0][8]
				resp["data"]["contact"]["name"] = result[0][9]
				resp["data"]["contact"]["email"] = result[0][10]
				resp["data"]["contact"]["phone"] = result[0][11]
				resp["data"]["status"] = 1
				return make_response(jsonify(resp), 200, {'Content-Type': 'application/json'})
			else:
				msg = "????????????????????????"
				return err(msg, 403)
			return orderid
	else:
		msg = "???????????????"
		return err(msg, 403)

@app.route("/api/history", methods=['GET','POST'])
def queryHistory():
	userToken = request.cookies.get('token')
	if (isUser(userToken)):
		email = request.args.get('email')
		if request.method == 'GET':
			if email != None:
				queryHistorySQl = """
				select orderid, price, name, time, orderStatus from orderDetails
				where email = %s;
				"""
				args = (str(email),)
				orders = requestCon(queryHistorySQl,args)
				resp = []
				for order in orders:
					resp.append({ 
						'orderuui': order[0],
						'price': order[1],
						'site': order[2],
						'time': order[3],
						'orderSatus': order[4]
					})
				return make_response(resp, 200)
			else:
				msg = "?????????email?????????"
				return err(msg, 400)
	else:
		msg = "???????????????"
		return err(msg, 403)


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
				msg = "???????????????"
				return err(msg, 500)
			else:
				newSites = appendURLs(sites)
				newSites = makeAttractionsResp(newSites,page)
				return make_response(newSites, 200)

		elif page != None and keyword != None:
			newSites = []
			sql = """
			select * from websql where category = %s order by id limit 13 offset %s;
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
					msg = "??????????????????"
					return err(msg, 400)
		else:
			msg = "???????????????"
			return err(msg, 500)

			
@app.route("/api/attraction/<attractionId>")
def loopUpId(attractionId):
	if attractionId:
		sql = """
				select * from websql where id = %s;
				"""
		args = (attractionId,)
		sites = requestCon(sql, args)
		if sites:
			newSites = appendURLs(sites)
			newSites = makeAttractionsResp(newSites, -1)
			return newSites
		else:
			msg = "??????????????????"
			return err(msg, 400)
	else:
		msg = "??????????????????"
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
@app.route("/member")
def member():
	return render_template("member.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)