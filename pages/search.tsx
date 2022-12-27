import Head from "next/head"
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"
import { formatDate } from "../utils/date"

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res => res.json()).catch(e => console.log)

  return {
    props: {
      searchResults: searchResults || []
    }
  }
} 

function search({ searchResults }: any) {
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests = 1 } = router.query

  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = formatDate(endDate)

  const range = `${formattedStartDate} - ${formattedEndDate}`

  const placeHolder = `${location} | ${range} | ${noOfGuests} guests`

  return (
    <div>
      <Head>
        <title>{placeHolder}</title>
      </Head>

      <Header placeholder={`${placeHolder}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guest(s)</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-4 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item: any, index: number) => <InfoCard key={index} info={item} />) }
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults}/>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default search