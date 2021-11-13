import { ArrowCircleUpIcon } from '@heroicons/react/solid';

export interface CardProps {

}

export function Card({ }: CardProps) {
    return (
        <div className="flex flex-col rounded-lg my-2 h-56 bg-white py-1 px-2 space-y-2">
            <div id="identifier" className="h-8 flex justify-between">
                {/* story number */}
                <a className="text-sm text-gray-500 pt-1 underline" href="/">SDM-12345</a>
                {/* assignee image/initials */}
                <div className="rounded-full h-7 w-7 text-center shadow-sm border-2 border-gray-50">SR</div>
            </div>
            {/* card title */}
            <div id="title" className="h-2/3 overflow-ellipsis">
                <h1>Add the ability to add students to multiple classes</h1>
            </div>
            {/* card details (card type/points/age) */}
            <div id="symbols" className="flex justify-between h-8">
                <div className="flex w-1/4 justify-between items-center">
                    <ArrowCircleUpIcon className="text-green-500 w-7" />
                    <p className="text-green-500">New</p>
                </div>
                <p className="rounded-full h-7 w-7 text-center shadow-sm border-2 border-gray-50">3</p>
            </div>
        </div>
    )

}


export default Card;