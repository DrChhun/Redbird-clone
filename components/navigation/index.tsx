import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross1} from 'react-icons/rx'

function Navigation() {

    const router = useRouter();
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

    console.log(prevScrollPos)

    console.log(router.asPath);

    return (
        <div className={`fixed px-6 py-4 z-[9] w-full flex justify-between items-center duration-300 ${router.asPath = "/articles" ? 'text-white' : ""} ${router.asPath.startsWith('/articles') ? 'bg-white shadow-md' : ""} ${!visible ? 'top-[-10%]': "top-0 bg-white shadow-sm" } ${prevScrollPos == 0 ? '!bg-transparent': ""}`}>
            
            <Link href="/">
                <Image fill className="!relative !w-20 !h-12" src="https://business-cambodia.com/BC.png" alt="" />
            </Link>
            
        {router.asPath.startsWith('/articles') ? 
            <ul className="hidden lg:flex items-center text-white duration-300 link-black text-xs font-light">
                <Link className="mx-5 hover:border-b-2 duration-200 text-black" href="/news">ព័ត៌មានថ្មីៗ</Link>
                <Link className="mx-5 hover:border-b-2 duration-200 text-black" href="/business">ចាប់ផ្តើមអាជីវកម្ម</Link>
                <Link className="mx-5 hover:border-b-2 duration-200 text-black" href="/real-estate">អចលនទ្រព្យ</Link>
                <Link className="mx-5 hover:border-b-2 duration-200 text-black" href="/leadership">ភាពជាអ្នកដឹកនាំ</Link>
                <Link className="mx-5 hover:border-b-2 duration-200 text-black" href="/finance">ហិរញ្ញវត្ថុ</Link>
                <Link className="mx-5 hover:border-b-2 duration-200 text-black" href="/sales">កំពូលអ្នកលក់</Link>
            </ul>
        :
            <ul className="hidden lg:flex items-center text-white duration-300 link-black text-xs font-light">
                <Link className={`mx-5 hover:border-b-2 duration-200 ${prevScrollPos != 0 ? 'text-black hover:border-b-2 border-black' : ""}`} href="/news">ព័ត៌មានថ្មីៗ</Link>
                <Link className={`mx-5 hover:border-b-2 duration-200 ${prevScrollPos != 0 ? 'text-black hover:border-b-2 border-black' : ""}`} href="/business">ចាប់ផ្តើមអាជីវកម្ម</Link>
                <Link className={`mx-5 hover:border-b-2 duration-200 ${prevScrollPos != 0 ? 'text-black hover:border-b-2 border-black' : ""}`} href="/real-estate">អចលនទ្រព្យ</Link>
                <Link className={`mx-5 hover:border-b-2 duration-200 ${prevScrollPos != 0 ? 'text-black hover:border-b-2 border-black' : ""}`} href="/leadership">ភាពជាអ្នកដឹកនាំ</Link>
                <Link className={`mx-5 hover:border-b-2 duration-200 ${prevScrollPos != 0 ? 'text-black hover:border-b-2 border-black' : ""}`} href="/finance">ហិរញ្ញវត្ថុ</Link>
                <Link className={`mx-5 hover:border-b-2 duration-200 ${prevScrollPos != 0 ? 'text-black hover:border-b-2 border-black' : ""}`} href="/sales">កំពូលអ្នកលក់</Link>
            </ul>
        }

            {
                ham?
                <RxCross1 onClick={() => setHam(!ham)} className={`${router.asPath.startsWith('/articles') ? 'text-white' : 'text-white'} text-base md:text-3xl lg:text-4xl lg:hidden`}/>
                :
                <RxHamburgerMenu onClick={() => setHam(!ham)} className={`${router.asPath.startsWith('/articles') ? 'text-black' : 'text-white'} text-base md:text-3xl lg:text-4xl lg:hidden ${prevScrollPos != 0 ? "!text-black" : ""}`} />
            }

                <div className={(ham? "z-[-1] h-screen bg-black bg-opacity-80 fixed w-full top-0 left-0 duration-300 backdrop-blur-sm": "z-[-1] h-screen bg-black opacity-90 fixed w-full top-0 left-[-100%] duration-300")}>
                    <div className="w-full h-full relative">
                        <ul className="text-white flex flex-col text-center absolute left-1/2 translate-x-[-50%] translate-y-[-50%] top-1/2">
                            <Link onClick={() => setHam(!ham)} className="my-2 hover:border-b-2 duration-200" href="/news">ព័ត៌មានថ្មីៗ</Link>
                            <Link onClick={() => setHam(!ham)} className="my-2 hover:border-b-2 duration-200" href="/business">ចាប់ផ្តើមអាជីវកម្ម</Link>
                            <Link onClick={() => setHam(!ham)} className="my-2 hover:border-b-2 duration-200" href="/real-estate">អចលនទ្រព្យ</Link>
                            <Link onClick={() => setHam(!ham)} className="my-2 hover:border-b-2 duration-200" href="/leadership">ភាពជាអ្នកដឹកនាំ</Link>
                            <Link onClick={() => setHam(!ham)} className="my-2 hover:border-b-2 duration-200" href="/finance">ហិរញ្ញវត្ថុ</Link>
                            <Link onClick={() => setHam(!ham)} className="my-2 hover:border-b-2 duration-200" href="/sales">កំពូលអ្នកលក់</Link>
                        </ul>
                    </div>
                </div>
           
        </div>
    )
}

export default Navigation