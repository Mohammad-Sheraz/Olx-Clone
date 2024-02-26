import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { uploadpfp } from "../../Config/Firebase"
import '../../../src/index.css'

function ProfilePicture() {


    const navigate = useNavigate()
    const [pfpImg, setPfpImg] = useState()


    const pfpUpdated = async () => {


        await uploadpfp({ pfpImg })
        navigate('/')

    }


    return (
        <div className='mainDIV'>
        <div className='div1'>
            <div className='div2'>
                <div ><h3 >edit Profile</h3></div>
                <div>
                    <hr />
                    <br />

                    <label>Profile Photo</label>
                    <br />
                    <br />

                    <div class="upload-btn-wrapper">
                        <button for='file' class="upload-img-btn">Upload Profile</button>
                        <input type="file" id='file' name="myfile" onChange={(e) => setPfpImg(e.target.files[0])} />
                    </div>
                </div>
                <div >
                    <h3>include some details</h3>
                    <label>Name:</label>
                    <br />
                    <input className='input' type='text' placeholder='Your Fullname' />
                    <br />
                    <br />

                    <label>Date of Birth</label>
                    <br />
                    <input className='input' type='date' />
                </div>
                <div>
                    <button className='log-btn' onClick={pfpUpdated}>Save Changes</button>
                </div>
            </div>

        </div>
    </div>
    )
}

export default ProfilePicture;