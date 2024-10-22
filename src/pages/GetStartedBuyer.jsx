import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedBuyer = ({addBuyerSubmit}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [check, setCheck] = useState('');


    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newBuyer = {
            name,
            email,
            phone,
            password,
        };

        addBuyerSubmit(newBuyer);

        return navigate('/');
    };
    
  
    return (
        <section className='bg-indigo-50'>
        <div className='container m-auto max-w-2xl py-24'>
          <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <form onSubmit={submitForm}>
              <h2 className='text-3xl text-center font-semibold mb-6'>Get Started</h2>
                <h3 className='text-1xl text-center font-semibold mb-6'>by creating a free account as a Buyer</h3>


                <div className='mb-4'>
                <input
                    type='text'
                    id='name'
                    name='name'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Your Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <input
                    type='email'
                    id='email'
                    name='email'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Your Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Your Phone Number'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>


                <div className='mb-4'>
                <input
                    type='password'
                    id='password'
                    name='password'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Create a password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Confirm the password'
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </div>



                <div>
                    <input 
                        type="checkbox" 
                        id="scales" 
                        name="scales" 
                        value={check}
                        onChange={(e) => setCheck(e.target.value)}
                        />
                    <label htmlFor="scales">By checking the box you agree to our Terms and Conditions.</label>
                </div>




                <button
                    className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                    type='submit'
                >
                    Next
                </button>

            </form>
            </div>
        </div>
        </section>
  )
}

export default GetStartedBuyer