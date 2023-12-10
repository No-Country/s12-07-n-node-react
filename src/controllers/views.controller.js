export const viewsController = async (req, res) => {
  res.render('index')
}

export const authViewController = async (req, res) => {
  res.render('auth')
}

export const contentViewController = async (req, res) => {
  res.render('content')
}
