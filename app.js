var ano = "";
function writeToConsole(message)
{
 if (typeof console != 'undefined') {
  console.log(message);
 }
}

function errorHandler(error) {
 writeToConsole(error.message);
}

function trimReqValue (value) {
  var retvalue = value;
  if (retvalue.indexOf('+') != -1 ) {
       retvalue = retvalue.split('+')[1]
     }
  else if (retvalue.indexOf('%2B') != -1){
     retvalue = retvalue.split('%2B')[1]
  } 
  else if (retvalue.indexOf('%2b') != -1) {
     retvalue = retvalue.split('%2b')[1]
  }
  return retvalue
}

function searchanoContact(value) {
  value = trimReqValue(value);
  SDK.REST.searchanoRecord(
     value,
     null,null,null,
     function (contact) {
      writeToConsole("Retrieved the contact \"" + JSON.stringify(contact) + "\". ");
	  writeToConsole('Contact:' + contact.results[0].ContactId);
           
          Xrm.Utility.openEntityForm("contact",contact.results[0].ContactId);
     },
     errorHandler
   );
}

function getUrlParamTomi(url) {
  var data = url ? url.split('=')[1] : window.location.href.split('=')[1];
   writeToConsole(data);
}

ano = window.location.href.split('=')[1];

searchanoContact(ano);

