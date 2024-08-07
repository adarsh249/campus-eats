'use client'

export default function Features() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-10 mb-5">Add to Campus Eats!</h2>
            <div className="flex flex-row flex-wrap justify-center items-center">
                <figure className="w-full sm:w-6/12 md:w-4/12 p-2 flex flex-col items-center">
                    <img src="assets/svgs/rmp-edit.svg" alt="svg of a student with a pencil" className="min-h-56"/>
                    <figcaption className="text-center">Add all your school's dining options</figcaption>
                </figure>
                <figure className="w-full sm:w-6/12 md:w-4/12 p-2 flex flex-col items-center">
                    <img src="assets/svgs/rmp-anon.svg" alt="svg of a student with a mask" className="min-h-56"/>
                    <figcaption className="text-center">Keep your identity anonymous while contributing</figcaption>
                </figure>
                <figure className="w-full sm:w-6/12 md:w-4/12 p-2 flex flex-col items-center">
                    <img src="assets/svgs/rmp-like.svg" alt="svg of a student with a thumbs up" className="min-h-56"/>
                    <figcaption className="text-center">Rate and review your favorite dining options</figcaption>
                </figure>
            </div> 
            <a href="/register" className="my-7 border-2 border-black rounded-xl px-5 py-1 bg-sky-500">Sign Up!</a>
        </section>
    )
}