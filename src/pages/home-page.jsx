// import React from 'react'

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import '../styles/home-page.css';

function HomePage() {
    const form = useForm();
    const { register, handleSubmit } = form;
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/searchProviders')
    }

    const onError = (error) => {
        console.log(error);
    }


    return (
        <main>
            <div className="home">

                <form className='search-form' onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                    <label htmlFor="keyword">Keyword</label>
                    <input
                        type="text"
                        name='keyword'
                        id='keyword'
                        {...register('keyword')}
                    />
                    <label htmlFor="Address">Address</label>
                    <input
                        type="text"
                        name='address'
                        id='address'
                        {...register('address')}
                    />

                    <label htmlFor="Category">Category</label>
                    <select
                        type="text"
                        name='category'
                        id='category'
                        {...register('category')}
                        defaultValue={''}
                    >
                        <option value="hindu">Hindu priest</option>
                        <option value="reiki">Reiki healer</option>
                    </select>
                    <button type='submit'> Search </button>
                </form>

            </div>

        </main>
    )
}

export default HomePage