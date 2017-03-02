function _window():any {
  return window;
}

export class WindowRef {
    public static get():any {
        return _window();
    }
}

function initFacebook() {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1314240991952779";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

function refreshFacebook(){
    try{
        WindowRef.get().FB.XFBML.parse(); 
    }catch(ex){}
}
export { initFacebook, refreshFacebook };