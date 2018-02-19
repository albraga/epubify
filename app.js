const EpubPress = require('epub-press-js');

var title = process.argv[2];
var description = process.argv[3];
var url = process.argv[4];

if (process.argv.length !== 5) {
    console.log('title description url');
    return;
} else {

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

}