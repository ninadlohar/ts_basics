class facebook {

    //constructor that have properties included i.e private id:number...

    constructor(private id:number, private name:string, private age: number,
         public birthday:string, private email: string, private contact:number, 
         private aboutYou:string, private highSchool:string, private college:string) {
         }

    //getters

    getId = () => {
        return this.id;
    }
    
    getAboutYou = () => {
        return this.aboutYou;
    }

    getBirthday = () => {
        return this.birthday;
    }

    graduatedFrom = () => {
        return `xavier pena graduated from ${this.college} college`;
    }

    //setters

    setId = (id:number) => {
        this.id = id;
    }

    setAboutYou = (aboutYou:string) => {
        this.aboutYou = aboutYou;
    } 
}

//xavier is declared here as object

let xavier = new facebook(18001,'xavier pena', 22, '03-07-1972', 'xav.pen@fbi.com',
                2028081691, 'hustle until your bank account balance looks like phone number',
            'st.xavier school', 'st.xavier');

    console.log(xavier.getId());

xavier.setAboutYou(`make your fortune, i've made mine`);
console.log(xavier.getAboutYou());
console.log(`age of xavier pena is: ${xavier.getBirthday()}`);
console.log(xavier.graduatedFrom());
