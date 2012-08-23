
var x;
var status;
var bin="0";
var Found=0;
var d;
var Length;
var Status;

var off = new Array(7);
var on = new Array(7);
var Unknown = new Array(7);

off[0] ="./images/Clear.bmp";
on[0] ="./images/Alarm.bmp";
Unknown[0]= "./images/OFF.bmp";

off[1] ="./images/Clear.bmp";
on[1] ="./images/Alarm.bmp";
Unknown[1]= "./images/OFF.bmp";

off[2] ="./images/GoodCard.png";
on[2] ="./images/BadCard.png";
Unknown[2]= "./images/EmptySlot.png";

off[3] ="./images/Clear.bmp";
on[3] ="./images/Alarm.bmp";
Unknown[3]= "./images/OFF.bmp";

off[4] ="./images/Clear.bmp";
on[4] ="./images/Alarm.bmp";
Unknown[4]= "./images/OFF.bmp";

off[5] ="./images/Clear.bmp";
on[5] ="./images/Alarm.bmp";
Unknown[5]= "./images/OFF.bmp";

off[6] ="./images/Clear.bmp";
on[6] ="./images/Alarm.bmp";
Unknown[6]= "./images/OFF.bmp";

off[7] ="./images/Clear.bmp";
on[7] ="./images/Alarm.bmp";
Unknown[7]= "./images/OFF.bmp";

// BitShowArray = new Array(15);
CheckBoxArray= new Array(15);  // Array Bit 0-15
CheckBoxArray[0]=false;
CheckBoxArray[1]=false;
CheckBoxArray[2]=false;
CheckBoxArray[3]=false;
CheckBoxArray[4]=false;
CheckBoxArray[5]=true;
CheckBoxArray[6]=true;
CheckBoxArray[7]=false;
CheckBoxArray[8]=false;
CheckBoxArray[9]=false;
CheckBoxArray[10]=false;
CheckBoxArray[11]=false;
CheckBoxArray[12]=false;
CheckBoxArray[13]=false;
CheckBoxArray[14]=false;
CheckBoxArray[15]=false;


BitNumbTxt= new Array();
BitNumbTxt[0]="Status Bit 0 -- Not Used";
BitNumbTxt[1]="Status Bit 1 -- Not Used";
BitNumbTxt[2]="Status Bit 2 -- IO Error";
BitNumbTxt[3]="Status Bit 3 -- Not Used";
BitNumbTxt[4]="Status Bit 4 -- Undefined";
BitNumbTxt[5]="Status Bit 5 -- Control Inhibit";
BitNumbTxt[6]="Status Bit 6 -- Maintenance";
BitNumbTxt[7]="Status Bit 7 -- Not Used";
BitNumbTxt[8]="Status Bit 8 -- Not Used";
BitNumbTxt[9]="Status Bit 9 -- Not Used";
BitNumbTxt[10]="Status Bit 10 -- Not Used";
BitNumbTxt[11]="Status Bit 11 -- Not Used";
BitNumbTxt[12]="Status Bit 12 -- Not Used";

BitNumbTxtShrt= new Array(); // Short Text Descriptions Used in Column Header Text
BitNumbTxtShrt[0]="0";
BitNumbTxtShrt[1]="1";
BitNumbTxtShrt[2]="IO";
BitNumbTxtShrt[3]="3";
BitNumbTxtShrt[4]="4";
BitNumbTxtShrt[5]="CI";
BitNumbTxtShrt[6]="Mn";
BitNumbTxtShrt[7]="7";
BitNumbTxtShrt[8]="8";
BitNumbTxtShrt[9]="9";
BitNumbTxtShrt[10]="10";
BitNumbTxtShrt[11]="11";
BitNumbTxtShrt[12]="12";

onerror=handleErr;
var txt="";

function handleErr(msg,url,l)
{
txt="There was an error on this page.\n\n";
txt+="Error: " + msg + "\n";
txt+="URL: " + url + "\n";
txt+="Line: " + l + "\n\n";
txt+="Click OK to continue.\n\n";
alert(txt);
return true;
}


function InitStatus(){

SelectBitArray();  // Used to parse checkbox array IF it is set by checkboxes on the webpage..
}

function SetSelectBits(){
CheckBoxArray[0] = document.SelectBitsForm.SelectBits[0].checked;
CheckBoxArray[1] = document.SelectBitsForm.SelectBits[1].checked;
CheckBoxArray[2] = document.SelectBitsForm.SelectBits[2].checked;
CheckBoxArray[3] = document.SelectBitsForm.SelectBits[3].checked;
CheckBoxArray[4] = document.SelectBitsForm.SelectBits[4].checked;
CheckBoxArray[5] = document.SelectBitsForm.SelectBits[5].checked;
CheckBoxArray[6] = document.SelectBitsForm.SelectBits[6].checked;
CheckBoxArray[7] = document.SelectBitsForm.SelectBits[7].checked;
}


