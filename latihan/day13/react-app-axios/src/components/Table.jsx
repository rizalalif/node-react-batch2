import axios from 'axios'
import { useEffect, useState } from 'react';
import { Button } from './Button';

export default function Table() {
    const [data, setData] = useState([])
    const [movie, setMovie] = useState({})
    useEffect(() => {
        fetchData()
    },[])

    async function fetchData() {
        await axios.get('http://localhost:3000/api/movie')
            .then((result) => {
                setData(result.data.data)
            }).catch((e) => {
                console.log(e);
            })
    }

    async function deleteData(id) {
        await axios.delete('http://localhost:3000/api/movie/' + id)
            .then(() => fetchData())
        console.log('hapus');
    }


    async function fetchDataById(id) {
        await axios.get('http://localhost:3000/api/movie/' + id)
            .then((movie) => setMovie(movie))
            setDataUpdate()
    }




    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                            <td>{d.year}</td>
                            <td>{d.category?.name}</td>
                            <td>
                                <Button label={"Edit"} action={() => deleteData} id={d.id} />
                                <Button label={"Delete"} action={() => deleteData(d.id)} id={d.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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