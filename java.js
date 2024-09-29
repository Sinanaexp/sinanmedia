body, html {
    margin: 0;
    padding: 0;
    background-color: #151912;
	 overflow-x: hidden;
}

.content {
    width: 100vw;
    font-family: 'Times New Roman', serif;
}

.section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF6F7;
    text-align: center;
}

.section > div {
    width: 90%;
}

.section:nth-child(1) {
    font-size: 20vh;
}

@media (max-width: 600px) {
    .section:nth-child(1) {
        font-size: 25vw;
    }
}

@media (max-width: 350px) {
    .section:nth-child(1) {
        font-size: 30px;
    }
}

.section:nth-child(2) {
    font-size: 10vh;
}

.section:nth-child(3) {
    font-size: 8vh;
}

.section:nth-child(2) > div {
    max-width: 800px
}

.section:nth-child(3) > div {
    max-width: 900px
}

@media (max-width: 750px) {
    .section:nth-child(2),
    .section:nth-child(3) {
        font-size: 9vw;
    }
}

.section:nth-child(3) a {
    padding: 0 .3em;
}

canvas#neuro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    opacity: .95;
}

a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
    font-style: inherit;
}

a:hover {
    font-weight: inherit;
    text-decoration: none;
    color: rgb(160, 160, 255);
}

a:active {
    color: rgb(160, 255, 255);
}

body, html {
    margin: 0;
    padding: 0;
    background-color: #151912;
}

.content {
    width: 100vw;
    font-family: 'Times New Roman', serif;
}

.section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF6F7;
    text-align: center;
}

.section > div {
    width: 90%;
}

.section:nth-child(1) {
    font-size: 20vh;
}

@media (max-width: 600px) {
    .section:nth-child(1) {
        font-size: 25vw;
    }
}

@media (max-width: 350px) {
    .section:nth-child(1) {
        font-size: 30px;
    }
}

.section:nth-child(2) {
    font-size: 10vh;
}

.section:nth-child(3) {
    font-size: 8vh;
}

.section:nth-child(2) > div {
    max-width: 800px
}

.section:nth-child(3) > div {
    max-width: 900px
}

@media (max-width: 750px) {
    .section:nth-child(2),
    .section:nth-child(3) {
        font-size: 9vw;
    }
}

.section:nth-child(3) a {
    padding: 0 .3em;
}

canvas#neuro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    opacity: .95;
}

a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
    font-style: inherit;
}

a:hover {
    font-weight: inherit;
    text-decoration: none;
    color: rgb(160, 160, 255);
}

a:active {
    color: rgb(160, 255, 255);
}
