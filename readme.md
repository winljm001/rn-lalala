## 基础架构

- `pnpm` 结合软硬链接与新的依赖组织方式，大大提升了包管理的效率，也同时解决了 “
  幻影依赖” 的问题，让包管理更加规范，减少潜在风险发生的可能性。
- `react-native-builder-bob` Simple set of CLIs to scaffold and build React
  Native libraries for different targets.

## TODO

- [x] lerna 初始化
- [x] npmClient 使用 pnpm
- [x] add 多包
- [x] eslint
- [x] dumi 文档
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

### 添加包直接依赖

```
pnpm --filter @rn-lalala/core add @rn-lalala/hello-world2 --workspace
```

### 更新依赖

```
pnpm up -r --workspace "@rn-lalala/*"
```

### workflow

安装机器人 `changeset-bot`: https://github.com/apps/changeset-bot

## 开发者流程

1. 新建功能特性分支

```
git checkout -b feature/xxxx
```

2. 开发功能

3. 管理版本

```
pnpm ci:version
```

## 管理者流程

4. codeView pr

如果 merge 有冲突，让提交的人重新合 `main`
