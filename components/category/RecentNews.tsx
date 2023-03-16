import Cover from "../Cover"

const RecentNews = () => {
    return (
            <div className="grid md:grid-rows-2 md:grid-cols-12 gap-4 py-12 px-4 lg:px-10">
                <div className="md:col-span-7 md:row-span-3 h-[300px] md:h-full md:pb-4">
                    <Cover underlineColor="red" heading="អត្ថបទ PR" img={"https://business-cambodia.com/cms/assets/48a4c11d-73c7-4441-934f-f16e52aaa434"} link="articles/22" fontSize="coverFirst">
                        ធនាគារ វីង ប្រគល់រថយន្តទំនើប Lexus LX600 SUV ដល់អ្នកឈ្នះរង្វាន់កម្មវិធីដាក់ប្រាក់កាន់តែច្រើន ឈ្នះកាន់តែធំ
                    </Cover>
                </div>
                <div className="md:col-span-5 h-[300px] md:h-full">
                    <Cover underlineColor="red" heading="ព័ត៌មានថ្មីៗ" img={"https://business-cambodia.com/cms/assets/5de32954-bdf1-4dac-b97c-2c72978af0d1"} link={"articles/23"} fontSize="xl">
                        ចេញចូលភ្នំពេញត្រូវដឹង! នៅថ្ងៃទី២៩ ធ្នូ រដ្ឋបាលរាជធានីភ្នំពេញនឹងផ្អាកចរាចរយានជំនិះគ្រប់ប្រភេទលើកំណាត់មហាវិថីឈ្នះឈ្នះ
                    </Cover>
                </div>
                <div className="md:col-span-5 h-[300px] md:h-full">
                    <Cover underlineColor="red" heading="ព័ត៌មានថ្មីៗ" img={"https://business-cambodia.com/cms/assets/f4e963dd-fc7d-4641-a3bf-265ef1288ec4"} link={"articles/24"} fontSize="xl">
                        កាន់តែងាយស្រួល! អ្នកដែលមានសំបុត្រកំណើតសរសេរខុស អាចទៅកែថ្មីនៅកន្លែងនេះបាន
                    </Cover>
                </div>
            </div>
    )
}

export default RecentNews