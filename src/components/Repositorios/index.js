import {connect} from 'react-redux'

const Repositorios = ({repos}) => (
    <div className="repositorios">
        <div className='repo-header'>
            <h1>Repositorios</h1>
        </div>
        {repos.map(repo=>(
            <div className="repo-content" key={repo.name}>
                <div>
                    <p><strong>{repo.name}</strong></p>
                </div>
            </div>
        ))}
    </div>      
)
export default connect(state => ({repos: state.repositorios}))(Repositorios);