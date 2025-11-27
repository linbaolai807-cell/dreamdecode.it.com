# 域名配置指南 (Domain Setup Guide)

## 🌐 域名: dreamdecode.it.com

本指南将帮助你将自定义域名 `dreamdecode.it.com` 绑定到你的网站。

---

## 📋 配置步骤

### 第一步: 配置 DNS 记录

你需要在你的域名注册商（购买域名的地方）配置 DNS 记录。

#### 选项 A: 使用 GitHub Pages（推荐）

在你的域名注册商的 DNS 管理面板中，添加以下记录：

**A 记录（用于根域名）:**
```
类型: A
名称: @
值: 185.199.108.153
TTL: 3600

类型: A
名称: @
值: 185.199.109.153
TTL: 3600

类型: A
名称: @
值: 185.199.110.153
TTL: 3600

类型: A
名称: @
值: 185.199.111.153
TTL: 3600
```

**CNAME 记录（用于 www）:**
```
类型: CNAME
名称: www
值: linbaolai807-cell.github.io
TTL: 3600
```

#### 选项 B: 使用 Netlify

1. **在 Netlify 添加自定义域名:**
   - 登录 Netlify
   - 进入你的项目
   - 点击 "Domain settings"
   - 点击 "Add custom domain"
   - 输入 `dreamdecode.it.com`

2. **配置 DNS 记录:**
   ```
   类型: A
   名称: @
   值: 75.2.60.5
   TTL: 3600

   类型: CNAME
   名称: www
   值: [你的netlify域名].netlify.app
   TTL: 3600
   ```

#### 选项 C: 使用 Vercel

1. **在 Vercel 添加自定义域名:**
   - 登录 Vercel
   - 进入你的项目
   - 点击 "Settings" > "Domains"
   - 添加 `dreamdecode.it.com`

2. **配置 DNS 记录:**
   ```
   类型: A
   名称: @
   值: 76.76.21.21
   TTL: 3600

   类型: CNAME
   名称: www
   值: cname.vercel-dns.com
   TTL: 3600
   ```

---

### 第二步: 配置 GitHub Pages

1. **启用 GitHub Pages:**
   - 访问: https://github.com/linbaolai807-cell/dreamdecode.it.com/settings/pages
   - 在 "Source" 下选择 `main` 分支和 `/ (root)` 文件夹
   - 点击 "Save"

2. **添加自定义域名:**
   - 在同一页面，找到 "Custom domain" 部分
   - 输入: `dreamdecode.it.com`
   - 点击 "Save"
   - 等待 DNS 检查通过（可能需要几分钟到24小时）

3. **启用 HTTPS:**
   - DNS 验证通过后，勾选 "Enforce HTTPS"
   - 这将为你的网站自动配置免费的 SSL 证书

---

## 🔍 常见域名注册商配置示例

### GoDaddy
1. 登录 GoDaddy 账户
2. 进入 "我的产品" > "域名"
3. 点击你的域名旁边的 "DNS"
4. 添加上述 A 记录和 CNAME 记录

### Namecheap
1. 登录 Namecheap 账户
2. 进入 "Domain List"
3. 点击域名旁边的 "Manage"
4. 选择 "Advanced DNS" 标签
5. 添加上述记录

### Cloudflare
1. 登录 Cloudflare
2. 选择你的域名
3. 点击 "DNS" 标签
4. 添加上述记录
5. 确保 Proxy status 为 "Proxied"（橙色云朵）

### 阿里云 (Aliyun)
1. 登录阿里云控制台
2. 进入 "域名" > "域名列表"
3. 点击 "解析"
4. 添加上述记录

### 腾讯云 (Tencent Cloud)
1. 登录腾讯云控制台
2. 进入 "域名注册" > "我的域名"
3. 点击 "解析"
4. 添加上述记录

---

## ⏱️ DNS 传播时间

- DNS 更改通常需要 **15分钟到48小时** 才能完全生效
- 你可以使用以下工具检查 DNS 传播状态:
  - https://dnschecker.org/
  - https://www.whatsmydns.net/

---

## ✅ 验证配置

配置完成后，你可以通过以下方式验证:

### 1. 检查 DNS 记录
```bash
# Windows
nslookup dreamdecode.it.com

# Linux/Mac
dig dreamdecode.it.com
```

### 2. 访问你的网站
- http://dreamdecode.it.com
- http://www.dreamdecode.it.com
- https://dreamdecode.it.com (DNS 验证后)

---

## 🔒 SSL/HTTPS 配置

### GitHub Pages
- GitHub Pages 会自动提供免费的 Let's Encrypt SSL 证书
- DNS 验证通过后，在设置页面勾选 "Enforce HTTPS"

### Netlify
- Netlify 自动提供免费的 SSL 证书
- 域名验证后会自动启用 HTTPS

### Vercel
- Vercel 自动提供免费的 SSL 证书
- 域名添加后会自动配置 HTTPS

### Cloudflare (额外优化)
如果使用 Cloudflare 作为 DNS 提供商:
1. 免费获得 CDN 加速
2. 自动启用 HTTPS
3. 获得 DDoS 防护
4. 页面加载速度更快

---

## 🚨 故障排除

### 问题 1: "Domain's DNS record could not be retrieved"
**解决方案:**
- 确认 DNS 记录已正确添加
- 等待 DNS 传播完成（最多48小时）
- 使用 dnschecker.org 验证 DNS 记录

### 问题 2: "CNAME already exists"
**解决方案:**
- 删除域名注册商提供的默认停放页面 CNAME
- 或将其替换为正确的 CNAME 记录

### 问题 3: SSL 证书未生效
**解决方案:**
- 等待 DNS 完全传播
- 确认在 GitHub Pages 设置中勾选了 "Enforce HTTPS"
- 清除浏览器缓存后重试

### 问题 4: 网站显示 404
**解决方案:**
- 确认 CNAME 文件已正确创建并推送到 GitHub
- 检查 GitHub Pages 设置中的自定义域名是否正确
- 确认网站已成功部署

---

## 📞 需要帮助?

如果遇到问题，请检查:
1. DNS 记录是否正确配置
2. CNAME 文件是否存在于仓库根目录
3. GitHub Pages 是否已启用
4. DNS 传播是否完成

---

## 🎉 完成!

配置完成后，你的网站将在以下地址访问:
- ✅ https://dreamdecode.it.com
- ✅ https://www.dreamdecode.it.com

恭喜！你的 Dream Interpretation Guide 网站现在已经拥有专业的自定义域名了！
