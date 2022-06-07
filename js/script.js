const base_url = 'https://www.breakingbadapi.com/api'
const containerLive = document.getElementById('container-live');
const searchNode = document.getElementById('search');
const searchNode2 = document.getElementById('search2');


let initialData = [];
let sortByNameDirection = 'asc'
let sortByNicknameDirection = 'asc'
let sortByRoleDirection = 'asc'
let sortByActorDirection = 'asc'
let sortByStatusDirection = 'asc'
// const imgUrl = ""
let myanim;

const render = (data) => {
    const lastc = data.map((item, index) => {
        let result = ''
        let resField = ''
        result += `
        <tr>
        <td>${item.name}</td>
        <td>${item.nickname}</td>
        <td>${item.occupation}</td>
        <td>${item.portrayed}</td>
        <td>${item.status}</td>
        <td><img src="${item.img}" width="100px"></img></td> 
        </tr>`
        document.getElementById("loader").style.display = "none";
        return result
    })
    containerLive.innerHTML = lastc.join('')
    console.log(data);
}

const renderBad = (data) => {
    const fields = ['name', 'occupation', 'imgUrl']
    render(data, fields, containerLive);
}
const fetcher = (url, renderfunction) => {
    fetch(`${base_url}/characters`)
        .then(response => response.json())
        .then(data => {
            renderfunction(data)
            initialData = data
        })
}
const fetchBase = () => {
    const url = `${base_url}/characters`
    fetcher(url, render)
}
fetchBase()
const filterData = (searchTerm) => {
    const filtered = initialData.filter(
        item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    renderBad(filtered)
}
const filterDataNickname = (searchnickname) => {
    const filteredNickname = initialData.filter(
        item => item.nickname.toLowerCase().includes(searchnickname.toLowerCase())
    )
    renderBad(filteredNickname)
}

const handleSearch = () => {
    searchNode.value
    filterData(searchNode.value)
}
const handleSearchBynickname = () => {
    searchNode.value
    filterDataNickname(searchNode.value)
}

const sorting = () => {

}
function compare(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}
const sortByName = () => {
    const data = [...initialData];
    if (sortByNameDirection === 'asc') {
        data.sort((a, b) => compare(a.name, b.name))
        sortByNameDirection = 'desc';
    } else {
        data.sort((a, b) => compare(b.name, a.name))
        sortByNameDirection = 'asc';
    }
    renderBad(data);
    searchNode.value = ''
}
const sortByNickname = () => {
    const data = [...initialData];
    if (sortByNicknameDirection === 'asc') {
        data.sort((a, b) => compare(a.nickname, b.nickname))
        sortByNicknameDirection = 'desc';
    } else {
        data.sort((a, b) => compare(b.nickname, a.nickname))
        sortByNicknameDirection = 'asc';
    }
    renderBad(data);
    searchNode.value = ''
}
const sortByRole = () => {
    const data = [...initialData];
    if (sortByRoleDirection === 'asc') {
        data.sort((a, b) => compare(a.occupation, b.occupation))
        sortByRoleDirection = 'desc';
    } else {
        data.sort((a, b) => compare(b.occupation, a.occupation))
        sortByRoleDirection = 'asc'
    }
    renderBad(data)
    searchNode.value = ''
}
const sortByActor = () => {
    const data = [...initialData];
    if (sortByActorDirection === 'asc') {
        data.sort((a, b) => compare(a.portrayed, b.portrayed))
        sortByActorDirection = 'desc';
    } else {
        data.sort((a, b) => compare(b.portrayed, a.portrayed))
        sortByActorDirection = 'asc'
    }
    renderBad(data)
    searchNode.value = ''
}
const sortByStatus = () => {
    const data = [...initialData];
    if (sortByStatusDirection === 'asc') {
        data.sort((a, b) => compare(a.status, b.status))
        sortByStatusDirection = 'desc';
    } else {
        data.sort((a, b) => compare(b.status, a.status))
        sortByStatusDirection = 'asc'
    }
    renderBad(data)
    searchNode.value = ''
}


const reset = () => {
    renderBad(initialData);
    searchNode.value = ''
}
fetchBase()

