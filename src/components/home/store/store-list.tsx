import ContentCard from '../ui/content-card'

const StoreList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContentCard
          image={'/mobile-dev.png'}
          title="Crecon-Company Profile"
          description="A sleek and modern company profile site that showcases their mission and values"
        />
        <ContentCard
          image={'/mobile-dev.png'}
          title="Crecon-Company Profile"
          description="A sleek and modern company profile site that showcases their mission and values"
        />
        <ContentCard
          image={'/mobile-dev.png'}
          title="Crecon-Company Profile"
          description="A sleek and modern company profile site that showcases their mission and values"
        />
        <ContentCard
          image={'/mobile-dev.png'}
          title="Crecon-Company Profile"
          description="A sleek and modern company profile site that showcases their mission and values"
        />
        <ContentCard
          image={'/mobile-dev.png'}
          title="Crecon-Company Profile"
          description="A sleek and modern company profile site that showcases their mission and values"
        />
        <ContentCard
          image={'/mobile-dev.png'}
          title="Crecon-Company Profile"
          description="A sleek and modern company profile site that showcases their mission and values"
        />
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 text-brand border border-brand rounded-3xl hover:bg-brand hover:text-white transition">
          See more
        </button>
      </div>
    </div>
  )
}

export default StoreList
