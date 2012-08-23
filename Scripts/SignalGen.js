  
		<!--
		//Global vars will go here
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: clearWatchList()
		*
		*    Summary: This will clear all of the checkboxs thats a signal box
		*             long as the file exists.
		*
		*    Returns: void / nothing
		*
		*    History: Created 11/07/2006
		*
		**********************************************************/
		function clearWatchList()
		{
			var checkBoxs = this.document.getElementsByTagName("input");
			 
			 for (var i = 0; i < checkBoxs.length; i++)
			 {
				if(checkBoxs[i].id.match("CheckboxSIG") != null)
				{
					
					if (checkBoxs[i].checked)
						checkBoxs[i].checked = false;
				}
			}
		}
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: getchecked()
		*
		*    Summary: This will get all of the checkboxs thats a signal box
		*             and add it to a elament in the passer pop up window.
		*
		*    Returns: void / nothing
		*
		*    History: Created 11/07/2006
		*
		**********************************************************/
		function getchecked(doc)
		{
			var str = "<table><tr><th style=\"text-align:center\">Signal</th><th style=\"text-align:center\">value</th></tr>";
			var checkBoxs = doc.getElementsByTagName("input");
			var SigCheckCount = 0;
			for (var i = 0; i < checkBoxs.length; i++)
			{
				if(checkBoxs[i].id.match("CheckboxSIG") != null)
				{
					
					if (checkBoxs[i].checked)
					{
						SigCheckCount++;    
						var SignalName = checkBoxs[i].id.replace("CheckboxSIG","");                    
						var AX = doc.getElementById(SignalName+"_Obj");
						var TD = doc.getElementById(SignalName+"_TD");
						
						if(AX != null)
						{
							SignalName = AX.SignalName;
							AX.Horizontal = 0;
							AX.RefreshRate = 1;
							//alert(TD.title);
							
							str +=  "<tr><td  style=\"text-align:left;\">";
							if(TD.title.match(SignalName) == null)
								str += "Signal:"+ SignalName+ ":";
							else
								str += TD.title;
							
							str += "</td><td width=\"100%\" style=\"text-align:left;\">";
							
							str += "<object id=\""+AX.id+"\" classid=\""+AX.classid+"\" ";
							//str += " height=\""+AX.height+"\"";
							str += " width=\""+AX.width+"\">";
						   
							  
							if(!AX.OnBitmap.length > 1 || !AX.offbitmap.length > 1)
								str += " width=\"100%\"  ";
								
							str += "  align=\"left\"  ";
							str += " style=\"text-align:left; \" >"+AX.style+"\"";
							//AX.Width = "100";
						   // alert(AX.Width);
							str += AX.innerHTML  ;
							//str += "<param name=\"SignalName\" value=\""+AX.SignalName+"\">";
						   // str += "<param name=\"Width\" value=\""+AX.Width+"\">";
							
							
							//str += document.getElementById(checkBoxs[i].id.replace("CheckboxSIG","")+"_Obj").innerHTML;
							//str += GenObjWithParams(checkBoxs[i].id.replace("CheckboxSIG",""),"");
							str +="</object></td></tr>"; 
							//alert(checkBoxs[i].id.replace("CheckboxSIG",""));
						}                        
					}
				}
			}
			 
			if(SigCheckCount == 0)
			{
				str += "<tr><td colspan=\"2\">There are no signals checked. Check a signal box from the main window to add ";
				str += "to the watch list and press update or the watch list button from the main window.</td></tr>";
			}
			str += "</table>";
			 
			str += "<br>Note: All signals are taken at a sampile rate of 500 millisecods (1/2 sec)";
			 
			return str;
		}
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: readFile(string FileName)
		*
		*    Summary: This function will read any file passed so 
		*             long as the file exists.
		*
		*    Returns: String Array.
		*
		*    History: Created 11/07/2006
		*
		**********************************************************/
		function readFile(FileName)
		{
		
			var fileContents;
			// This is a standard active X control from Microsoft that
			// should be standard on every windows XP machine.
			objXml = new ActiveXObject("Microsoft.XMLHTTP");
			
			//objXml = new ActiveXObject("Msxml2.XMLHTTP");// older version
			
			//Note that Msxm12.XMLHTTP is for older versions and may need to be implumented
			// if the Microsoft version does not work on all machines
			//objXml = new ActiveXObject("Msxml2.XMLHTTP");// older version

					   
			objXml.onreadystatechange=  function() 
										{
											try 
											{
												if (objXml.readyState == 4) 
												{
													
														fileContents = objXml.responseText; 
														//alert(objXml.responseText);
														//var content = document.getElementById(this._containerID);
														//this.document.write(objXml.responseText);
													   // document.childNodes.innerHTML = objXml.responseText;
														
												}
										   
											}
											catch( e ) 
											{
												alert("There was a problem loading the file "+FileName+". Possibly it does not exist.Caught Exception: "+ e.message );
											}
										}
			objXml.open("GET", FileName, false);
			
			objXml.send(null);//dispose of object.
			
			return fileContents;
		}
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: UpdateObjs()
		*
		*    Summary: This function will update all object tags on the page.
		*             currently it is only set up to do precision, but could
		*             altered to several applications.
		*
		*    Returns: void..nothing.
		*
		*    History: Created 11/07/2006
		*
		**********************************************************/
		function UpdateObjs()
		{
			var Precision;
			
			//array of all object tags on the page.
			var objects = document.getElementsByTagName("object");
			
			if(txtPrecision)//if there is a txtPrecision on the page
			{
				//test if value is int here..........
				//Precision = txtPercision.value;
				Precision = txtPrecision.value;
			}
			
			for (var i = 0; i < objects.length; i++)
			{            
				//additional properties that can be set here.    
//                objects[i].Rights = 13;
//                objects[i].Units = 0;
//                objects[i].Format = 0;
//                objects[i].BackColor= 0xDCF0FA;
//                objects[i].Horizontal=0;
//                objects[i].Width=6;
//                objects[i].BtnMode = 0;
//                objects[i].BtnFunction = 2;
//                objects[i].BtnToggleOFFtoONText = "MANUAL";
//                objects[i].BtnToggleONtoOFFText = "AUTO";
//                objects[i].RefreshRate = RefreshRate;
//                objects[i].IniFile = "C:/OPENBSI/BPPR_IO/Analogout.ini";
//                objects[i].RTUName = "RTU";
//                objects[i].outerHTML = objects[i].outerHTML;
//                objects[i].SignalName="@GV.Comp_ESDStatus";
//                objects[i].BackColor=0xDCF0FA;
//                objects[i].fillColor=0x000000;
				
				if(Precision != null && (Precision.length > 0 && Precision != "undefined"))	
					objects[i].Precision = Precision;	
				objects[i].Execute();
			}
		}
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: SetObjDefaults()
		*
		*    Summary: This function will update all object tags on the page.
		*             Plus it will set all objects with the specified values.
		*             After all object settings have been extenuated the active X 
		*             objects are executed.
		*
		*    Returns: void..nothing.
		*
		*    History: Created 11/07/2006
		*
		**********************************************************/        
		function SetObjDefaults()
		{
			var objects = document.getElementsByTagName("object");
			
			for (var i = 0; i < objects.length; i++)
			{
				  //additional properties that can be set here.    
				  objects[i].Rights = 15;
				 // objects[i].Precision = 2;
//                objects[i].Units = 0;
//                objects[i].Format = 0;
//                objects[i].BackColor= 0xDCF0FA;
//                objects[i].Horizontal=0;
//                objects[i].Width=6;
//                objects[i].BtnMode = 0;
//                objects[i].BtnFunction = 2;
//                objects[i].BtnToggleOFFtoONText = "MANUAL";
//                objects[i].BtnToggleONtoOFFText = "AUTO";
//                objects[i].RefreshRate = RefreshRate;
				if(objects[i].SignalName.match("DISELECT")|| objects[i].SignalName.match("DIRSELECT"))
				{
					objects[i].IniFile = "C:/OPENBSI/BPPR_IO/Discretein.ini";//"C:/OPENBSI/CompMonitor/Analogout.ini";
					objects[i].Format = 6;
					objects[i].OnBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Alarm.BMP";
					objects[i].OffBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Clear.BMP";
					objects[i].RefreshRate = 5;
					objects[i].Rights = 13;
				}
				else if(objects[i].SignalName.match("AISELECT") || objects[i].SignalName.match("AIRSELECT"))
				{
					objects[i].IniFile = "C:/OPENBSI/BPPR_IO/analogin.ini";//"C:/OPENBSI/BPPR_IO/Analogout.ini";
					objects[i].Format = 6;
					objects[i].OnBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Alarm.BMP";
					objects[i].OffBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Clear.BMP";
					objects[i].RefreshRate = 5;
					objects[i].Rights = 13;
				}
				else if(objects[i].SignalName.match("AOSELECT") || objects[i].SignalName.match("AORSELECT"))
				{
					objects[i].IniFile = "C:/OPENBSI/BPPR_IO/analogout.ini";//"C:/OPENBSI/BPPR_IO/Analogout.ini";
					objects[i].Format = 6;
					objects[i].OnBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Alarm.BMP";
					objects[i].OffBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Clear.BMP";
					objects[i].RefreshRate = 5;
					objects[i].Rights = 13;
				}
				else if(objects[i].SignalName.match("DOSELECT") || objects[i].SignalName.match("DORSELECT"))
				{
					objects[i].IniFile = "C:/OPENBSI/BPPR_IO/DISCRETEOUT.ini";//"C:/OPENBSI/BPPR_IO/Analogout.ini";
					objects[i].Format = 6;
					objects[i].OnBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Alarm.BMP";
					objects[i].OffBitmap = "C:/OPENBSI/BPPR_IO/IMAGES/Clear.BMP";
					objects[i].RefreshRate = 5;
					objects[i].Rights = 13;
				}
  
//                objects[i].RTUName = "RTU";
//                objects[i].outerHTML = objects[i].outerHTML;
//                objects[i].SignalName="@GV.Comp_ESDStatus";
//                objects[i].BackColor=0xDCF0FA;
//                objects[i].fillColor=0x000000;
				objects[i].fillColor=0x000000;
				objects[i].Execute();                
			}
			//alert(objects.length);//testing
		}
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: GenObjWithParams(string SignalName, array of string params)
		*
		*    Summary: This function will create a signal view active x object.
		*
		*    Returns: A string object with all the necessary object tags.
		*
		*    History: Created 11/07/2006
		*
		*             Modfied 3/2012 - Remove @ from Global Variable Signal_ID (Class id)
		*                             REplace "." in Signal_ID (class id) JBH
		**********************************************************/              
		function GenObjWithParams(SignalName,objParams)
		{
			var SignalID=(SignalName.replace(".","_"));
			var SignalID=(SignalID.replace("@",""));
			var prmN = "<param name=\"";
			var val = " value=\"";
			var height = 20;
			var width = "100%";
			var objStr;
			
			var objHead = "<object standby=\"Loading..\" style=\"background-color:White\"  id=\""+SignalID 
			+"_Obj\" classid=\"clsid:2C786147-7FE3-4102-A988-3D78D07ADD2E\" title=\""+SignalID+"\"";
			
			
			for(var i = 1; i < objParams.length; i++)
			{
				var params = objParams[i].split("=");
				
				if(params[0].toLowerCase() == "x")
					width = params[1];
				else if(params[0].toLowerCase() == "y")
				   height = params[1];
				  
			}
			objHead += " height=\""+height+"\" ";
			   
			objHead += " width=\""+width+"\" ";
				
			//height=\"20\" width=\"50\">";
			objStr = objHead + ">";
			objStr += prmN + "SignalName" + "\"" +  val + SignalName + "\">";
				 
			for(var i = 1; i < objParams.length; i++)
			{
				var params = objParams[i].split("=");
				
				if(params[0].toLowerCase() != "x" || params[0].toLowerCase() != "y" || param[0].toLowerCase() != "description")
				{
					objStr += prmN + params[0] + "\"" +  val + params[1] + "\">";
				}
			}

			//alert(objStr);
			return objStr + "</object>";            
		}

		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: WriteTableWithObjs()
		*       Params: file = file that is to be read( Coma deliminated file csv or txt etc.) *Required*
		*               blnWriteSigDivs = TRUE or FALSE ... to write div signal names or not    Optional.
		*                                   Defaults to FALSE if not provided.
		*               blnWriteWatchListChecks = TRUE or FALSE ... to write watch list box     Optional. 
		*                                   Defaults to FALSE if not provided
		*
		*    Summary: This function will handle the read and the call to parse and write a
		*             table based off of the csv or coma deliminated file.
		*
		*    Returns: void..nothing.
		*
		*    History:   11/07/2006  Created 
		*               11/16/2006  Added blnWriteSigDivs and blnWriteWatchListChecks capabilities
		**********************************************************/
		function WriteTableWithObjs(file, blnWriteSigDivs, blnWriteWatchListChecks)
		{
			var str,strRow;
			var fileContents = "";
			fileContents = readFile(file);
			var RowArray = fileContents.split("\n");
			var RowType;
			
			//in case overloaded function is not provided with bools(undefined) defaults to false
			if(!blnWriteSigDivs || blnWriteSigDivs == null || blnWriteSigDivs == "undefined")
				blnWriteSigDivs = false;
			else
				blnWriteSigDivs = true;
			
			//in case overloaded function is not provided with bools(undefined) defaults to false
			if(!blnWriteWatchListChecks || blnWriteWatchListChecks == null || blnWriteWatchListChecks == "undefined" )
				blnWriteWatchListChecks = false;
			else
				blnWriteWatchListChecks = true;
			
			document.write("<table border=\"1\"  >"); //start table tags
			for(var Row = 0; Row < RowArray.length; Row++)
			{
				if(RowArray[Row].indexOf('*') == 0)//.match("*T") != null)//you are a header
					RowType = "Header";
				else if(RowArray[Row].match("Mix") != null)//you are a Mix
					RowType = "Mix";
				else //else you are a data row.
					RowType = "Data";     
				
				//retrieve the tr td row....
				strRow = parsRow(RowArray[Row].split(","), RowType,blnWriteSigDivs, blnWriteWatchListChecks);
				   
				if(RowType == "Header" && Row >= 1)//write as a header
					document.write("</table><br><table   border=\"1\" ><tr bordercolor=\"#0000FF\" class=\"main\">" + strRow + "</tr>");
				else//write as a standard row...
					document.write("<tr bordercolor=\"#0000FF\" class=\"main\">" + strRow + "</tr>");
					
			}
			document.write("</table>");//end table tags
			SetObjDefaults();// set signal defaults and activate the controls.
		}
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: parsRow()
		*       Params: Row = string array containing the row cell items *Required*
		*               RowType = The type of row it is to be written as Data or a header row.
		*               blnWriteSigDivs = TRUE or FALSE ... to write div signal names or not *Required*.
		*               blnWriteWatchListChecks = TRUE or FALSE ... to write watch list box  *Required*. 
		*
		*    Summary: This function will parse the Row the read and the call to parse and gather a
		*             table tr td tag based off of the Row and RowType contents.
		*
		*    Returns: string representing a table row.
		*
		*    History:   11/07/2006  Created 
		*               11/16/2006  Added blnWriteSigDivs and blnWriteWatchListChecks capabilities
		**********************************************************/
		function parsRow(Row, RowType,blnWriteSigDivs, blnWriteChecks)
		{
			var Actx,DivSig;
			var strRow = "";
			var Cellitem;
						
			// Loop through all of the cells items in the row
			for(var i = 0; i < Row.length; i++)
			{
				Cellitem = Row[i];
					
				if(RowType == "Header")//Header Type
				{
					var headeritem;
					headeritem = Cellitem;
					
					strRow += "<th bordercolor=\"#0000FF\"  ";
					
					if(headeritem.match("="))//then it has header params
					{
						var parse = Cellitem.split(";");
						headeritem = parse[0];
						for(var k = 1; k < parse.length; k++)
						{
							if(parse[k].match("="))
							{
								var innerparse = parse[k].split("=");
								strRow += " " + innerparse[0] +"=\""+ innerparse[1] + "\" ";
							}
						}
					}
					
					strRow +=" style=\"background-color: darkgray;TEXT-ALIGN: center \"><b>"+headeritem.replace("*","")+"</b></th>";
				}
				else if(RowType == "Mix")// Mix row
				{
					if (Cellitem.length > 1)//signal item write object tag
					{
						var objParams = Cellitem.split(";");
						Cellitem = objParams[0];
						var description = " title=\"Signal: "+Cellitem+"\nDescription: None...\" ";
						
						if(blnWriteSigDivs)
							DivSig = "<div  style=\"visibility:hidden\" id=\""+Cellitem+"_DIV\"><font size=\"2\">"+Cellitem+":</font></div>";
						else
							DivSig = "";
							
						for(var w = 1; w < objParams.length;w++)
						{
							if(objParams[w].match("description=") != null)
							{
								var des = objParams[w].split("=");
								description = " title=\"Signal: "+Cellitem+"\nDescription: "+des[1]+"\" ";
								//alert(description);
							}
						}
						
						if(i == 0)
						{                                
							Cellitem = Row[++i];
							objParams = Cellitem.split(";");
							Cellitem = objParams[0];
							strRow += "<td id=\""+Cellitem+"_TD\" height=\"100\"  "+description+"  >"+Row[i - 1]+"<br>";   
							if(blnWriteSigDivs)
								DivSig = "<div  style=\"visibility:hidden\" id=\""+Cellitem+"_DIV\"><font size=\"1\">"+Cellitem+":</font></div>";
							
							strRow += DivSig +GenObjWithParams(Cellitem,objParams);
							
							if(blnWriteChecks)
								strRow += "<input id=\"CheckboxSIG"+Cellitem+"\" type=\"checkbox\" />";
						}
						else //its a new Row
						{  
							strRow += "<td  id=\""+Cellitem+"_TD\" "+description+" colspan=\""
							+(Row[i].length - 1 )+"\"style=\"background-color: White;\" bordercolor=\"#0000FF\">"
							+DivSig 
							+GenObjWithParams(Cellitem,objParams);
							
							if(blnWriteChecks)
								strRow += "<input id=\"CheckboxSIG"+Cellitem+"\" type=\"checkbox\" />";
							strRow += "</td>";
						}
					} 
				}
				else if(RowType == "Data") //data row
				{
					if ( Cellitem.indexOf('$') == 0 || Cellitem.indexOf("@") == 0 )//signal item write object tag
					{
						Cellitem = Cellitem.replace("$","");
					   // Cellitem = Cellitem.replace("@",""); // Remove these characters JavaScript doesnt like them in
															// Variable Names Like @GV_VarName.ValueTxt

						//Actx = Obj("RTU","2C786147-7FE3-4102-A988-3D78D07ADD2E",SignalName,25,25,0xDCF0FA,0x000000);
						var objParams = Cellitem.split(";");
						Cellitem = objParams[0];
						var description = " title=\"Signal: "+Cellitem+"\nDescription: None...\" ";
						
						for(var w = 1; w < objParams.length;w++)
						{
							if(objParams[w].match("description=") != null)
							{
								var des = objParams[w].split("=");
								description = " title=\"Signal: "+Cellitem+"\nDescription: "+des[1]+"\" ";
								//alert(description);
							}
						}
						 
						if(blnWriteSigDivs)
							DivSig = "<div  style=\"visibility:hidden\" id=\""+Cellitem+"_DIV\"><font  color=\"gray\" size=\"2px\">"+Cellitem+":</font></div>";
						else
							DivSig = "";    
							 
						Actx = GenObjWithParams(Cellitem,objParams);
						strRow += "<td   id=\""+Cellitem+"_TD\"  "+description+" style=\"background-color: White;\" bordercolor=\"#0000FF\">"
						+DivSig+Actx;
					
						if(blnWriteChecks)
							strRow += "<input id=\"CheckboxSIG"+Cellitem+"\" type=\"checkbox\" />";
				   
					}
					else // cell is just text
						strRow += "<td bordercolor=\"#0000FF\">"+Cellitem; //#999999
						
					 strRow += "</td>";//end table Row
				}
			}
			return strRow;
		}        
		
		/**********************************************************
		*     Author: Jacob Decker 
		*   
		*   Function: ShowNames()
		*          Summary: Does just what is sounds like. 
		*           it shows the div tags signal names to visible or hidden
		*    
		*    History:   11/07/2006  Created 
		**********************************************************/
		function ShowNames()
		{
			if(checkboxShowSignalNames)
			{
				var Divobjects = document.getElementsByTagName("div");
			
				
				for(var i = 0; i < Divobjects.length; i++)
				{
					if(Divobjects[i].id.match("@GV.")||Divobjects[i].id.match("$"))
					{
					   // alert(Divobjects[i].id); 
					   //alert(Divobjects[i].style.display);
							
						if(checkboxShowSignalNames.checked)
							Divobjects[i].style.visibility = "visible";

						else
							Divobjects[i].style.visibility = "hidden";
					}
				}
			}
		}
		// -->
