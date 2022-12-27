import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export async function getStaticProps(_: any) {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(res => res.json())
  return {
    props: {
      exploreData: exploreData || []
    }
  }
}

export interface ExploreData {
  img: string
  location: string
  distance: string
}

const Home: NextPage = ({ exploreData }: any) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            { exploreData.map(
              ({ img, distance, location }: ExploreData, index: number) => 
                <SmallCard 
                  key={index} 
                  img={img} 
                  distance={distance} 
                  location={location}
                /> 
              ) 
            }
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        </section>

      </main>
    </div>
  )
}

export default Home
