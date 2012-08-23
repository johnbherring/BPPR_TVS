/*******************************************************************************************
*    Author: John Herring
*
*    SigView_Class
*
*    Summary:  Signal View Control Class - This extends the Signal View Active-X providing
*              additional functions using the prototype class style structure 
*
*
*    Implementation: This is implemented as a prototype class by using the "new" keyword
*
*                        example "var SigViewObj = new SigViewClass(GV_TestSignal_Obj,5000);" 
*
*    Class Arguments:   SigView Object id - this is the name of the SignalView object as assigned in
*                                             html or by the SigGen script which creates the object 
*                                             with the SignalName_Obj convention 
*
*                                  @GV.TestSignal = GV_TestSignal_Obj
*                                  $W1.TestSignal = W1_TestSignal_Obj  - "$" is used by SigGen to 
*                                                                         identify instance var names.
*
*                        UpdateDelay -       This is the value in MS that DetectChange method 
*                                             will be called to check for a changed value .
*
*
*    Attributes: See Methods to return attributes
*
*    Methods:  getObject        - Return a reference to the  object (SigView Control Instance)
*              getName          - Return the SigView Object Name (equals id)
*              getValue         - Return the current valuetext
*              getStatus        - Return the Refresh Status as a Number 0=OK 1=Bad
*              getStatusText    - Return the refresh status as Text*               
*              getLastValue     - Return the Last Value (prior to being set equal to current)
*              getChanged       - Return the Change "Flag" true = changed , the user is responsible 
*                                 for clearing the Changed flag. See ResetChanged
*              ResetChanged     - Resets the Changed "Flag"
*              SetLastValue     - Set the LastValue equal to the current Value
*              Delay            - Internal Method delay checking for change, utilized by setting
*                                 the class Argument Update Time
*              DetectChange     - Compare current value to last value, set changed see 
*
*    Return: Attributes and Methods as detailed in :
* 
*    History: 4/9/2012 Initial Library Version
*
*********************************************************************************************/



function SigViewClass(ObjName,UpdateTime)  // This is the "constructor" a method that is called at the "new" command this can be thought of as
{                                          // the initialization portion of the prototype class 
    var LastValue;
    var Count = 0;
    var timer_is_on = 0;
    this.Count = Count;
    this.LastValue = 0;                 
    this.Obj = ObjName;                     // This allows any interface to use the "object" as a whole (the instance of SigView)
    this.name = ObjName.id;                 // Assign the SigView control id to a prototype class wide property
    this.value = ObjName.ValueText;         // Assign ValueText to a class wide parameter
    this.UpdateTimeStpt = UpdateTime;       // Assign the UpdateTime to a class wide parameter 
    this.timer_is_on = timer_is_on;         // Attribute State of Internal Delay Timer
    this.Status = ObjName.Status;           // Attribute Status as Number 0=Refresh Bad 1=Refresh OK
    this.StatusText = ObjName.StatusText;   // Attribute Status as Text
    this.Changed = false;
  
        if (!timer_is_on)                    // This executes at initialization to start the interval timer method ( Delay)
        {
            timer_is_on = 1;
            this.Delay();
            //alert("timer is set")
        }
 
};

SigViewClass.prototype.getObject = function ()      // Method, return the object (SigView Control Instance)
{
    return this.Obj;
};

SigViewClass.prototype.getname = function ()        // Method, return the object id 
{
    return this.name;
};


SigViewClass.prototype.getValue = function ()       // Method, Read the StatusText from SigView return the Value 
{
    this.value = this.Obj.ValueText;
    return this.value;
};

SigViewClass.prototype.getStatus = function ()       // Method, Read the Status from SigView return the Status as a Number
{
    this.Status = this.Obj.Status;
    return this.Status;
};

SigViewClass.prototype.getStatusText = function ()    // Method, Read the StatusText from SigView return the Status as Text
{
    this.StatusText     = this.Obj.StatusText;
    if (this.StatusText == "")
    {
        this.StatusText = "Unknown";
    }
    
    return this.StatusText;
};

SigViewClass.prototype.getLastValue = function()    // Method, return the lastvalue (internally the last value is updated 
{                                                   // with the current value upon update IF the Update Time is set
    return this.LastValue;
}


SigViewClass.prototype.SetLastValue = function ()   // Method, set LastValue to current value
{
    this.LastValue = this.value;
};

SigViewClass.prototype.getChanged = function ()     // Attribute, this is set upon change of the value when an Update Time is NOT Zero
{                                                   // the "calling" function is responsible to set this value to false(See Reset Changed)
    return this.Changed;                            
}


SigViewClass.prototype.ResetChanged = function ()   // Method reset the Changed flag to false
{
    this.Changed = false;
}

SigViewClass.prototype.Delay = function ()          // Method set an internal timer to set the changed flag 
{

    if (!('bind' in Function.prototype))                                            // this provides the "bind" function as a standalone routine
    {                                                                               // this will (does) appear in ECMA5 which should be IE 10 + maybe...
        Function.prototype.bind = function (owner)
        {
            var that = this;
            var args = Array.prototype.slice.call(arguments, 1);
            return function ()
            {
                return that.apply(owner,
                args.length === 0 ? arguments : arguments.length === 0 ? args :
                args.concat(Array.prototype.slice.call(arguments, 0))
            );
            };
        };
    } 
   
    if (this.UpdateTimeStpt != 0)                                                   // Do Not assign the interval timer a value if set point is zero
    {
        DelayTimer = setInterval(this.DetectChange.bind(this), this.UpdateTimeStpt);    // This interval timer will trigger the change detection function 
                                                                                        //  Detect Change
       // alert("Delay Function Called, Update Interval: " + this.UpdateTimeStpt + " DelayTimer Value " + DelayTimer);
    }
}

SigViewClass.prototype.DetectChange = function ()           // Method, compare value and LastValue, Trigger the "Changed" method if changed
{

    value = this.getValue();                                 // Use methods to assign variables at the function (method) level
    LastValue = this.getLastValue();
    Status = this.getStatus();
    StatusText = this.getStatusText();

    //alert("Last Value Last Value: " + LastValue + " Current Value " + value + " Status " + Status + " Status Text " + StatusText);

    if (LastValue == 0 && value != 0)
    {
        this.SetLastValue();

        //alert("Last Value has been assigned the current value " + value);
    }

    if (this.getLastValue() != this.getValue())             // Example of using the methods to assign values...
    {
        this.SetLastValue();                                // Set Last Value Equal to Current Value

        this.Changed = true;           

        //alert("The Value has changed " + this.LastValue);
    }
}

