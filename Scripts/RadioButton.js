
/*******************************************************************************************
 *    Author: John Herring
 *
 *    Create Radio Button Html
 *
 *    Summary: Create Array of Radio Button Control within a from tag and insert into div id
 * *
 *    Implementation: This must be called for each radio button set required
 *
 *    Inputs:   Variable    Type        Description                                 Required
 *              Low         Number      Starting Point in the RadioText Array       Yes
 *              High        Number      Ending Point in the Radio Text Array        Yes
 *              RadioText   Array       Text to be used for RadioButtons            Yes
 *              RB_DivID    String      Div ID which is included in the Signal      Yes
 *                                      Grid Creation .csv used to create RB
 *                                      id tag
 *              RB_Click    String      Name of Click Handler which must be         Yes
 *                                      Included
 *              
 *    Return: Html to Div Id
 * 
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/

function CreateRadioButtonHtml(Low,High,RadioText,RB_DivID,RB_Click)
    {
    var CallClick = "\"" + RB_Click +  "()" + "\"";
   
    // RadioStyled = " class=styled";
    //This is here to allow the use of the /Scripts/Custom-Form-element.js library, suspect that this would require the "click event"
    // to be moved or called from that library which uses the onchange event to allow custom appearance of the check box from image files...
    
    //RadioStyledDiv= "<div"+ "class="+"styled"+">";  


    if(RBDebug){alert(CallClick);}

    var table_width = (High-Low)*75;
    var border = 0;
    var form_name = RB_DivID;
    var input_type ="radio";

    RadioHtml = "<table width="+ table_width + "border="+ border + ">" + "<form id=" + form_name + " name="+form_name+
        ">"+ "<tr>";

    for (htmLoop = Low; htmLoop < High; htmLoop++)
    {
       if(RadioText[htmLoop]=="RB")                     // If RadioText included "RB" as name append number as temporary
       {                                                // name
           RadioText[htmLoop]="RB "+htmLoop;
       }
       RadioHtml = RadioHtml + "<td>"+ "<label>" + RadioText[htmLoop] + "</label>" + "<input" +" name="+ form_name + "_RB"+ " type=" + input_type + " value=" + htmLoop;
       RadioHtml = RadioHtml + " id=" + RB_DivID + htmLoop +" onclick=" + CallClick  + "/>"  + "</td>";
    }
   RadioHtml = RadioHtml + "</form>" + "</tr>" + "</table>";                   //+"</div>" --See RadioStyled..

    //alert("This is going to write to Div Id: "+ RB_DivID);
    //alert(RadioHtml);

    document.getElementById(RB_DivID).innerHTML = RadioHtml;

}

/*******************************************************************************************
 *    Author: John Herring
 *
 *    Create Write Back Html (Signal Write Control)
 *
 *    Summary: Create Signal Write Object, Used to write value changes from radio Buttons
 * *
 *    Implementation: This must be called for each radio button set required
 *
 *    Inputs:   Variable        Type        Description                                 Required
 *              RB_Wrt_DivID    String      Div ID which is included in the Signal      Yes
 *                                          Grid Creation .csv
 *              SignalName      String      SignalName to be Written to Used here       Yes
 *                                          to create object name.
 *
 *    Return: Html to Div Id
 *
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/

function CreateRadioButtonWriteBackHtml(RB_Wrt_DivID,SignalName)
{
  var SignalID=(SignalName.replace(".","_"));
  SignalID=(SignalID.replace("@",""));
  var prmN = "<param name=\"";
  var val = " value=\"";

  var RadioWriteBackHtml= "<object" + " classid=\"clsid:B86708D4-7557-4AFB-86E0-CB6F58BAF19A\"" + " id=\"" + SignalID

    + "_Obj_Wrt\"" + ">" + "</object>";

   //alert(RadioWriteBackHtml);

   document.getElementById(RB_Wrt_DivID).innerHTML = RadioWriteBackHtml;

  }

/*******************************************************************************************
 *    Author: John Herring
 *
 *    Disable Radio Button ("Grey Out")
 *
 *    Summary: This Disables all RadioButtons in a set, Used by functions and script to
 *             turn off the radio buttons while value is unknown (Start-up and Update Pending)
 *
 *    Implementation: This is called by the script and RB Functions
 *
 *    Inputs:   Variable        Type        Description                                 Required
 *              Low             Number      Starting Point in the RadioText Array       Yes
 *              High            Number      Ending Point in the Radio Text Array        Yes
 *              RB_DivID        String      Div ID which is included in the Signal      Yes
 *                                          Grid Creation .csv
 *
 *
 *    Return: Nothing
 *
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/

function DisableRadioButton(Low,High,RB_DivID)// This greys out the radio buttons until the value can be retrieved
{

    for (sLoop=Low;sLoop<High;sLoop++)
    {
     document.getElementById(RB_DivID+sLoop).disabled=1;
    }
}

/*******************************************************************************************
 *    Author: John Herring
 *
 *    Enable Radio Button (Allow Input, Trigger Click Event)
 *
 *    Summary: This Disables all RadioButtons in a set, Used by functions and script to
 *             turn off the radio buttons while value is unknown (Start-up and Update Pending)
 *
 *    Implementation: This is called by the script and RB Functions
 *
 *    Inputs:   Variable        Type        Description                                 Required
 *              Low             Number      Starting Point in the RadioText Array       Yes
 *              High            Number      Ending Point in the Radio Text Array        Yes
 *              RB_DivID        String      Div ID which is included in the Signal      Yes
 *                                          Grid Creation .csv this is also the RB
 *                                          id tag
 *
 *
 *    Return: Nothing
 *
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/


function EnableRadioButton(Low,High,RB_DivID)// This greys out the radio buttons until the value can be retrieved
{

    for (sLoop=Low;sLoop<High;sLoop++)
    {
        document.getElementById(RB_DivID+sLoop).disabled=0;
    }
}

/*******************************************************************************************
 *    Author: John Herring
 *
 *    Get Radio Button Value
 *
 *    Summary: This returns the value of the selected radiobutton as set in RadioValue configuration array
 *
 *
 *    Implementation: This is called by the script and RB Functions
 *
 *    Inputs:   Variable        Type        Description                                 Required
 *              Low             Number      Starting Point in the RadioText Array       Yes
 *              High            Number      Ending Point in the Radio Text Array        Yes
 *              RB_DivID        String      Div ID which is included in the Signal      Yes
 *                                          Grid Creation .csv this is also the RB
 *                                          id tag
 *              RadioValue      Array       Array of Values Applied to Signal when      Yes
 *                                          Selected used here to return expected
 *                                          Signal Value (Pending and Error Detection)
 *
 *    Return: RadioValueSelected - Value of radio button selected
 *
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/

function GetValueRadioButton (Low,High,RB_DivID,RadioValue)
{
    var  RadioValueSelected = 0;

    for (sLoop=Low;sLoop<High;sLoop++)
    {
        if(document.getElementById(RB_DivID+sLoop).checked)
        {
            RadioValueSelected = RadioValue[sLoop];
        }
    }

      return RadioValueSelected;
}

/*******************************************************************************************
 *    Author: John Herring
 *
 *    Return which Radio Button Checked
 *
 *    Summary: This returns which one of the Radio Buttons is checked based upon a 0-X as
 *    provided in the Configuration Arrays RadioText and RadioValue. No Buttons selected results in a
 *    0 (None Checked)
 *
 *    Implementation: This is called by the script and RB Functions
 *
 *    Inputs:   Variable        Type        Description                                 Required
 *              Low             Number      Starting Point in the RadioText Array       Yes
 *              High            Number      Ending Point in the Radio Text Array        Yes
 *              RB_DivID        String      Div ID which is included in the Signal      Yes
 *                                          Grid Creation .csv this is also the RB
 *                                          id tag
 *
 *
 *    Return: RadioButtonChecked - Which Radio Button Selected 0-x (determined by Lenght of
 *                                 config arrays (RadioText, RadioValue).
 *
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/


function GetCheckedRadioButton (Low,High,RB_DivID)
{
    var RadioButtonChecked=0;
    for (sLoop=Low;sLoop<High;sLoop++)
    {
        if(document.getElementById(RB_DivID+sLoop).checked)
        {
            RadioButtonChecked = sLoop;
        }

    }
    return RadioButtonChecked;
}


/*************************Set Radio Button "Checked"****************************************
*    Author: John Herring
*
*   Set Radio Button "Checked"
*
*   Summary: This Function Sets a Radio Button Checked this should be used by applications that
*              Do Not interact with RTU Signals use instead UpdateRadioButton which is signal
*             "Aware"
*
*   Implementation: This is called by the script and RB Functions
*
*   Inputs:   Variable        Type        Description                                 Required
*               B_DivID        String      Div ID which is included in the Signal      Yes
*                                          Grid Creation .csv this is also the RB
*                                          id tag
*               Value          Number      Which Radio Button to Check
*
*    Return: None
*
*    History: 3/30 /2012 Added to Library
*
*********************************************************************************************/

