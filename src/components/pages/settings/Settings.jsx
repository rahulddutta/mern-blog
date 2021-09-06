import './settings.css'
import Sidebar from "../../Sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrap">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Title</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn.pixabay.com/photo/2021/08/22/15/39/kid-6565461__340.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
