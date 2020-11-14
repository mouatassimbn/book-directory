import * as dotenv from "dotenv";

dotenv.config();

//TODO: Add other env files when needed
// let path: string;

// switch(process.env.NODE_ENV){
//     case "test":
//         path = `${__dirname}/../../.env.test`;
//         break;
//     case "production":
//         path = `${__dirname}/../../.env.production`;
//         break;
//     default:
//         path = `${__dirname}/../../.env.development`;
//         break;
// }

// dotenv.config({path: path});

export const PORT = process.env.PORT;