import Link from 'next/link'
import NFTComponent from '../components/NFTComponent'
import Layout, { Meta } from '../components/sites/Layout'
import { useRouter } from 'next/router'

interface NFTProps {
  title: string
  owner: string
  link?: string
}

interface NFTListProps extends Array<NFTProps> {}

const unknownNFT: NFTProps = {
  title: '???',
  owner: 'Unknown',
  link: 'https://eternal-card.com',
}

const NFTList: NFTListProps = [
  { title: '12', owner: '', link: 'https://example.com' },
  { title: '1', owner: '' },
  { title: '2', owner: '' },
]

const getNFTIndex = () => {
  let NFTIndex = []
  for (let i = 0; i < NFTList.length; i++) {
    NFTIndex.push(NFTList[i].title)
  }
  return NFTIndex
}

export default function DynamicPage({ NFTs }: any): JSX.Element {
  let pathname = useRouter().query['slug']
  let NFT: NFTProps | undefined

  const meta: Meta = {
    description: 'ETERNAL CARD #' + pathname,
    title: 'ETERNAL CARD #' + pathname,
  }

  NFTs.map((item: NFTProps) => {
    if (item.title == pathname) {
      NFT = item
    }
  })

  if (NFT!.owner == '') {
    NFT!.owner = 'ETERNALCARD'
  }

  return (
    <Layout meta={meta}>
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="flex scale-150  sm:scale-100">
          <NFTComponent title={NFT!.title} />
        </div>
        <div className="absolute top-5 left-5 text-2xl text-eternal-gray hover:text-white">
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </div>
        <div className="absolute top-5 right-5 text-2xl">
          <span>#{NFT!.title}</span>
        </div>
        <div className="absolute bottom-5 text-center sm:left-5">
          <div className="text-lg sm:text-left sm:text-2xl">Owned by</div>
          <div className="text-2xl text-eternal-gold sm:text-5xl">
            {NFT!.link ? (
              <Link href={`${NFT!.link}`}>
                <a>@{NFT!.owner}</a>
              </Link>
            ) : (
              <span>@{NFT!.owner}</span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const NFTs = NFTList
  return {
    props: { NFTs },
  }
}

export async function getStaticPaths() {
  const posts = getNFTIndex()
  const paths = posts.map((post) => ({
    params: { slug: post },
  }))
  return { paths, fallback: false }
}
