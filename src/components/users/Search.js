import React, { useContext, useState } from 'react'
import {GithubContext} from '../../context/github/githubContext'
import {AlertContext} from '../../context/alert/AlertContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text === '') {
            alertContext.setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
    }

        return (
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' 
                    placeholder='Search users...' 
                    value={text}
                    name='text' 
                    onChange={onChange} />
                    <button className='btn btn-dark btn-block'>Search</button>
                </form>
                {githubContext.users.length > 0 && (
                    <button className='btn btn-light btn-block'
                onClick={githubContext.clearUsers}>Clear</button>
                )}
                
            </div>
        )
}

export default Search;

