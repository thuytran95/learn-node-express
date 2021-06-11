class SiteController {
    // tuyen duong luon khop tu tren xuong -> phai de tuyen duong trong o cuoi
    //  [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