function StatusBits(Status,SignaldivID) {

Status = parseInt(Status);										// Convert Status to Bits 
var bin = Status.toString(2);
binary = bin.split(''); 

Length=0;

for (sLoop=0;sLoop<17;sLoop++) 								//Parse Resulting Array of 1,0,0 into Boolean Values
	{														//Set Lenght of Resulting Binary Number (Needed below)

	switch(binary[sLoop])
		{
		case "1" :
			binary[sLoop]=true;
			Length=Length+1;
			break;
		case "0" :
			binary[sLoop]=false;
			Length=Length+1;
			break;
		case " ":
			break;
		default:
			break;
		}

	}

// Mask binary (Converted Status set as Boolean to Array of Fixed Length
// This also get the bits in the right order

StatusBitArray = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);

StatusBitArrayIndex = (Length-1);			// Based Upon Length of binary start at this
											// point and work down in StatusBitArray

for (sLoop=0;sLoop<Length;sLoop++) 						
	{				
	StatusBitArray[StatusBitArrayIndex]=binary[sLoop];
	StatusBitArrayIndex=StatusBitArrayIndex-1;
	}

// Update div fields in html with On, Off images..

for(sLoop=0;sLoop<=8;sLoop++)
	{
		if (CheckBoxArray[sLoop]&StatusBitArray[sLoop])
		{
		document.getElementById(SignaldivID+sLoop).src=on[sLoop];
		}
				
		if (CheckBoxArray[sLoop]&~StatusBitArray[sLoop])
		{
		document.getElementById(SignaldivID+sLoop).src=off[sLoop];
		}
	}

} // End Create Status Bits from Status as Integer

// Update Html

function CreateStatusLightsHtmlItems(SignaldivID)

{ // Close

var table_width = 50;
var border = 1;
var form_name ="StatusLights";
var input_type ="text";
var text_field_size =1;

var StatusLightsHtml = "<table width="+ table_width + "border="+"1" + " bordercolor="+ "#000000"  + " cellpadding=" + "1" + " cellspacing="+ "1" + ">" + 
						"<form name=" + form_name + ">"  + "<tr>" + "<div align="+"left"+">"; 


StatusLightsHtml = StatusLightsHtml + "</tr>" + "<tr>";
				
				for(htmLoop=0;htmLoop<8;htmLoop++) 	
					{
					if(CheckBoxArray[htmLoop])
						{
					StatusLightsHtml = StatusLightsHtml + "<td>" + "<img src=" + Unknown[htmLoop] + " alt="+ "Light " + htmLoop + " id="+SignaldivID+htmLoop+
					" style="+" height: 25; width: 25; visibility:hidden" + "/>"+"</td>";
						}
					}
StatusLightsHtml = StatusLightsHtml + "</form>" + "</tr>" + "</table>";

document.getElementById(SignaldivID).innerHTML = StatusLightsHtml;

} 

function CreateStatusLightsRowHeader(RowdivID)
{
var table_width = 50;
var border = 1;
var form_name ="StatusLights";
var input_type ="text";
var text_field_size =1;

var StatusRowHtml = "<table width="+ table_width + "border="+"1" + " bordercolor="+ "#000000"  + " cellpadding=" + "1" + " cellspacing="+ "1" + ">" + 
						"<form name=" + form_name + ">"  + "<tr>" + "<div align="+"left"+">"; 

				for(htmLoop=0;htmLoop<8;htmLoop++) 				
					{		
					if(CheckBoxArray[htmLoop])
						{
					StatusRowHtml = StatusRowHtml + "<td>" + "<input type="+ input_type+ " id=" + "Bit" + htmLoop + "Txt" + " value=" 
					+ BitNumbTxtShrt[htmLoop] + " size=" + text_field_size + " style=" + "writing-mode:tb-lr;font-weight:bold;border:2px>"
					+ "</td>";
						}
					}

StatusRowHtml = StatusRowHtml + "</form>" + "</tr>" + "</table>";

document.getElementById(RowdivID).innerHTML = StatusRowHtml;

}  // Close CreateStatusLightsRowHeader


function CreateStatus(){   // This creates the Results Status by Status Text ...

	var Found = 0;
	var Pass=true;
	var Icon = "<br>"+"<Strong>" + "Status as Text" +  "</Strong>" + "<br>" + 
	"<ul>";

		for(sLoop=0;sLoop<9;sLoop++)
			{
			if (CheckBoxArray[sLoop]&StatusBitArray[sLoop])
					{
				document.StatusLights.Lights[sLoop].src =on;
				Icon = Icon + "<li>"+ BitNumbTxt[sLoop] + "</li>";	
				Found=Found+1;
					}
				
			if (CheckBoxArray[sLoop]&~StatusBitArray[sLoop])
					{
				document.StatusLights.Lights[sLoop].src =off;
					}
			}
		
		
		
		if(Found==0){
		Icon = Icon + "<li>" + "No Bits"  + "</li>";	
		}
	
	Icon = Icon + "<li>"+ "Debug Checkbox " + d + "</li>";
	Icon = Icon + "</ul>";

 document.getElementById("Icons").innerHTML = Icon;


 } //Close Function CreateStatus HTML	


