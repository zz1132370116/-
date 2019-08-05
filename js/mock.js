// //用于模拟数据,如果所有内容被删除,模拟结束

// //注册
// Mock.mock("/web-service/regist","post",{
//     "data":{
//         "errno":"@integer(0,1)",
//         "errmsg":"@cword(5)"
//     }
// })

// //验证码
// Mock.mock("/web-service/sms","post",{
//     "data":{
//         "errno":"@integer(0,1)",
//         "errmsg":"验证码发送失败"
//     }
// })

// //登录
// Mock.mock("/auth-service/login","post",{
//     "data":{
//         "errno":"@integer(0,1)",
//         "errmsg":"@cword(5)",
//         "token":"@guid",
//         "name":"@cname"
//     }
// })


// //快报
// Mock.mock(/\/web-service\/news/,"get",{
// 	"data":{
// 		"errno":"@integer(0,1)",
// 		"errmsg":"@cword(5)",
// 		"total":"21",
// 		"data|9":[{
// 			"id|+1":"1",
//             "title":"@ctitle(6,8)",
//            " created_at":"@date"
		
// 		}]
		
// 	},
	
// })


// //商品分类
// Mock.mock(/\/web-service\/categorys/,"get",{
//     "data|4-13":[{
//         "id|+1":1,
//         "cat_name":"@ctitle(2,5)",
//         "children|4-8":[{
//             "id|+1":100,
//             "cat_name":"@ctitle(2,5)",
//             "children|4-7":[{
//                 "id|+1":1000,
//                 "cat_name":"@ctitle(2,5)",
//             }]
//         }]
//     }]
// })

//楼层
Mock.mock('/web-service/floors','get',{
    'data|5-10':[
        {
            'floor_name':'@ctitle',
            'sub_categorys|7-16':[
                {
                    'id|+1':1,
                    'cat_name':'@ctitle(4,6)'
                }
            ],
            'left_ad':{
                'img':'@dataImage(208x170)',
                'link':"@url('http')"
            },
            'right_ad':{
                'img':'@dataImage(310x100)',
                'link':"@url('http')"
            },
            'news|2-5':[
                {
                    'id|+1':1,
                    'title':'@ctitle'
                }
            ],
            'brands|2-9':[
                {
                    'id|+1':1,
                    'logo':'@dataImage(98x35)',
                    'brand_name':'@ctitle'
                }
            ],
            'rec_goods|3-8':[
                {
                    'id|+1':1,
                    'logo':'@dataImage(130x130)',
                    'price':'@float(10,3000,1,2)',
                    'goods_name':'@ctitle'
                }
            ],
            'rec_categorys|1-4':[
                {
                    
                    'id|+1':1,
                    'cat_name':'@ctitle',
                    'goods|3-8':[
                        {
                            'id|+1':1,
                            'logo':'@dataImage(130x130)',
                            'price':'@float(1,1000,1,2)',
                            'goods_name':'@ctitle'
                        }
                    ]
                }
            ]        
        }

    ]

});
//搜索
Mock.mock(/\/search-service\/search/,"get",{

    'count|30-60':'@integer(10,100)',
    'data|30-60':[
        {
            "id|+1":"1",
            "brand_name":"@ctitle",
            "price":"@float(1,1000,1,2)",
            "img":"@dataImage(130x130)",
            "comment_count":"@integer",
        }]

})

//条件筛选
Mock.mock("/conditionSearch","post",{
    //品牌
    'brand_list|0-20':[{
        'id|+1':1,
        'brand_name':'@ctitle',
        'logo':'@dataImage(100x100)',
        'link':'@url(http)'
    }],
    'category_goods|0-10':[{
        'id|+1':1,
        'category_name':'@ctitle',
        'link':'@url(http)'
    }],
    'spec_list|3':[{
        'id|+1':1,
        'spec_name':'@ctitle(2,4)',
       
        'options|4':[
            {
                'id|+1':1,
                'option_name':'@ctitle',
                'selected':false,
            }
        ]
    }]

})

// 商品详情页（接口上有参数必须用正则）
Mock.mock(/\/web-service\/goods\/\d+/,'get',{
    'skuid':'@id',
    'spuid':'@id',
    'goods_name':'@ctitle(30,40)',
    'price':'@float(10,200000,0,2)',
    'on_sale_date':'@datetime',
    'comment_count':'@integer(10,20000)',
    'comment_level':'@integer(1,5)',
    'cat1_info':{
        'id':'@id',
        'cat_name':"@ctitle"
    },
    'cat2_info':{
        'id':'@id',
        'cat_name':"@ctitle"
    },
    'cat3_info':{
        'id':'@id',
        'cat_name':"@ctitle"
    },
    'logo':{
        'smlogo':'@dataImage(50x50)',
        'biglogo':'@dataImage(350x350)',
        'xbiglogo':'@dataImage(800x800)',
    },
    'photos|3-10':[
        {
            'smimg':'@dataImage(50x50)',
            'bigimg':'@dataImage(350x350)',
            'xbigimg':'@dataImage(800x800)',
        }
    ],
    'description':'@ctitle(100,3000)',
    'aftersale':'@ctitle(100,3000)',
    'stock':"@integer(10,3000)",
    'spec_list':[
        {
            'id':1,
            "spec_name":"颜色",
            "options":[
                {
                    "id":1,
                    "option_name":"白色"
                },
                {
                    "id":2,
                    "option_name":"黑色"
                }
            ]
        },
        {
            'id':2,
            "spec_name":"内存",
            "options":[
                {
                    "id":6,
                    "option_name":"4G"
                },
                {
                    "id":7,
                    "option_name":"8G"
                },
                {
                    "id":8,
                    "option_name":"16G"
                }
            ]
        }
    ],
    'spec_info':{
        'id_list':'1:2|2:6',
        'id_txt':"颜色:黑色|内存:4G"
    },
    'sku_list':[
        {
            'skuid':'1226',
            'id_list':'1:2|2:6'
        },
        {
            'skuid':'1227',
            'id_list':'1:2|2:7'
        },
        {
            'skuid':'1228',
            'id_list':'1:2|2:8'
        },
        {
            'skuid':'1126',
            'id_list':'1:1|2:6'
        },
        {
            'skuid':'1127',
            'id_list':'1:1|2:7'
        },
        {
            'skuid':'1128',
            'id_list':'1:1|2:8'
        },
    ]
})

