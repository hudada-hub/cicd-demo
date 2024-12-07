git push origin main
git tag v1.0.1
git push origin v1.0.1

# CICD Demo

这是一个使用 pnpm workspace 和 GitHub Actions 的 CI/CD 示例项目。

## 特性

- 📦 Monorepo (pnpm workspace)
- 🔄 CI/CD (GitHub Actions)
- 🎯 Git Hooks (husky)
- 📝 Commit 规范 (commitlint)
- 🔍 代码规范 (ESLint + Prettier)
- 🚀 构建工具 (Turborepo)

## Commit 规范

本项目使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范，提交格式如下：

```
<type>(<scope>): <subject>

<body>

<footer>
```

常用的 type 类型：

- feat: 新功能
- fix: 修复
- docs: 文档
- style: 格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动

## CI/CD 流程

GitHub Actions 会在以下情况触发：

1. 推送到 main 分支
2. 创建 Pull Request 到 main 分支

CI 流程包括：

1. 安装依赖
2. 运行 lint
3. 运行测试
4. 构建项目

## 开发

```bash
# 安装依赖
pnpm install

# 开发
pnpm dev

# 构建
pnpm build

# 测试
pnpm test

# 代码格式化
pnpm format
```
