import ContentCard from '../ui/content-card'

const PortofolioList = () => {
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
    </div>
  )
}

export default PortofolioList
