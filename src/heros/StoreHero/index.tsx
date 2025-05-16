import { Store } from '@/types/Store'
import Image from 'next/image'

const StoreHero = ({ store }: { store: Store }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-[1200px]">
          <Image
            src={store.heroImage.url || '/placeholder.svg'}
            alt={store.heroImage.alt || `${store.title} Image`}
            fill
            className="object-cover object-center rounded-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
            priority
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between my-4">
        <div className="flex flex-wrap mr-6">
          {store.categories.map((category, index) => {
            const isLast = index === store.categories.length - 1
            return (
              <p key={category.id} className="text-md text-brand mb-2">
                {category.title}
                {!isLast && <span className="mx-3">|</span>}
              </p>
            )
          })}
        </div>
        {store.priceWithCurrency && <div className="text-md text-brand hidden md:block">Price</div>}
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4 mb-6">
        <div className="md:w-1/2">
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
          <div className="hidden md:block md:w-/12">
            <div className="text-3xl text-primary">{store.priceWithCurrency}</div>
            <div className="text-md text-primary">{store.period}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default StoreHero
