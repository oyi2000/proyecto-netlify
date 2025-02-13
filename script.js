{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 / Lista de noticias (modifica f\'e1cilmente este array)\
const news = [\
    \{\
        content: "\uc0\u55356 \u57252  \'a1Ya conocemos a los finalistas del MST Benidorm Fest 25! \'bfQui\'e9n es tu favorito? \u55357 \u56384 ",\
        time: "Hace 2 horas"\
    \},\
    \{\
        content: "\uc0\u55357 \u56613  Nuevo single de @PaulSThin para el MST Benidorm Fest 25. \'a1Esc\'fachalo ya! \u55356 \u57255 ",\
        time: "Hace 30 minutos"\
    \},\
    \{\
        content: "\uc0\u55357 \u56960  El escenario del Benidorm Fest 25 ser\'e1 el m\'e1s grande de la historia del festival. \'a1No te lo pierdas!",\
        time: "Hace 1 d\'eda"\
    \}\
];\
\
document.addEventListener("DOMContentLoaded", function() \{\
    const postsContainer = document.getElementById("posts-container");\
\
    // URL de la imagen de perfil\
    const profileImgURL = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/2CtaYB8g0SsRyaWecoaF/pub/cVWoTj7E3JlU8zvpXJbT/logobf%202.PNG";\
\
    // Generar publicaciones din\'e1micamente\
    news.forEach(post => \{\
        const postElement = document.createElement("div");\
        postElement.classList.add("post");\
\
        postElement.innerHTML = `\
            <div class="header">\
                <img src="$\{profileImgURL\}" alt="MST Benidorm Fest">\
                <div>\
                    <div class="username">MST Benidorm Fest</div>\
                    <div class="time">$\{post.time\}</div>\
                </div>\
            </div>\
            <div class="content">$\{post.content\}</div>\
        `;\
\
        postsContainer.appendChild(postElement);\
    \});\
\});}