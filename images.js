window.onload = cycle; 

const banners = [
    {
        src: 'image1.GIF', 
        url: 'churchandunioncharleston.com', 
        caption: "Church and Union Restaurant, downtown Charleston SC"
    }, 
    {
        src: 'image2.GIF', 
        url: 'visitfolly.com', 
        caption: "Streets in the beautiful local town, Folly Beach SC"
    }, 
    {
        src: 'image3.GIF',
        url: 'marketpavilion.com',  
        caption: "Rooftop bar at the Market Pavillon Hotel in downtown Charleston"
    }, 
    {
        src: 'image4.GIF', 
        url: 'thecharlestoncitymarket.com', 
        caption: 'Streets of the historic city markets in downtown Charleston'
    }, 
    {
        src: 'image5.GIF', 
        url: 'charleston.com/charleston-insider/lowcountry-lifestyles/the-captivating-history-of-rainbow-row',
        caption: 'Captivating Rainbow Row of downtown Charleston'
    }, 
    {
        src: 'image6.GIF', 
        url: 'calhounmansion.net/', 
        caption: 'Historic Calhoun Mansion used in filming of the Notebook'
    }, 
    {
        src: 'image7.GIF', 
        url: 'scpictureproject.org/charleston-county/sc-palmetto-tree.html', 
        caption: 'The famous palmetto tree, depicted on the South Carolina State Flag'
    }
]; 

let bnrCntr = 0; 
function cycle() {
    bnrCntr = bnrCntr + 1;
    if (bnrCntr == banners.length) 
       bnrCntr = 0;

    let cycler_image = document.getElementById('cycler_image');
    let cycler_text = document.getElementById('cycler_text');
    let cycler_link = document.getElementById('cycler_link');

    cycler_image.src = banners[bnrCntr].src;
    cycler_text.innerHTML = banners[bnrCntr].caption;
    cycler_link.href = banners[bnrCntr].url;
    
    if (banners[bnrCntr].url.length > 0) {
        cycler_image.style.cursor = 'pointer';
        cycler_image.onclick = function() {
            window.location.href = banners[bnrCntr].url;
        }
    } else {
        ban.style.cursor = 'default';
        ban.onclick = function() {};
    }
    setTimeout(cycle, 3000);
}
