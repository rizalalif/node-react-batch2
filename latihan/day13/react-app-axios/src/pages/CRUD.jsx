import { useState } from "react"
import Form from "../components/Form"
import Table from "../components/Table"
import { Button } from "../components/Button"

export default function CRUD() {
    const [dataUpdate, setDataUpdate] = useState({})
    const [isEdit, setIsEdit] = useState(false)

    function handleEdit(data) {
        setIsEdit(true)
        setDataUpdate(data)
    }


    return (
        <>

            <div className="h-1/2">
                <Table setDataUpdate={handleEdit} />
            </div>
            <div className="py-4">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Add</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <Form setDataUpdate={dataUpdate} isEdit={isEdit} />
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}