function DetectDebugCheckbox(){
	d = document.getElementById("debug").checked;
	if(d){
	CreateDebugHtml();
		 }
	else
		{
	document.getElementById("DebugField").innerHTML = " ";
	return;
		}
}


function CreateDebugHtml(){
	var DebugTxt = "<form name="+"SelectBitsForm"+ ">" +
"<b>" + "Bit1" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit1" + " value=1" + " onclick =" + "SetSelectBits()" + ">" +
"<b>" + "Bit2" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit2" + " value=" + 2 + " onclick =" + "SetSelectBits()" + ">" +
"<b>" + "Bit3" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit3" + " value=" + 3 + " onclick =" + "SetSelectBits()" + ">" +
"<b>" + "Bit4" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit4" + " value=" + 4 + " onclick =" + "SetSelectBits()" + ">" +
"<br>"+
"<b>" + "Bit5" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit5" + " value=" + 5 + " onclick =" + "SetSelectBits()" + ">" +
"<b>" + "Bit6" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit6" + " value=" + 6 + " onclick =" + "SetSelectBits()" + ">" +
"<b>" + "Bit7" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit7" + " value=" + 7 + " onclick =" + "SetSelectBits()" + ">" +
"<b>" + "Bit8" + "</b>" + "<input type=" + "checkbox" + " name=" + "SelectBits"  + " id =" + "Bit8" + " value=" + 8 + " onclick =" + "SetSelectBits()" + ">" +
"</form>";


	DebugTxt = DebugTxt + "<br>" + "<br>" + "<Strong>" + "Debug" +  "</Strong>" + "<br>" + "<br>" + 					
	"The binary representation of " + x + " is " + bin + "<br>" + "<br>";
	BitNumb=0;
	for (sLoop=0;sLoop<Length;sLoop++)
		{
		if(StatusBitArray[sLoop]){
		DebugTxt = DebugTxt +  "Status Bit Array[" + BitNumb + "] " + BitNumbTxt[BitNumb]+ " "  + "<br>";
		}
		BitNumb=BitNumb+1;
		}

	//DebugTxt = DebugTxt + "<br>" + "<Strong>"+ "Array of Status " + "</Strong>" + binary + "<br>" + "<br>";
	//if(Length>1){
	//DebugTxt = DebugTxt +  "Length " + Length + " Bits" + "<br>" + "<br>";
	//}
	//else
	//DebugTxt = DebugTxt +  "Length " + Length + " Bit" + "<br>" + "<br>";


	DebugTxt = DebugTxt + "<Strong>" + "Debug" +  "</Strong>" + "<br>" + 
	"<ul>" +
	//"<li>"+ "Binary0 " + binary[0] + " Status Bit 0 " + StatusBitArray[0] + "</li>" + 
	//"<li>"+ "Binary1 " + binary[1] + " Status Bit 1 " + StatusBitArray[1] + "</li>" + 
	//"<li>"+ "Binary2 " + binary[2] + " Status Bit 2 " + StatusBitArray[2] + "</li>" + 
	//"<li>"+ "Binary3 " + binary[3] + " Status Bit 3 " + StatusBitArray[3] + "</li>" + 
	//"<li>"+ "Binary4 " + binary[4] + " Status Bit 4 " + StatusBitArray[4] + "</li>" + 
	//"<li>"+ "Binary5 " + binary[5] + " Status Bit 5 " + StatusBitArray[5] + "</li>" + 
	//"<li>"+ "Binary6 " + binary[6] + " Status Bit 6 " + StatusBitArray[6] + "</li>" + 
	//"<li>"+ "Binary7 " + binary[7] + " Status Bit 7 " + StatusBitArray[7] + "</li>" + 
	"<li>"+ "Monitored Status Points Found " + Found + "</li>" + 
	"<li>"+ "Debug Checkbox " + d + "</li>" + 
	"<li>"+ "Bit1 Checkbox " + CheckBoxArray[0] + "</li>" + 
	"<li>"+ "Bit2 Checkbox " + CheckBoxArray[1] + "</li>" + 
	"<li>"+ "Bit3 Checkbox " + CheckBoxArray[2] + "</li>" + 
	"<li>"+ "Bit4 Checkbox " + CheckBoxArray[3] + "</li>" + 
	"<li>"+ "Bit5 Checkbox " + CheckBoxArray[4] + "</li>" + 
	"<li>"+ "Bit6 Checkbox " + CheckBoxArray[5] + "</li>" + 
	"<li>"+ "Bit7 Checkbox " + CheckBoxArray[6] + "</li>" + 
	"<li>"+ "Bit8 Checkbox " + CheckBoxArray[7] + "</li>" + 

	"</ul>";

document.getElementById("DebugField").innerHTML = DebugTxt;

} //Close Function CreateDebugHtml



