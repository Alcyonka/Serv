module.exports =(router) =>{
    const routes = router();

    routes.get('/', (req, res) => {
        res.send('All articles');
    });

    routes.get('/:id', (req, res) => {
        res.send(`Acticle ${req.params.id}`);
    });

    return routes;
};