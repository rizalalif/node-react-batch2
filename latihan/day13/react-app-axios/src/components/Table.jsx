import axios from 'axios'
import { useEffect, useState } from 'react';
import { Button } from './Button';

export default function Table({ setDataUpdate }) {
    const [data, setData] = useState([])
    const [movie, setMovie] = useState({})
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    useEffect(() => {
        fetchData()
    })

    async function fetchData() {
        await axios.get('http://localhost:3000/api/movie?page=' + page)
            .then((result) => {
                setData(result.data.data.data)
                setCount(result.data.data.total)
                // console.log(data);
            }).catch((e) => {
                console.log(e);
            })
    }

    async function deleteData(id) {
        await axios.delete('http://localhost:3000/api/movie/' + id)
            .then(() => fetchData())
        console.log('hapus');
    }






    return (

        <div className="card bg-base-200 overflow-x-auto w-7xl max-w-8xl shadow-2xl ">
            <table className='table table-md w-full'>
                <thead className='sticky top-0 bg-white z-10'>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr className="hover:bg-base-300">
                            <td>{i + 1}</td>
                            <td>{d.title}</td>
                            <td>{d.year}</td>
                            <td>{d.category?.name}</td>
                            <td className='gap-7'>
                                <Button className={"btn btn-accent m-2"} label={"Edit"} action={() => setDataUpdate(d)} id={d.id} />
                                <Button className={"btn btn-error m-2"} label={"Delete"} action={() => deleteData(d.id)} id={d.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="join">
                {Array.from({ length: Math.ceil(count / 3) }, (_, i) =>
                    (<button className="join-item btn btn-xl" onClick={() => setPage(i + 1)}>{i + 1}</button>)
                )}
            </div>
        </div >


    )
}


async function fetching() {
    await axios.get('http://localhost:3000/api/movie')
        .then((result) => {
            return result
        }).catch((e) => {
            console.log(e);
        })
}