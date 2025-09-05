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
        credentials: "include", // Include credentials for CORS
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
      const data = await res.json();
      setResult(data.translation);
    } catch (err) {
      console.error("Translation error:", err);
      setResult(`翻译失败: ${err instanceof Error ? err.message : "未知错误"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">网页文章翻译器</h1>

      <div className="flex w-full max-w-xl gap-2">
        <input
          type="text"
          placeholder="输入文章网址"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          onClick={handleTranslate}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "翻译中..." : "开始翻译"}
        </button>
      </div>

      {result && (
        <div className="mt-6 w-full max-w-3xl p-4 bg-white shadow rounded-lg whitespace-pre-line">
          {result}
        </div>
      )}
    </div>
  );
}
