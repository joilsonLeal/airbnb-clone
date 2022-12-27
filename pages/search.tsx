import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { format } from "date-fns"

function search() {
  const formatDate = (date: any) => {
    try {
      return format(new Date(String(date)), 'dd MMMM yy')
    } catch (error) {
      return format(new Date(), 'dd MMMM yy')
    }
  }

  const router = useRouter()

  const { location, startDate, endDate, noOfGuests = 1 } = router.query

  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = formatDate(endDate)

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div >
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

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

        </section>
      </main>

      <Footer />
    </div>
  )
}

export default search