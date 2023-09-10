app.route('/api/recpies/:title').get((req, res) => {
    const recTitle = req.params['title']
    res.send({ name: recTitle })
})
