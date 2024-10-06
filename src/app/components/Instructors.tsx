'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background" 

const instructors = [
    {
        id: 1,
        name: 'Emily Sans',
        designation: 'Vocal Coach',
        image: 'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 2,
        name: 'Amy Vinsh',
        designation: 'Guitar Instructor',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 3,
        name: 'Michael sam',
        designation: 'Violin Instructor',
        image: 'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 4,
        name: 'Selene',
        designation: 'Dance Instructor',
        image: 'https://images.unsplash.com/photo-1684966609705-4a1d30c3acdb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D'
    },
]

function Instructors() {
    return(
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center ">
            <WavyBackground className=" w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full " >
                <h2 className="text-3xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">Meet Our Instructors</h2>
                <p className=" text-base md:text-xl text-white text-center mb-4 ">Discover the talented professionals who will guide our musical journey.</p>

                <div className="flex flex-row items-center justify-center mb-10 w-full ">
                    <AnimatedTooltip items={instructors} /> 


                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors