import posts from "./tuits.js";

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.topic = "SaitejaNodeJs_A8"
    newTuit.username = "Saiteja";
    newTuit.handle = "@Saiteja";
    newTuit.title = "NodeJS_A8";
    newTuit.time = "Just now";
    newTuit.image =
        "https://www.pngfind.com/pngs/m/299-2995596_nasa-logo-photo-nasa-logo-1-1-hd.png";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) =>
    res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params['tid'];
    tuits = tuits.filter(t =>
                             t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