function SetCheckedRadioButton(RB_DivID,Value)
   {
    document.getElementById(RB_DivID + Value).checked = true;
   }


/*******************************************************************************************
 *    Author: John Herring
 *
 *    Update Radio Buttons from Signal , Detect / Handle Out Of Range Error
 *
 *    Summary: This Disables all RadioButtons in a set, Used by functions and script to
 *             turn off the radio buttons while value is unknown (Start-up and Update Pending)
 *
 *    Implementation: This is called by the script and RB Functions
 *
 *    Inputs:   Variable        Type        Description                                 Required
 *              Low             Number      Starting Point in the RadioText Array       Yes
 *              High            Number      Ending Point in the Radio Text Array        Yes
 *              RB_DivID        String      Div ID which is included in the Signal      Yes
 *                                          Grid Creation .csv this is also the RB
 *                                          id tag
 *
 *
 *    Return: RadioButtonChecked - Which Radio Button Selected 0-x (determined by Lenght of
 *                                 config arrays (RadioText, RadioValue).
 *
 *    History: 3/28/2012 Initial Library Version
 *
 *********************************************************************************************/
function UpdateRadioButton(Low,High,RB_DivID,SignalValue,RadioValue,Checked,Correct) 
{
    if(RBDebug){alert("Signal Value "+ SignalValue+ " Compared to Radio Value " + RadioValue[Checked] +
                " Checked "+ Checked );}

       if(SignalValue != RadioValue[Checked])
       {

            if(!Correct && Checked>0)
               {
                  if(RBDebug){alert("Trying to Clear Bit " +Checked);}

                    document.getElementById(RB_DivID+Checked).checked=false;
                    document.getElementById(RB_DivID+0).checked=true;
                    AssignCorrectButton(Low,High,RB_DivID,SignalValue,RadioValue);
               }
       }


    if(RBDebug){alert("1 Signal Value "+ SignalValue + " Checked "+ Checked);}

    if (Checked == 0 && (SignalValue == 0)) {
        if(RBDebug){alert("2 Signal Value " + SignalValue + " checked " + Checked);}
        document.getElementById(RB_DivID + 0).checked = true;

    }

    if (Checked == 0 && SignalValue > 0) {
        if(RBDebug){alert("3 Signal Value " + SignalValue +" checked " + Checked);}
        document.getElementById(RB_DivID + 0).checked = true;
        AssignCorrectButton(Low, High, RB_DivID, SignalValue, RadioValue);
    }

 }


