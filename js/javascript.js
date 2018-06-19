var shittyAdvices = ["If everything seems to be going well, you've obviously overlooked something",
					 "If you expect nothing from anybody, you will never be disappointed",
					 "It's not just Monday. Your whole life sucks.",
					 "No sense in being pessimistic, it wouldn't work anyways.",
					 "Everything will be alright. Maybe not today, but eventually.",
					 "Your mortgage will be foreclosed.",
					 "Your desire for justice and truth will be overshadowed by your desire for filthy lucre and a decent meal.",
					 "You consider yourself a born leader. Others think you are pushy.",
					 "You are basically a chickenshit.",
					 "You have a vivid imagination and often think you are being followed by the FBI or CIA.",
					 "You have minor influence over your friends and people resent you flaunting your power.",
					 "Virgos make good bus drivers and pimps.",
					 "You should sleep on that French braid!",
					 "Take the train — it’s such a romantic way to travel.",
					 "Go running later, when it’s dark — that way the park will be less crowded.",
					 "Don’t smell it; just eat it really fast.", 
					 "You are nothing but a primate.",
					 "You charge headlong like a brute and you don't have a clue what subtlety could mean.",
					 "You have no interest other than food and comfort, just like an animal that pigs out, and that is unable to think of anything else.",
					 "You are absolutely unable to focus on anything, and your intellectual process is very superficial.",
					 "Your hyper-sensitivity is very irritating because people can never tell you what they really think of you without having you sobbing your heart out.",
					 "You don't know how to assert yourself.",
					 "You are a sly, inquisitive and aggressive person.",
					 "You are a real drought and you are restless, which translates into irritating fickleness, lack of stability, and no sense of commitment or loyalty.",
					 "We feel like summing your character as follows: you are a little snitch.",
					 "Always bring cookies or other snacks to any meeting you hold, otherwise your coworkers will not be able to focus for an hour-long meeting.",
					 "Write your resume in crayon.",
					 "If you smell bad but don't want to take a shower, exercise for two hours. The new sweat will push out the old sweat, making you smell clean again.",
					 "Scoop Ice Cream easier by simply microwaving the ice cream scoop for 15 sec.",
					 "When you finish eating a meal don't politely ask for the bill just get up and leave.",
					 "What does not kill you will most likely try again today."
];

function advice() {
	console.log("advice entered");
	document.getElementById("toilet-paper").style.visibility = "hidden";
	document.getElementById("advice-paper").style.visibility = "visible";
	var element = document.getElementById("advice");
	element.innerHTML = shittyAdvices[Math.floor(Math.random()*shittyAdvices.length)];
	console.log(element);
}

function disappear() {
	document.getElementById("toilet-paper").style.visibility = "visible";
	document.getElementById("advice-paper").style.visibility = "hidden";
}