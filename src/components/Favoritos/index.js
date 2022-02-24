import {connect} from 'react-redux'

function rmvFavorito(user){
    return {
        type:'RMV_FAVORITO',
        user
    }
}
const Favoritos = ({users,dispatch}) => (
    
    <div className="favoritos">
        <h1>Favoritos</h1>
        {users.map(user=>(
            <div className="fav-user" key={user.login}>
                <p><strong>Usuário:</strong> {user.name}</p>
                <button onClick={()=> dispatch(rmvFavorito(user))}>Remover</button>
            </div>
        ))}
    </div>      
)
export default connect(state => ({users: state.favoritos}))(Favoritos);