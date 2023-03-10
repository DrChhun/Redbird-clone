function Navigation() {
    return (
        <div className="fixed px-6 py-4 z-[2] w-full flex justify-between ">
            <a href="">
                <img className="w-20 h-12" src="https://business-cambodia.com/BC.png" alt="" />
            </a>
            <ul className="flex items-center text-white duration-300">
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ព័ត៌មានថ្មីៗ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ចាប់ផ្តើមអាជីវកម្ម</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">អចលនទ្រព្យ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ភាពជាអ្នកដឹកនាំ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ហិរញ្ញវត្ថុ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">កំពូលអ្នកលក់</a>
            </ul>
        </div>
    )
}

export default Navigation