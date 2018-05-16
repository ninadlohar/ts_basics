class youtube  {
    constructor(public title:string, public uploaderName:string, public  publishDate:string, 
        public likes:number, public  dislikes:number, public  recommendedVideos:string[]) {

    }
    
    /* simple recommendedVideos using search character 'a' just for instance,
     if it was title, the title string word like 'car' would have matched for recommendede videos */
    
     getRecommendedVideos = () => {
        let recVid = this.recommendedVideos;
        let a;
        for(let i = 0 ; i < recVid.length ; i++){
            if(recVid[i].indexOf('j')!= -1){
               a = recVid[i];
            }
        }
        return a;  
    }
    getTitle = () => {
        return this.title;
    }   
}


let carsOfIndia = new youtube('billionares of india', 'cars of india', '01-02-2017',
23999, 901, ['https://www.youtube.com/watch?v=t_B36wHJ2Mw',
             'https://www.youtube.com/watch?v=f1qz8vn3XbY',
            'https://www.youtube.com/watch?v=Dp6lbdoprZ0',
            'https://www.youtube.com/watch?v=f3FFOBrMmdg',
            'https://www.youtube.com/watch?v=jZRYPG7su6g']);

console.log(carsOfIndia.getTitle());
console.log(carsOfIndia.getRecommendedVideos());

class bikesOfIndia extends youtube {
    constructor(public title:string, public uploaderName:string, public  publishDate:string, 
        public likes:number, public  dislikes:number, public  recommendedVideos:string[], private comments?:string) {
            super(title,uploaderName,publishDate,likes,dislikes,recommendedVideos);
            this.comments = comments;
    }
    getUploaderName = () => {
        return `video is uploaded by ${this.uploaderName}`;
    }  
}

let bikeVlogger = new bikesOfIndia('bikes of india', 'bikeVlogger', '23-03,2018',
 1752,21, [''], 'best blogger in india');

let sass = bikeVlogger.getUploaderName();
console.log(sass);