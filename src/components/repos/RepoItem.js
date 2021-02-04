import React from 'react'

const RepoItem = ({repos}) => {
    return (
        <div className='card'>
            <h3><a href={repos.html_url}></a></h3>
        </div>
    )
}

export default RepoItem

