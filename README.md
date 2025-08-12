# 使用IPV6网络访问，IPV4网络无法获取URL资源和数据

###  1、使用库
npm i @reduxjs/toolkit react-redux
npm i -D @craco/craco
npm install axios --save

### 2、后端使用
1、导航栏、底部栏路由信息从后端获取
2、底部、侧边导航栏联系方式
3、产品展示页数据
4、产品详情页数据


## 部分组件、页面设计思路

### 页面中部路由信息获取
1、useLocation() 获取当前路由信息
2、解析出 location.pathname 中的信息
3、将解析信息与 Router 信息匹配得到当前路由序号
4、获取参数信息渲染页面

### 产品展示页面设计
将商品名称、图片URL、商品介绍、特点存储存储到数据库 productList 表中