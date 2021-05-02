let pathLength = () => {
    const logo = document.querySelectorAll("#name-svg path");

    console.log(logo);
    
    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
}

export default pathLength;