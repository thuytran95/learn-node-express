class NewsController {
    // tuyen duong luon khop tu tren xuong -> phai de tuyen duong trong o cuoi
    //  [GET] /news/:slug
    show(req, res) {
        res.send('new details');
    }

    // [GET] /news
    index(req, res) {
        res.render('news');
    }
}

module.exports = new NewsController();
