
'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const content = [
    {
        title: "Discover your sound with Us: A Personal Journey in Music Mastery",
        description:
            "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspriations meet our dedicated support, creating a harmonious path to mastery.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Music Mastery
            </div>
        ),
    },
    
    {
        title: "Live Feedback and Engagement",
        description:
            "Immerse yourself in an interactie learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding an mastery of music concepts and performance techniques.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Live Feedback and Engagement
            </div>
        ),
    },
    {
        title: "Cutting-Edge Curriculum",
        description:
            "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you're always learning with the most effective methods. Say goodbe to outdated materials and welvome an education that evolves with the industry.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Cutting edge Curriculum
            </div>
        ),
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs