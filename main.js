const u = "ilcoder";
const arr = [
{
	name : "Save the Ball",
	img : "app_6.png",
	short_desc : "A unity based simple pc game to test your patience and skills",
	long_desc : `"Save the Ball" is a game written in C# and made using the unity 3d engine. The aim of the game is to collect all the cubes and save the ball from hitting the walls. Use arrow keys to control the ball in different directions.`,
	features : ["Free to download", "Supports Windows 10 and Windows 11", "Three different difficulty mode", "Simplistic UI"]
},
{
	name : "Let Us C Solutions",
	img : "app_1.png",
	short_desc : 'Solutions to one of the most Popular Basic C Programming Language Book "Let Us C" by "Yashwant kanetkar".',
	long_desc : `"Let Us C" by "Yashwant kanetkar" is one of the most popular basic book for learning 'C' Programming Language.<br>It provides you the basic concepts required to build basic programs using a 'C' compiler. The book is provided with different exercises whose solutions are provided here. If you buy and download this book you will get the solutions in a 'C' file with Full working code.`,
	features : ["Full Working Codes", "Easy and simple language", "Clears Concept", "Freely Available", "Virus Free"]
},
{
	name : "Password Strength Checker",
	img : "app_2.png",
	short_desc : "You should check the strength of your password using it.",
	long_desc : `Don't know whether your password is safe enough from getting hacked?<br>Check the strength of your password using this application developed using 'C' programming language.This is a safe, highly efficient and easy to use app. No password is gathered or stored using it.`,
	features : ["Easy to use", "Virus Free", "Free of cost", "Highly efficient", "High privacy", "Generates report about password"]
},
{
	name : "Soccer 'C' Game",
	img : "app_3.png",
	short_desc : 'Getting Bored!<br>Try this "Just For Fun Game".',
	long_desc : `Getting bored at home? Want a safe, easy, and fun game to play?<br>This is the solution for your problem. This soccer game programmed in 'C' language. Give it a try now.`,
	features : ["Easy to use", "Virus Free", "Free of cost", "Fun Game"]
},
{
	name : "Equations Solver",
	img : "app_4.png",
	short_desc : "Want to save the time in solving the equations during study??<br>Try this one and save your time.",
	long_desc : `This Equations Solver is meant for those who want to save their time in solving various linear and quadratic equations.<br>Just select the type of equation, enter the coefficients and Get the Solution.`,
	features : ["Easy to use", "Virus Free", "Free of Cost", "Highly Efficient", "Menu driven", "Supports three types of equations<br> -> Linear equations in two variable<br> -> Linear Equations in three varriables<br> -> Quadratic Equations" ]
},
{
	name : "Matrix Rank Finder",
	img : "app_5.png",
	short_desc : "Want to save the time in finding the rank of matrix during study??<br>Just enter the matrix and get the answer..",
	long_desc : `This Matrix Rank Finder is made to ease the process of finding the rank of a matrix.<br>Just select the dimension of matrix, enter the values and Get the Rank.`,
	features : ["Easy to use", "Virus Free", "Free of Cost", "4 types of matrix support", "Menu driven"]
}
];
const links = ["Save the Ball.zip", "Let Us C Solutions.zip","Password Strength Checker.zip","Soccer Game.zip","Equations Solver.zip","Matrix Rank Finder.zip","Chat App.zip"];

function show(wh)
{
	var items= document.getElementsByClassName('item');
	for(var i=0; i<items.length;i++)
	{
		items[i].style.display="none";
	}

	var itemsd = document.getElementsByClassName('itemd');
	itemsd[wh-1].style.display = "block";	
	
	var buttons = document.getElementsByClassName('atcbtn');
	var ins = window.localStorage.getItem(u);
	if(ins==null || ins=="[]")
	{
		var arr2= [];
	}
	else
	{
		var arr2 = JSON.parse(ins);
		for(var i=0;i<arr2.length;i++)
		{
			if(arr2[i]==(wh-1))
			{
				buttons[wh-1].value="Already Added to Cart";
				buttons[wh-1].disabled= true;
				buttons[wh-1].style.cursor="not-allowed";
				buttons[wh-1].style.opacity="0.5";
				break;
			}
		}
	}
}

function hide_all()
{
	var itemsd = document.getElementsByClassName('itemd');
	for(var i=0;i<itemsd.length;i++)
	{
		itemsd[i].style.display = "none";
	}

	var cartdiv = document.getElementsByClassName('cart');
	cartdiv[0].style.display = "none";
}

