// Include these function in the <head> of a web page when
// you need to use them, as follows:
//
// <script src='ajaxfunctions'></script>

function CreateAjaxObject(callback)
{
  window.XMLHttpRequest =
    XMLHttpRequest                     ||
    ActiveXObject('Msxml2.XMLHTTP')    ||
    ActiveXObject('Microsoft.XMLHTTP')

  ajax = new XMLHttpRequest()

  if (ajax) ajax.onreadystatechange = function()
  {
    if (this.readyState  == 4   &&
       this.status       == 200 &&
       this.responseText != null)
      callback.call(this.responseText)
  }

  return ajax
}

function PostAjaxRequest(callback, url, args)
{
  var contenttype = 'application/x-www-form-urlencoded'
  var ajax        = new CreateAjaxObject(callback)
  if (!ajax) return false

  ajax.open('POST', url, true)
  ajax.setRequestHeader('Content-type',   contenttype)
  ajax.setRequestHeader('Content-length', args.length)
  ajax.setRequestHeader('Connection',     'close')
  ajax.send(args)
  return true
}

function GetAjaxRequest(callback, url, args)
{
  var nocache = '&nocache=' + Math.random() * 1000000
  var ajax    = new CreateAjaxObject(callback)
  if (!ajax) return false

  ajax.open('GET', url + '?' + args + nocache, true)
  ajax.send(null)
  return true
}