function AssignCorrectButton(Low,High,RB_DivID,SignalValue,RadioValue)
{
    if(RBDebug){alert("Low "+Low+" High "+High +" Signal Value "+ SignalValue+ " RadioValue "+RadioValue + "sLoop "+ sLoop);}
    for (sLoop=Low;sLoop<High;sLoop++)
    {
            if(SignalValue==RadioValue[sLoop])
            {
                if(RBDebug){alert("Trying to Set Bit " +sLoop);}
                document.getElementById(RB_DivID+sLoop).checked=true;
                //EnableRadioButton(Low,High,RB_DivID);
            }
    }

}

/*******************************************************************************************
*    Author: John Herring
*
*    Check Arrays - Programmer Help
*
*    Summary: Programmer Help checks the two arrays that configure the Text and Numbers 
     for the radiobuttons
*
*    Implementation: This is called by the script and RB Functions
*
*    Inputs:   Variable        Type        Description                                 Required
*              TxtArray        Array      Text Array Containing Text for Radio Buttons Yes
*              ValArray        Array      Numerical Array Contains Values
                                          for Radio Buttons                            Yes
*              ID              String     ID for Radio Button Controls                 Yes 
*
*
*    Return: Alert Message to Correct Array Definition
*
*    History: 3/28/2012 Initial Library Version
*
*********************************************************************************************/
function CompareArrays(TxtArray, ValArray, ID)
{

    if (TxtArray != ValArray)
    {
        var newVariable = " Declaration RadioText and RadioValue SHOULD contain the same number of text / number pairs";
        alert("Control ID " + ID + newVariable);
    }

} 