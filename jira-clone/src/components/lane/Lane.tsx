import Card from './Card';

interface LaneProps {
  title: string
  cards: number
}


function Lane({ title, cards }: LaneProps) {
  return (
    <div className="md:ml-2 md:mr-2 md:max-h-9/10 md:min-h-9/10 md:min-w-350 my-5 rounded-lg w-4/5 max-w-350 max-h-4/5 min-h-1/2 shadow p-2 pb-0 bg-gray-100 overflow-auto">
      <div className="text-center text-xl sticky bg-gray-100 h-5p"><h1>{title}</h1></div>
      <div className="overflow-auto">
        {/* temp for dev */}
        {
          Array.from(Array(cards)).map((v, i) => {
            return <Card key={i} />
          })
        }
      </div>
    </div>
  )
}

export default Lane;
