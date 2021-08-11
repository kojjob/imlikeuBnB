import Head from "next/head"
import Header from "../components/Header"
import Banner from "../components/Banner"
import NearByCard from "../components/NearByCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

export default function Home({ exlporeNearby, cardData }) {
  return (
    <div className=''>
      <Head>
        <title>Imlikeu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto '>
        <section className='pt-6'>
          <h2 className='text-4xl text-gray-700 font-semibold pb-5 mt-20'>
            Explore Nearby
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {exlporeNearby?.map(({ img, location, distance }) => (
              <NearByCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://res.cloudinary.com/dpajlrlfu/image/upload/v1628432620/travel_explore_journey_traveller_travelling_voyage_tourist-603423.jpg_d_h64nif.jpg'
          title='People who love to travel.'
          description='Unique activities with local experts – in person or online.'
          buttonText='Get Going!'
        />
        <section>
          <h2 className='text-4xl text-gray-700 font-semibold pb-5 mt-20'>
            Live anywhere
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide px-3 -ml-3'>
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const exlporeNearby = await fetch("https://jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  )
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  )
  return {
    props: {
      exlporeNearby,
      cardData,
    },
  }
}
