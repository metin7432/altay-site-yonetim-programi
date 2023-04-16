import express from "express";
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import services from "./services";

const app = express();
app.use(compress());
if(process.env.NODE_ENV === 'production') {
    app.use(helmet()); // helmet sadece producition ortaminda calisir
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "*amazonaws.com"],
        },
    }));
    app.use(helmet.referrerPolicy({policy: 'same-origin'}));
}
app.use(cors());

const root = path.join(__dirname, '../../');

app.use('/', express.static(path.join(root, 'dist/client')));//root degisgeni koke cikikiyor 
app.use('/', express.static(path.join(root, 'uploads'))); // ve o klasore (uploads) erisiyor
app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'dist/client/index.html'));
})

const servicesNames = Object.keys(services);
for (let i = 0; i < servicesNames.length; i++) {
    const name = servicesNames[i];
    if (name === 'graphql') {
        (async () => {
            await services[name].start();
            services[name].applyMiddleware({app});
        })();
    }else {
        app.use(`/${name}`, services[name]);
    }
    
}

app.listen(8000, () => console.log("8000 portu dinleniyor"));
