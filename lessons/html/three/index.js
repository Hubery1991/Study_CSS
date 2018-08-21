function getRightOrderArray(list) {
    list.sort(function(a,b){return b.x < a.x ? 1 : -1 ;});
    return list;
}