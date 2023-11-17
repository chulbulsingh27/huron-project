export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://blog.saginfotech.com/wp-content/uploads/2017/04/mobileshop.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            ABOUT US
                        </h2>
                        <p className="mt-6 text-gray-600">
                            <strong><em>CANKA creates a culture of infinite possibilities. The deep trust and loyalty of our customers drive us to continually grow and lead innovation.</em></strong>
                        </p>

                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>

                {/* Additional Images for workers, service centers, locations, and states */}
                <div className="flex mt-12 space-x-6">
                    <img
                        src="https://sangeethamobiles.net/assets/front-end/img/About_2.png"
                        alt="Workers"
                        className="rounded-full"
                    />
                    <img
                        src="https://sangeethamobiles.net/assets/front-end/img/About_3.png"
                        alt="Service Centers"
                        className="rounded-full"
                    />
                    <img
                        src="https://sangeethamobiles.net/assets/front-end/img/About_4.png"
                        alt="Locations"
                        className="rounded-full"
                    />
                    <img
                        src="https://sangeethamobiles.net/assets/front-end/img/About_5.png"
                        alt="States Covered"
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}