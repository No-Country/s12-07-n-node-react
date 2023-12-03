const { Router } = require('express')
const { readdirSync } = require('fs')

const router = Router()
const PATH_ROUTER = `${__dirname}`

const cleanFileName = (fileName) => {
  const file = fileName.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter(filename => {
  const cleanName = cleanFileName(filename)
  if (cleanName !== 'index') {
    import(`./${cleanName}.route`).then(moduleRouter => {
      router.use(`/${process.env.API_URL}${cleanName}s`, moduleRouter.router)
    })
  }
})
