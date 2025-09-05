# 网页文章翻译器

一个基于FastAPI和React的网页文章翻译工具，能够从指定URL提取文章内容并翻译成中文。

## 技术栈

### 后端
- Python
- FastAPI
- LangChain
- OpenAI API (GPT-4o-mini)

### 前端
- React
- TypeScript
- Vite
- Tailwind CSS
- PostCSS
- AutoPrefixer

## 功能特点
- 输入网址一键翻译整篇文章
- 保留原文段落结构
- 现代化用户界面
- 响应式设计，支持各种设备
- 完整的错误处理机制

## 安装指南

### 前提条件
- Python 3.8+ 和 pip
- Node.js 16+ 和 npm/yarn
- OpenAI API 密钥

### 后端安装

1. 克隆项目仓库并进入后端目录
```bash
cd web-article-translator
cd backend
```

2. 创建虚拟环境（可选但推荐）
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS/Linux
python -m venv .venv
source .venv/bin/activate
```

3. 安装依赖
```bash
pip install -r requirements.txt
```

4. 配置OpenAI API密钥
在项目根目录创建`.env`文件，添加以下内容：
```env
OPENAI_API_KEY=your_openai_api_key_here
```

5. 启动后端服务器
```bash
uvicorn main:app --reload --port 8000
```

### 前端安装

1. 打开新的终端窗口，进入前端目录
```bash
cd web-article-translator
cd frontend
```

2. 安装依赖
```bash
# 使用npm
npm install

# 或使用yarn
npm install -g yarn  # 如未安装yarn
```

3. 启动前端开发服务器
```bash
# 使用npm
npm run dev

# 或使用yarn
```

4. 在浏览器中访问 http://localhost:5173

## 使用说明
1. 确保后端和前端服务器都已启动
2. 在前端界面的输入框中粘贴要翻译的文章URL
3. 点击"开始翻译"按钮
4. 等待翻译完成，结果将显示在下方区域

## 项目结构
