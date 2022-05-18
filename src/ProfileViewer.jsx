import React, {useState, useEffect} from "react";
import axios from "axios";

const ProfileViewer = ({name="XuxaO415", color="pink"}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        // axios.get("https://api.github.com/users/elie").then(res => console.log(res.data.name))
        // axios.get("https://api.github.com/users/elie").then(res => {
        // setData(res.data.name)
        // })
        async function loadProfile() {
            console.log("FETCHING NEW DATA....")
            const res = await axios.get(`https://api.github.com/users/${name}`);
            setData(res.data.name);
        }
        loadProfile();
    }, [name])

    return (
     <h3 style={{color}}>
         {data ? data: 'Loading...'}
     </h3>
    )

}

export default ProfileViewer;