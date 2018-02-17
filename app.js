const EpubPress = require('epub-press-js');

var title = process.argv[2];

if (title === '-h') {
    console.log('title description url');
    return;
}

var description = process.argv[3];
var url = process.argv[4];

const ebook = new EpubPress({
    title: title,
    description: description,
    urls: [url]
});

ebook.publish().then(
    () => ebook.download()
).then().catch((error) => {
    console.log(`Error: ${error}`);
});

