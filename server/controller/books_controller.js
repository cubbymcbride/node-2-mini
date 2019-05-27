const book = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        const { title, author } = req.books;
        let book = {
            id: id,
            title: title,
            author: authore
        }
        books.push(book)
        id++
        res.send(books)
    },

    update: (req, res)
 => {
     let index = null;
     books.forEach((book,i) => {
         if (book.id === Number(req.params.id)) index =i;
     });
     books[index] = {
         id: books[index].id,
         title: req.body.title || books[index].title,
         author: req.body.author || books[index].author
     }
     res.send(books)
 },
 delete: (req, res) => {
     let index = null;
     books.forEach((book,i) => {
        if (book.id === Number(req.params.id)) index =i;
    });
    books.splice(index,1);
    res.send(books)
 }
}