import Link from 'next/link'
import NFTComponent from '../components/NFTComponent'
import Layout, { Meta } from '../components/sites/Layout'

export default function DynamicPage(): JSX.Element {
  const meta: Meta = {
    description: 'ETERNAL CARD #???',
    title: 'ETERNAL CARD #???',
  }

  return (
    <Layout meta={meta}>
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="flex scale-150  sm:scale-100">
          <NFTComponent title={'404'} />
        </div>
        <div className="absolute top-5 left-5 text-2xl text-eternal-gray hover:text-white">
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </div>
        <div className="absolute top-5 right-5 text-2xl">
          <span>#{'???'}</span>
        </div>
        <div className="absolute bottom-5 text-center sm:left-5">
          <div className="text-lg sm:text-left sm:text-2xl">Owned by</div>
          <div className="text-2xl text-eternal-gold sm:text-5xl">
            <Link href={`https://twitter.com/eternalcard`}>
              <a>@???</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
