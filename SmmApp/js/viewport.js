!function (N, M) {
    function L() {
        var a = I.getBoundingClientRect().width;
        a / F > 540 && (a = 540 * F);
        var d = a / 10;
        I.style.fontSize = d + "px", D.rem = N.rem = d
    }

    var K, J = N.document, I = J.documentElement, H = J.querySelector('meta[name="viewport"]'),
        G = J.querySelector('meta[name="flexible"]'), F = 0, E = 0, D = M.flexible || (M.flexible = {});
    if (H) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var C = H.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        C && (E = parseFloat(C[1]), F = parseInt(1 / E))
    } else {
        if (G) {
            var B = G.getAttribute("content");
            if (B) {
                var A = B.match(/initial\-dpr=([\d\.]+)/), z = B.match(/maximum\-dpr=([\d\.]+)/);
                A && (F = parseFloat(A[1]), E = parseFloat((1 / F).toFixed(2))), z && (F = parseFloat(z[1]), E = parseFloat((1 / F).toFixed(2)))
            }
        }
    }
    if (!F && !E) {
        var y = N.navigator.userAgent, x = (!!y.match(/android/gi), !!y.match(/iphone/gi)),
            w = x && !!y.match(/OS 9_3/), v = N.devicePixelRatio;
        F = x && !w ? v >= 3 && (!F || F >= 3) ? 3 : v >= 2 && (!F || F >= 2) ? 2 : 1 : 1, E = 1 / F
    }
    if (I.setAttribute("data-dpr", F), !H) {
        if (H = J.createElement("meta"), H.setAttribute("name", "viewport"), H.setAttribute("content", "initial-scale=" + E + ", maximum-scale=" + E + ", minimum-scale=" + E + ", user-scalable=no"), I.firstElementChild) {
            I.firstElementChild.appendChild(H)
        } else {
            var u = J.createElement("div");
            u.appendChild(H), J.write(u.innerHTML)
        }
    }
    N.addEventListener("resize", function () {
        clearTimeout(K), K = setTimeout(L, 300)
    }, !1), N.addEventListener("pageshow", function (b) {
        b.persisted && (clearTimeout(K), K = setTimeout(L, 300))
    }, !1), "complete" === J.readyState ? J.body.style.fontSize = 12 * F + "px" : J.addEventListener("DOMContentLoaded", function () {
        J.body.style.fontSize = 12 * F + "px"
    }, !1), L(), D.dpr = N.dpr = F, D.refreshRem = L, D.rem2px = function (d) {
        var c = parseFloat(d) * this.rem;
        return "string" == typeof d && d.match(/rem$/) && (c += "px"), c
    }, D.px2rem = function (d) {
        var c = parseFloat(d) / this.rem;
        return "string" == typeof d && d.match(/px$/) && (c += "rem"), c
    }
}(window, window.lib || (window.lib = {}));

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

// function openAppIOS() {
//     var _clickTime = +(new Date());
//     var ifr = document.createElement("iframe");
//     ifr.src = "smm://";
//     ifr.style.display = "none";
//     document.body.appendChild(ifr);
//     //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
//     var _count = 0, intHandle;
//     intHandle = setInterval(function () {
//         _count++;
//         var elsTime = +(new Date()) - _clickTime;
//         console.log(_count, elsTime, +(new Date()), _clickTime)
//         if (_count >= 100 || elsTime > 3000) {
//             clearInterval(intHandle);
//             document.body.removeChild(ifr);
//             //检查app是否打开
//             if (document.hidden || document.webkitHidden) { 
//                 window.close();
//             } else {
//                 window.location = "https://apps.apple.com/cn/app/senior-meet-me-dating-50/id1465679728";//ios下载地址
//             }
//         }
//     }, 20);
// }

// function openAppAndroid() {
//     var _clickTime = new Date().getTime();
//     window.location.href = "smm://"; 
//     //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
//     var _count = 0, intHandle;
//     intHandle = setInterval(function () {
//         _count++;
//         var elsTime = new Date().getTime() - _clickTime;
//         if (_count >= 100 || elsTime > 3000) {
//             console.log(_count)
//             console.log(elsTime)
//             clearInterval(intHandle);
//             //检查app是否打开
//             if (document.hidden || document.webkitHidden) { 
//                 window.close();
//             } else { 
//                 window.location = "https://apps.apple.com/cn/app/senior-meet-me-dating-50/id1465679728";//ios下载地址
//             }
//         }
//     }, 20);

// }

//打开（下载）App
// function openApp() {
//     var u = window.navigator.userAgent;
//     var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
//     var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
//     if (isAndroid) {
//         openAppAndroid();
//     }
//     if (isiOS) {
//         openAppIOS();
//     }

// }

function openApp(){
    //判断浏览器
    var u = navigator.userAgent;
    if(/MicroMessenger/gi.test(u)) {
       // 引导用户在浏览器中打开
        alert('请在浏览器中打开');
        return;
    }
    var schemeUrl = "smm://"; 
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
       var loadDateTime = new Date();
       window.setTimeout(function() {
           var timeOutDateTime = new Date();
       if (timeOutDateTime - loadDateTime < 5000) {
　　           window.location.href = "https://apps.apple.com/cn/app/senior-meet-me-dating-50/id1465679728";//ios下载地址
        } else {
           alert('无法打开');
        }
         },25);
        window.location.href = schemeUrl;
    } else if (navigator.userAgent.match(/android/i)) {
       var state = null;
       try {
      state = window.open(schemeUrl, '_blank');
       } catch(e) {}
      if (state) {
               alert('无法打开');
           window.close();
      } else {
           window.location.href = "https://apps.apple.com/cn/app/senior-meet-me-dating-50/id1465679728";//ios下载地址
      }
      }
}
  

var platform = '';

function topBar() {
    $('#app').addClass("fs-14");
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        $('#app').addClass("app-page--has-topbar");
    } else {
        platform = getQueryVariable('smm_platform') + '';
        if (platform && (platform.match(/ios/i) || platform.match(/android/i))) {
            $('#app').removeClass("app-page--has-topbar");
        } else {
            $('#app').addClass("app-page--has-topbar");
        }
    }
    $("#app").on("click", ".icon-andriod", function () {
        openApp();
    });
    $("#app").on("click", ".icon-ios", function () {
        openApp();
    });
}

function loadFunction() {
    platform = getQueryVariable('smm_platform') + '';
    if (platform && platform.match(/ios/i) && window.webkit.messageHandlers.chaneNavColor) {
        window.webkit.messageHandlers.chaneNavColor.postMessage("#9C1025");
    } else if (platform && platform.match(/android/i)) {
        window.webkit.messageHandlers.chaneNavColor.postMessage("#9C1025");
    }
}

function loadShareFunction() {
    platform = getQueryVariable('smm_platform') + '';
    var shareData = { sharetitle: 'Happy Thanksgiving', sharecontent: 'Happy Thanksgiving', sharelinkurl: window.location.href, shareimg: 'http://api.cocoachina.com/uploads/191111/57260b5a78cdbaf0d4cc92125da2e96b.png' };
    if (platform && platform.match(/ios/i) && window.webkit.messageHandlers.chaneNavColor) {
        window.webkit.messageHandlers.shareNavHandler.postMessage(shareData);
    } else if (platform && platform.match(/android/i)) {
        android.shareNavHandler(shareData);
    }
}
