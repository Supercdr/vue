# vue笔记

## vue.config.js配置文件
>1.使用vue inspect > output.js可以查看到Vue脚手架的默认配置，但是不能更改
>2.使用vue.config.js可以对脚手架进行个性化定制，详情见Vue官网：https://cli.vuejs.org/zh/config/

## ref属性
> 1.被用来给元素或子组件注册引用信息（id的替代者）
> 2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
> 3.使用方式：
      *添加标识：`<h1 ref="xxx"></h1>`或`<School ref="xxx"></School>`
      获取：this.$refs.xxx*

## 配置项props
>##### 功能：让组件接收外部传过来的数据
(1）传递数据:`<Demo name="xxx">`
(2) 接收数据：
 >       1.只接收：props:[name]

 >       2.接受的同时限制类型：

      props：{
            name:String,
            age:Number
      }


>       3.限制类型+限制必要性+指定默认值


        props:{
            name:{
                  type:String,
                  required:true  //必要性
            },
            age:{
                  type:Number,
                  default:99  //默认值
            }
        }

>备注：props是只读的，Vue底层会监测props的改变，如果进行了修改，就会发出警告。若业务需求确实需要更改，那么请复制一份props的内容到data中，然后去修改data中的数据。
   