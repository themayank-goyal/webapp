import React from 'react'

import SOURCE from "../assets/image-about.png"

const About = () => {
  return (
    <section className="max-w-6xl  mx-auto my-16">
      <h2 className="text-center text-primary text-2xl sm:text-3xl">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 px-6 lg:px-2">
        <div className="grid place-content-center lg:block">
          <img src={SOURCE} alt="about-image" />
        </div>
        <div className="flex items-start gap-6 flex-col text-primary text-base sm:text-lg leading-loose justify-center">
          <p className="text-left sm:text-center">
            Hello, I have completed an undergraduate degree in psychology at Delhi University, subsequently pursued graduate training in counseling psychology at the AIIMS Delhi, and completed a doctorate in clinical psychology at the Adler School of Professional Psychology. I have clinical interests and worked with children, teens, adults, diagnostic assessment and addictions. I use a broad range of cognitive behavioral and insight oriented techniques in the psychotherapy and counseling process.
          </p>
          <p className="text-left sm:text-center">
            I have also taught a broad variety of graduate psychology and counseling courses at the Delhi University and Jamia Milia Islamia. I have lectured and presented training seminars and workshops nationally and internationally in Europe and East Asia. My research and publication interests have included addictions, psychometrics, clinical training and supervision, and the integration of spiritual values in psychotherapy and supervision.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-6 lg:px-2">
        <button className="bg-white text-dark py-4 sm:py-6 px-12 max-w-max rounded-sm mx-auto font-medium">
          Contact Dr. Goswami
        </button>
      </div>
    </section>
  )
}

export default About