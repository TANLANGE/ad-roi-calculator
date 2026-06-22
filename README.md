# 投流回本计算器站

一个帮助电商卖家和投流从业者快速计算广告投放回报的工具站，包含 ROI 计算器、回本周期计算器和毛利计算器。

## 功能概览

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 站点入口，展示核心工具和热门指南 |
| ROI 计算器 | `/roi-calculator` | 计算广告投放的投资回报率 |
| 回本周期计算器 | `/payback-calculator` | 计算广告投入多久能回本，含趋势图 |
| 毛利计算器 | `/profit-calculator` | 计算商品销售的毛利润和毛利率 |
| 使用指南 | `/guides` | 投流相关知识文章列表 |
| 指南详情 | `/guides/[slug]` | 单篇文章详情页 |
| FAQ | `/faq` | 常见问题解答 |
| 关于我们 | `/about` | 站点介绍 |
| 联系方式 | `/contact` | 联系信息 |

## 技术栈

- **框架**：Next.js 15（App Router，静态导出）
- **语言**：TypeScript
- **样式**：Tailwind CSS v4
- **图表**：Chart.js + react-chartjs-2
- **测试**：Vitest + Testing Library
- **代码规范**：ESLint

## 项目结构

```
src/
├── app/                          # Next.js 页面路由
│   ├── layout.tsx                # 全局布局（页头 + 页脚）
│   ├── page.tsx                  # 首页
│   ├── roi-calculator/page.tsx   # ROI 计算器
│   ├── payback-calculator/page.tsx # 回本周期计算器
│   ├── profit-calculator/page.tsx  # 毛利计算器
│   ├── guides/                   # 指南列表与详情
│   ├── faq/page.tsx              # FAQ 页
│   ├── about/page.tsx            # 关于页
│   ├── contact/page.tsx          # 联系页
│   ├── sitemap.ts                # 站点地图
│   └── robots.ts                 # 爬虫规则
├── components/                   # 可复用组件
│   ├── site-header.tsx           # 页头导航
│   ├── site-footer.tsx           # 页脚
│   ├── hero.tsx                  # 首页头图
│   ├── cta-banner.tsx            # 跨页 CTA 横幅
│   ├── calculator-shell.tsx      # 计算器页面共用布局
│   ├── calculator-field.tsx      # 数值输入组件
│   ├── result-card.tsx           # 结果展示卡片
│   ├── payback-chart.tsx         # 回本趋势折线图
│   └── lead-form.tsx             # 留资表单
├── lib/                          # 核心逻辑
│   ├── calculators.ts            # 计算函数（ROI / 回本 / 毛利）
│   ├── format.ts                 # 格式化工具（货币 / 百分比）
│   └── guides.ts                 # 指南文章数据
├── types/
│   └── calculator.ts             # 类型定义
└── __tests__/                    # 测试文件
    ├── calculators.test.ts
    ├── home-page.test.tsx
    ├── roi-page.test.tsx
    ├── payback-page.test.tsx
    ├── profit-page.test.tsx
    └── lead-form.test.tsx
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 运行测试
npm test

# 构建静态站点
npm run build
```

开发服务器启动后访问 http://localhost:3000。

## 计算公式

### ROI 计算器
- **营业额** = 订单数 × 客单价
- **毛利** = 营业额 × 毛利率
- **净利润** = 毛利 − 广告花费
- **ROI** = 净利润 ÷ 广告花费 × 100%
- **获客成本** = 广告花费 ÷ 订单数

### 回本周期计算器
- **月净利润** = 月订单数 × 客单价 × 毛利率 − 月广告费
- **回本月数** = 初始投入 ÷ 月净利润（向上取整）

### 毛利计算器
- **营业额** = 售价 × 数量
- **总成本** = 单件成本 × 数量
- **毛利** = 营业额 − 总成本
- **净利润** = 毛利 − 广告花费
- **毛利率** = 毛利 ÷ 营业额 × 100%
- **单件利润** = 净利润 ÷ 数量

## 部署

项目配置为静态导出（`output: 'export'`），可直接部署到 Vercel、Netlify 或任何静态托管服务。

```bash
# 构建
npm run build

# 输出目录为 out/
```

## 留资表单

每个计算器页面底部包含留资表单，用户填写称呼和联系方式后，可保存计算结果。当前为前端展示版本，后续可接入后端服务（如 Formspree、EmailJS 或自建 API）。

## 后续规划

- 接入留资后端服务
- 补充更多 SEO 文章
- 添加用户计算历史记录
- 移动端导航优化
