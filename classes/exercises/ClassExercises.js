// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, checkoutNumber, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.checkoutNumber = checkoutNumber;
        this.discarded = discarded;
    }
    checkOut(checkedOut = 1){
        this.checkoutNumber += checkedOut;
    }
}
// Define your Manual and Novel classes here:
let currentYear = 2023;
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, checkoutNumber, discarded){
        super(title, author, copyrightDate, isbn, numberOfPages, checkoutNumber, discarded);
    }
    disposal(){
        if (currentYear > this.copyrightDate + 5){
            this.discarded = true;
        }
    }

}
class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, checkoutNumber, discarded){
        super(title, author, copyrightDate, isbn, numberOfPages, checkoutNumber, discarded);
    }
    disposal(){
        if (this.checkoutNumber > 100){
            this.discarded = true;
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false);
let topSecretManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false);
// Code exercises 4 & 5 here:
//console.log(topSecretManual.discarded + " " + prideAndPrejudice.discarded);

topSecretManual.disposal();
prideAndPrejudice.checkOut(5);
//prideAndPrejudice.disposal();

//console.log(topSecretManual.discarded + " " + prideAndPrejudice.discarded);