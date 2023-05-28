import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Search(props) {
    const [name, setName] = useState("");
    const [results, SetResults] = useState([]);
    const Setting = (event) => {
        let hg = event.target.value
        setName(hg);
        console.log(hg)
    }
    let Api = `http://hn.algolia.com/api/v1/search?query=${name}`;
    const getData = async (url) => {
        let res = await axios.get(url);
        // const data = res.json();
        SetResults(res.data.hits);

    }
    useEffect(() => {
        getData(Api);
    }, [name])
    return (<>
        <input type="text" value={name} onChange={Setting} />
        {results.map((allResults) => {
            return (
                <div>
                    {allResults.title}
                </div>
            )
        })}
        </>
            )
}

            export default Search



