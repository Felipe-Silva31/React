import {useDispatch} from 'react-redux';
import {useState} from 'react'

function toggleUser(user){
    return {
        type:'SET_USER',
        user,
    }
}

function toggleRepos(repos){
    return {
        type:'SET_REPOS',
        repos,
    }
}

export default function Navbar(){
    const [searchValue, setValue] = useState('')

    const dispatch = useDispatch();

    const toggleValue = (event)=>{
        const {value} = event.target;
        setValue(value)
    }

    const searchUser = async () =>{
        const userResponse = fetch('https://api.github.com/users/' + encodeURI(searchValue));
        const [user] = await Promise.all([userResponse]);
        const userJson = await user.json();
        dispatch(toggleUser(userJson))

        const reposResponse = fetch('https://api.github.com/users/'+ encodeURI(searchValue) +'/repos');
        const [repos] = await Promise.all([reposResponse]);
        const reposJson = await repos.json();
        dispatch(toggleRepos(reposJson))
    }

    return(
        <div className="header">
            <div className="pesquisa">
                <input onChange={toggleValue} type="text" value={searchValue} placeholder="Digite o nome do usuário" />
                <button onClick={searchUser} >Pesquisar</button>      
            </div>
        </div>  
    )
}

