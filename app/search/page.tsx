import { sql } from '@vercel/postgres'
import { seed } from '@/lib/seed'
import { CharityCard } from '@/components/global/CharityCards/CharityCard'
import { Nav } from '@/components/global/Nav'

export default async function Table() {
  let data

  try {
    data = await sql`SELECT * FROM charities JOIN charityCategories ON charities.category = charityCategories.category_id`
  } catch (e: any) {
    if (e.message.includes('relation "charities" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      data = await sql`SELECT * FROM charities JOIN charityCategories ON charities.category = charityCategories.category_id`
    } else {
      throw e
    }
  }

  const { rows: charities } = data;

  return (
    <div>
      <Nav />
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                <h2 className="text-xl font-semibold">Charity Results</h2>
                <p className="text-sm text-gray-500">
                    Found {charities.length} charities
                </p>
                </div>
            </div>
            <div className="divide-y divide-gray-900/5">
                {charities.map((charity) => {
                  const {charityname, charitydescription, charityimage, categoryname, charitywebsite} = charity
                  
                    return(
                      <CharityCard 
                        name={charityname} 
                        description={charitydescription} 
                        logo={charityimage} 
                        category={categoryname} 
                        website={charitywebsite} 
                      />
                    )
                  })}
            </div>
        </div>
      </main>
    </div>
  )
}
