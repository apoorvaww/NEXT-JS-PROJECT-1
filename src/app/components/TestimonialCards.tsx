'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const musicSchoolTestimonials = [
    {
        quote:
        'Joining music school transformed the trajectory of my life by evolving my understanding of music and helped me to truly discover my own sound. The instructors are world-class',
        name: 'Alex John',
        title: 'Guitar Student'
    },
    {
        quote:
        'The community and support at this school are unmatched. I have grown not just as pianist, but also as a performer, thanks to their comprehensive approach.',
        name: 'Samantha lee',
        title: 'Piano student'
    },
    {
        quote: 
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals an challenges.',
        name: 'Emily Swift',
        title: 'Violinist'
    },
    {
        quote:
        'The production courses here opened my eyes and ears to the intricacies of music production. Highly recommend for any aspiring producers!!',
        name: 'Chris Martin',
        title: 'Music Production student'
    }
]

function TestimonialCards() {
    return(
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2]  " >
            <h2 className="text-3xl font-semibold mb-8 z-10 text-center mt-10">
                Hear Our Harmony: Voices of Success
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards 
                    items={musicSchoolTestimonials}
                    direction="right"
                    speed="normal"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards