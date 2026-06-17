# API 扩展预留

第一版不实现真实后端，不接数据库，不做登录和用户系统。

后续如果需要扩展，可以在 `app/api/` 下逐步加入：

- 案例保存
- Prompt 模板管理
- Skill 版本管理
- 文档导出

如果需要管理案例库，建议优先使用 SQLite + Prisma，不要直接引入 MySQL、PostgreSQL 或复杂 CMS。
