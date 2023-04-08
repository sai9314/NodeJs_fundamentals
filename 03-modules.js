// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const sayHello = name => console.log(`Hello there ${name}`);
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHello('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.singlePerson.name)

//console.log(module)
// Module {
//     id: '.',
//     path: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial',
//     exports: {},
//     filename: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/03-modules.js',
//     loaded: false,
//     children: [
//       Module {
//         id: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/04-names.js',
//         path: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial',
//         exports: [Object],
//         filename: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/04-names.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       Module {
//         id: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/05-utils.js',
//         path: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial',
//         exports: [Function: sayHi],
//         filename: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/05-utils.js',
//         loaded: true,
//         children: [Array],
//         paths: [Array]
//       },
//       Module {
//         id: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/06-alternative-flavor.js',
//         path: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial',
//         exports: [Object],
//         filename: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/06-alternative-flavor.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       },
//       Module {
//         id: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/07-mind-grenade.js',
//         path: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial',
//         exports: {},
//         filename: '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/07-mind-grenade.js',
//         loaded: true,
//         children: [],
//         paths: [Array]
//       }
//     ],
//     paths: [
//       '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/01-node-tutorial/node_modules',
//       '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node-express-course/node_modules',
//       '/Users/sairaj08/Desktop/interview_prep/projects/node_and_express/node_modules',
//       '/Users/sairaj08/Desktop/interview_prep/projects/node_modules',
//       '/Users/sairaj08/Desktop/interview_prep/node_modules',
//       '/Users/sairaj08/Desktop/node_modules',
//       '/Users/sairaj08/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
// }