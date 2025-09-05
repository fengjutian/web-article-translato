import { useState } from "react";

export default function TranslatorApp() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleTranslate = async () => {
    if (!url) return;
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("http://localhost:8000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResult(data.translation);
    } catch (err) {
      console.error(err);
      setResult("翻译失败，请检查后端。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4 md:p-8">
      {/* 卡片容器 */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
        {/* 头部区域 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
            网页文章翻译器
          </h1>
          <p className="text-center text-blue-100 mt-2 text-sm md:text-base">
            输入网址，一键翻译整篇文章
          </p>
        </div>

        {/* 主要内容区域 */}
        <div className="p-6 md:p-8">
          {/* 输入区域 */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="https://example.com/article"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
            />
            <button
              onClick={handleTranslate}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all duration-200 font-medium whitespace-nowrap"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  翻译中...
                </div>
              ) : (
                "开始翻译"
              )}
            </button>
          </div>

          {/* 结果区域 */}
          {result && (
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 animate-fadeIn">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">翻译结果</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {result}
              </div>
            </div>
          )}
        </div>

        {/* 底部信息 */}
        <div className="bg-gray-50 px-6 py-4 text-center text-gray-500 text-sm border-t border-gray-100">
          支持多种语言翻译 | 仅供学习使用
        </div>
      </div>
    </div>
  );
}
