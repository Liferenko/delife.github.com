<?php
 
// ==== Control Vars =======
$strFromNumber = "+12565154413";
$strToNumber = "+380675001876";
$strMsg = "Did you catch Olivier's nip slip last night? OMG right?"; //Olivier accidentally pulled up a porn site on a projector 
$aryResponse = array();



    // include the Twilio PHP library - download from 
    // http://www.twilio.com/docs/libraries/
    require_once ("inc/Services/Twilio.php");
 
    // set our AccountSid and AuthToken - from www.twilio.com/user/account
    $AccountSid = "ACd88201f7588ead199321cbd1fbd118c0";
    $AuthToken = "1360224186ab4a58a45245b006829eac";
 
    // ini a new Twilio Rest Client
    $objConnection = new Services_Twilio($AccountSid, $AuthToken);


    // Send a new outgoinging SMS by POSTing to the SMS resource */
    $bSuccess = $objConnection->account->sms_messages->create(
        
        $strFromNumber, 	// number we are sending From 
        $strToNumber,           // number we are sending To
        $strMsg			// the sms body
    );

		
    $aryResponse["SentMsg"] = $strMsg;
    $aryResponse["Success"] = true;
    
    
    echo json_encode($aryResponse);
