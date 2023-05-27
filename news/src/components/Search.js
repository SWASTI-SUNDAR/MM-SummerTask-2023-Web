import React, { useEffect, useState } from 'react'

function Search(props) {
     
    let Api = `http://hn.algolia.com/api/v1/search?query=html`;
    const getData = async (url) => {
        let res = await fetch(url);
        const data = res.json();
        console.log(data);

    }
    useEffect(() => {
        getData(Api);
    }, [])
    return (
        <div>

        </div>
    )
}

export default Search



