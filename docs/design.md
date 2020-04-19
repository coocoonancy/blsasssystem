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
    