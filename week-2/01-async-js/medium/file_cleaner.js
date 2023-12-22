var fs = require('fs');

var file = process.argv[2];
// console.log('Reading file: ' + file);

// not really able to read the file asynchronously. Need to find out how to do that

async function readFileData(file) {
    // reading the file asynchronously
    let data = await fs.readFileSync(file, 'utf8');
    return data;
}


async function main() {
    let data = await readFileData(file); // this is a promise so we have to wait till it resolves to use the data further
    // console.log(data);
    let lines = data.split("\n");

    // this part is synchronous
    let cleanedLines = [];
    lines.forEach((line) => {
        // cleanup each line using regex
        // replace multiple spaces with single space
        let cleanedLine = line.replace(/\s\s+/g, ' ');
        cleanedLines.push(cleanedLine);
    });

    let cleanedData = cleanedLines.join('\n');
    // console.log(cleanedData);

    fs.writeFileSync('cleaned_text.txt', cleanedData, 'utf8');
    console.log('File cleaned successfully!');
}


main();
