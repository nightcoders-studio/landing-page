import { Store } from '@/types/Store'
import Image from 'next/image'

const StoreHero = ({ store }: { store: Store }) => {
  return (
    <>
      <div className="rounded-2xl">
        <Image
          src={store.heroImage.url || '/placeholder.svg'}
          alt={store.heroImage.alt || `${store.title} Image`}
          width={1200}
          height={600}
          sizes="100vw"
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </div>
      <div className="flex justify-between my-4">
        <div className="flex mr-6">
          {store.categories.map((category, index) => {
            const isLast = index === store.categories.length - 1
            return (
              <p key={category.id} className="text-md text-brand">
                {category.title}
                {!isLast && <span className="mx-3">|</span>}
              </p>
            )
          })}
        </div>
        {store.priceWithCurrency && <div className="text-md text-brand hidden md:block">Price</div>}
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 mb-6">
        <div>
          <h1 className="text-3xl text-primary font-bold">{store.title}</h1>
          {store.priceWithCurrency && (
            <div className="flex md:hidden items-center gap-1">
              <p className="text-xl text-primary font-bold">{store.priceWithCurrency}</p>
              <p className="text-md text-primary">{store.period}</p>
            </div>
          )}
          <button className="px-4 py-2 bg-brand text-white rounded-3xl mt-2">Purchase Me</button>
        </div>
        {store.priceWithCurrency && (
          <div className="hidden md:block">
            <div className="text-3xl text-primary">{store.priceWithCurrency}</div>
            <div className="text-md text-primary">{store.period}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default StoreHero