function go_back()
{
	hide_all();
	document.getElementById('box1').style.justifyContent="space-evenly";
	var items= document.getElementsByClassName('item');
	if(items[0].style.display=="none")
	{
		for(var i=0; i<items.length;i++)
		{
			items[i].style.display="block";
		}
	}
	else
	{
		window.open("html.html","_self");
	}		
}

function atc(no)
{
	var buttons = document.getElementsByClassName('atcbtn');
	buttons[no].value="Added Successfully";
	buttons[no].disabled= true;
	buttons[no].style.cursor="not-allowed";
	buttons[no].style.opacity="0.5";
	var temp = window.localStorage.getItem(u);
	if(temp==null)
	{
		var arr2=[];
	}
	else
	{
		var arr2 = JSON.parse(temp);
	}
	arr2.push(no);
        window.localStorage.setItem(u,JSON.stringify(arr2));
}

function delete_row(bn)
{
	var buttons = document.getElementsByClassName('atcbtn');
	var t = window.localStorage.getItem(u);
	var arr2 = JSON.parse(t);
	
	buttons[arr2[bn]].value="Add to Cart";
	buttons[arr2[bn]].enabled= true;
	buttons[arr2[bn]].disabled= false;
	buttons[arr2[bn]].style.cursor= "pointer";
	buttons[arr2[bn]].style.opacity= "1.0";

	arr2.splice(bn,1);
	window.localStorage.setItem(u,JSON.stringify(arr2));
	show_cart();
}

function show_cart()
{
	hide_all();
	var items= document.getElementsByClassName('item');
	for(var i=0; i<items.length;i++)
	{
		items[i].style.display="none";
	}
	var cartdiv = document.getElementsByClassName('cart');
	cartdiv[0].style.display = "block";
	
	document.getElementById('box1').style.justifyContent="center";
	
	var table= document.getElementById('ctab');
	var ins = window.localStorage.getItem(u);
	var getbtn = document.getElementsByClassName('getbtn');

	if(ins==null || ins=="[]")
	{
		table.innerHTML = "<table class='ctab'><tr><th>Sr. No.</th><th>Name</th></tr><tr><td colspan='2' style='text-align:center;'>YOUR CART IS EMPTY</td></tr></table>";

		getbtn[0].disabled= true;
		getbtn[0].style.cursor="not-allowed";
		getbtn[0].style.opacity="0.5";
	}
	else
	{	
		getbtn[0].disabled= false;
		getbtn[0].enabled= true;
		getbtn[0].style.cursor="pointer";
		getbtn[0].style.opacity="1.0";

		var arr2 = JSON.parse(ins);		
		var HTML = "<table class='ctab'><tr><th>Sr. No.</th><th>Name</th><th>&nbsp;</th></tr>";
		for(var i=0; i<arr2.length;i++)
		{
			HTML += "<tr><td>"+(i+1)+"</td><td>"+arr[arr2[i]].name+"</td><td style='text-align:center;'><input type='button' class='delbtn' onclick='javascript:delete_row("+i+");' value='X'></td></tr>";
		}
		HTML += "</table>";
	
		table.innerHTML = HTML;
	}				
}

function openlink(a)
{
	window.open(links[a],"_self");
}

function get_links()
{
	var ins = window.localStorage.getItem(u);
	var arr3 = JSON.parse(ins);
	window.localStorage.removeItem(u);
	show_cart();
	var linkd = document.getElementById('link');
	var HTML=linkd.innerHTML;
	for(var i=0; i<arr3.length;i++)
	{
		HTML += "<input type='button' class='linkbtn' value='Link for "+arr[arr3[i]].name+"' onclick='javascript:openlink("+arr3[i]+")'><br>";
	}
	linkd.innerHTML = HTML;
} 

function loadItems() {
	console.log("Rin");
	const box1 = document.getElementById("box1");
	for(let i = 0; i < arr.length; i++) {
		let html1 = `
<div class="item">
	<img src="${arr[i].img}">
	<div class="item-text">
		<div class="h2p">${arr[i].name}</div> ${arr[i].short_desc}
	</div>
	<input type="button" onclick="javascript:show(${i+1});" value="Know More">
</div>
`;

		let html2 = `
<div class="itemd">
	<img src="${arr[i].img}">
	<div class="itemd-text">
		<div class="h2pd">${arr[i].name}</div> ${arr[i].long_desc} <br>`;
	arr[i].features.forEach(f => {
		html2 += `<br>* ${f}`;
	});
	html2 += `
	</div>
	<input type="button" onclick="javascript:atc(${i});" class="atcbtn" value="Add to Cart">
</div>
`;
	box1.innerHTML += html1;
	box1.innerHTML += html2;

	}
}