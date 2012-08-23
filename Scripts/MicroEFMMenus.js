/*this file loads the drop down menus on demand for the TeleFlow pages*/

//create an array for the number of menus + 1
//use the array as if the lower bound == 1
//
var ObArray 	= new Array(9);		//number of buttons + 1
var arrTarget 	= new Array(25);		//max number of menu items
var arrText	      = new Array(25);		//ditto
var CreatingMenu  = 0;				//signal menu creation
var CurrentMenu   = 0;				//active menu
	// Added by D. Farris 9/10/04
var CurrentPath = " ";				//Current HTML Path


        function SetCurrentPath() // Added by D. Farris 9/10/04
		{
			var hrefPath = new String(window.location);
			var strippedPath = new String(hrefPath.substring(8,(hrefPath.lastIndexOf("/")+1)));
			var tempPath = "";
			var thisChar = " ";
			for ( var i = 0; i < strippedPath.length + 1; i++)
			{
				thisChar = strippedPath.substring(i,i+1);
				if (thisChar == "/")
				{
					tempPath = tempPath + '\\\\';
				}
				else
				{
					tempPath = tempPath + thisChar;
				}
			}
			CurrentPath = tempPath;
		}				


function DetectIE5 ()
{
    version = 0;
    is_msie = (navigator.appName.indexOf("Microsoft Internet Explorer") != -1);

    temp    = navigator.appVersion.split("MSIE");
    version = parseFloat(temp[1]);			//NON IE browser will return 0

    
    SetCurrentPath(); // Added by D. Farris 9/10/04


    return(is_msie && (version >= 5.0))
}


function init()
{
    for ( var ctr = 0; ctr < 7; ctr++ )
    {
    	//debugger;
    	ObArray[ctr] = 0;
    }
	
    //DetectNode();

}


function DetectNode()
{
            if (window.parent.frames[0])         // If Parent Window Exists

            {

                        window.parent.frames[0].document.F1.T1.style.visibility="visible";

                        if (BBIControl.RTUName)            // And If RTU Exists...

                                    window.parent.frames[0].document.F1.T1.value = BBIControl.RTUName; // Set Actual RTU Name

                        else

                                    window.parent.frames[0].document.F1.T1.value = "";                 // Set RTU Name as N/A

            }
}


function fgNorm(obj)
{
    obj.style.color = "white";
    obj.style.cursor = "default";
    obj.style.textDecoration = "none";
}
function fgHigh(obj)
{
    obj.style.color = "white";
    obj.style.cursor = "hand";
    obj.style.textDecoration = "underline";
}

