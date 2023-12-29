// 2. display obj readingStatus equal true

var librarys = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: false,
    },

];

var query = librarys.filter(function (item) {
    return item.readingStatus == true;
});
console.log(query);
