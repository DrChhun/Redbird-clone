function Footer() {
    return (
        <>
            <div className="relative top-1 mt-12">
                <img src="https://business-cambodia.com/footer.png" alt="" />
            </div>
            <div className="py-12 px-10 bg-[#ed1c24] text-white">
                <div className="md:grid md:grid-cols-3">
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-xs md:text-lg font-bold">ស្វែងយល់អំពីពួកយើង</h1>
                        <p className="py-4 text-xs lg:text-base">អំពីពួកយើង</p>
                        <p className="text-xs text:base">sam.businesscambodia@gmail.com</p>
                    </div>
                    <div className="text-center mb-8 md:mb-0">
                        <h1 className="text-xs font-bold md:text-lg mb-4">អត្ថបទផ្សេងៗ</h1>
                        <div className="flex justify-center">
                            <ul className="text-start mx-4 text-xs lg:text-base">
                                <li>ព័ត៌មានថ្មីៗ</li>
                                <li>ចាប់ផ្តើមអាជីវកម្ម</li>
                                <li>អចលនទ្រព្យ</li>
                                <li>ភាពជាអ្នកដឹកនាំ</li>
                                <li>ហិរញ្ញវត្ថុ</li>
                            </ul>
                            <ul className="text-start mx-4 text-xs lg:text-base">
                                <li>កំពូលអ្នកលក់</li>
                                <li>របាយការណ៍</li>
                                <li>អត្ថបទ</li>
                                <li>មុខរបរបច្ចេកវិទ្យា</li>
                                <li>ពិព័ណ៍</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <h1 className="text-xs font-bold md:text-lg">ទំនាក់ទំនងពួកយើង</h1>
                        <p className="text-xs md:text-base ont-light py-4">017 300 755/093 300 755</p>
                        <p className="text-xs md:text-base font-light">Building 422 St. 271, Phum 1, Stung Mean Chey</p>
                    </div>
                </div>
                <div className="text-center">
                    <div className="h-32 w-32"></div>
                    <h1 className="font-bold">Business Camboida</h1>
                    <p className="text-xs lg:text-base">បំផុសគំនិតរកសុី នាំមនុស្សអោយហ៊ានចេញរកសុីតាមក្តីស្រមៃ</p>
                </div>
            </div>
            <div className="text-center md:flex md:justify-between py-6 px-10 font-light">
                <h1 className="text-xs md:text-base">@2022 Baksey Media All Right Reserved</h1>
                <a className="group text-xs md:text-base" href="#">Developed by: <span className="group-hover:underline">ChunMEGA</span></a>
            </div>
        </>
    )
}

export default Footer