## 补间动画 DEMO - 京东招聘宣讲日程

这是掘金小册《大厂 UI 开发实战手册》中『7.动效开发：补间动画』章节的手把手教导案例DEMO。

## 项目运行

项目是基于[Athena](https://github.com/o2team/athena)前端流程工具进行开发的。

因此，运行此项目需要以下步骤：

1. `git clone` 本项目

```
git clone git@github.com:xtutor/ui-dev-handbook.git
```

2. 安装 [Athena](https://github.com/o2team/athena)

按照[官方指南](https://github.com/o2team/athena)进行安装。

3. 进入工作目录进行新建项目，并创建`recruit`模块

```
// 生成一个新的项目
$ ath app [项目名称，例如Animation]

// 进入项目根目录，创建模块
$ cd Animation
$ ath m recruit // 指定项目使用sass，其余配置默认
```

3. 拷贝[static/demo-tween-animation/recruit](./static/demo-tween-animation-01)文件夹内容

将[recruit](./static/demo-tween-animation-01)目录内的所有文件拷贝，放置于新建项目的`recruit`模块目录（例如 Animation/recruit ）下

4. 运行项目

```
$ ath s
```
