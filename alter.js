let random;
function transform(){
    let text = document.getElementById("orig").value;
    let text_array = text.split('\n');
    
    random = Random(text);

    let new_text = "";
    text_array.forEach(line => {
        let have_www = randomBool(0.3);
        let www_number = (Math.floor(random() * 4) + 2) * have_www; // 最多7個，最少 2個
        let www = "w".repeat(www_number); 

        let have_postfix = randomBool(0.5);
        let postfix_index = Math.floor(random() * postfixes.length);
        let postfix  = have_postfix? ('(' + postfixes[postfix_index]) : '';

        let have_darklize_postfix = randomBool(0.5);
        let darklize_postfix_index = Math.floor(random() * darklize_postfix.length);
        let darklizePostfix  = have_darklize_postfix && !have_postfix? ('(' + darklize_postfix[darklize_postfix_index]) : '';
        
        let have_prefix = randomBool(0.5);
        let prefix_index = Math.floor(random() * prefixes.length);
        let prefix = have_prefix? prefixes[prefix_index] : '';

        new_text += `${prefix} ${line} ${www} ${postfix}${darklizePostfix} <br />`;

    });

    document.getElementById("result").innerHTML = new_text;
}

function randomBool(p){
    return (random() < p)? 1 : 0;
}

function Random(seed) {
    for(var i = 0, h = 1779033703 ^ seed.length; i < seed.length; i++)
        h = Math.imul(h ^ seed.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return ((h ^= h >>> 16) >>> 0)/4294967296;
    }
}
