import Article from "./Article";

// Turns the posts received from App into Article children with stable keys.
function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
