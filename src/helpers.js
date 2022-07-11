//function to evaluate letters
export function testEvalLetter(answer, letter, index, answerObject) {
    //if the letter is included in the answer and the letters hasn't been seen before or is a duplicate
    if (answer.includes(letter) && answerObject[letter] > 0) {
        //if the letter is in the right spot
        if (answer[index] === letter && answerObject[letter] > 0) {
            //decrement the letter from answerObject
            answerObject[letter]--;
            //return the appropriate class
            return "Letter rightSpot";
            //else if the letter is in the word but not in the right spot
        } else {
            //decrement the letter from answerObject
            answerObject[letter]--;
            //return the appropriate class
            return "Letter rightLetter";
        };
        //if the letter is not in the word
    } else {
        //return the appropriate class
        return "Letter wrongLetter";
    };
};

//array of common 5 letter words
const validWords = ['Abuse','Above','Acute','Admit','Adopt','Adult','Agent','Agree','Alive','Allow','Alone','Alter','Anger','Angry','Apple','Apply','Argue','Arise','Avoid','Award','Aware','Awful','Basic','Basis','Beach','Begin','Birth','Black','Blame','Blind','Block','Blood','Board','Brain','Brave','Bread','Break','Brief','Bring','Broad','Brown','Build','Burst','Carry','Catch','Cause','Chain','Chair','Cheap','Check','Chest','Chief','Child','Civil','Claim','Class','Clean','Clear','Climb','Clock','Close','Coach','Coast','Count','Court','Cover','Crazy','Cream','Crime','Cross','Crowd','Crown','Cycle','Daily','Dance','Death','Depth','Dirty','Doubt','Draft','Drama','Dream','Dress','Drink','Drive','Early','Earth','Empty','Enemy','Enjoy','Enter','Entry','Equal','Error','Event','Exact','Exist','Extra','Faint','Faith','Fault','Field','Fifth','Fight','Final','First','Floor','Focus','Force','Frame','Frank','Fresh','Front','Fruit','Funny','Giant','Glass','Grand','Grant','Grass','Great','Green','Gross','Group','Guess','Guide','Happy','Harsh','Heart','Heavy','Horse','Hotel','House','Human','Ideal','Image','Imply','Index','Inner','Input','Issue','Joint','Judge','Knife','Large','Laugh','Layer','Learn','Leave','Legal','Level','Light','Limit','Local','Loose','Lucky','Lunch','Magic','Major','March','Marry','Match','Metal','Minor','Model','Money','Month','Moral','Motor','Mouth','Music','Naked','Nasty','Naval','Night','Noise','North','Novel','Nurse','Occur','Offer','Order','Other','Outer','Owner','Panel','Paper','Party','Peace','Phase','Phone','Piece','Pilot','Pitch','Place','Plain','Plane','Plant','Plate','Point','Pound','Power','Press','Price','Pride','Prime','Prior','Prize','Proof','Proud','Prove','Queen','Quick','Quiet','Radio','Raise','Range','Rapid','Ratio','Reach','Ready','Refer','Relax','Reply','Right','River','Roman','Rough','Round','Route','Royal','Rugby','Rural','Scale','Scene','Scope','Score','Sense','Serve','Shall','Shape','Share','Sharp','Sheep','Sheer','Sheet','Shift','Shirt','Shock','Shoot','Short','Sight','Silly','Sixth','Skill','Sleep','Small','Smart','Smile','Smoke','Solid','Solve','Sorry','Sound','South','Space','Spare','Speak','Speed','Spend','Spite','Split','Sport','Squad','Staff','Stage','Stand','Start','State','Steam','Steel','Steep','Stick','Still','Stock','Stone','Store','Study','Stuff','Style','Sugar','Super','Sweet','Table','Taste','Teach','Thank','Theme','Thick','Thing','Think','Third','Throw','Tight','Title','Total','Touch','Tough','Tower','Track','Trade','Train','Treat','Trend','Trial','Trust','Truth','Uncle','Union','Unity','Upper','Upset','Urban','Usual','Vague','Valid','Value','Video','Visit','Vital','Voice','Waste','Watch','Water','While','White','Whole','Woman','World','Worry','Would','Write','Wrong','Young','Youth'];

//function to randomly select a word
export function randomWordSelect() {
    let rand = Math.floor(Math.random() * 345) + 1
    return [...validWords[rand].toUpperCase()]
}