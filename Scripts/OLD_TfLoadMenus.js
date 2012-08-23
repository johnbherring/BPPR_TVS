/*this file loads the drop down menus on demand for the TeleFlow pages*/

//create an array for the number of menus + 1
//use the array as if the lower bound == 1
//
var ObArray 	  = new Array(17);		//number of buttons + 1
var arrTarget 	  = new Array(60);		//max number of menu items
var arrText	  = new Array(60);		//ditto
var CreatingMenu  = 0;				//signal menu creation



function DetectIE5 ()
{
    version = 0;
    is_msie = (navigator.appName.indexOf("Microsoft Internet Explorer") != -1);

    temp    = navigator.appVersion.split("MSIE");
    version = parseFloat(temp[1]);			//NON IE browser will return 0

    return(is_msie && (version >= 5.0))
}


function init()
{
    for ( var ctr = 0; ctr < 14; ctr++ )
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
    innerHtml += "title=\"Logon and Security Maintenance Menus\">Security</a>";
    innerHtml += "<div id=\"id_menu1_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_2\" class=\"menuItem\" onclick=\"showDropdown(id_menu2_drop, 2);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Run1 Real Time Measurment Data Menus\">Run1 Measurement Data</a>";
    innerHtml += "<div id=\"id_menu2_drop\" class=\"menuDrop\"></div></div>";
	
	innerHtml += "<div id=\"id_button_3\" class=\"menuItem\" onclick=\"showDropdown(id_menu3_drop, 3);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Run1 Measurement Configuration Menus\">Run1 Configuration</a>";
    innerHtml += "<div id=\"id_menu3_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_12\" class=\"menuItem\" onclick=\"showDropdown(id_menu12_drop, 12);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Run2 Real Time Measurment Data Menus\">Run2 Measurement Data</a>";
    innerHtml += "<div id=\"id_menu12_drop\" class=\"menuDrop\"></div></div>";
	
	innerHtml += "<div id=\"id_button_13\" class=\"menuItem\" onclick=\"showDropdown(id_menu13_drop, 13);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Run2 Measurement Configuration Menus\">Run2 Configuration</a>";
    innerHtml += "<div id=\"id_menu13_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_10\" class=\"menuItem\" onclick=\"showDropdown(id_menu10_drop, 10);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Legacy Retrofit Installation Menu\">Retrofit Menu</a>";
    innerHtml += "<div id=\"id_menu10_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_4\" class=\"menuItem\" onclick=\"showDropdown(id_menu4_drop, 4);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Measurement Log File Collection and Review\">Measurement Logs</a>";
    innerHtml += "<div id=\"id_menu4_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_5\" class=\"menuItem\" onclick=\"showDropdown(id_menu5_drop, 5);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Measurement Transmitter Calibration Menus\" ></a>";
    innerHtml += "<div id=\"id_menu5_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_6\" class=\"menuItem\" onclick=\"showDropdown(id_menu6_drop, 6);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Communications Setup\"></a>";
    innerHtml += "<div id=\"id_menu6_drop\" class=\"menuDrop\"></div></div>";

    innerHtml += "<div id=\"id_button_7\" class=\"menuItem\" onclick=\"showDropdown(id_menu7_drop, 7);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Special Functions\">Special Functions</a>";
    innerHtml += "<div id=\"id_menu7_drop\" class=\"menuDrop\"></div></div>";
	
	innerHtml += "<div id=\"id_button_11\" class=\"menuItem\" onclick=\"showDropdown(id_menu11_drop, 11);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Menus used to configure the Site Parameters of the 3310 Application\">Site Configuration</a>";
    innerHtml += "<div id=\"id_menu11_drop\" class=\"menuDrop\"></div></div>";
		
	innerHtml += "<div id=\"id_button_8\" class=\"menuItem\" onclick=\"showDropdown(id_menu8_drop, 8);\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"Menus used to operate the control portion of the 3310 Application\">Site Operation</a>";
    innerHtml += "<div id=\"id_menu8_drop\" class=\"menuDrop\"></div></div>";
		
    innerHtml += "<div id=\"id_button_9\" class=\"helpItem\" onclick=\"popupHelp('help/overview.htm')\" >";
    innerHtml += "<a onmouseover=\"fgHigh(this);\" onmouseout=\"fgNorm(this);\" ";
    innerHtml += "title=\"User Help\">Help</a>";
    innerHtml += "<div id=\"id_menu9_drop\" class=\"menuDrop\"></div></div>";
	
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
		for( var ctr = 0; ctr < 60; ctr++ )
		{
			arrText[ctr] = "";
			arrTarget[ctr] = "";
		}

		switch(num)
		{
			case 1:
				arrTarget[1] = "Security_SignOnOff.htm";
				arrTarget[2] = "Security_Maintenance.htm";
				arrTarget[3] = "Security_LocateNodes.htm";
				arrText[1] = "Sign On/Off";
				arrText[2] = "Security Maintenance";
				arrText[3] = "Locate Nodes";
				break;
			case 2:
				arrTarget[1] = "Current_R1InstantaneousGasFlow.htm";
				arrTarget[2] = "Current_R1VolumeEnergy&FlowTime.htm";
				arrTarget[3] = "Current_R1FlowEquationComponents.htm";
				arrTarget[4] = "Current_R1GasComposition.htm";
			//	arrTarget[5] = "";
			//	arrTarget[6] = "Current_PlotTrendData.htm";
			//	arrTarget[7] = "Current_PlotPlungerData.htm";
				arrText[1] = "Instantaneous Gas Flow";
				arrText[2] = "Volume, Energy & Flow Time";
				arrText[3] = "Flow Equation Comp.";
				arrText[4] = "Gas Composition";
			//	arrText[5] = "";
			//	arrText[6] = "Plot Measurement Data";
			//	arrText[7] = "Plot Plunger Data";
				break;
			case 3:
				arrTarget[1] = "Configuration_R1LiveData.htm";
				arrTarget[2] = "RunConfig.htm";
			//	arrTarget[3] = "";
				arrTarget[4] = "Configuration_R1GasComposition.htm";
				arrTarget[5] = "Redownload2300Recipe.htm";
				arrText[1] = "Live Input/Output";
				arrText[2] = "Configuration Constants";
			//	arrText[3] = "";
				arrText[4] = "Gas Composition";
				arrText[5] = "Read/Write Configuration";
				break;
			case 4:
			//	arrTarget[1] = "Collect_Logs.htm";
				arrTarget[2] = "Collect_ViewR1DailyLog.htm";
				arrTarget[3] = "Collect_ViewR1PeriodicLog.htm";
				arrTarget[4] = "Collect_ViewR1TrendLog.htm";
				arrTarget[5] = "Collect_ViewR2DailyLog.htm";
				arrTarget[6] = "Collect_ViewR2PeriodicLog.htm";
				arrTarget[7] = "Collect_ViewR2TrendLog.htm";
				arrTarget[8] = "Collect_ViewPlungerArchive.htm";
			//	arrTarget[9] = "Collect_ViewPlungerMessage.htm";
				arrTarget[10] = "Collect_ViewAuditLog.htm";
			//  arrTarget[11] = "alarm_view.htm"; 
			//	arrTarget[12] = "Histtrend3.htm";
			//	arrText[1] = "Collect Logs";
				arrText[2] = "Run1 Daily";
				arrText[3] = "Run1 Hourly";
				arrText[4] = "Run1 Trend";
				arrText[5] = "Run2 Daily";
				arrText[6] = "Run2 Hourly";
				arrText[7] = "Run2 Trend";
				arrText[8] = "Plunger Run Array";
			//	arrText[9] = "View Plunger Message";
				arrText[10] = "Common Audit";
			//  arrText[11] = "Live Alarm View"; 
			//  arrText[12] = "Historical Trend";
				break;
			//case 5:
				//arrTarget[1] = "Calibration_R1Verification1.htm";
			//	arrTarget[2] = "Calibration_R2Verification.htm";
				//arrTarget[3] = "Calibration_R1FoundLeft.htm";
			//	arrTarget[4] = "Calibration_CalibrateDifferential.htm";
			//	arrTarget[5] = "Calibration_CalibrateStatic.htm";
			//	arrTarget[6] = "Calibration_CalibrateRTD.htm";
			//	arrTarget[7] = "CalibrateRun1.htm";
				//arrText[1] = "Run1 Verification";
			//	arrText[2] = "Run2 Verification";
				//arrText[3] = "Run1 Found Left";
			//	arrText[4] = "Calibrate Differential";
			//	arrText[5] = "Calibrate Static";
			//	arrText[6] = "Calibrate RTD";
			//	arrText[7] = "Calibrate Run 1";
				//break;
			case 6:
				arrTarget[1] = "Comm_ChangeGroupNumber.htm";
				arrText[1] = "Change Group Number";
				break;
			case 7:
				arrTarget[1] = "MODBUSMonitor.htm";
				arrTarget[2] = "Update_Software.htm";
				arrTarget[3] = "TubingFlowControl.htm";
				arrTarget[4] = "RemoteIOModuleRMRTU8440.htm";
				arrTarget[5] = "AnalogInRemoteRM16H.htm";
				arrTarget[6] = "Chromatograph.htm";
				arrText[1] = "Modbus Server Monitor";
				arrText[2] = "Update Software";
				arrText[3] = "Tubing Flow Control";
				arrText[4] = "RM RTU 8440 I/O";
				arrText[5] = "RM AI 16H1";
				arrText[6] = "2920 Chromatograph";
				break;
			case 8:
				arrTarget[1] = "Well_Operation.htm";
				arrTarget[2] = "Plunger_Drop.htm";
				arrTarget[3] = "Plunger_Lift.htm";
				arrTarget[4] = "Plunger_Evaluation.htm";
				arrTarget[5] = "Current_PlotPlungerData.htm";
				//arrTarget[6] = "Plunger_AdditionalControl2.htm";
				//arrTarget[7] = "Well_Runtime.htm";
				arrTarget[8] = "rodpump_cntrl.htm";
				arrTarget[9] = "Frame.htm";
				arrTarget[10] = "Choke_cntrl.htm";
				arrTarget[11] = "Collect_ViewPlungerMessage.htm";
				arrTarget[12] = "Redownload2300Recipe.htm";
				arrText[1] = "Main Operation";
				arrText[2] = "Drop Control";
				arrText[3] = "Lift Control";
				arrText[4] = "Plunger Evaluation";
				arrText[5] = "Plot Plunger Data Live";
				//arrText[6] = "Plunger Additional Controls 2";
				//arrText[7] = "Well Runtime / Maint";
				arrText[8] = "Pump Control";
				arrText[9] = "Scheduled Events";
				arrText[10] = "Choke Control";
				arrText[11] = "View Plunger Message";
				arrText[12] = "Read/Write Configuration";
				break;
			case 10:
				arrTarget[1] = "LegacyInstallationRetrofit.htm";
				arrText[1] = "Installation Retrofit Menu ";
				break;			
			case 11:
				arrTarget[1] = "Discrete.htm";
				arrTarget[2] = "AnalogIn.htm";
				arrTarget[3] = "AnalogOut.htm";
				arrTarget[4] = "HSC.htm";
				arrTarget[5] = "Well_ValveConfiguration.htm";
				arrTarget[6] = "Well_Configuration.htm";
				arrTarget[7] = "Site_ESDConfiguration.htm";
				arrText[1] = "Discrete Config";
				arrText[2] = "Analog In Config";
				arrText[3] = "Analog Out Config";
				arrText[4] = "High Speed Counters";
				arrText[5] = "Valve Configuration";
				arrText[6] = "Well Dimensions     Process Alarms";
				arrText[7] = "Site ESD Config";
				break;			
			case 12:
				arrTarget[1] = "Current_R2InstantaneousGasFlow.htm";
				arrTarget[2] = "Current_R2VolumeEnergy&FlowTime.htm";
				arrTarget[3] = "Current_R2FlowEquationComponents.htm";
				arrTarget[4] = "Current_R2GasComposition.htm";
			//	arrTarget[5] = "";
			//	arrTarget[6] = "Current_PlotTrendData.htm";
			//	arrTarget[7] = "Current_PlotPlungerData.htm";
				arrText[1] = "Instantaneous Gas Flow";
				arrText[2] = "Volume, Energy & Flow Time";
				arrText[3] = "Flow Equation Comp.";
				arrText[4] = "Gas Composition";
			//	arrText[5] = "";
			//	arrText[6] = "Plot Measurement Data";
			//	arrText[7] = "Plot Plunger Data";
				break;
			case 13:
				arrTarget[1] = "Configuration_R2LiveData.htm";
				arrTarget[2] = "Configuration_R2Constants.htm";
			//	arrTarget[3] = "";
				arrTarget[4] = "Configuration_R2GasComposition.htm";
				arrTarget[5] = "Redownload2300Recipe.htm";
				arrText[1] = "Live Input/Output";
				arrText[2] = "Configuration Constants";
			//	arrText[3] = "";
				arrText[4] = "Gas Composition";
				arrText[5] = "Read/Write Configuration";
				break;
			default:
				break;
		}//switch

		var innerHtml = "";
		//compose the html
		for( var cCtr = 1; cCtr < 50; cCtr++ )
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
		id_menu9_drop.style.display = "none";
		id_menu10_drop.style.display = "none";
		id_menu11_drop.style.display = "none";
		id_menu12_drop.style.display = "none";
		id_menu13_drop.style.display = "none";
				
	}

	CreatingMenu = 0;
}
