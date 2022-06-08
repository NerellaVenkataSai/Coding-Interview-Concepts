// bad approach takes more in-memory
const CHUNK_SIZE = 10000000; // 10MB
const data = fs.readFileSync('./file');
for(let bytesRead = 0; bytesRead < data.length; bytesRead = bytesRead + CHUNK_SIZE) {
 // do something with data 
}


async function start() {
    const stream = fs.createReadStream('./file', { highWaterMark: CHUNK_SIZE });
    for await(const data of stream) {
       // do something with data 
    }
}
start();

/// best approach

function readBytes(fd, sharedBuffer) {
    return new Promise((resolve, reject) => {
        fs.read(
            fd, 
            sharedBuffer,
            0,
            sharedBuffer.length,
            null,
            (err) => {
                if(err) { return reject(err); }
                resolve();
            }
        );
    });
}

async function* generateChunks(filePath, size) {
    const sharedBuffer = Buffer.alloc(size);
    const stats = fs.statSync(filePath); // file details
    const fd = fs.openSync(filePath); // file descriptor
    let bytesRead = 0; // how many bytes were read
    let end = size; 
    
    for(let i = 0; i < Math.ceil(stats.size / size); i++) {
        await readBytes(fd, sharedBuffer);
        bytesRead = (i + 1) * size;
        if(bytesRead > stats.size) {
           // When we reach the end of file, 
           // we have to calculate how many bytes were actually read
           end = size - (bytesRead - stats.size);
        }
        yield sharedBuffer.slice(0, end);
    }
}

const CHUNK_SIZE = 10000000; // 10MB

async function main() {  
  for await(const chunk of generateChunks('./file', CHUNK_SIZE)) {
    // do someting with data       
  }
}

main();