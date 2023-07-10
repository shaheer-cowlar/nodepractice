const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('folder created');
// });

//create and write file
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'Hello World',
    
//     err=>{
//         if (err) throw err;
//         console.log('File wrtitten too');
//         fs.appendFile(
//             path.join(__dirname,'/test','hello.txt'),
//             'Hello d',
            
//             err=>{
//                 if (err) throw err;
//                 console.log('File wrtitten too');
                
//             }
            
//             );
        
//     }
    
//     );

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
    
});


