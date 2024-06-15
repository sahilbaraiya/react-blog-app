import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-[#a8dadc]">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Us
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to SmileGear, your premier destination for buying and selling high-quality dental equipment with ease and confidence. At SmileGear, we believe that access to essential dental equipment should be convenient, affordable, and reliable. With our user-friendly platform, we're committed to revolutionizing the way dental professionals and students procure equipment, empowering them to focus on what they do best – delivering exceptional oral healthcare.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Join us on our mission to reshape the dental equipment market and make quality dental equipment accessible to all. Explore our marketplace, connect with fellow professionals, and experience the SmileGear difference today.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}