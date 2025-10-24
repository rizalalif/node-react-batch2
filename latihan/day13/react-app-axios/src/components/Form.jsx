import axios from "axios"
import { useEffect, useState } from "react"
import Table from "./Table"

export default function Form({ setDataUpdate }) {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [categoryId, setCategoryId] = useState(0)
    useEffect(() => {
        fetchingCategory()
    }, [])




    async function fetchingCategory() {


        await axios.get("http://localhost:3000/api/category").then((result) => {
            setData(result.data.data)
        }).catch((e) => console.log(e))

    }

    async function submitForm(e) {
        e.preventDefault();

        const add = {
            title, year, categoryId
        }

        await axios.post("http://localhost:3000/api/movie", add).then((response) => {
            // fetching()
            setTitle('')
            setYear('')
            setCategoryId(0)
            axios.get("http://localhost:3000/api/movie")
        })

    }
    return (
        <>
            <form method="post" onSubmit={submitForm}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your value.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Your last name.." />

                <label htmlFor="country" >Country</label>
                <select id="country" value={categoryId} name="country" onChange={(e) => setCategoryId(e.currentTarget.value)}>
                    {data.map((d) => (
                        <option value={d.id}>{d.name}{d.id}</option>
                    ))}
                </select>

                <input type="submit" value="submit" />
            </form>
        </>
    )
}


