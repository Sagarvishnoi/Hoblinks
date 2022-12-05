  /*<![CDATA[*/
  /* ShortLink Configuration (by HOB Links) */
  var shortConfig = {
    blogInfo : {
      homeUrl: blogUrl,
      onHome : isHome,
      onPost : isPost,
      onPage : isPage,
      onItem : isItem,
    },
    shortPosts: [
      'https://www.myBlog.com/2022/02/my-post.html',
    ],
    randomPosts: {
      enabled : true,
      sortBy : 'published',
      maxResults : 100,
    },
    shortnerUrl : 'https://hoblinks.net',
    humanTimer : 15000,
    getLinkTimer : 15000,
    pleaseWaitTimer : 10000,
    parameter : 'hoblinks',
    sessionStorageKey : 'HOB_SHORT',
    newTab : false,
    callBacks : {
      shortFound : (e) => {
        console.log('Function: shortFound()')
      },
      verified : (e) => {
        console.log('Function: verified()')
      },
      noPostFound : (e) => {
        console.log('Function: noPostFound()')
      },
      sessionFound : (e) => {
        console.log('Function: sessionFound()')
      },
      scrollFound : (e) => {
        console.log('Function: scrollFound()')
      },
      goToLink : (e) => {
        console.log('Function: goToLink()')
      }
    },
    antiBoomClick: {
      enabled : true,
      adsClass : ".adsbygoogle, .adB",
      adsIframe : ".adsbygoogle iframe",
      cookieKey : 'ADS_MAX',
      maxClick : 3,
      resetTime : 3600,
      message : "Don't click on Ads",
      maxClicked: (e) => {
        (()=>{var mxA=document.createElement('style');mxA.textContent='.adsbygoogle, .blogAd, .ancrA, #HTML91,  #HTML92,  #HTML93,  #HTML94,  #HTML95, #HTML96, #HTML01, #HTML02, #HTML03, .recAd, .shortAds{display:none ! important}';document.head.appendChild(mxA)})();
      }
    },
   shortAds: {
      modal: `<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-2257803947175225" data-ad-slot="5121121350"></ins>`,
      aboveVerify:`<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2257803947175225" data-ad-slot="5121121350" data-ad-format="auto" data-full-width-responsive="true"></ins>`, 
      belowVerify:`<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2257803947175225" data-ad-slot="5255130526" data-ad-format="auto" data-full-width-responsive="true"></ins>`, 
      aboveTimer: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2257803947175225" data-ad-slot="3452816468" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
      belowTimer: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2257803947175225" data-ad-slot="1018224815" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
      aboveOpen: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2257803947175225" data-ad-slot="1924112374" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
      belowOpen: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2257803947175225" data-ad-slot="6721127571" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    }
  }
  /*]]>*/
