//this file has the functions to properly initialize the page

var timerID = -1;
var BBIRtuName = 0;



function DetectIE5 ()
{

    version = 0;
    is_msie = (navigator.appName.indexOf("Microsoft Internet Explorer") != -1);

    temp    = navigator.appVersion.split("MSIE");
    version = parseFloat(temp[1]);			//NON IE browser will return 0

    return(is_msie && (version >= 5.0));
	

}//end DetectIE()


function init()
{
	//debugger;
	for ( var ctr = 0; ctr < 8; ctr++ )
	{
		//debugger;
		ObArray[ctr] = 0;
	}

	//DetectNode();
}//end init()


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
