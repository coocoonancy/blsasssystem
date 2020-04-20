1. 技术栈 vue+axios+element+webpack+echarts
2. 可配置页面设计
> 布局
  ###### 左右结构布局
  - 左侧菜单为不同的页面入口与pid关联
  - 右侧由上中下结构 顶部为用户登陆退出及面包屑/中间内容区/底部为版权区
  - 内容区划分为 标题区/tab区/数据可视化区/列表区
    - 数据可视化区左侧为数据看板，右侧为数据联动区
    - 列表区分为三个组成部分
      - 功能区 新增/导出/搜索等其他 
      - 主体列表区
      - 分页区
  ###### 数据配置
  > 数据看板模板
    | 名称        | 值类型    | 字段    |  值  |
    | 类型        | string      |   type    | simple/line/bar/pie
    | 布局        | number      |   flex    | [1-12]
    | 可拖拽      | boolean      |   draggable    | true/false
    | 顺序      | number      |   order    | [1-9]
    
  ###### UI移植
  方案1：直接在项目中开发
        如进入任务系统某个任务详情，开发对应详情页面
        优点：界面UI可以重新设计，左侧边栏及顶部区域无需在不同的项目中进行改造，简单
        缺点：
  方案2：直接在项目中嵌入iframe，有以下几种形式
        1) iframe地址为超链接绝对路径形式到某个具体页面如要进入某个详情
        ```
        <iframe src="https://bizsys.ibroadlink.com/#/taskManage/taskDetailNew/:537ac24cde2fb516cdcbccf17ad87c5d" frameborder="0"></iframe>
        ```
        优点：原有页面不做改造，简单；
        缺点： 样式不统一；
        2) 将打包后项目放至现有项目public目录下
        ```
        <iframe src="./publish/#/taskManage/taskDetailNew/:537ac24cde2fb516cdcbccf17ad87c5d" frameborder="0"></iframe>
        ```
        优点：原有页面需要进行改造，原有页面如何改造
        缺点： 在原来项目中进行开发打包并copy到当前项目下，不好调试
        3) 打UI包形式
        ```
        <iframe src="域名/#/taskManage/taskDetailNew/:537ac24cde2fb516cdcbccf17ad87c5d" frameborder="0"></iframe>
        ```
        优点：可以独立发布，原有页面改造自定义
        缺点：发布流程繁琐；浏览器无法直接访问UI包，需要后台服务直接解压开提供访问路径，不好调试，原有项目难以改造，并且不能预知的问题是不清楚的
        约定：每一个UI包是浏览器可执行的前端文件，UI包根目录文件必须有index.html，作为默认入口文件，如果是APPUI包默认是app.html这个浏览器如何把它作为默认文件

  其他方案暂无
  ###### 动态webUI