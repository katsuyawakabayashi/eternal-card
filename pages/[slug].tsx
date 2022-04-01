import Card from '../components/Card'

export default function DynamicPage(props) {
  return (
    <div>
      <p>#{props.title}</p>
      <p>
        <Card title={props.title} />
      </p>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: { title: 0 }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const posts = ['post/0', '0']
  const paths = posts.map((post) => ({
    params: { slug: post },
  }))

  return { paths, fallback: false }
}
