function fetchPOST(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


const data = {
    options: {
        minify: true,
    },
    content : {

    }
}

window.onload = () => fetchPOST('http://127.0.0.1:5000/api/', data).then(res => res.json())
.then(res => {
    console.log(res)
    document.getElementById('out').innerHTML = JSON.stringify(res, undefined, 4)
});
