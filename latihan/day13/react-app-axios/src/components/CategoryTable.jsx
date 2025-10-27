import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "./Button"

export function CategoryTable() {
    const [data, setData] = useState([])
    const [movie, setMovie] = useState({})
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        await axios.get('http://localhost:3000/api/category')
            .then((result) => {
                setData(result.data.data)
            }).catch((e) => {
                console.log(e);
            })
    }

    return (
        <div className="card bg-base-200 overflow-x-auto max-h-screen w-7xl max-w-8xl shadow-2xl ">
            <table className='table table-md w-full'>
                <thead className='sticky top-0 bg-white z-10'>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr className="hover:bg-base-300">
                            <td>{i + 1}</td>
                            <td>{d.name}</td>
                            <td className='gap-7'>
                                <Button className={"btn btn-accent m-2"} label={"Edit"} action={() => setDataUpdate(d)} id={d.id} />
                                <Button className={"btn btn-error m-2"} label={"Delete"} action={() => deleteData(d.id)} id={d.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}