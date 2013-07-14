	mydiv = new Array();
	mydiv[0] = "acc";
	mydiv[1] = "societe";
	mydiv[2] = "histo";
	mydiv[3] = "presse";
	mydiv[4] = "prod";
	mydiv[5] = "distrac";
	mydiv[6] = "confort";
	mydiv[7] = "enfant";
	mydiv[8] = "a36";
	mydiv[9] = "a711";
	mydiv[10] = "p11";
	mydiv[11] = "support";
	mydiv[12] = "contact";
	mydiv[13] = "acces";
	mydiv[14] = "ouvert";
	mydiv[15] = "info";
function switchlol(id)
{
	var i = document.getElementById(id);
	if ( i.style.display == "block" )
	{
		i.style.display = "none";
	}
	else
	{
		i.style.display = "block";
	}
	
}

function hidediv(id)
{
	for ( i=0 ; i < mydiv.length ; i++ )
	{
		if ( id != mydiv[i] )
		{
			document.getElementById(mydiv[i]).style.display = "none";
		}
		else
		{
			document.getElementById(mydiv[i]).style.display = "block";
		}
	}
}

function bgimg(color)
{
	if ( color == "vert" )
	{
		document.body.style.backgroundColor = "#6CEB96";
	}
	if ( color == "rouge" )
	{
		document.body.style.backgroundColor = "#BA3C3C";
	}
	if ( color == "bleu" )
	{
		document.body.style.backgroundColor = "#3C90BA";
	}
	if ( color == "noir" )
	{
		document.body.style.backgroundColor = "#000000";
	}
	if ( color == "jaune" )
	{
		document.body.style.backgroundColor = "#FFD801";
	}
}

function bgtxt(color)
{
	if ( color == "vert" )
	{
		document.body.style.color = "#6CEB96";
	}
	if ( color == "rouge" )
	{
		document.body.style.color = "#BA3C3C";
	}
	if ( color == "bleu" )
	{
		document.body.style.color = "#3C90BA";
	}
	if ( color == "noir" )
	{
		document.body.style.color = "#000000";
	}
	if ( color == "jaune" )
	{
		document.body.style.color = "#FFD801";
	}
}

function pstxt()
{
	for ( i=0 ; i < mydiv.length ; i++ )
	{
			document.getElementById('mstxt').style.visibility = "visible";
			if (document.getElementById(mydiv[i]).style.fontSize == "")
			{
				document.getElementById(mydiv[i]).style.fontSize = "1em";
			}
  			if ( parseFloat(document.getElementById(mydiv[i]).style.fontSize) < 1.4 )
  			document.getElementById(mydiv[i]).style.fontSize = parseFloat(document.getElementById(mydiv[i]).style.fontSize) + (0.2) + "em";
  			else
  			document.getElementById('pstxt').style.visibility = "hidden";
  	}
}

function mstxt()
{
	for ( i=0 ; i < mydiv.length ; i++ )
	{
			document.getElementById('pstxt').style.visibility = "visible";
			if (document.getElementById(mydiv[i]).style.fontSize == "")
			{
				document.getElementById(mydiv[i]).style.fontSize = "1em";
			}
  			if ( parseFloat(document.getElementById(mydiv[i]).style.fontSize) > 0.8 )
  			document.getElementById(mydiv[i]).style.fontSize = parseFloat(document.getElementById(mydiv[i]).style.fontSize) - (0.2) + "em";
  			else
  			document.getElementById('mstxt').style.visibility = "hidden";
  	}
}