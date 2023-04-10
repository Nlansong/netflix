import React, { useCallback, useState } from 'react'
import Input from '@/components/Input'

function Auth() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [variant, setVariant] = useState('Login')
    const toggleVariant = useCallback(() =>{
        setVariant((currentVariant) => currentVariant === 'Login' ? 'Register' : 'Login');
    }, [])
  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-cover '>
        <div className='bg-black w-ull h-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
                    <img src='/images/logo.png' alt='logo' className='h-12' />
            </nav>
            <div className='flex justify-center' >
                <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:h-2/5 lg:max-w-md w-full'  >
                    <h2 className='text-white text-4xl mb-8 font-semibold' > 
                        {variant === 'Login'? 'Sign in' : 'Register'}
                    </h2>
                    <div className='flex flex-col gap-4' >
                        {variant === 'Register' && (
                        <Input 
                            label='Username'
                            onChange={(event:any) => setName(event.target.value)}
                            id='name'
                            type='name'
                            value={name}
                        />
                        )}
                        <Input 
                            label='Email'
                            onChange={(event:any) => setEmail(event.target.value)}
                            id='email'
                            type='email'
                            value={email}
                        />
                        <Input 
                            label='password'
                            onChange={(event:any) => setPassword(event.target.value)}
                            id='password'
                            type='password'
                            value={password}
                        />
                    </div>
                    <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition' >
                        {variant === 'Login' ? 'Login' : 'Sign up'}
                    </button>
                    <p className='text-neutral-500 mt-12' >
                        {variant === 'Login' ? 'First time uing Netflix?' : 'Already have an account'}
                        <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                            {variant === 'Login' ? 'Create an account': 'Login'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth