import { loginGoogle, loginGithub, loginDiscord } from "@/lib/actions"

function OauthForm({ className, error }) {

  return (
    <form className={className}>
      <h1 className="text-3xl font-bold mb-4">Iniciar sesión OAuth</h1>

      <div className='flex flex-col gap-1'>
        <button formAction={loginGoogle}
          className="rounded-md flex gap-2 items-center px-8 py-4 bg-slate-900 hover:bg-slate-200 hover:font-bold hover:cursor-pointer text-white hover:text-black disabled:bg-slate-300 disabled:animate-pulse">
          <img src="/images/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub}
          className="rounded-md flex gap-2 items-center px-8 py-4 bg-slate-900 hover:bg-slate-200 hover:font-bold hover:cursor-pointer text-white hover:text-black disabled:bg-slate-300 disabled:animate-pulse">
          <img src="/images/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

        <button formAction={loginDiscord}
          className="rounded-md flex gap-2 items-center px-8 py-4 bg-slate-900 hover:bg-slate-200 hover:font-bold hover:cursor-pointer text-white hover:text-black disabled:bg-slate-300 disabled:animate-pulse">
          <img src="/images/discord.svg" alt="Discord" /> Iniciar sesión con Discord
        </button>
        {error}
      </div>
    </form>
  )
}

export default OauthForm
