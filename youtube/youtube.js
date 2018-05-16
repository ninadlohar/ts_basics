var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var youtube = /** @class */ (function () {
    function youtube(title, uploaderName, publishDate, likes, dislikes, recommendedVideos) {
        var _this = this;
        this.title = title;
        this.uploaderName = uploaderName;
        this.publishDate = publishDate;
        this.likes = likes;
        this.dislikes = dislikes;
        this.recommendedVideos = recommendedVideos;
        /* simple recommendedVideos using search character 'a' just for instance,
         if it was title, the title string word like 'car' would have matched for recommendede videos */
        this.getRecommendedVideos = function () {
            var recVid = _this.recommendedVideos;
            var a;
            for (var i = 0; i < recVid.length; i++) {
                if (recVid[i].indexOf('j') != -1) {
                    a = recVid[i];
                }
            }
            return a;
        };
        this.getTitle = function () {
            return _this.title;
        };
    }
    return youtube;
}());
var carsOfIndia = new youtube('billionares of india', 'cars of india', '01-02-2017', 23999, 901, ['https://www.youtube.com/watch?v=t_B36wHJ2Mw',
    'https://www.youtube.com/watch?v=f1qz8vn3XbY',
    'https://www.youtube.com/watch?v=Dp6lbdoprZ0',
    'https://www.youtube.com/watch?v=f3FFOBrMmdg',
    'https://www.youtube.com/watch?v=jZRYPG7su6g']);
console.log(carsOfIndia.getTitle());
console.log(carsOfIndia.getRecommendedVideos());
var bikesOfIndia = /** @class */ (function (_super) {
    __extends(bikesOfIndia, _super);
    function bikesOfIndia(title, uploaderName, publishDate, likes, dislikes, recommendedVideos, comments) {
        var _this = _super.call(this, title, uploaderName, publishDate, likes, dislikes, recommendedVideos) || this;
        _this.title = title;
        _this.uploaderName = uploaderName;
        _this.publishDate = publishDate;
        _this.likes = likes;
        _this.dislikes = dislikes;
        _this.recommendedVideos = recommendedVideos;
        _this.comments = comments;
        _this.getUploaderName = function () {
            return "video is uploaded by " + _this.uploaderName;
        };
        _this.comments = comments;
        return _this;
    }
    return bikesOfIndia;
}(youtube));
var bikeVlogger = new bikesOfIndia('bikes of india', 'bikeVlogger', '23-03,2018', 1752, 21, [''], 'best blogger in india');
var sass = bikeVlogger.getUploaderName();
console.log(sass);
