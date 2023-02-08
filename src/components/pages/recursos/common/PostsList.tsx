import { Article } from '@/components/common/Article'

export const PostsList = ({ articles }) => {
  return (
    <section className='py-8 px-4 text-center'>
      <ul className='articleList'>
        {
          articles.map(article =>
            <li key={article.id}>
              <Article article={article} />
            </li>
          )
        }
      </ul>
    </section>
  )
}
