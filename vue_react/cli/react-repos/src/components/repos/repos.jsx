import {useState} from 'react';
import "./repos.css"
function Repos() {
    // const repos = [
    //    {
    //     id:1,
    //     name:"Repo1"
    //    },
    //    {
    //     id:2,
    //     name:"Repo2"  
    //    },
    //    {
    //     id:3,
    //     name:"Repo3"                     
    //    } 
    // ]
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true);

    fetch('https://api.github.com/users/Linxing777/repos')
        .then(res => res.json())
        .then(data => {
        setLoading(false);
        setRepos(data)
       })
    return(
        <div className="get_repos">
            <h2>Github Repos</h2>
            {loading && <p>Loading...</p>}
            <ul>
                {
                    repos.map(reps => (
                    <li key={reps.id}>
                        <a href={reps.html_url}>{reps.name}</a>
                        <p>作者：{reps.owner.login}</p>
                    </li>
                ))
                }
            </ul>
            {!loading && repos.length === 0 && <p>No Repos</p>}
        </div>

    )
}
export default Repos;