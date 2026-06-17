# 品牌广告概念导演 Skill 使用手册

这是一个内部使用的 Skill 使用手册网站，用来展示“品牌广告概念导演 Skill”的使用流程、输入输出规则、Prompt 模板、案例流程和测试方法。

第一版定位是“好看、清楚、能用、可维护”。不做登录、不接数据库、不做后台系统。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- 本地 TypeScript 数据模块

## 本地安装命令

```bash
npm install
```

## 启动命令

```bash
npm run dev
```

默认访问：

```text
http://localhost:3000
```

如果 3000 端口被占用，Next.js 会提示使用其它端口。

## 构建命令

```bash
npm run build
```

## 第二天复制到公司电脑后的操作步骤

1. 复制整个项目文件夹，但不要复制 `node_modules` 和 `.next`。
2. 在公司电脑安装 Node.js。
3. 打开终端进入项目目录。
4. 执行 `npm install` 安装依赖。
5. 执行 `npm run dev` 本地预览。
6. 如需确认可发布，执行 `npm run build`。

## 内容维护方式

主要内容都在 `data/` 目录：

- `workflowSteps.ts`：使用流程
- `skillModules.ts`：Skill 核心模块
- `inputFields.ts`：输入字段说明
- `outputModules.ts`：输出模块说明
- `promptTemplates.ts`：Prompt 模板
- `caseExamples.ts`：实战案例
- `faqItems.ts`：FAQ
- `versionLogs.ts`：更新记录

页面组件在 `components/` 目录。通常只改内容时，不需要改组件。

## 随项目携带的 Skill

项目已包含原始 Skill 文件：

```text
skills/my-brand-film-director/
  README.md
  SKILL.md
```

复制到公司电脑后，如果需要安装到 Codex 用户 Skill 目录，可参考：

```powershell
mkdir $HOME\.agents\skills\my-brand-film-director
copy .\skills\my-brand-film-director\SKILL.md $HOME\.agents\skills\my-brand-film-director\SKILL.md
```

## 后续扩展建议

第一版不使用数据库。后续如果需要管理案例库，可以考虑 SQLite + Prisma。

`app/api/` 已预留扩展空间，后续可加入：

- 案例保存
- Prompt 模板管理
- Skill 版本管理
- 文档导出

## 适合上传 GitHub 或压缩带走的结构

```text
TVC手册/
  app/
  components/
  data/
  lib/
  public/
  .gitignore
  README.md
  package.json
  postcss.config.js
  tailwind.config.ts
  tsconfig.json
```

不要打包：

```text
node_modules/
.next/
dist/
.env
.env.local
```
