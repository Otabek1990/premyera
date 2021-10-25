import Kino1 from "../assets/images/uzbekkino/rangsiztushlar.jpg";
import Kino2 from "../assets/images/mehrOp.jpg";
import Kino3 from "../assets/images/kino3.jpg";
import Kino4 from "../assets/images/notanishQotil.jpg";
import {nanoid} from 'nanoid';
import rangsizTushlar from '../assets/trailers/rangsizTushlar.mp4';
import trailer1 from '../assets/trailers/mehrOperatsiyasi.mp4';
import jangovarQaynona from '../assets/trailers/jangovarQaynona.mp4';
import notanishQotil from '../assets/trailers/notanishQotil.mp4';
const bannerInfos=[
    {
        id:nanoid(),
        trailer:rangsizTushlar,
        image:Kino1,
        name:"Rangsiz Tushlar",
        desc:"Bu filmda bir ayolning taqdiri haqida hikoya qiladi.“Rangsiz tushlar” filmida inson oʻz “Men”ini har qanday sharoitda: qamoqxona devorlarida, jamiyatda yoki oilada oʻzgartirishining bir necha muhim jihatlari ilgari surilgan. Koʻp yillik qamoqdan soʻng oʻz qadrdon goʻshasiga qaytgan film bosh qahramoni Kashmira asta-sekin oilasida, jamiyatda oʻz oʻrnini topish huquqiga ega ekanligini isbotlashi kerak edi. Bunda u faqat qatʼiyat va iroda tufayli kuchli shaxsga aylanishi mumkinligi anglab yetadi."
    },
    {
        id:nanoid(),
        trailer:trailer1,
        image:Kino2,
        name:"Mehr Operatsiyasi",
        desc:"Bu filmda bir ayolning taqdiri haqida hikoya qiladi.“Rangsiz tushlar” filmida inson oʻz “Men”ini har qanday sharoitda: qamoqxona devorlarida, jamiyatda yoki oilada oʻzgartirishining bir necha muhim jihatlari ilgari surilgan. Koʻp yillik qamoqdan soʻng oʻz qadrdon goʻshasiga qaytgan film bosh qahramoni Kashmira asta-sekin oilasida, jamiyatda oʻz oʻrnini topish huquqiga ega ekanligini isbotlashi kerak edi. Bunda u faqat qatʼiyat va iroda tufayli kuchli shaxsga aylanishi mumkinligi anglab yetadi."
    },
    {
        id:nanoid(),
        trailer:jangovarQaynona,
        image:Kino3,
        name:"Jangovar qaynona",
        desc:"Bu filmda bir ayolning taqdiri haqida hikoya qiladi.“Rangsiz tushlar” filmida inson oʻz “Men”ini har qanday sharoitda: qamoqxona devorlarida, jamiyatda yoki oilada oʻzgartirishining bir necha muhim jihatlari ilgari surilgan. Koʻp yillik qamoqdan soʻng oʻz qadrdon goʻshasiga qaytgan film bosh qahramoni Kashmira asta-sekin oilasida, jamiyatda oʻz oʻrnini topish huquqiga ega ekanligini isbotlashi kerak edi. Bunda u faqat qatʼiyat va iroda tufayli kuchli shaxsga aylanishi mumkinligi anglab yetadi."
    },
    {
        id:nanoid(),
        trailer:notanishQotil,
        image:Kino4,
        name:"Notanish qotil",
        desc:"Bu filmda bir ayolning taqdiri haqida hikoya qiladi.“Rangsiz tushlar” filmida inson oʻz “Men”ini har qanday sharoitda: qamoqxona devorlarida, jamiyatda yoki oilada oʻzgartirishining bir necha muhim jihatlari ilgari surilgan. Koʻp yillik qamoqdan soʻng oʻz qadrdon goʻshasiga qaytgan film bosh qahramoni Kashmira asta-sekin oilasida, jamiyatda oʻz oʻrnini topish huquqiga ega ekanligini isbotlashi kerak edi. Bunda u faqat qatʼiyat va iroda tufayli kuchli shaxsga aylanishi mumkinligi anglab yetadi."
    },
]
export default bannerInfos;