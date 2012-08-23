
/*******************************************************************************************
*    Author: John Herring
*
*    Create Index Into Structures for User Interface
*
*    Summary: Use Settings and Starting Index (From RTU) to calculated where the IO Point 
*             should be found in RTU program structures.
*   
*    Implementation: 
*
*    Inputs:  Slot , CardType, IOType, StartingIndex, SignalDivID
*              
*    Return: Index Value to Div Id
* 
*    History: 
*
*********************************************************************************************/





var IOPoints = new Array(16); // 15 Card Types
	
                    //   Number of Inputs per Card
                    //       1  2  3  4  5   6   7
					//   NA AI AO DI DO HSC RTD TC
IOPoints[1] =  new Array(0, 0, 0, 16, 0, 0,  0,  0);      //1= 16 DI
IOPoints[2] =  new Array(0, 0, 0, 12, 4, 0,  0,  0);      //2= 12 DI 4 DO
IOPoints[3] =  new Array(0, 0, 0, 0, 16, 0,  0,  0);      //3= DO 16
IOPoints[4] =  new Array(0, 6, 0, 0, 0,  0,  0,  0);      //4= AI 6
IOPoints[5] =  new Array(0, 8, 0, 0, 0,  0,  0,  0);      //5= AI8
IOPoints[6] =  new Array(0, 6, 2, 0, 0,  0,  0,  0);      //6= AIAO 6AI 2AO
IOPoints[7] =  new Array(0, 0, 4, 0, 0,  0,  0,  0);      //7= AO4
IOPoints[8] =  new Array(0, 0, 0 ,0 ,0,  4,  0,  0);      //8= HSC4
IOPoints[9] =  new Array(0, 4, 1, 6, 6,  2,  0,  0);      //9= MIX
IOPoints[10] = new Array(0, 0, 0, 0, 0,  0,  4,  0);      //10= RTD4
IOPoints[11] = new Array(0, 0, 0, 0, 0,  0,  0,  6);      //11=TC6
IOPoints[12] = new Array(0, 0, 0, 0, 0,  0,  0,  0);      //12=None
IOPoints[13] = new Array(0, 0, 0, 0, 0,  0,  0,  0);      //13=None
IOPoints[14] = new Array(0, 0, 0, 0, 0,  0,  0,  0);      //14=None
IOPoints[15] = new Array(0, 0, 0, 8, 0 , 0,  0,  0);      //15=8DI


//alert("MIX AI Count " + IOPoints[9][0]);


function CalcIndex(Slot, CardType, IOType, StartingIndex, SignalDivID)
{

    switch (IOType)
    {
        case 1: PointsInDesign=8; 
                break;
        case 2: PointsInDesign=4
                break;
        case 3:PointsInDesign=16;
                break;
        case 4:PointsInDesign=16;
               break;
        case 5: PointsInDesign=4;
            break;
        case 6:PointsInDesign = 4;
            break;
        case 7:PointsInDesign = 4;
            break;
    }

    
    var CrdPt = 1;
    var Points= IOPoints[CardType][IOType];
	var StartingIndex = ((Slot - 3) * PointsInDesign) + StartingIndex;
	var EndingIndex= (StartingIndex+Points);

	//alert("Points For Card Type"+CardType+": " + Points + " Design Points For Card Type: " + PointsInDesign + " StartingIndex " + StartingIndex + " Ending Index: " + EndingIndex + " DIvID: " + SignalDivID);
	
	
	for (sLoop = StartingIndex; EndingIndex > sLoop; sLoop++)
	
	{
    
	    VarDivID = SignalDivID + "_P" + CrdPt + "_Index";
	    
       // alert("Index: " + sLoop + " Target Div " + VarDivID);

	   document.getElementById(VarDivID).innerHTML = sLoop;

        CrdPt=CrdPt+1;
   
	}




}