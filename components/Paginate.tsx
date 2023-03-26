interface Props {
    total?: number | any
    setCurrentPage?: any
    currentPage?: number
}

const Paginate = ({total, setCurrentPage, currentPage}: Props) => {

    let arr: number[] = [];
    // let fakeArr = [...Array(total).keys()]
    // console.log(total, "gg", fakeArr)

    for (let i=1; i <= total; i++) {
        arr.push(i);
    }  

    return (
        <div className="flex gap-5 justify-center">
            {arr?.map(get => {
                return (
                    <div key={get}>
                        <p className={`${currentPage === get ? "underline" : ""} cursor-pointer font-bold font-sans text-xl active:underline rounded-full`} 
                            onClick={() => setCurrentPage(get)}>{get}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Paginate