# 交易客户端

1. 数据接口

> app

2. 模块

3. 路由

4. [后端接口(restful)]()
* 用户模块

>> 数据

 userid | username | password| email|phone| 
:-:|:-:|:-: |:-:|:-: |:-:|
用户id|用户名|密码|邮箱|联系方式|

 模块 | 路径 | 方法
:-:|:-:|:-:
user(下)|/v1/user|post
user(改)|/v1/user/id|put
user(撤)|/v1/user/id|delete
user(查)|/v1/user/id|get
user(查)|/v1/user?offset=0&limit=20|get


* 订单模块
>> 数据

 orderid | order_exchange_id | user_id| exchange_code|code| buy_sale| order_number| order_price| price_type| trigger_price| validate| max_show| min_qty|
:-:|:-:|:-: |:-:|:-: |:-:|:-: |:-:|:-: |:-:|:-: |:-:|:-: 
订单id|订单交易id|用户id|交易所编号|合约编号|买卖方向|委托数量|委托价格|订单类型|触发价格|有效日期|冰山数量|最小成交量|

 模块 | 路径 | 方法
:-:|:-:|:-:
order(下)|/v1/order|post
order(改)|/v1/order/id|put
order(撤)|/v1/order/id|delete
order(查)|/v1/order/id|get
order(查)|/v1/order?offset=0&limit=20|get

* 成交模块
>> 数据

 filled_no | user_id | order_no| system_no|exchange_code| code| buy_sale| filled_number| filled_date| filled_time| hts_code| 
:-:|:-:|:-: |:-:|:-: |:-:|:-: |:-:|:-: |:-:|:-: |
成交编号|客户编号|订单号|系统号|交易所编号|合约编号|买卖方向|成交量|成交日期|成交时间|委托数量|


模块 | 路径 | 方法
:-:|:-:|:-:
deal(查)|/v1/deal/id|get
deal(查)|/v1/deal?offset=0&limit=20|get

* 持仓模块
>> 数据

user_id | exchange_no | commodity_no|constrat_no| match_date|match_no| direct| hold_vol| hold_price| delivery_date|
:-:|:-:|:-: |:-:|:-: |:-:|:-: |:-:|:-: |:-: |
用户id|交易所编号|商品编号|合约月份|成交日期|成交编号|持仓方向|持仓量|持仓价格|合约交割日

模块 | 路径 | 方法
:-:|:-:|:-:
position(查)|/v1/position/id|get
position(查)|/v1/position?offset=0&limit=20|get
position(改)|/v1/position/id|put
position(清仓)|/v1/position/id|delete

* 产品模块

>> 数据

commodity_no | exchange_no | code_id|inc_id| combo| sicksize| 
:-:|:-:|:-: |:-:|:-: |:-:|:-: |:-:|
商品号|交易所编号|合约名称|原始合约名称|是否跨期|跳点|

模块 | 路径 | 方法
:-:|:-:|:-:
commodity(查)|/v1/commodity/id|get
commodity(查)|/v1/commodity?offset=0&limit=20|get