function popupHelp(url)
{
  popuphelp = window.open(url, "help", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=700,height=500"); 
}


//
// This function creates the "Side Menu Navigation Selections (i.e. Buttons)". This should be called by each Web Page
// that needs the Navigaton Buttons.
//
// Be careful when making any changes to be sure that loading 'innerHTML' provides the desired result.
//
function CreateButtons( obj )
{
    var innerHtml = "";

    innerHtml  = "<div id=\"id_button_1\" class=\"menuItem\" onclick=\"showDropdown(id_menu1_drop, 1);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Security Access\">Security</a>";
    innerHtml += "<div id=\"id_menu1_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_2\" class=\"menuItem\" onclick=\"showDropdown(id_menu2_drop, 2);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Station\">Station</a>";
    innerHtml += "<div id=\"id_menu2_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_3\" class=\"menuItem\" onclick=\"showDropdown(id_menu3_drop, 3);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Meter Run\">Meter Run</a>";
    innerHtml += "<div id=\"id_menu3_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_4\" class=\"menuItem\" onclick=\"showDropdown(id_menu4_drop, 4);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Chromatograph\">Chromatograph</a>";
    innerHtml += "<div id=\"id_menu4_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_5\" class=\"menuItem\" onclick=\"showDropdown(id_menu5_drop, 5);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Logs\" >Logs</a>";
    innerHtml += "<div id=\"id_menu5_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_6\" class=\"menuItem\" onclick=\"showDropdown(id_menu6_drop, 6);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Run 4\">Load/Save</a>";
    innerHtml += "<div id=\"id_menu6_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_7\" class=\"menuItem\" onclick=\"showDropdown(id_menu6_drop, 7);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Run   4\"></a>";
    innerHtml += "<div id=\"id_menu7_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_7\" class=\"helpItem\" onclick=\"popupHelp('help/overview.htm')\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"User Help\"></a>";
    innerHtml += "<div id=\"id_menu8_drop\" class=\"menuDrop\"></div></div>";

    obj.innerHTML = innerHtml;


}//end CreateButtons()


function createDropDown( obj, num )
{
	//debugger;
	//let's not create the menu more than once
	//and why create it if we don't need it
	if ( ObArray[num] == 0 )
	{
		ObArray[num] 	= 1;

		//initialize everything to 0, to facilitate parsing
		for( var ctr = 0; ctr < 25; ctr++ )
		{
			arrText[ctr] = "";
			arrTarget[ctr] = "";
		}

		switch(num)
		{
			case 1:
				arrTarget[1] = "Security_SignOnOff.htm";
				arrTarget[2] = "Security_LocateNodes.htm";
				arrTarget[3] = "MRContacts.htm";
				arrText[1] = "Sign On/Off";
				arrText[2] = "Locate Nodes";
				arrText[3] = "Contacts";
                                break;
			case 2:
				arrTarget[1] = "MRSTSummary4R.htm";
				arrTarget[2] = "MRSamplerOdorizer4R.htm";
				arrTarget[3] = "MRMechCounter4R.htm"
				arrTarget[4] = "MRNomination4R.htm";
				arrTarget[5] = "MRPIDFlowControl4R.htm";
				arrTarget[6] = "MRRunSwitching4R.htm";
				arrTarget[7] = "MRRadioConfig4R.htm";
				arrText[1] = "Summary";
				arrText[2] = "Sampler & Odorizer"
				arrText[3] = "Mechanical Counter"
				arrText[4] = "Nomination";
				arrText[5] = "Flow Control";
				arrText[6] = "Run Switching";
				arrText[7] = "Radio Control";
				break;

			case 3:
				arrTarget[1] = "RC_OV.htm";
				arrTarget[2] = "MRIOConfig4R.htm";
				arrTarget[3] = "RC_FE.htm";
				arrTarget[4] = "MRCompSetup4R.htm";
				arrText[1] = "Overview";
				arrText[2] = "I/O Configuration";
				arrText[3] = "Flow Equation";
				arrText[4] = "Compressibility Setup";
				break;


			case 4:
				arrTarget[1] = "GC_Setup4R.htm";
				arrText[1] = "Configuration";
				break;

			case 5:
				arrTarget[1] = "MRArchives4R.htm";
				arrTarget[2] = "MRAudit4R.htm";
				arrTarget[3] = "MRCollect4R.htm";
				arrText[1] = "View Archives";
				arrText[2] = "View Audit Trail";
				arrText[3] = "Collection"
				break;

			case 6:
				arrTarget[1] = "MRRecipes4R.htm";
				arrText[1] = "Load/Save Configuration";
				break;

				
				break;
			default:
				break;
		}//switch

		var innerHtml = "";
		//compose the html
		for( var cCtr = 1; cCtr < 25; cCtr++ )
		{
			//debugger;
			if ( arrTarget[cCtr] != "" )
			{
				innerHtml += "<a class=\"menuDropItem\" href=\"" + arrTarget[cCtr] + "\" >" + arrText[cCtr] + "</a><br />";
			}
		}

		obj.innerHTML = innerHtml;
	}//if first time

	return;
}//end createDropDown()

function showDropdown( obj, num )
{
	CloseAll();

	CreatingMenu = 1;

	obj.style.display = "block";

	if ( ObArray[num] == 0 )
	{
	    createDropDown( obj, num );
	}

	CurrentMenu = num;
}

function hideDropdown( obj )
{
	obj.style.display = "none";
}

function Highlight( obj )
{
	obj.style.color = "yellow";
	obj.style.cursor = "hand";
}

function unHighlight( obj )
{
	obj.style.color = "black";
	obj.style.cursor = "default";
}

function CloseAll()
{
	if ( CreatingMenu == 0 )
	{
		id_menu1_drop.style.display = "none";
		id_menu2_drop.style.display = "none";
		id_menu3_drop.style.display = "none";
		id_menu4_drop.style.display = "none";
		id_menu5_drop.style.display = "none";
		id_menu6_drop.style.display = "none";
		id_menu7_drop.style.display = "none";
		id_menu8_drop.style.display = "none";
	}

	CreatingMenu = 0;
}
