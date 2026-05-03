import React from 'react'
import {addRoom} from '../utils/ApiFunctions'
const AddRoom = () => {
    const[newRoom, setNewRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: "",
    })

    const [imagePreview, setImagePreview] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const[errorMessage, setErrorMessage] = useState("")

    const handleRoomInputChange = (e) => {
        const  name  = e.target.name
        let value = e.target.value
        if(name === "roomPrice"){
            if(!isNaN(value)){
                value.parseInt(value)
            }else{
                value = ""
            }
        }
        setNewRoom({...newRoom, [name]: value})
    }

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setNewRoom({...newRoom, photo: selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }

    const handleSubmit = async (e) => {
        e.ReactpreventDefault()
        try{
            const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
            if(success !==undefined){
                setSuccessMessage("Room added successfully to database")
                setNewRoom({
                    photo: null,
                    roomType: "",
                    roomPrice: "",
                })
                setImagePreview("")
                setErrorMessage("")
            }else{
                setErrorMessage("Failed to add room")
            }
        }catch(error){
            setErrorMessage(error.message)
    }
    }

  return (
    <>
    <section className="container, mt-5 mb-5">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <h2 className="mt-5 mb-2">Add New Room</h2>
                <form onsubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="roomType" className="form-label">
                            Room Type
                        </label>
                        <div></div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Room Price
                        </label>
                        <input
                        className="form-control"
                        required
                        id="roomPrice"
                        type="number"
                        name="roomPrice"
                        value={newRoom.roomPrice}
                        onChange={handleRoomInputChange}
                        />
                    </div>                   
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Room Price
                        </label>
                        <input
                            id="photo"
                            name="photo"
                            type="file"
                            className="form-control"
                            onChange={handleImageChange}
                        />
                        {imagePreview && (
                            <img src={imagePreview} alt="Photo Room Preview" 
                                className="mb-3" style={{maxWidth: "400px", maxHeight: "400px"}} />
                        )}
                    </div>
                    <div>
                        
                    </div>
                </form>
            </div>
        </div>
    </section>  

    </>
  )
}

export default AddRoom
