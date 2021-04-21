
const svgZoom = () => {
    return new Promise(resolve => {

        //alert("Works!");
        let trees = document.getElementById("svg-mtns");
        //trees.setAttribute("viewBox", "500 350 50 400");
        //trees.setAttribute("viewBox", "500 350 50 15"); // use this one
        //trees.setAttribute("viewBox", "10 7 700 1200");
        let title = document.getElementById("name-title");
        title.style.visibility = "hidden";
        
        let yScroll = window.scrollY;
        let scrollHere = 0;
        const ANIMATION_INTERVAL = 12;
        const ANIMATION_DOUBLE_SPEED = 5;
        
        var time = setInterval(() => {
            if (position > 300) {
                clearInterval(scroll);
                clearInterval(time);
                resolve("Done");  
            } else {
                console.log("Scroll Y ", yScroll);
                zoom();
            }
        }, ANIMATION_INTERVAL);
        let position = 1;
        function zoom() {
            position = parseInt(position + 1);
            let nums = parseInt(position*1.67) + " " //500
            + parseInt(position*1.2) + " " //350
            + parseInt(700 - (2.159*position)) + " " //50
            + parseInt(1200 - (3.936*position)); //15
            let test = "500 350 50 400";
            console.log("HERE YOU ARE", nums);
            console.log("Position", position);
            
            
            trees.setAttribute("overflow", "hidden");
            trees.setAttribute("viewBox", nums);
        }
        
        var scroll = setInterval(() => {
            if (yScroll === 0) {
                console.log("ScrollY is zero");
                window.scrollTo(0, 0);
            } else {
                console.log("SCROLL HERE ", scrollHere);
                scrollHere = (900 - (position * 3));
                
                window.scrollTo(0, scrollHere);
            }
        }, ANIMATION_INTERVAL);
        
    })
    }
    
    export {
        svgZoom
    }