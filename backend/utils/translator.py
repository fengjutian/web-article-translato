from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import WebBaseLoader
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

def translate_article(url: str) -> str:
    # 加载网页
    loader = WebBaseLoader(url)
    docs = loader.load()
    article_text = "\n".join([doc.page_content for doc in docs])

    # 初始化模型
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

    # Prompt
    prompt = PromptTemplate(
        input_variables=["content"],
        template="请将以下文章翻译成中文，保持原文段落结构：\n\n{content}"
    )

    chain = LLMChain(llm=llm, prompt=prompt)
    result = chain.run(content=article_text)

    return result
