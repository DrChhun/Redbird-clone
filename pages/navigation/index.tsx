import { useState, useEffect } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross1} from 'react-icons/rx'

function Navigation() {

    const [ham, setHam] = useState<boolean>(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
    
        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }
    
        setPrevScrollPos(currentScrollPos)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={`fixed px-6 py-4 z-[9] w-full flex justify-between items-center duration-300 ${!visible ? 'top-[-10%]': "top-0" }`}>
            <a href="">
                <img className="w-20 h-12" src="https://business-cambodia.com/BC.png" alt="" />
            </a>
            <ul className="hidden lg:flex items-center text-white duration-300">
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ព័ត៌មានថ្មីៗ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ចាប់ផ្តើមអាជីវកម្ម</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">អចលនទ្រព្យ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ភាពជាអ្នកដឹកនាំ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">ហិរញ្ញវត្ថុ</a>
                <a className="mx-5 hover:border-b-2 duration-200" href="#">កំពូលអ្នកលក់</a>
            </ul>

            {
                ham?
                <RxCross1 onClick={() => setHam(!ham)} className="text-white text-base md:text-3xl lg:text-4xl lg:hidden"/>
                :
                <RxHamburgerMenu onClick={() => setHam(!ham)} className="text-white text-base md:text-3xl lg:text-4xl lg:hidden" />
            }

                <div className={(ham? "z-[-1] h-screen bg-black opacity-80 fixed w-full top-0 left-0 duration-300": "z-[-1] h-screen bg-black opacity-80 fixed w-full top-0 left-[-100%] duration-300")}>
                    <div className="w-full h-full relative">
                        <ul className="text-white flex flex-col text-center absolute left-1/2 translate-x-[-50%] translate-y-[-50%] top-1/2">
                            <a className="my-5 hover:border-b-2 duration-200" href="#">ព័ត៌មានថ្មីៗ</a>
                            <a className="my-5 hover:border-b-2 duration-200" href="#">ចាប់ផ្តើមអាជីវកម្ម</a>
                            <a className="my-5 hover:border-b-2 duration-200" href="#">អចលនទ្រព្យ</a>
                            <a className="my-5 hover:border-b-2 duration-200" href="#">ភាពជាអ្នកដឹកនាំ</a>
                            <a className="my-5 hover:border-b-2 duration-200" href="#">ហិរញ្ញវត្ថុ</a>
                            <a className="my-5 hover:border-b-2 duration-200" href="#">កំពូលអ្នកលក់</a>
                        </ul>
                    </div>
                </div>
           
        </div>
    )
}

export default Navigation