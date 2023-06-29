## 基础架构

- `lerna` 是一种工具，针对 使用 git 和 npm 管理多软件包代码仓库的工作流程进行优
  化
- `pnpm` 结合软硬链接与新的依赖组织方式，大大提升了包管理的效率，也同时解决了 “
  幻影依赖” 的问题，让包管理更加规范，减少潜在风险发生的可能性。
- `react-native-builder-bob` Simple set of CLIs to scaffold and build React
  Native libraries for different targets.

## TODO

- [x] lerna 初始化
- [x] npmClient 使用 pnpm
- [x] add 多包
- [x] eslint
- [ ] dumi 文档
- [ ] change log
- [ ] publish npm
- [ ] github ci
- [ ] test

## command

### 最外部安装依赖

```
pnpm install rimraf -w
```

### 清理 node_modules

```
pnpm clean
```

### 查看当前包 list

```
lerna list
```

### 添加包直接依赖

```
pnpm --filter @rn-lalala/core add @rn-lalala/hello-world2 --workspace
```

### 更新依赖

```
pnpm up -r --workspace @rn-lalala/hello-world2
```
