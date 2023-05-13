import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="yongzhenlow/yzlow"
      repoId="R_kgDOIU5rYw"
      category="Announcements"
      categoryId="DIC_kwDOIU5rY84CWdPC"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}
