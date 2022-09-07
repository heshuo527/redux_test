### redux理解

    redux是什么
        1.redux是一个专门用作于状态管理的js库(不是react插件库)
        2.它可以在react, angular, vue等项目中,但基本与react配合使用
        3.作用:集中式管理react应用中多个组件共享状态

    什么情况下使用redux
        1.某个组件的状态,需要让其他组件可以随时拿到(共享)
        2.一个组件需要改变另外一个组件的状态(通信)
        3.总体原则:能不用就不用,如果不用比较吃力才考虑使用

    redux工作流程详见目录下的原理图

### 1.求和案例_redux精简版
    1.去除Count组件自身的状态
    2.src下建立:
        redux文件夹
            store.js
            count_reducer.js
    3.store.js
        1).引入redux中的createStore函数,创建一个store
        2).createStore调用时要传入一个为其服务的reducer
        3).记得暴露store对象
    4.count_reducer.js
        1).reducer的本质是一个函数,接收: preState, action,返回加工后的状态
        2).reducer有两个作用:初始化状态,加工状态
        3).reducer被第一次调用时:是store自动触发的,
            传递的preState是undefined,
            传递的action是:{type:type:'@@REDUX/INIT_a.2.b.4}}}
    5.在index.js中监测store中状态的改变,一旦改变就重新渲染<App/>
        备注:redux只负责管理状态,至于状态的改变驱动着页面的展示,需要我们自己写.
