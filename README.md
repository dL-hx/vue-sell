# sell

> sell app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



项目目录结构的设计
``` js

├─build
├─config
├─node_modules
├─resource-------资源文件
├─src
│  ├─common-----公共资源
│  │  ├─fonts
│  │  ├─js
│  │  └─stylus----预处理模块: .styl格式的文件/ .less , .scss文件
│  └─components---组件资源
│      └─header
└─static
```

前后端分离方式,   前后端各司其职,   各自开发,    联调

SPA中(单页应用中),   前后端联调,

前端需要一些Mock(假数据), 模拟服务端请求

=====
技巧1: Map映射变量类型
``` vue


     <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>


 created(){// 转换为对应的样式
    // 映射为Map
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']

  }


  .support {
        .icon {
        ....

          &.decrease {
            .bg-image('decrease_1');
          }

          &.discount {
            .bg-image('discount_1');

          }

          &.guarantee {
            .bg-image('guarantee_1');
          }

          &.invoice {
            .bg-image('invoice_1');
          }

          &.special {
            .bg-image('special_1');
          }
        }
      }

```
