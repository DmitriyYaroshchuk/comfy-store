import {Skeleton} from "@/components/ui/skeleton.tsx";

function Loading() {
    return (
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({length: 3}, (_, index) => (
                <div key={index} className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-full rounded-xl"/>
                    <div className='space-y-2'>
                        <Skeleton className='h-4 mx-auto w-[250px]'/>
                        <Skeleton className='h-4 mx-auto w-[250px]'/>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Loading;