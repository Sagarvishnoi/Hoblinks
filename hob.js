
  /*<![CDATA[*/
  var feedUrl, shortLink, homeNew, shortnerNew, randomPost;
  function getJson(t){var n=new XMLHttpRequest;try{n=new XMLHttpRequest}catch(e){try{n=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{n=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return console.warn("Something went wrong!"),!1}}}n.onreadystatechange=function(){var e;4==n.readyState&&(200==n.status?(e=JSON.parse(n.responseText),t.success(e)):"function"==typeof t.error&&t.error(n))},n.open("GET",t.url,t.async),n.send()};
  function getHash(name){
    const queryHash = window.location.hash;
    if(queryHash && queryHash.includes('=')){
      if(queryHash.split(/=(.*)/s)[0] == '#?' + name && queryHash.split(/=(.*)/s)[1] != ''){
        return window.location.hash.split(/=(.*)/s)[1];
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };
  function remHash(){
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("#"));
      window.history.replaceState({},document.title, clean_uri);
    }
  };
  function humanVerification(post) {
    var humanId = document.getElementById('humanVerification'),
        postId = document.getElementById('shortPostLink');
    humanId.classList.remove('hidden');
    postId.href = post;
    setTimeout(function(){
      humanId.classList.add('verified');
      shortConfig.callBacks.verified(post);
    }, shortConfig.humanTimer);
  };
  if(getHash(shortConfig.parameter)!=undefined){
    shortLink = getHash(shortConfig.parameter);
    homeNew = shortConfig.blogInfo.homeUrl.replace(/\/$/, '').replace(/.*?:\/\//g, "//");
    feedUrl = 'https://houseofblogger.com/feed/json'
    if (shortConfig.randomPosts.enabled == true) {
      getJson({
        url : feedUrl,
        async : true,
        success : function(data){
          var items = data.items
          if (items && items.length != 0) {
            randomItem = items[Math.floor(Math.random() * items.length)];
            sessionStorage.setItem(shortConfig.sessionStorageKey, shortLink);
            remHash();
            randomPost = randomItem.url
            humanVerification(randomPost);
            shortConfig.callBacks.shortFound();
          } else {
            console.warn('No post was found.');
            shortConfig.callBacks.noPostFound();
          }
        },
        error : function(err){
          console.warn('Failed to load Blog feeds with status: ' + err.status);
        }
      });
    } else {
      if (shortConfig.shortPosts.length != 0) {
        sessionStorage.setItem(shortConfig.sessionStorageKey, shortLink);
        remHash();
        randomPost = shortConfig.shortPosts[Math.floor(Math.random() * shortConfig.shortPosts.length)];
        humanVerification(randomPost);
        shortConfig.callBacks.shortFound();
      } else {
        console.warn('No post was found.');
        shortConfig.callBacks.noPostFound();
      }
    };
  };
  /* Post */
  if(sessionStorage.getItem(shortConfig.sessionStorageKey) != null && shortConfig.blogInfo.onPage == true){
    var sessionLink = sessionStorage.getItem(shortConfig.sessionStorageKey),
        getLinkTime = Math.floor(shortConfig.getLinkTimer),
        currentTime = getLinkTime,
        timerCont = document.getElementById('timerContainer'),
        goToCont = document.getElementById('shortGoToCont'),
        progressId = document.getElementById('timerProgress'),
        percentId = document.getElementById('timerPercentage'),
        goToLinkId = document.getElementById('shortGoToLink');
    
    shortnerNew = shortConfig.shortnerUrl.replace(/\/$/, '');
    goToLinkId.href = shortnerNew + '/' +sessionLink;
    if(shortConfig.newTab == true) {
      goToLinkId.setAttribute('target', '_blank');
    };
    
    goToLinkId.addEventListener('click', function(event){
      sessionStorage.removeItem(shortConfig.sessionStorageKey);;
      shortConfig.callBacks.sessionFound(event);
    });
    
    timerCont.classList.remove('hidden');
    shortConfig.callBacks.sessionFound(sessionLink);
    
    var shortTimer = setInterval(function(){
      currentTime -=10;
      var percentage =  Math.floor((currentTime / getLinkTime) * 100);
      percentId.innerHTML = (100 - percentage) + '<span>%</span>';
      progressId.style.strokeDashoffset = percentage;
      if((100 - percentage) == 100){
        progressId.classList.add('is100');
        progressId.classList.remove('av75', 'av50', 'av25', 'bl25');
      } else if ((100 - percentage) >= 75){
        progressId.classList.add('av75');
        progressId.classList.remove('av50', 'av25', 'bl25');
      } else if ((100 - percentage) >= 50){
        progressId.classList.add('av50');
        progressId.classList.remove('av25', 'bl25');
      } else if ((100 - percentage) >= 25){
        progressId.classList.add('av25');
        progressId.classList.remove('bl25');
      } else {
        progressId.classList.add('bl25');
      };
      
      if(currentTime <= 0){
        clearInterval(shortTimer);
        percentId.innerHTML = '100<span>%</span>';
        
        setTimeout(() => {
          timerCont.classList.add('end');
          goToCont.classList.remove('hidden');
            shortConfig.callBacks.scrollFound();
        }, 1000);
      };
    }, 10);
  };
  
  /* Anti Boom Click */
  (function(){
    var classAds = document.querySelectorAll(shortConfig.antiBoomClick.adsClass);
        
    var cookieKey = shortConfig.antiBoomClick.cookieKey,
        maxClick = shortConfig.antiBoomClick.maxClick,
        message = shortConfig.antiBoomClick.message,
        resetTime = shortConfig.antiBoomClick.resetTime;
    
    function getCookie(e){e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[\]\\/+^])/g,"$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0};
    function setCookie(e,n,o={}){o={path:"/",...o},o.expires instanceof Date&&(o.expires=o.expires.toUTCString());let c=unescape(encodeURIComponent(e))+"="+unescape(encodeURIComponent(n));for(var t in o){c+="; "+t;var a=o[t];!0!==a&&(c+="="+a)}document.cookie=c};
    function removeCookie(e){Pu.sC(e,"",{"max-age":-1})};
    
    function setCookieAds(a, b){
      var m, z = getCookie(a);
      z != undefined ? (m = parseInt(z) + 1, setCookie(a, m.toString(),{secure:true,'max-age':b})) : setCookie(a,"1",{secure:true,'max-age':b})
    };
  
    function cookieMaxClick(a, b){
      var z = getCookie(a);
      return undefined != z && parseInt(z) >= b ? !0 : !1;
    };
    
    function adsEvent(){
      if(cookieMaxClick(cookieKey, maxClick)){
        if (message != ''){
          console.warn(message);
          alert(message);
          shortConfig.antiBoomClick.maxClicked(getCookie(cookieKey));
        }
      } else {
        setCookieAds(cookieKey, resetTime);
      }
    };
    
    if (classAds.length > 0){
      classAds.forEach(el =>{
        el.addEventListener('click', function(){
          adsEvent();
        });
      });
    };
    
    
    window.addEventListener('blur', function() {
      var iframeAds = document.querySelectorAll(shortConfig.antiBoomClick.adsIframe);
      for (var i = 0; i < iframeAds.length; i++) {
        if (document.activeElement == iframeAds[i]) {
          adsEvent();
        }
      }
    });
    
    
    
  })();
  
  /*]]>*/
