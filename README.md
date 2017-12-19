# Couldbooks

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### 1.当月汇总数据接口

#### 

```properties
url: {host}/billingtask/report
method:POST
Content-Type :application/json
```

**request**

```json
{
  	"accountUid":accountUid, //用户id
	"costTime":"2017-12-01"//查询月份 格式yyyy-mm-01 
}
```

**response**

```json
{
    "success": true,
    "msg": null,
    "errCode": 0,
    "data": {
        "sign": 2000,//签名服务
        "timestamp": 1000,//时间戳
        "rn": 15,//实名认证
        "conserve_bs": "10",//原文保全基础版（kb）
      	"conserve_hi": "10",//原文保全高级版（kb）
        "conserve_zy": "10",//摘要存证（kb）
        "iss": 100,//出证服务
        "will": 1//短信服务
    }
}
```

### 2.分项-每月数据

```properties
url: {host}/billingtask/report/year
method:POST
Content-Type :application/json
```

**request**

```json
{
  	"accountUid":"88CEBB6AB1684561A3AFA3CB69C1ACBB",
	"type":"sign"
}
```

**response**

```json
{
    "success": true,
    "msg": null,
    "errCode": 0,
    "data": [
        {
            "costTime": "2017-12-01",
            "cost": 1
        },
        {
            "costTime": "2017-11-01",
            "cost": 41
        },
        {
            "costTime": "2017-10-01",
            "cost": 1
        }
    ]
}
```



### 3.实名认证和出证明细

##### （出证：interfaceType=issuecert，其他是实名认证）

```properties
url: {host}/billingtask/report/item
method:POST
Content-Type :application/json
```

**request**

```json
{
  	"accountUid":"88CEBB6AB1684561A3AFA3CB69C1ACBB",
	"costTime":"2017-11-01"
}
```

**response**

```json
{
    "success": true,
    "msg": null,
    "errCode": 0,
    "data": [
        {
            "interfaceType": "bankauth",
            "subInterfaceType": "bankauth",
            "walletCostNum": 3,
            "walletCost": -2.85
        },
        {
            "interfaceType": "bankauth",
            "subInterfaceType": "mobilecode",
            "walletCostNum": 19,
            "walletCost": -0.95
        },
        {
            "interfaceType": "bizConfirm",
            "subInterfaceType": "bizCheck",
            "walletCostNum": 0,
            "walletCost": 0
        },
        {
            "interfaceType": "facereco",
            "subInterfaceType": "liveExamVSIDPhoto",
            "walletCostNum": 15,
            "walletCost": -3
        },
        {
            "interfaceType": "facereco",
            "subInterfaceType": "ocr",
            "walletCostNum": 30,
            "walletCost": -3
        },
        {
            "interfaceType": "facereco",
            "subInterfaceType": "policeVSLiveExam",
            "walletCostNum": 12,
            "walletCost": -20.4
        },
        {
            "interfaceType": "issuecert",
            "subInterfaceType": "locelect",
            "walletCostNum": 1,
            "walletCost": -10
        },
        {
            "interfaceType": "orgPay",
            "subInterfaceType": "pay",
            "walletCostNum": 27,
            "walletCost": -67.5
        },
        {
            "interfaceType": "orgPay",
            "subInterfaceType": "query",
            "walletCostNum": 242,
            "walletCost": -604.2
        },
        {
            "interfaceType": "orgPayZhiMa",
            "subInterfaceType": "check",
            "walletCostNum": 0,
            "walletCost": 0
        },
        {
            "interfaceType": "psnCheck",
            "subInterfaceType": "idInfoCheck",
            "walletCostNum": 15,
            "walletCost": -12.75
        },
        {
            "interfaceType": "psnZhiMa",
            "subInterfaceType": "check",
            "walletCostNum": 0,
            "walletCost": 0
        },
        {
            "interfaceType": "telecomauth",
            "subInterfaceType": "telecomauth",
            "walletCostNum": 12,
            "walletCost": -12
        }
    ]
}
```



### 实名认证和出证json格式对应表

```json
{
  "orgPayZhiMa": {
    "interfaces": {
      "check": {
        "amount": "2.5",
        "name": "芝麻信用企业实名认证服务"
      }
    },
    "name": "企业实名认证（芝麻信用）",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "psnZhiMa": {
    "interfaces": {
      "check": {
        "amount": "2",
        "name": "芝麻信用人脸识别服务"
      }
    },
    "name": "个人实名认证（芝麻信用人脸识别）",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "orgPay": {
    "interfaces": {
      "query": {
        "amount": "2.5",
        "name": "企业信息对比服务"
      },
      "pay": {
        "amount": "2.5",
        "name": "对公银行打款服务"
      }
    },
    "name": "企业实名认证",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "telecomauth": {
    "interfaces": {
      "telecomauth": {
        "amount": "1",
        "name": "运营商三要素对比服务"
      }
    },
    "name": "运营商三要素对比",
    "description": "运营商三要素对比",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "bankauth": {
    "interfaces": {
      "mobilecode": {
        "amount": "0.05",
        "name": "单独调用短信验证服务"
      },
      "bankauth": {
        "amount": "0.95",
        "name": "银行四要素对比服务"
      },
      "bankauth3": {
        "amount": "0.9",
        "name": "银行三要素对比服务"
      }
    },
    "name": "个人实名认证",
    "description": "个人实名认证（银行三，四要素）",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "facereco": {
    "interfaces": {
      "ocr": {
        "amount": "0.1",
        "name": "OCR识别服务"
      },
      "liveExamVSIDPhoto": {
        "amount": "0.2",
        "name": "活体检测照对比服务"
      },
      "policeVSLiveExam": {
        "amount": "1.7",
        "name": "公安库照片对比服务"
      }
    },
    "name": "个人实名认证",
    "description": "个人实名认证（人脸识别）",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "issuecert": {
    "interfaces": {
      "locelect": {
        "amount": "10",
        "name": "e签宝报告",
        "menuType": 8,
        "coupons": [
          "COUPON_ISS"
        ]
      },
      "locpaper": {
        "amount": "200",
        "name": "e签宝证据报告",
        "menuType": 9,
        "coupons": [
          "COUPON_ISS"
        ]
      },
      "notary": {
        "amount": "998",
        "name": "公证出证",
        "menuType": 12
      },
      "union": {
        "amount": "20",
        "name": "联合证据报告出证",
        "menuType": 10
      },
      "judicial": {
        "amount": "800",
        "name": "司法鉴定意见书出证",
        "menuType": 18
      },
      "notaryCopy": {
        "amount": "50",
        "name": "证据报告副本出证",
        "menuType": 14,
        "coupons": [
          "COUPON_ISS"
        ]
      }
    },
    "productType": "ISSUE_CERT",
    "name": "e签宝出证服务"
  },
  "psnCheck": {
    "interfaces": {
      "idInfoCheck": {
        "amount": "0.85",
        "name": "个人信息对比"
      }
    },
    "name": "个人二要素信息对比",
    "description": "个人二要素信息对比",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "bizConfirm": {
    "interfaces": {
      "bizCheck": {
        "amount": "2.5",
        "name": "非工商信息认证"
      }
    },
    "name": "非工商信息认证服务",
    "description": "非工商信息认证服务",
    "coupons": [
      "COUPON_RN"
    ]
  },
  "sign": {
    "interfaces": {
      "sign": {
        "amount": "2",
        "name": "签署"
      }
    },
    "name": "签署服务",
    "description": "签署服务",
    "coupons": [
      "SIGN"
    ]
  }

}
```
