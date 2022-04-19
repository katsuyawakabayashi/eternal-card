import NFT from '../components/NFT'
import Layout from '../components/sites/Layout'

interface NFTProps {
  title: number
  owner: string
}

export default function DynamicPage({ title, owner }: NFTProps): JSX.Element {
  return (
    <Layout>
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="flex scale-150  sm:scale-100">
          <NFT title={title} />
        </div>
        <div className="absolute top-5 left-5 text-2xl text-eternal-gray ">
          Gallery
        </div>
        <div className="absolute top-5 right-5 text-2xl">
          <span>#{title}</span>
        </div>
        <div className="absolute bottom-5 text-center sm:left-5">
          <div className="text-lg sm:text-left sm:text-2xl">Owned by</div>
          <div className="text-2xl text-eternal-gold sm:text-5xl">@{owner}</div>
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticProps(context) {
//   // const { title } = router.query['slug']
//   return {
//     props: { title: 12, owner: 'ETERNAL_CARD' }, // will be passed to the page component as props
//   }
// }

// export async function getStaticPaths() {
//   const posts = ['post/12', '12']
//   const paths = posts.map((post) => ({
//     params: { slug: post },
//   }))

//   return { paths, fallback: false }
// }
