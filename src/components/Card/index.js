import {connect} from 'react-redux'

function addFavorito(user){
    return {
        type:'ADD_FAVORITO',
        user
    }
}

const Card = ({user, dispatch}) => (
    
    <div className="card">
        <img src={user.avatar_url} alt={user.name} />
        <div className="card-content">
            <h1>{user.name}</h1>
            <p><strong>Usuário:</strong> {user.login}</p>
            <p><strong>Localização:</strong> {user.location}</p>
            <p><strong>Repositórios:</strong> {user.public_repos}</p>
            <p><strong>Seguidores:</strong> {user.followers}</p>
            <p><strong>Seguindo:</strong> {user.following}</p>
        </div>
        <div>
            <button onClick={()=>dispatch(addFavorito(user))}>Favoritar</button>
        </div>
    </div>      
)
export default connect(state => ({user: state.user}))(Card);