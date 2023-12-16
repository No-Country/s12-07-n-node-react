export const viewsController = async (req, res) => {
  res.render('index')
}

export const authViewController = async (req, res) => {
  res.render('auth')
}

export const contentViewController = async (req, res) => {
  res.render('content')
}

export const discoverViewController = async (req, res) => {
  res.render('discover')
}


export const listViewController = async (req, res) => {
  res.render('lists')
}
