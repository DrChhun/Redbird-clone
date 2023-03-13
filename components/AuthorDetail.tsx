interface Props {
    name: string
    bio: string
    image: string
}

const AuthorDetail = ({image, name, bio}: Props) => {
    return (
        <div className="flex mt-12 shadow-lg rounded-md p-4">
            <img className="h-[100px] w-[100px] rounded-full object-cover" src={image} alt="" />
            <div className="ml-5 flex flex-col justify-center">
                <h1 className="text-base font-bold">{name}</h1>
                <p className="font-light">{bio}</p>
            </div>
        </div>
    )
}

export default AuthorDetail