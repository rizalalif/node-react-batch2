import axios from "axios"
import { useEffect, useState } from "react"
import Table from "./Table"

export default function Form({ setDataUpdate, isEdit }) {
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [categoriesId, setCategoriesId] = useState(0)
    const [movieId, setMovieId] = useState(0)
    // const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        fetchingCategory()
    }, [])

    useEffect(() => {
        console.log(setDataUpdate);
        console.log(isEdit);
        if (isEdit) {
            setTitle(setDataUpdate.title)
            setYear(setDataUpdate.year)
            setCategoriesId(setDataUpdate.categoriesId)
            setMovieId(setDataUpdate.id)
        }
    }, [setDataUpdate])

    async function fetchingCategory() {


        await axios.get("http://localhost:3000/api/category").then((result) => {
            setData(result.data.data)
        }).catch((e) => console.log(e))

    }

    async function submitForm(e) {
        e.preventDefault();

        const add = {
            title, year, categoriesId: categoriesId == 0 ? 1 : categoriesId
        }

        if (isEdit) {
            // console.log(movieId);
            await axios.put(`http://localhost:3000/api/movie/${movieId}`, add).then((response) => { })
        } else {

            await axios.post("http://localhost:3000/api/movie", add).then((response) => {
                console.log(response);
                setTitle('')
                setYear('')
                setCategoriesId(0)
            }).catch((e) => console.log(e))
        }
        axios.get("http://localhost:3000/api/movie")

    }
    return (
        <>
            <div className="hero bg-white-200 max-h-screen">
                {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                <div className="card bg-white w-full max-w-sm shrink-0">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form method="post" onSubmit={submitForm}>

                                <label className="label">Title</label>
                                <input type="text" className="input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                <label className="label">Release Year</label>
                                <input type="password" className="input" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Category</legend>
                                    <select defaultValue="Pick a browser" className="select select-md" value={categoriesId} name="country" onChange={(e) => setCategoriesId(e.currentTarget.value)}>
                                        <option disabled={true}>Pick a browser</option>
                                        {data.map((d) => (
                                            <option value={d.id}>{d.name}{d.id}</option>
                                        ))}
                                    </select>
                                </fieldset>

                                {/* <select id="country" value={categoriesId} name="country" onChange={(e) => setCategoriesId(e.currentTarget.value)}>
                                    {data.map((d) => (
                                        <option value={d.id}>{d.name}{d.id}</option>
                                    ))}
                                </select> */}
                                <button type="submit" className="btn btn-neutral mt-4 w-xs">Add</button>
                            </form>

                        </fieldset>
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* <form method="post" onSubmit={submitForm}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your value.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Your last name.." />
                <label htmlFor="country" >Country</label>
                <select id="country" value={categoriesId} name="country" onChange={(e) => setCategoriesId(e.currentTarget.value)}>
                    {data.map((d) => (
                        <option value={d.id}>{d.name}{d.id}</option>
                    ))}
                </select>
                <input type="submit" value="submit" />
            </form> */}
        </>
    )
}


