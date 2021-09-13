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
    content : [
        {
            fileType : 'variable',
            uid: 'ae672-ascIi-0927at-65z7ao',
            name : '--bg',
            value : '#fafafa'
        },
        {
            fileType : 'style',
            uid: 'ae672-ascIi-0927at-9j83?o',
            name : 'background', 
            value : 'var(--bg)'
        },
        {
            fileType : 'style',
            uid: 'ae672-ascIi-142j23-999xx7',
            name : 'color', 
            value : '#202020'
        },
        {
            fileType : 'component',
            uid: 'ae672-ascIi-0927at-192&4n3',
            name: 'MaterialButton',
            type: 'component',
            styles : [
                'ae672-ascIi-0927at-9j83?o',
                'ae672-ascIi-142j23-999xx7'
            ],
            actions : [],
            variations: [],
            variables: ['ae672-ascIi-0927at-65z7ao'],
        }
    ]
}

window.onload = () => fetchPOST('http://127.0.0.1:5000/api/', data).then(res => res.json())
.then(res => {
    console.log(res)
    document.getElementById('out').innerHTML = JSON.stringify(res, undefined, 4)
});
