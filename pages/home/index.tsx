import Button from "@/components/Button"
import Cover from "@/components/Cover"
import Heading from "@/components/Heading"
import NewsCard from "@/components/NewsCard"
import Title from "@/components/Title"
import Hero from "../hero"
import Navigation from "../navigation"

function Home() {
    return (
        <>
            {/* navbar */}
            <Navigation />

            {/* hero */}
            <Hero />

            {/* title */}
            <div className="px-10 py-12">
                <Heading underline size="xl" weight="bold">ការផ្សាយពាណិជ្ជកម្មរបស់យើង</Heading>  
            </div>
            <div className="flex justify-between px-10 py-12">
                <Title size="xxl" weight="bold">អត្ថបទពេញនិយមសរុប</Title>
                <a href="">មើលបន្ថែម</a>
            </div>

            {/* most recent news */}
            <div className="w-full px-10 py-12">
                <div className="w-[65%]">
                    <Cover heading="sovankoko" img={"https://business-cambodia.com/cms/assets/a1df1944-2fbc-4114-8727-4b938f4d7f11"} link={"/"}>sovankoko</Cover>
                </div>
                <div className="w-[35%]">

                </div>
            </div>

            {/* category by content */}
            <div className="px-10 py-12 flex">
                <div className="w-[25%] flex items-center">
                    <div>
                        <Heading underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[25px] w-[75%]">
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </div>
            </div>

            {/* category by content */}
            <div className="px-10 py-12 flex">
                <div className="w-[25%] flex items-center">
                    <div>
                        <Heading underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[25px] w-[75%]">
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </div>
            </div>

            {/* category by content */}
            <div className="px-10 py-12 flex">
                <div className="w-[25%] flex items-center">
                    <div>
                        <Heading underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[25px] w-[75%]">
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </div>
            </div>

            {/* category by content */}
            <div className="px-10 py-12 flex">
                <div className="w-[25%] flex items-center">
                    <div>
                        <Heading underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[25px] w-[75%]">
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </div>
            </div>

            {/* category by content */}
            <div className="px-10 py-12 flex">
                <div className="w-[25%] flex items-center">
                    <div>
                        <Heading underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-[25px] w-[75%]">
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65",
                        name: "Chhun",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </div>
            </div>
        </>
    )
}

export default Home