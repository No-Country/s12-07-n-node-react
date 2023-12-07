/* import React from 'react' */

export default function Signup() {
  return (
    <>
      <div className='flex h-full w-full justify-center content-center'>
        <form action="#">
          <div className='grid grid-rows-6 grid-cols-2'>

                <div className="col-span-2 justify-self-end">
                  <div className="h-24 w-24 rounded-full"></div>
                </div>

                <input className="mx-1 h-10 p-2 rounded-md border-2 border-blue-400" type="text" placeholder="Nombre"/>
                <input className="mx-1 h-10 p-2 rounded-md border-2 border-blue-400" type="text" placeholder="Apellido"/>
                <input className="mx-1 h-10 p-2 rounded-md border-2 border-blue-400" type="number" placeholder="Telefono"/>
                <input className="mx-1 h-10 p-2 rounded-md border-2 border-blue-400" type="email" placeholder="E-Mail"/>
                <input className="mx-1 h-10 p-2 rounded-md border-2 border-blue-400" type="number" placeholder="Contraseña"/>
                <input className="mx-1 h-10 p-2 rounded-md border-2 border-blue-400" type="number" placeholder="Confirmar Contraseña"/>

              <h1 className="text-center col-span-2 h-10">*Campos Obligatorios*</h1>

              <button type="submit" className="col-span-2 m-5 py-2 bg-pink-600 border-b-2 border-b-purple-800 rounded-md hover:bg-pink-900 hover:border-b-transparent transition duration-200">Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </>
  )
}
