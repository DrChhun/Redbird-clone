import Button from "@/components/Button"

const button = () => {
    return (
        <div className="bg-gray-200 shadow-lg p-32 flex justify-center gap-5">
            <Button styles="fill">Class</Button>
            <Button styles="border">Class</Button>
            <Button styles="transparent">Class</Button>
        </div>
    )
}

export default button