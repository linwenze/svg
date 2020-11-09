//获取链接参数
export function getQueryString(name){
    var reg = new RegExp("(^|&|\\?)"+ name +"=([^&]*)(&|$)");
    var str = window.location.search || window.location.hash
    var r = window.location.search.substr(1).match(reg) || window.location.hash.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  }