'use client'

export default function Features() {
    return (
        <section className="flex justify-center align-center flex-col">
            <h2>Add to Campus Eats!</h2>
            <img src="assets/svgs/rmp-edit.svg" alt="svg of a student with a pencil" />
            <p>Help us grow our database by adding your school's dining options!</p>
            <img src="assets/svgs/rmp-anon.svg" alt="svg of a student with a mask" />
            <p>Keep your identity anonymous while contributing.</p>
            <img src="assets/svgs/rmp-like.svg" alt="svg of a student with a thumbs up" />
            <p>Rate and review your favorite dining options.</p>
            <a href="/register">Sign Up!</a>
            
        </section>
    )
}