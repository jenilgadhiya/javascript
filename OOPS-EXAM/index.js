class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;

    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        this.#author = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

    get rentalPrice() {
        return this.#rentalPrice;
    }

    set rentalPrice(value) {
        this.#rentalPrice = value;
    }

    get copiesAvailable() {
        return this.#copiesAvailable;
    }

    set copiesAvailable(value) {
        this.#copiesAvailable = value;
    }
    buyBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable--;
            console.log(`Book purchased. Remaining copies: ${this.#copiesAvailable}`);
        } else {
            console.log("Sorry, the book is out of stock.");
        }
    }
    rentBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable--;
            console.log(`Book rented. Remaining copies: ${this.#copiesAvailable}`);
        } else {
            console.log("Sorry, the book is out of stock.");
        }
    }
    returnBook() {
        this.#copiesAvailable++;
        console.log(`Book returned. Available copies: ${this.#copiesAvailable}`);
    }

    checkAvailability() {
        console.log(`Copies available: ${this.#copiesAvailable}`);
    }
}

const book1 = new Book("JavaScript", "bill gates", 30, 5, 10);

book1.checkAvailability();
book1.buyBook();
book1.rentBook();
book1.returnBook();
book1.checkAvailability();