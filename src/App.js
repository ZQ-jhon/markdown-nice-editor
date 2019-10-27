import React from "react";
import MarkdownNice from "markdown-nice";

import content from "./utils/content";

// 标题，是一个字符串
const defaultTitle = "Markdown Nice";

function App() {
  return (
    <MarkdownNice
      defaultTitle={defaultTitle}
      previewType="mobile"
      defaultText={content}
    />
  );
}

export default App;