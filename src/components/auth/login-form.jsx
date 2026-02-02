'use client'
import { useActionState } from 'react'
import { login } from '@/lib/actions'



export function LoginForm({ className }) {
    const [state, action, pending] = useActionState(login, {})

    return (
        <form action={action} className={className}>
            <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>
            <div className='flex flex-col gap-4'>
                <label>Email
                    <input type='email'
                        name='email'
                        defaultValue={state.fields?.email || ''}
                        placeholder="jose@example.com"
                        className='peer block w-full py-2 px-4 focus:outline-slate-200 rounded-md'
                        required
                    />
                    <p className="invisible peer-invalid:visible text-red-300">
                        Por favor, introduce un email válido.
                    </p>
                </label>
                <label>Password
                    <input type="password"
                        name='password'
                        defaultValue={state.fields?.password || ''}
                        placeholder="******"
                        className='block w-full py-2 px-4 focus:outline-slate-200 rounded-md'
                    />
                </label>

                <div className='h-10' /> {/* Separación */}

                <button type="submit" disabled={pending} className="rounded-md mt-8 px-8 py-4 bg-slate-900 hover:bg-slate-200 hover:font-bold hover:cursor-pointer text-white hover:text-black disabled:bg-slate-300 disabled:animate-pulse">
                    {pending ? 'Iniciando sessión...' : 'Iniciar sessión'}
                </button>

                <p className={state?.error ? 'text-red-500' : 'hidden'}> {state.error} </p>
            </div>
        </form>
    )
}

export default LoginForm