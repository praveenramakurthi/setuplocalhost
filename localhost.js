import React, { useState } from 'react'

export default function Student() {
    const [data, setData] = useState("");

    // const fetchData = () => {
    //     const url = "http://localhost:8080/"
    //     const httpObject = {
    //         method: "GET",
    //     }
    //     fetch(url, httpObject)
    //         .then((data) => data.json())
    //         .then((data) => setData(data));
    // }

    const fetchPostData = () => {
        fetch("http://localhost:8080/studentdata/", {
            method: "POST",
            body: JSON.stringify({
                "name": "praveen",
                "gender": "M",
                "rollno": 7863982,
                "branch": "CSE",
                "DEPT": "B.E"
            }),
            headers: {
                "Accept":"application/json",
                "content-type": "application/json"
            }
        })
            .then((data) => data.json())
            .then((remoteData) => console.log(remoteData))
    }
    return (
        <div>
            <h1>Response from server</h1>
            <button onClick={fetchPostData}>fetch student data</button>
            <p>{data.message}</p>
        </div>
    )
}
