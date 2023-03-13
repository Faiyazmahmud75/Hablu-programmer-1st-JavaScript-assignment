// ১. Variable কি ?

/* উত্তরঃ JavaScript এ Variable কে আমরা একটি পাত্রের সাথে তুলনা করতে পারি। ডেটা স্টোর করার পাত্র, যেখানে আমরা একটি Variable এর ভ্যালু হিসেবে যেকোনো ডেটা রাখতে পারি। */



// ২. Variable কিভাবে লিখতে হয় ?

var myName = "Faiyaz Mahmud Toha";
console.log(myName);



// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?

/* উত্তরঃ string type variable এ ডেটা গুলো string আকারে থাকে। string type Variable এর ডেটা সবসময় "ডাবল কোটেশন" / 'সিঙ্গেল কোটেশন', অথবা `এই সাইন` এর মধ্যে লিখতে হয়। এই Variable এ থাকা অক্ষর, সংখ্যা, স্পেস অর্থাৎ সকল কিছুই একটি string ডেটা হিসেবে গন্য হয়। একটি stirng type variable নিম্ন্রুপঃ- */

var myAim ="I want to make people's lives easier";
console.log(myAim);



// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?

/* উত্তরঃ number type variable এর ডেটা গুলো শুধুই number হয়ে থাকে এবং নম্বর টাইপ ভেরিয়েবল ডিক্লেয়ার করার সময় কোন প্রকার কোটেশন ব্যাবহার করা হয়না। নম্বর টাইপ ভেরিয়েবল নিম্নরূপঃ- */ 

var myAge = 22;
console.log(myAge);



// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?

/* উত্তরঃ বুলিয়ান টাইপ ভেরিয়েবল এর মান সবসময় ২ রকমের হয়ে থাকে, ১। true; or ২। fales; যেমনঃ */ 

var amiSingle = false;
console.log(amiSingle);




// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 

/* উত্তরঃ toUpperCase() & toLowerCase() মূলত string type variable এর ইংরেজি ছোট হাতের অক্ষরকে বড় হাতের অক্ষরে এবং বড় হাতের অক্ষরকে ছোট হাতে রূপান্তর করতে ব্যাবহৃত হয়। লেখার নিয়মঃ */ 

var toCapitalLetter = "a b c d e";
toCapitalLetter = toCapitalLetter.toUpperCase();
console.log(toCapitalLetter);

var toSmallLetter = "A B C D E"
toSmallLetter = toSmallLetter.toLowerCase();
console.log(toSmallLetter);




// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?

/* উত্তরঃ JavaScript এর Arithmetic অপারেটর মোট পাঁচটি। ` +, -, *, /, % `
*/ 
// '+'  ব্যাবহার হয়, একটি ভ্যারিয়েবলের সাথে অন্য কোন ভ্যারিয়েবল বা ডেটা যোগ করতে। যেমনঃ
myName += " Al Hasan";
console.log(myName);

// '-' ব্যাবহার হয়, একটি ভ্যারিয়েবলের মান এর সাথে অন্য কোন ভ্যারিয়েবল বা ডেটা(শুধু সংখ্যা) বিয়োগ করতে। 
var wishAge = myAge - 18;
console.log(wishAge);

// '*' ব্যাবহার হয়, দুটি ভ্যারিয়েবলের গুনফল বের করতে। 
var ownedMoney = 69;
var desirableMoney = ownedMoney * 6969696969696969; // in $Dollar of course
console.log(desirableMoney);

// '/' ব্যাবহার হয়, দুটি ভ্যারিয়েবলের ভাগফল বের করতে
var gardeners = 6;
var trees_Planted = 18;
var each_Gardener_Plants = trees_Planted / gardeners + " trees.";
console.log(each_Gardener_Plants);

// '%' ব্যাবহার হয়, দুটি ভ্যারিয়েবলের ভাগশেষ বের করতে। 
var totalRevenue = 100;
var totalExpense = 70;
var profit = totalRevenue % totalExpense + " Bdt";
console.log(profit);




// ৮. Math.abs() এর ব্যাবহার লিখুন। 

/* উত্তরঃ Math.abs() JavaScript এর একটি pre-defined ফাংশন। কোন নেগেটিভ মান এর সংখ্যাকে পজিটিভে রূপান্তর করে এই ফাংশন। যেমনঃ- */ 

var myExpense = -7575;
myExpense = Math.abs(myExpense);
console.log(myExpense);




// ৯. Math.celi()  এর ব্যাবহার লিখুন । 

/* উত্তরঃ Math.ceil() মূলত .(দশমিক) যুক্ত কোন ডিজিট কে নেক্সট ডিজিটে পৌঁছে দেয়। যেমনঃ- */ 
var BTC_balance = 0.000001;
var beRich = Math.ceil(BTC_balance);
console.log("I own:", beRich + " BTC!");




// ১০. Math.Floor() এর ব্যাবহার লিখুন । 

/* উত্তরঃ Match.ceil() এর বিপরীত বলা যায় Match.floor() কে। অর্থাৎ, একটি সংখ্যার পর দশমিক এর মান .999999999 থাকলেও এটি নেক্সট ডিজিটে না গিয়ে সেম সংখ্যাই আউটপুট দিবে। যেমনঃ- */ 

var BDT_balance = 0.99999999;
var Actual_Value_Of_My_Balance = Math.floor(BDT_balance) + " BDT";
console.log(Actual_Value_Of_My_Balance);




// ১১. Math.round() এর ব্যাবহার লিখুন।

/* উত্তরঃ Math.round() এক্ষেত্রে কিছুটা ব্যালেন্সড। কোন সংখ্যার দশমিকের পর .5 বা এর উপরে থাকলে, সেটিকে নেক্সট ডিজিটে শো করে। আর দশমিকের পর 0.49999 বা এর নিচে থাকলে সেটিকে সেম ডিজিট হিসেবেই আউটপুট দেয়। যেমনঃ */

var something = 0.5;
something = Math.round(something);
console.log(something);

var nothing = 0.49999;
nothing = Math.round(nothing);
console.log(nothing);




// ১২. Math.random() এর ব্যাবহার লিখুন।

/* উত্তরঃ Math.random() সর্বদা 0. এর পর থেকে 1 পর্যন্ত একটি random নাম্বার জেনারেট করে থাকে। যেমনঃ */ 

var lottery = Math.random();
console.log(lottery);