//评论
Mock.mock(/\/comments\/\d+/,'get',{
    data:{
        'impressions|3-5':[{
            'title':"@ctitle(0,5)",
            'count':"@integer(0,10000)"
        }],
        'ratio':{
            'goods':"@integer(1,100)",
            'common':"@integer(1,100)",
            'bad':"@integer(1,100)",
        },
         comment_count:"@Integer(1,200)",
          'comment|5-10':[
               {
                   'id':"@id",
                   'star':"@integer(1,5)",
                   'created_at':"@datetime",
                   'content':"@ctitle(5,50)",
                   'user':{
                       'id':"@id",
                       'face':"@dataImage",
                       'name':"@cname"
                   }
               }
           ]
    }
})
//加入购物车
Mock.mock("/cart-service/carts","post",{
    "data":{
        "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
        "errmsg":"@csentence(5,20)" // 中文提醒
    }
  
})

//购物车列表展示
Mock.mock("/cart-service/carts","get",{
    "data|5-10" : [
        {
            "skuid" : "@id",
            "goods_name" : "@ctitle",            //商品名称
            "price" : "@float(10,20000,0,2)",   //价格
            "count" : "@integer(1,5)",          //数量
            "checked|1":true,
            "midlogo" : "@dataImage(50x50)",    //图片
            "spec_info" : "颜色:黑色|内存:8G"    //规格
        }
    ]
})

//修改购物车
Mock.mock(/\/cart-service\/carts\/\d+/,"put",{
    "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
    "errmsg":"@csentence(5,20)" // 中文提醒
})

//删除购物车
Mock.mock(/\/cart-service\/carts\/\d+/,"get",{
    "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
    "errmsg":"@csentence(5,20)" // 中文提醒
})

//搜索商品
Mock.mock("/search-service/goods","post",{
    "count" : "@integer(10,20000)",
    "data|20" : [
        {
            "skuid" : "@id",
            "goods_name" : "@ctitle",
            "price" : "@float(10,20000,0,2)",
            "midlogo" : "@dataImage(130x130)",
            "comment_count" : "@integer(10,20000)"
        }
    ]
})

// //查询品牌
// Mock.mock(/\/search-service\/brands\/\d+/,"get",{
//     "data|5-15" : [
//         {
//             "id" : "@id",
//             "brand_name" : "@ctitle(5,10)",
//             "logo" : "@dataImage(98x35)"

//         }
//     ]
// })

//获取规格
Mock.mock(/\/search-service\/specations\/\d+/,"get",{
    "data|2-5" : [
        {
            "id" : "@id",
            "spec_name" : "@ctitle(1,5)",
            "selected" : "",
            "options|5-10" : [
                {
                    "id" : "@id",
                    "option_name" : "@ctitle(5,10)"
                }
            ]
        }
    ]
})

//用户地址信息
Mock.mock("/web-service/address","get",{
    "data|2-5" : [
        {
            "id" : "@id",
            "shr_name" : "@cname",
            "shr_mobile" : /^[1][34578][0-9]{9}$/,
            "shr_province" : "@province",
            "shr_city" : "@city",
            "shr_county" : "@county",
            "shr_address" : "@ctitle(10,30)",
            "shr_default" : "integer(0,1)"
        }
    ] 
})

//添加地址信息
Mock.mock("/web-service/address","post",{
    "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
    "errmsg":"@csentence(5,20)", // 中文提醒,
    "id" : "@id"
})

//生成订单
Mock.mock("/order-service/orders","post",{
    "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
    "errmsg":"@csentence(5,20)", // 中文提醒
    "sn" : "@id"
})

//付款
Mock.mock("/order-service/pay","post",{
    "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
    "errmsg":"@csentence(5,20)", // 中文提醒
    "wxurl" : "@url"        //支付地址
})

//订单状态
Mock.mock(/\/order-service\/order_status\/\d+/,"get",{
    "errno":"@integer(0,1)", // 错误编码 0 成功 1  失败
    "errmsg":"@csentence(5,20)", // 中文提醒
    "pay_status" : "@integer(0,1)"        //支付状态 (0: 支付成功 ; 1: 支付失败)
})



//秒杀接口返回值订单
Mock.mock("/seckill/goods","get",{
    'seckill_list|8-20':[{
        'id|+1':1,
        'goods_name':'@ctitle(20,30)',
        //原价
        'price':'@float(500,1000,1,2)',
        //打折后的价格
        'cost_price':'@float(100,500,1,2)',
        //库存
        'num':'@integer(10,20)',
        //剩余库存
        'stock_count':'@integer(1,10)',
        //秒杀图片
        'pic':'@dataImage(290x290)',
        //秒杀开始时间
        'start_time':'@datetime',
        //秒杀结束时间
        'end_time':'@datetime',
        'desc':'@ctitle'
    }]
})
