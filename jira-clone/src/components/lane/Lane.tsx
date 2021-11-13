import Card from './Card';

interface LaneProps {
  title: string
}


function Lane({ title }: LaneProps) {
  return (
    <div className="md:ml-2 md:mr-2 md:max-h-9/10 md:min-h-9/10 md:min-w-350 my-5 rounded-lg w-4/5 max-w-350 max-h-4/5 min-h-1/2 shadow p-2 bg-gray-100 overflow-auto">
      <h1 className="text-center text-xl">{title}</h1>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Lane;
