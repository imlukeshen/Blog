import React from 'react';

function Post({ title, content, imageUrl }) {
  // Truncate content to show only a preview (e.g., first 100 characters)
  const truncatedContent = `${content.substring(0, 100)}...`;

  return (
    <div className="post-content">
      <h2>{title}</h2>
      <p>{truncatedContent}</p>
      {imageUrl && <img className="post-image" src={imageUrl} alt={title} />}
    </div>
  );
}

export default Post;
