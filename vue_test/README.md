# vue_test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 总结 todoList 案例

#### 组件化编码流程

- 折分静态组件：
  - 组件按照功能拆分，命令不要与 HTML 元素冲突
- 实现动态组件：
  - 考虑好数据存放的位置，数据是一个组件再用，还是多个组件在用
  - 一个组件使用：放在组件自身即可
  - 多个组件在用：放在他们共同的父组件上（状态提升）
- 实现交互
  - 从绑定事件开始

#### props 适用于

- 父组件====》子组件 通信
- 子组件====》父组件 通信（要求父先给子定义一个函数）

#### 注意

**使用 v-model 时要切记：v-model 绑定的值不能是 props 传递过来的值，因为 props 是不可以修改的**

**props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不允许这么做**
